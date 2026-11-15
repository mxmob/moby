import { NextResponse } from "next/server";
import { cleanAttribution } from "@/lib/attribution";

/**
 * «Pide tu demo gratuita» de las landings de sector → lead «demo» en el CRM de MobyApp (Bridge).
 * Llega con sector, ciudad, tamaño (sillas/mesas/agentes…), página y UTM, que Moby guarda en
 * custom_fields y en el título («Demo · Barbería · Nombre del negocio»). La clave vive solo en el servidor.
 */

export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SECTORS = new Set(["barberia", "peluqueria", "estetica", "bienestar", "unas", "restaurante", "bar", "inmobiliaria", "otro"]);
const SIZE_LABELS = new Set(["sillas", "cabinas", "mesas", "agentes"]);
const LANGS = new Set(["es", "ca", "en"]);
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body || typeof body !== "object") return NextResponse.json({ error: "invalid" }, { status: 400 });
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true }); // honeypot

  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const name = str(body.name, 200);
  const business = str(body.business, 200);
  const city = str(body.city, 100);
  const email = str(body.email, 254);
  const phone = str(body.phone, 50);
  const sector = SECTORS.has(str(body.sector, 40)) ? str(body.sector, 40) : "otro";
  const sizeLabel = SIZE_LABELS.has(str(body.size_label, 40)) ? str(body.size_label, 40) : "";
  const sizeNum = Number.parseInt(str(body.size, 6), 10);
  const size = Number.isFinite(sizeNum) && sizeNum >= 0 && sizeNum <= 500 ? sizeNum : null;
  const language = LANGS.has(str(body.language, 5)) ? str(body.language, 5) : "es";
  const landing = str(body.landing, 200).startsWith("/") ? str(body.landing, 200) : "";

  if (!name || !business || !city) return NextResponse.json({ error: "required" }, { status: 422 });
  if (phone.replace(/\D/g, "").length < 6) return NextResponse.json({ error: "phone" }, { status: 422 });
  if (!EMAIL.test(email)) return NextResponse.json({ error: "email" }, { status: 422 });
  if (body.consent !== true) return NextResponse.json({ error: "consent" }, { status: 422 });

  const apiUrl = process.env.MOBY_API_URL?.replace(/\/$/, "");
  const apiKey = process.env.MOBY_API_KEY;
  if (!apiUrl || !apiKey) {
    console.error("[demo] Falta MOBY_API_URL o MOBY_API_KEY");
    return NextResponse.json({ error: "config" }, { status: 502 });
  }

  // UTM: los de la URL de la página; si no hay, los del primer/último origen guardado
  const attribution = cleanAttribution(body.attribution);
  const touch = (attribution?.last || attribution?.first || {}) as Record<string, string>;
  const utm = Object.fromEntries(UTM_KEYS.map((k) => [k, (str(body[k], 150) || touch[k] || "").slice(0, 150)]));

  const referer = req.headers.get("referer") || "";
  const lead = {
    form: "demo",
    language,
    name,
    email,
    phone,
    company: business,
    city,
    sector,
    chairs: size,
    size_label: sizeLabel,
    landing,
    ...utm,
    message: `Solicitud de demo desde ${landing || "la web"}: ${business} (${city})${size !== null ? ` · ${sizeLabel || "tamaño"}: ${size}` : ""}.`,
    source: "mobyapp-web",
    page_url: /^https?:\/\//.test(referer) ? referer.slice(0, 500) : "",
    attribution,
  };

  try {
    const res = await fetch(`${apiUrl}/leads/`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", "X-Api-Key": apiKey },
      body: JSON.stringify(lead),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`[demo] Moby respondió ${res.status}: ${detail.slice(0, 300)}`);
      return NextResponse.json({ error: res.status === 400 ? "invalid" : "upstream" }, { status: res.status === 400 ? 422 : 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[demo] Error enviando el lead a Moby", e);
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }
}
