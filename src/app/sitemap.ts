import type { MetadataRoute } from "next";
import { LOCALES, localePath } from "@/i18n/config";
import { PAGE_PATHS, type PageKey } from "@/i18n/seo";
import { SITE_URL } from "@/lib/site";
import { AUDIT_PATHS } from "@/components/audit/meta";
import { GIVEAWAY_PATHS } from "@/components/giveaways/meta";
import { SECTOR_SLUGS, SECTORS_INDEX_PATH, SLANGS, sPath } from "@/content/sectors";

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
  productos: 0.8,
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
  // Sorteos de Instagram y Facebook verificables (herramienta de Moby Social) en es/ca/en
  const giveawayLanguages = {
    es: `${SITE_URL}${GIVEAWAY_PATHS.es}`, ca: `${SITE_URL}${GIVEAWAY_PATHS.ca}`, en: `${SITE_URL}${GIVEAWAY_PATHS.en}`,
    "x-default": `${SITE_URL}${GIVEAWAY_PATHS.es}`,
  };
  const giveaway: MetadataRoute.Sitemap = (Object.keys(GIVEAWAY_PATHS) as (keyof typeof GIVEAWAY_PATHS)[]).map((l) => ({
    url: `${SITE_URL}${GIVEAWAY_PATHS[l]}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8,
    alternates: { languages: giveawayLanguages },
  }));
  // Landings de sector (es/ca/en): barberías primero y con más prioridad
  const sectorPaths = [SECTOR_SLUGS.barberias, SECTORS_INDEX_PATH, SECTOR_SLUGS.estetica, SECTOR_SLUGS.restaurantes, SECTOR_SLUGS.inmobiliarias];
  const sectors: MetadataRoute.Sitemap = sectorPaths.flatMap((path) => {
    const languages = { ...Object.fromEntries(SLANGS.map((l) => [l, `${SITE_URL}${sPath(l, path)}`])), "x-default": `${SITE_URL}${path}` };
    return SLANGS.map((l) => ({
      url: `${SITE_URL}${sPath(l, path)}`, lastModified, changeFrequency: "monthly" as const,
      priority: path === SECTOR_SLUGS.barberias ? 0.9 : 0.8, alternates: { languages },
    }));
  });
  return audit.concat(giveaway, sectors, (Object.keys(PAGE_PATHS) as PageKey[]).flatMap((key) => {
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
