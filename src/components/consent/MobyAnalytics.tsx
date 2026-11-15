"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Medición de audiencia anónima sin cookies, propia (MobyApp).
 * Sin cookies, sin localStorage y sin leer nada del dispositivo: solo la URL, el referente y el
 * nombre del evento, enviados a /api/a (mismo dominio). Respeta Do Not Track y Global Privacy Control.
 * Eventos automáticos: página vista, clic en WhatsApp / teléfono / email / enlace externo y envío de
 * formularios. Para otros: track("booking") o track("chat_open").
 */
export type AnalyticsEvent =
  | "pageview" | "form_submit" | "whatsapp_click" | "phone_click" | "email_click"
  | "chat_open" | "booking" | "outbound_click";

let firstView = true;
let lastUrl = "";

function optedOut() {
  const n = navigator as Navigator & { globalPrivacyControl?: boolean };
  return n.doNotTrack === "1" || n.globalPrivacyControl === true;
}

export function track(n: AnalyticsEvent) {
  if (typeof window === "undefined" || optedOut()) return;
  const body = JSON.stringify({ n, u: location.href, r: firstView ? document.referrer : "" });
  if (n === "pageview") firstView = false;
  try {
    if (navigator.sendBeacon && navigator.sendBeacon("/api/a", new Blob([body], { type: "text/plain" }))) return;
  } catch {}
  fetch("/api/a", { method: "POST", body, keepalive: true }).catch(() => {});
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const url = location.pathname + location.search;
    if (url === lastUrl) return;
    lastUrl = url;
    track("pageview");
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const h = a.href || "";
      if (/^https?:\/\/(wa\.me|(api|web)\.whatsapp\.com)\//.test(h) || h.startsWith("whatsapp:")) track("whatsapp_click");
      else if (h.startsWith("tel:")) track("phone_click");
      else if (h.startsWith("mailto:")) track("email_click");
      else if (/^https?:/.test(h) && a.host !== location.host) track("outbound_click");
    };
    const onSubmit = () => track("form_submit");
    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  return null;
}
