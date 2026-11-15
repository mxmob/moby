import { defaultLanguage, supportedLanguages, type Language } from "./translations";

/*
 * Idiomas por URL: español sin prefijo (/digitalizacion), inglés con prefijo (/en/digitalizacion).
 * Los slugs son los mismos (en español) en los dos idiomas.
 */

export const LOCALES = supportedLanguages;
export const DEFAULT_LOCALE = defaultLanguage;
export const OG_LOCALE: Record<Language, string> = { es: "es_ES", en: "en_GB" };

export const isLocale = (v: unknown): v is Language => LOCALES.includes(v as Language);

/** Ruta pública en un idioma: el español va sin prefijo, el inglés con /en. */
export function localePath(lang: Language, path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (lang === DEFAULT_LOCALE) return p;
  return p === "/" ? `/${lang}` : `/${lang}${p}`;
}

/** Quita el prefijo de idioma de una ruta visible: /en/contacto → /contacto */
export function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1];
  // Páginas en catalán (/ca/…, p. ej. landings de sector): al cambiar a es/en se quita el /ca
  if (seg === "ca") return pathname.slice(3) || "/";
  if (isLocale(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return rest || "/";
  }
  return pathname || "/";
}

/** Canónica + hreflang para una ruta (sin prefijo). Relativas: se resuelven con metadataBase. */
export function languageAlternates(lang: Language, path: string) {
  return {
    canonical: localePath(lang, path),
    languages: {
      ...Object.fromEntries(LOCALES.map((l) => [l, localePath(l, path)])),
      "x-default": localePath(DEFAULT_LOCALE, path),
    },
  };
}
