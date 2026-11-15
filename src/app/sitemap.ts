import type { MetadataRoute } from "next";
import { LOCALES, localePath } from "@/i18n/config";
import { PAGE_PATHS, type PageKey } from "@/i18n/seo";
import { SITE_URL } from "@/lib/site";
import { AUDIT_PATHS } from "@/components/audit/meta";

/** Prioridad orientativa por página */
const PRIORITY: Partial<Record<PageKey, number>> = {
  home: 1,
  digitalizacion: 0.9,
  optimizacion: 0.9,
  automatizacion: 0.9,
  desarrollo: 0.9,
  impresion3d: 0.9,
  soluciones: 0.8,
  restaurantes: 0.8,
  inmobiliarias: 0.8,
  negociosLocales: 0.8,
  startups: 0.8,
  comoTrabajamos: 0.7,
  contacto: 0.7,
  precios: 0.8,
};

/** Cada página en español e inglés, enlazadas entre sí con hreflang. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // Auditoría gratuita de Google (lead magnet) en es/ca/en
  const auditLanguages = {
    es: `${SITE_URL}${AUDIT_PATHS.es}`, ca: `${SITE_URL}${AUDIT_PATHS.ca}`, en: `${SITE_URL}${AUDIT_PATHS.en}`,
    "x-default": `${SITE_URL}${AUDIT_PATHS.es}`,
  };
  const audit: MetadataRoute.Sitemap = (Object.keys(AUDIT_PATHS) as (keyof typeof AUDIT_PATHS)[]).map((l) => ({
    url: `${SITE_URL}${AUDIT_PATHS[l]}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8,
    alternates: { languages: auditLanguages },
  }));
  return audit.concat((Object.keys(PAGE_PATHS) as PageKey[]).flatMap((key) => {
    const path = PAGE_PATHS[key];
    const languages = {
      ...Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}${localePath(l, path)}`])),
      "x-default": `${SITE_URL}${path}`,
    };
    return LOCALES.map((l) => ({
      url: `${SITE_URL}${localePath(l, path)}`,
      lastModified,
      changeFrequency: key === "home" ? "weekly" : "monthly",
      priority: PRIORITY[key] ?? 0.3,
      alternates: { languages },
    }));
  }));
}
