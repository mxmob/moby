/*
 * Alta self-serve (precios, promo, checkout y bienvenida) contra la API pública de Moby.
 * Contrato: GET /signup/pricing/, POST /signup/promo/, POST /signup/checkout/, GET /signup/checkout/status/
 * Los importes llegan como strings con 2 decimales ("12.50").
 */

export const MOBY_API_URL = (process.env.NEXT_PUBLIC_MOBY_API_URL || "https://harpoon.mobyapp.eu/api/v1").replace(/\/$/, "");

export type ItemKind = "monthly" | "yearly" | "setup" | "dfy_monthly" | string;

export interface PricingPlan {
  code: string;
  name: string;
  description: string;
  kind: ItemKind;
  price: string;
  setup_fee: string;
  trial_days: number;
  features: string[];
  sort_order: number;
}

export interface PricingAddon {
  code: string;
  name: string;
  description: string;
  kind: ItemKind;
  price: string;
  setup_fee: string;
  trial_days: number;
  area: string;
}

export interface PackageItem {
  code: string;
  name: string;
  kind: ItemKind;
  price: string;
  promo_price: string | null;
  promo_months: number | null;
  setup_fee: string;
}

export interface PricingPackage {
  code: string;
  name: string;
  description: string;
  promo_code_required: boolean;
  valid_until: string | null;
  items: PackageItem[];
}

export type SectorValue = "restaurante" | "inmobiliaria" | "servicios" | "eventos";

export interface PricingSector {
  value: SectorValue;
  label: string;
  hint: string;
  addons: string[];
  suggested_plan: string | null;
}

export interface PricingData {
  for_sale: boolean;
  checkout_enabled: boolean;
  currency: string;
  plans: PricingPlan[];
  addons: PricingAddon[];
  packages: PricingPackage[];
  sectors: PricingSector[];
}

export interface PromoResult {
  valid: boolean;
  kind?: "package" | "partner" | "referral";
  package?: PricingPackage;
  partner_name?: string;
  available?: boolean;
  message?: string;
}

export interface CheckoutStatus {
  status: "open" | "completed" | "expired" | "processing";
  organization?: string | null;
  email?: string | null;
  bridge_url?: string | null;
}

/** Precios en el servidor con caché corta (5 min). null si la API no responde o devuelve algo inesperado. */
export async function fetchPricing(): Promise<PricingData | null> {
  try {
    const res = await fetch(`${MOBY_API_URL}/signup/pricing/`, {
      next: { revalidate: 300 },
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const d = (await res.json()) as Partial<PricingData>;
    return {
      for_sale: !!d.for_sale,
      checkout_enabled: !!d.checkout_enabled,
      currency: d.currency || "EUR",
      plans: Array.isArray(d.plans) ? [...d.plans].sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)) : [],
      addons: Array.isArray(d.addons) ? d.addons : [],
      packages: Array.isArray(d.packages) ? d.packages : [],
      sectors: Array.isArray(d.sectors) ? d.sectors : [],
    };
  } catch {
    return null;
  }
}

/** Hay algo que se pueda contratar online ahora mismo. */
export const canCheckout = (d: PricingData | null): d is PricingData =>
  !!d && d.for_sale && d.checkout_enabled && (d.plans.length > 0 || d.packages.length > 0);

/* ───────── Formato de importes ───────── */

export function formatMoney(amount: string | number | null | undefined, lang: string, currency = "EUR") {
  const n = typeof amount === "number" ? amount : Number(amount ?? 0);
  if (!Number.isFinite(n)) return "";
  return new Intl.NumberFormat(lang === "en" ? "en-IE" : "es-ES", {
    style: "currency",
    currency,
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(n);
}

export const isPositive = (amount: string | number | null | undefined) => Number(amount ?? 0) > 0;

/* ───────── Código de recomendación (?ref=) ───────── */

const REF_KEY = "mobyapp-ref";
const REF_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const REF_RE = /^[A-Za-z0-9_-]{1,64}$/;

/** Guarda el ref durante 30 días (almacenamiento local, ver política de cookies). */
export function storeRef(ref: string) {
  if (!REF_RE.test(ref)) return;
  try {
    localStorage.setItem(REF_KEY, JSON.stringify({ ref, at: Date.now() }));
  } catch {
    /* navegador sin almacenamiento */
  }
}

export function readRef(): string {
  try {
    const raw = localStorage.getItem(REF_KEY);
    if (!raw) return "";
    const { ref, at } = JSON.parse(raw) as { ref?: string; at?: number };
    if (!ref || !at || Date.now() - at > REF_TTL_MS) {
      localStorage.removeItem(REF_KEY);
      return "";
    }
    return ref;
  } catch {
    return "";
  }
}

export const cleanCode = (v: string | null | undefined) => (v || "").trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "").slice(0, 64);
