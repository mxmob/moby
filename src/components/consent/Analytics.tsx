"use client";

import { useEffect } from "react";
import { useConsent } from "@/lib/consent";
import { GA_ID } from "@/lib/site";

type GtagWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } & Record<string, unknown>;

/** Borra las cookies de Google Analytics (_ga, _ga_<id>) en el dominio actual y en el dominio padre. */
function deleteGaCookies() {
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = ["", host, `.${host}`];
  for (let i = 1; i < parts.length - 1; i++) domains.push(`.${parts.slice(i).join(".")}`);
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (!/^_ga(_|$)|^_gid$|^_gat/.test(name)) return;
    domains.forEach((d) => {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    });
  });
}

/**
 * Google Analytics 4 solo con consentimiento de analítica.
 * Sin consentimiento no se descarga gtag.js ni se instala ninguna cookie.
 * Si se retira, se deja de medir y se borran las cookies _ga*.
 */
export function Analytics() {
  const consent = useConsent();
  const granted = !!consent?.analytics;

  useEffect(() => {
    if (consent === undefined) return;
    const w = window as unknown as GtagWindow;

    if (granted) {
      w[`ga-disable-${GA_ID}`] = false;
      if (!w.gtag) {
        w.dataLayer = w.dataLayer || [];
        w.gtag = function gtag() {
          // eslint-disable-next-line prefer-rest-params
          w.dataLayer!.push(arguments);
        };
        w.gtag("consent", "default", {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "denied",
        });
        w.gtag("js", new Date());
        w.gtag("config", GA_ID);
      }
      w.gtag("consent", "update", { analytics_storage: "granted" });
      if (!document.getElementById("ga-gtag")) {
        const s = document.createElement("script");
        s.id = "ga-gtag";
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(s);
      }
    } else {
      // Rechazado o retirado: no se carga nada y, si ya estaba cargado, se desactiva
      if (w.gtag) w.gtag("consent", "update", { analytics_storage: "denied" });
      w[`ga-disable-${GA_ID}`] = true;
      deleteGaCookies();
    }
  }, [consent, granted]);

  return null;
}
