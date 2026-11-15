/*
 * Landings por sector (software MobyApp para barberías, estética, restaurantes e inmobiliarias).
 * Idiomas: es (sin prefijo), ca (/ca/…) y en (/en/…). Como la auditoría de Google, el catalán vive en
 * app/[lang]/ca/… y el middleware lo sirve bajo /es.
 *
 * Regla de contenido: todo lo que se afirma existe hoy en Moby. Lo que no (WhatsApp automático,
 * Apple Wallet, app móvil nativa) se dice como «próximamente» o «aún no». Sin clientes, logos ni
 * testimonios inventados; las cifras de los mockups y la calculadora son ejemplos/estimaciones.
 */

export type SLang = "es" | "ca" | "en";
export const SLANGS: SLang[] = ["es", "ca", "en"];

export type SectorKey = "barberias" | "estetica" | "restaurantes" | "inmobiliarias";

export type MockupKey =
  | "booking"
  | "agenda"
  | "stamps"
  | "reviews"
  | "reactivation"
  | "vouchers"
  | "panel"
  | "menu"
  | "orders"
  | "reservations"
  | "property"
  | "dossier"
  | "pipeline"
  | "social";

export interface Feature {
  /** Nombre del módulo (Moby Citas, Moby Rewards…) */
  module: string;
  title: string;
  text: string;
  bullets: string[];
  mockup: MockupKey;
}

export interface SectorCopy {
  meta: { title: string; description: string; keywords: string[]; ogTitle: string };
  /** Nombre corto (migas, índice) */
  name: string;
  /** Descripción corta para el índice /sectores */
  cardText: string;
  badge: string;
  h1: string;
  subtitle: string;
  heroBullets: string[];
  whatsappText: string;
  pains: { title: string; subtitle: string; items: { title: string; text: string }[] };
  steps: { title: string; items: { title: string; text: string }[] };
  features: { title: string; subtitle: string; items: Feature[] };
  pack?: { name: string; title: string; text: string; items: string[]; extra: string };
  roi?: boolean;
  local: { title: string; text: string };
  faq: [string, string][];
  form: {
    title: string;
    subtitle: string;
    /** Valor de `sector` que llega al CRM y opciones visibles (si hay más de una) */
    sectors: [string, string][];
    sizeLabel: string;
    /** Clave estable de tamaño que llega al CRM (size_label) */
    sizeKey: string;
  };
  /** Rutas de imágenes OG */
  ogSubtitle: string;
}
