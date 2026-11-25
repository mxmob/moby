import catalog from "../../public/products.json";
import type { Language } from "@/i18n/translations";

/**
 * Catálogo de productos de Moby. La FUENTE ÚNICA es public/products.json: esta web lo importa al compilar
 * (footer y /productos) y se publica tal cual en https://www.mobyapp.eu/products.json para que lo lean las webs
 * de cada producto (bloque «Más de Moby») y Bridge (Mapa de plataforma).
 *
 * status: "active" → con enlace · "soon" → visible con «Próximamente» y sin enlace · "hidden" → no se muestra.
 */
export type ProductStatus = "active" | "soon" | "hidden";

export interface MobyProduct {
  id: string;
  name: string;
  status: ProductStatus;
  category: string;
  url: string;
  logo: string;
  logoPlaceholder?: boolean;
  color: string;
  description: Record<Language, string>;
  cta: Record<Language, string>;
}

export const PRODUCT_CATEGORIES = catalog.categories as Record<string, Record<Language, string>>;
export const PRODUCTS = (catalog.products as MobyProduct[]).filter((p) => p.status !== "hidden");

/** utm_source de los enlaces que salen de mobyapp.eu */
export const UTM_SOURCE = "mobyapp";

/** URL del producto con UTM (medium: footer | products_page). */
export function productHref(p: MobyProduct, medium: "footer" | "products_page" = "footer") {
  const u = new URL(p.url);
  u.searchParams.set("utm_source", UTM_SOURCE);
  u.searchParams.set("utm_medium", medium);
  u.searchParams.set("utm_campaign", catalog.utm.campaign);
  return u.toString();
}

/** Logo servido desde esta misma web (ruta relativa: funciona también en previews y en local). */
export const productLogo = (p: MobyProduct) => p.logo.replace(/^https:\/\/www\.mobyapp\.eu/, "");
