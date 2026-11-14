import type { Metadata } from "next";
import { getNestedValue, translations, type Language } from "@/i18n/translations";
import { languageAlternates, localePath, LOCALES, OG_LOCALE } from "@/i18n/config";
import { PAGE_PATHS, SEO, type PageKey } from "@/i18n/seo";
import type { FaqItem } from "@/i18n/faq";
import { absoluteUrl, EMAIL, PHONE, SITE_NAME } from "./site";

/*
 * Metadatos por página y datos estructurados (schema.org, JSON-LD) para Google y buscadores con IA.
 * Los nodos usan @id estables para que el grafo se enlace entre páginas.
 */

export const ORG_ID = absoluteUrl("/#organizacion");
export const WEBSITE_ID = absoluteUrl("/#web");

/** Metadatos completos de una página: título, descripción, canónica, hreflang, OG y Twitter. */
export function pageMetadata(lang: Language, key: PageKey): Metadata {
  const seo = SEO[key][lang];
  const path = PAGE_PATHS[key];
  const url = localePath(lang, path);
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: languageAlternates(lang, path),
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: [{ url: ogImagePath(lang), width: 1200, height: 630, alt: seo.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImagePath(lang)],
    },
  };
}

/** Imagen OG del idioma (app/[lang]/opengraph-image.tsx). */
export const ogImagePath = (lang: Language) => `/${lang}/opengraph-image`;

const tr = (lang: Language, key: string) => getNestedValue(translations[lang], key);

export function organizationLd(lang: Language) {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: absoluteUrl(localePath(lang, "/")),
    logo: { "@type": "ImageObject", url: absoluteUrl("/brand/moby-mark-512.png"), width: 512, height: 512 },
    image: absoluteUrl(ogImagePath(lang)),
    description: SEO.home[lang].description,
    slogan: tr(lang, "footer.tagline"),
    email: EMAIL,
    telephone: PHONE,
    areaServed: [
      { "@type": "Country", name: lang === "es" ? "España" : "Spain" },
      { "@type": "Continent", name: lang === "es" ? "Europa" : "Europe" },
    ],
    knowsLanguage: ["es", "en"],
    knowsAbout: (["digitalizacion", "optimizacion", "automatizacion", "desarrollo", "impresion3d"] as const).map(
      (k) => SEO[k][lang].serviceType
    ),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: EMAIL,
      telephone: PHONE,
      availableLanguage: ["Spanish", "English"],
      areaServed: ["ES", "EU"],
    },
  };
}

export function websiteLd(lang: Language) {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: SITE_NAME,
    description: SEO.home[lang].description,
    inLanguage: lang,
    publisher: { "@id": ORG_ID },
  };
}

/** Página concreta (WebPage) enlazada al sitio y a la organización. */
export function webPageLd(lang: Language, key: PageKey, type = "WebPage") {
  const url = absoluteUrl(localePath(lang, PAGE_PATHS[key]));
  return {
    "@type": type,
    "@id": `${url}#pagina`,
    url,
    name: SEO[key][lang].title,
    description: SEO[key][lang].description,
    inLanguage: lang,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

/** Migas de pan: Inicio › … › página actual */
export function breadcrumbLd(lang: Language, keys: PageKey[]) {
  const all: PageKey[] = ["home", ...keys];
  return {
    "@type": "BreadcrumbList",
    itemListElement: all.map((k, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: SEO[k][lang].name,
      item: absoluteUrl(localePath(lang, PAGE_PATHS[k])),
    })),
  };
}

/** Servicio ofrecido por MobyApp, con el catálogo de lo que incluye. */
export function serviceLd(lang: Language, key: PageKey, items: string[]) {
  const seo = SEO[key][lang];
  const url = absoluteUrl(localePath(lang, PAGE_PATHS[key]));
  return {
    "@type": "Service",
    "@id": `${url}#servicio`,
    name: seo.serviceType ?? seo.name,
    serviceType: seo.serviceType ?? seo.name,
    description: seo.description,
    url,
    inLanguage: lang,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "Country", name: lang === "es" ? "España" : "Spain" },
      { "@type": "Continent", name: lang === "es" ? "Europa" : "Europe" },
    ],
    availableChannel: { "@type": "ServiceChannel", serviceUrl: absoluteUrl(localePath(lang, "/contacto")) },
    ...(items.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: seo.name,
            itemListElement: items.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
          },
        }
      : {}),
  };
}

export function faqLd(items: readonly FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

/** Un único JSON con @graph por página (escapando "<" para poder incrustarlo en <script>). */
export function graph(...nodes: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(/</g, "\\u003c");
}

/** Nombres de los elementos de una lista de servicios de las traducciones (p. ej. "digitalizacion.services.items"). */
export function serviceItems(lang: Language, base: string, field?: "name"): string[] {
  const out: string[] = [];
  for (let i = 0; i < 20; i++) {
    const key = field ? `${base}.${i}.${field}` : `${base}.${i}`;
    const v = tr(lang, key);
    if (v === key) break;
    out.push(v);
  }
  return out;
}
