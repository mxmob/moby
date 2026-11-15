"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/** Guarda el origen de la visita (utm/referente/página de entrada) para los formularios. */
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
