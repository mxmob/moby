import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { ORG_ID, WEBSITE_ID } from "@/lib/seo";
import { GIVEAWAY } from "./content";

export type GiveawayLang = "es" | "ca" | "en";

/** /herramientas/sorteo-instagram (es), /ca/… y /en/… */
export const GIVEAWAY_PATHS: Record<GiveawayLang, string> = {
  es: "/herramientas/sorteo-instagram",
  ca: "/ca/herramientas/sorteo-instagram",
  en: "/en/herramientas/sorteo-instagram",
};

const OG_LOCALES: Record<GiveawayLang, string> = { es: "es_ES", ca: "ca_ES", en: "en_GB" };
const LANGS: GiveawayLang[] = ["es", "ca", "en"];

/** La home solo existe en es y en (no hay /ca). */
export const giveawayHomePath = (lang: GiveawayLang) => (lang === "en" ? "/en" : "/");

export function giveawayMetadata(lang: GiveawayLang): Metadata {
  const m = GIVEAWAY[lang].meta;
  const url = GIVEAWAY_PATHS[lang];
  return {
    title: { absolute: m.title },
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: absoluteUrl(url),
      languages: {
        es: absoluteUrl(GIVEAWAY_PATHS.es), ca: absoluteUrl(GIVEAWAY_PATHS.ca), en: absoluteUrl(GIVEAWAY_PATHS.en),
        "x-default": absoluteUrl(GIVEAWAY_PATHS.es),
      },
    },
    openGraph: {
      type: "website", url: absoluteUrl(url), siteName: "MobyApp", title: m.title, description: m.description,
      locale: OG_LOCALES[lang], alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALES[l]),
    },
  };
}

/* ───────── Datos estructurados: WebPage + migas + SoftwareApplication (sin precio) + FAQPage ───────── */

export function giveawayJsonLd(lang: GiveawayLang) {
  const c = GIVEAWAY[lang];
  const url = absoluteUrl(GIVEAWAY_PATHS[lang]);
  return [
    {
      "@type": "WebPage",
      "@id": `${url}#pagina`,
      url,
      name: c.meta.title,
      description: c.meta.description,
      inLanguage: lang,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": `${url}#software` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: c.home, item: absoluteUrl(giveawayHomePath(lang)) },
        { "@type": "ListItem", position: 2, name: c.name, item: url },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${url}#software`,
      name: `Moby Social · ${c.name}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: c.meta.description,
      url,
      inLanguage: ["es", "ca", "en"],
      featureList: [...c.features.items.map((f) => f.title), ...c.filters.items],
      publisher: { "@id": ORG_ID },
      provider: { "@id": ORG_ID },
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: c.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ];
}
