import type { SectorCopy, SectorKey, SLang } from "./types";
import { BARBERIAS } from "./barberias";
import { ESTETICA } from "./estetica";
import { RESTAURANTES } from "./restaurantes";
import { INMOBILIARIAS } from "./inmobiliarias";

export * from "./types";

export const SECTOR_KEYS: SectorKey[] = ["barberias", "estetica", "restaurantes", "inmobiliarias"];

export const SECTORS: Record<SectorKey, Record<SLang, SectorCopy>> = {
  barberias: BARBERIAS,
  estetica: ESTETICA,
  restaurantes: RESTAURANTES,
  inmobiliarias: INMOBILIARIAS,
};

/** Ruta sin prefijo de idioma (barberías va en la raíz por SEO; el resto bajo /sectores). */
export const SECTOR_SLUGS: Record<SectorKey, string> = {
  barberias: "/barberias-y-peluquerias",
  estetica: "/sectores/estetica-y-bienestar",
  restaurantes: "/sectores/restaurantes",
  inmobiliarias: "/sectores/inmobiliarias",
};
/** Slug dentro de /sectores/[slug] (barberías no: tiene página propia). */
export const SUB_SLUGS: Partial<Record<string, SectorKey>> = {
  "estetica-y-bienestar": "estetica",
  restaurantes: "restaurantes",
  inmobiliarias: "inmobiliarias",
};

export const SECTORS_INDEX_PATH = "/sectores";

/** Prefijo por idioma: es sin prefijo, ca → /ca, en → /en. */
export const sPath = (lang: SLang, path: string) => (lang === "es" ? path : `/${lang}${path === "/" ? "" : path}`);

/** Sector del catálogo de precios (GET /signup/pricing/) que corresponde a cada landing. */
export const PRICING_SECTOR: Record<SectorKey, string> = {
  barberias: "servicios",
  estetica: "servicios",
  restaurantes: "restaurante",
  inmobiliarias: "inmobiliaria",
};

/** Emoji/icono de la tarjeta del índice */
export const SECTOR_ICON: Record<SectorKey, string> = {
  barberias: "✂️",
  estetica: "💆",
  restaurantes: "🍽️",
  inmobiliarias: "🏠",
};

export const SECTORS_INDEX: Record<SLang, { title: string; description: string; h1: string; subtitle: string; badge: string; name: string; more: string; moreText: string }> = {
  es: {
    title: "Software para negocios locales por sector | MobyApp",
    description: "Soluciones MobyApp para barberías y peluquerías, centros de estética, restaurantes e inmobiliarias: citas, fidelización, reseñas, carta digital, pedidos y CRM.",
    h1: "Software para tu sector, listo para usar",
    subtitle: "Citas, fidelización, reseñas, carta digital, pedidos, propiedades y CRM. Elige tu sector y mira cómo te ayuda MobyApp.",
    badge: "Sectores",
    name: "Sectores",
    more: "¿Tu sector no está aquí?",
    moreText: "Moby se adapta a gimnasios, clínicas, tiendas y otros negocios con citas o clientes recurrentes. Cuéntanos tu caso.",
  },
  ca: {
    title: "Programari per a negocis locals per sector | MobyApp",
    description: "Solucions MobyApp per a barberies i perruqueries, centres d’estètica, restaurants i immobiliàries: cites, fidelització, ressenyes, carta digital, comandes i CRM.",
    h1: "Programari per al teu sector, a punt per fer servir",
    subtitle: "Cites, fidelització, ressenyes, carta digital, comandes, propietats i CRM. Tria el teu sector i mira com t’ajuda MobyApp.",
    badge: "Sectors",
    name: "Sectors",
    more: "El teu sector no hi és?",
    moreText: "Moby s’adapta a gimnasos, clíniques, botigues i altres negocis amb cites o clients recurrents. Explica’ns el teu cas.",
  },
  en: {
    title: "Software for local businesses by industry | MobyApp",
    description: "MobyApp solutions for barbershops and hair salons, beauty centres, restaurants and real estate agencies: booking, loyalty, reviews, digital menu, orders and CRM.",
    h1: "Software for your industry, ready to use",
    subtitle: "Booking, loyalty, reviews, digital menus, orders, listings and CRM. Pick your industry and see how MobyApp helps.",
    badge: "Industries",
    name: "Industries",
    more: "Industry not listed?",
    moreText: "Moby adapts to gyms, clinics, shops and other businesses with appointments or repeat customers. Tell us about yours.",
  },
};
