import type { Metadata } from "next";
import { SECTORS, SECTOR_SLUGS, SECTORS_INDEX, SECTORS_INDEX_PATH, SLANGS, PRICING_SECTOR, sPath, type SectorKey, type SLang } from "@/content/sectors";
import { UI } from "@/content/sectors/ui";
import { absoluteUrl } from "@/lib/site";
import { ORG_ID, WEBSITE_ID } from "@/lib/seo";
import { fetchPricing } from "@/lib/signup";

/** La home solo existe en es y en (no hay /ca). */
export const homePath = (lang: SLang) => (lang === "en" ? "/en" : "/");

const OG_LOCALES: Record<SLang, string> = { es: "es_ES", ca: "ca_ES", en: "en_GB" };

/** Imagen OG generada con next/og (app/api/og/sector). */
export const sectorOgImage = (key: SectorKey | "index", lang: SLang) => absoluteUrl(`/api/og/sector?k=${key}&l=${lang}`);

function alternates(path: string, lang: SLang) {
  return {
    canonical: absoluteUrl(sPath(lang, path)),
    languages: { ...Object.fromEntries(SLANGS.map((l) => [l, absoluteUrl(sPath(l, path))])), "x-default": absoluteUrl(path) },
  };
}

function build(lang: SLang, path: string, title: string, description: string, ogKey: SectorKey | "index", keywords?: string[]): Metadata {
  const image = sectorOgImage(ogKey, lang);
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: alternates(path, lang),
    openGraph: {
      type: "website",
      url: absoluteUrl(sPath(lang, path)),
      siteName: "MobyApp",
      title,
      description,
      locale: OG_LOCALES[lang],
      alternateLocale: SLANGS.filter((l) => l !== lang).map((l) => OG_LOCALES[l]),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function sectorMetadata(key: SectorKey, lang: SLang): Metadata {
  const c = SECTORS[key][lang];
  return build(lang, SECTOR_SLUGS[key], c.meta.title, c.meta.description, key, c.meta.keywords);
}

export function sectorsIndexMetadata(lang: SLang): Metadata {
  const c = SECTORS_INDEX[lang];
  return build(lang, SECTORS_INDEX_PATH, c.title, c.description, "index");
}

/** «desde X €/mes» solo si el catálogo público está A LA VENTA; si no, null (CTA de demo). */
export async function sectorPlanPrice(key: SectorKey): Promise<number | null> {
  const d = await fetchPricing();
  if (!d || !d.for_sale || !d.plans.length) return null;
  const monthly = d.plans.filter((p) => p.kind === "monthly" && Number(p.price) > 0);
  if (!monthly.length) return null;
  const suggested = d.sectors.find((s) => s.value === PRICING_SECTOR[key])?.suggested_plan;
  const plan = monthly.find((p) => p.code === suggested);
  const price = plan ? Number(plan.price) : Math.min(...monthly.map((p) => Number(p.price)));
  return Number.isFinite(price) && price > 0 ? price : null;
}

/* ───────── Datos estructurados ───────── */

export function sectorJsonLd(key: SectorKey, lang: SLang, price: number | null) {
  const c = SECTORS[key][lang];
  const url = absoluteUrl(sPath(lang, SECTOR_SLUGS[key]));
  const index = SECTORS_INDEX[lang];
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
      primaryImageOfPage: sectorOgImage(key, lang),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: UI[lang].home, item: absoluteUrl(homePath(lang)) },
        { "@type": "ListItem", position: 2, name: index.name, item: absoluteUrl(sPath(lang, SECTORS_INDEX_PATH)) },
        { "@type": "ListItem", position: 3, name: c.name, item: url },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${url}#software`,
      name: `MobyApp · ${c.name}`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: c.name,
      operatingSystem: "Web, Android, iOS (navegador)",
      description: c.meta.description,
      url,
      inLanguage: ["es", "ca", "en"],
      image: sectorOgImage(key, lang),
      featureList: c.features.items.map((f) => `${f.module}: ${f.title}`),
      publisher: { "@id": ORG_ID },
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Granollers" },
        { "@type": "AdministrativeArea", name: "Vallès Oriental" },
        { "@type": "City", name: "Barcelona" },
        { "@type": "Country", name: "España" },
      ],
      ...(price
        ? { offers: { "@type": "Offer", price: price.toFixed(2), priceCurrency: "EUR", url: absoluteUrl(sPath(lang, "/precios")), availability: "https://schema.org/InStock" } }
        : {}),
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: c.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ];
}

export function sectorsIndexJsonLd(lang: SLang) {
  const c = SECTORS_INDEX[lang];
  const url = absoluteUrl(sPath(lang, SECTORS_INDEX_PATH));
  const keys = Object.keys(SECTOR_SLUGS) as SectorKey[];
  return [
    { "@type": "CollectionPage", "@id": `${url}#pagina`, url, name: c.title, description: c.description, inLanguage: lang, isPartOf: { "@id": WEBSITE_ID } },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: UI[lang].home, item: absoluteUrl(homePath(lang)) },
        { "@type": "ListItem", position: 2, name: c.name, item: url },
      ],
    },
    {
      "@type": "ItemList",
      itemListElement: keys.map((k, i) => ({ "@type": "ListItem", position: i + 1, name: SECTORS[k][lang].name, url: absoluteUrl(sPath(lang, SECTOR_SLUGS[k])) })),
    },
  ];
}
