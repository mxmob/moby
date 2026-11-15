// Origen de la visita para «Origen de clientes» de MobyApp (Bridge → Analítica).
// Solo datos de campaña: utm_*, dominio de referencia y página de entrada. Sin identificadores
// personales ni cookies: se guarda en localStorage 30 días y se envía con los formularios.
// first = primera visita (cómo nos descubrió); last = último origen NO directo (por dónde volvió).

export type Touch = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landing_path?: string;
  ts: string;
};
export type Attribution = { first?: Touch; last?: Touch };

const FIRST = "moby_attr_first";
const LAST = "moby_attr_last";
const TTL = 30 * 24 * 3600 * 1000;
const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

function read(key: string): Touch | undefined {
  try {
    const v = JSON.parse(localStorage.getItem(key) || "null") as Touch | null;
    if (!v || !v.ts || Date.now() - Date.parse(v.ts) > TTL) return undefined;
    return v;
  } catch {
    return undefined;
  }
}

function write(key: string, t: Touch) {
  try {
    localStorage.setItem(key, JSON.stringify(t));
  } catch {
    /* navegación privada o almacenamiento bloqueado */
  }
}

/** Llamar una vez al cargar la web (en el layout). */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  const touch: Touch = { landing_path: url.pathname.slice(0, 200), ts: new Date().toISOString() };
  for (const k of UTM) {
    const v = url.searchParams.get(k);
    if (v) touch[k] = v.slice(0, 80);
  }
  let ref = "";
  try {
    ref = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, "") : "";
  } catch {
    ref = "";
  }
  if (ref && ref !== url.hostname.replace(/^www\./, "")) touch.referrer = ref.slice(0, 100);
  const external = Boolean(touch.referrer || touch.utm_source || touch.utm_medium || touch.utm_campaign);
  if (!read(FIRST)) write(FIRST, touch);
  if (external) write(LAST, touch);
}

/** Datos a enviar con un formulario (`attribution` en el cuerpo). */
export function getAttribution(): Attribution | undefined {
  if (typeof window === "undefined") return undefined;
  const first = read(FIRST);
  const last = read(LAST);
  return first || last ? { first, last } : undefined;
}

/** Reenvía a Moby solo los datos de origen esperados (utm_*, referente y página de entrada). */
export function cleanAttribution(v: unknown) {
  if (!v || typeof v !== "object") return undefined;
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "referrer", "landing_path", "ts"];
  const touch = (t: unknown) => {
    if (!t || typeof t !== "object") return undefined;
    const out: Record<string, string> = {};
    for (const k of keys) {
      const x = (t as Record<string, unknown>)[k];
      if (typeof x === "string" && x.trim()) out[k] = x.trim().slice(0, 200);
    }
    return Object.keys(out).length ? out : undefined;
  };
  const a = v as Record<string, unknown>;
  const first = touch(a.first);
  const last = touch(a.last);
  return first || last ? { first, last } : undefined;
}
