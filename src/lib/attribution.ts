// Origen de la visita para «Origen de clientes» de MobyApp (Bridge → Analítica).
// Solo datos de campaña: utm_*, dominio de referencia y página de entrada, sin identificadores.
// first = primera visita (cómo nos descubrió); last = último origen NO directo (por dónde volvió).
//
// Consentimiento (LSSI art. 22.2 + guía de cookies de la AEPD): guardar esto en el dispositivo
// (localStorage) no es técnico, así que:
// - Sin consentimiento: NO se guarda nada. El origen se calcula solo en memoria para la carga
//   actual (utm_* de la URL, dominio del referente y página de entrada = página actual).
// - Con consentimiento: se guardan first/last 30 días; al retirarlo o rechazarlo se borran al momento.

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

let current: Touch | undefined; // visita actual, solo en memoria
let currentExternal = false;
let storageAllowed = false;

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

function computeTouch() {
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
  current = touch;
  currentExternal = Boolean(touch.referrer || touch.utm_source || touch.utm_medium || touch.utm_campaign);
}

function persist() {
  if (!current) return;
  if (!read(FIRST)) write(FIRST, current);
  if (currentExternal) write(LAST, current);
}

/** Borra el origen guardado (al rechazar o retirar el consentimiento). */
export function clearStoredAttribution() {
  try {
    localStorage.removeItem(FIRST);
    localStorage.removeItem(LAST);
  } catch {
    /* almacenamiento bloqueado */
  }
}

/** Llamar una vez al cargar la web (en el layout). Sin consentimiento solo calcula en memoria. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  if (!current) computeTouch();
  if (storageAllowed) persist();
}

/** Aplica la elección de cookies: con consentimiento guarda 30 días; sin él borra lo guardado. */
export function setAttributionStorage(allowed: boolean) {
  if (typeof window === "undefined") return;
  storageAllowed = allowed;
  if (allowed) captureAttribution();
  else clearStoredAttribution();
}

/** Datos a enviar con un formulario (`attribution` en el cuerpo). */
export function getAttribution(): Attribution | undefined {
  if (typeof window === "undefined") return undefined;
  if (!current) computeTouch();
  const memLast = currentExternal ? current : undefined;
  if (!storageAllowed) return current ? { first: current, last: memLast } : undefined;
  const first = read(FIRST) || current;
  const last = read(LAST) || memLast;
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
