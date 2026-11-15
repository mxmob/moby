"use client";

import { useEffect } from "react";
import { captureAttribution, setAttributionStorage } from "@/lib/attribution";
import { useConsent } from "@/lib/consent";
import { setRefStorage } from "@/lib/signup";

/**
 * Origen de la visita (utm/referente/página de entrada) para los formularios.
 * Sin consentimiento de analítica solo se calcula en memoria; con él se guarda 30 días
 * y, si se rechaza o retira, se borra al momento.
 */
export function AttributionCapture() {
  const consent = useConsent();
  useEffect(() => {
    captureAttribution();
  }, []);
  useEffect(() => {
    if (consent === undefined) return; // aún no se sabe (servidor / primer render)
    setAttributionStorage(!!consent?.analytics);
    setRefStorage(!!consent?.analytics);
  }, [consent]);
  return null;
}
