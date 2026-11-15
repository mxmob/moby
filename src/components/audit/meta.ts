import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export type AuditLang = "es" | "ca" | "en";

export const AUDIT_PATHS: Record<AuditLang, string> = {
  es: "/auditoria-google",
  ca: "/ca/auditoria-google",
  en: "/en/auditoria-google",
};

export const AUDIT_META: Record<AuditLang, { title: string; description: string }> = {
  es: { title: "Auditoría gratuita de tu ficha de Google | MobyApp", description: "Te decimos qué 5 cambios en tu ficha de Google Maps te traerían más clientes. Gratis, en 48 h y sin compromiso. Barberías, estética, restaurantes e inmobiliarias." },
  ca: { title: "Auditoria gratuïta de la teva fitxa de Google | MobyApp", description: "T’expliquem quins 5 canvis a la teva fitxa de Google Maps et portarien més clients. Gratis, en 48 h i sense compromís. Barberies, estètica, restaurants i immobiliàries." },
  en: { title: "Free Google Business Profile audit | MobyApp", description: "We tell you which 5 changes to your Google Maps profile would bring you more customers. Free, within 48 hours, no strings attached." },
};

export function auditMetadata(lang: AuditLang): Metadata {
  const m = AUDIT_META[lang];
  const url = AUDIT_PATHS[lang];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: {
      canonical: absoluteUrl(url),
      languages: {
        es: absoluteUrl(AUDIT_PATHS.es), ca: absoluteUrl(AUDIT_PATHS.ca), en: absoluteUrl(AUDIT_PATHS.en),
        "x-default": absoluteUrl(AUDIT_PATHS.es),
      },
    },
    openGraph: { type: "website", url, siteName: "MobyApp", title: m.title, description: m.description,
      locale: lang === "en" ? "en_GB" : lang === "ca" ? "ca_ES" : "es_ES" },
  };
}
