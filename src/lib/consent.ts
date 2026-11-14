"use client";

import { useSyncExternalStore } from "react";

/**
 * Consentimiento de cookies (LSSI art. 22.2 + RGPD, guía de cookies de la AEPD):
 * - Nada que no sea técnico se carga antes de que el usuario elija.
 * - Aceptar y rechazar son igual de fáciles; se puede cambiar en cualquier momento.
 * - Se guarda la elección con fecha y versión y se vuelve a preguntar a los 12 meses
 *   o si cambian las categorías (CONSENT_VERSION).
 */

export const CONSENT_KEY = "mobyapp-consent";
export const CONSENT_VERSION = 1;
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const OPEN_EVENT = "mobyapp:cookie-settings";

export interface Consent {
  version: number;
  date: string; // ISO
  /** Analítica: Google Analytics 4 */
  analytics: boolean;
}

type State = Consent | null;
let state: State | undefined; // undefined = aún no leído (servidor / primer render)
const listeners = new Set<() => void>();

function load(): State {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    if (c.version !== CONSENT_VERSION || !c.date || Date.now() - Date.parse(c.date) > MAX_AGE_MS) return null;
    return c;
  } catch {
    return null;
  }
}

function get(): State {
  if (state === undefined) state = load();
  return state;
}

export function saveConsent(choice: { analytics: boolean }) {
  state = { version: CONSENT_VERSION, date: new Date().toISOString(), analytics: choice.analytics };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  } catch {
    // localStorage no disponible: la elección vale solo para esta visita
  }
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  const onStorage = (e: StorageEvent) => {
    if (e.key === CONSENT_KEY) {
      state = load();
      fn();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(fn);
    window.removeEventListener("storage", onStorage);
  };
}

/** undefined mientras no se sabe (render en servidor), null si aún no ha elegido, o la elección guardada. */
export function useConsent(): State | undefined {
  return useSyncExternalStore(subscribe, get, () => undefined);
}

/** Abre el panel de configuración (enlace "Configurar cookies" del pie). */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookieSettings(fn: () => void) {
  window.addEventListener(OPEN_EVENT, fn);
  return () => window.removeEventListener(OPEN_EVENT, fn);
}
