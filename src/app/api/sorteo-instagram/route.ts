import { NextResponse } from "next/server";
import { cleanAttribution } from "@/lib/attribution";

/**
 * Landing «Sorteos de Instagram y Facebook verificables» → contacto en el CRM de MobyApp.
 * Va como formulario «demo» (el CRM no tiene uno propio para herramientas) con el interés
 * «sorteo-instagram» en el perfil (etiqueta del lead), la landing y el origen/UTM de la visita.
 * Mismo consentimiento (privacidad obligatoria, marketing opcional y separado) que la auditoría.
 * La clave de API vive solo en el servidor.
 */

export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LANGS = new Set(["es", "ca", "en"]);
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const INTEREST = "sorteo-instagram";
const LANDING = "/herramientas/sorteo-instagram";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body || typeof body !== "object") return NextResponse.json({ error: "invalid" }, { status: 400 });
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true }); // honeypot

  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const name = str(body.name, 200);
  const business = str(body.business, 200);
  const email = str(body.email, 254);
  const phone = str(body.phone, 50);
  const language = LANGS.has(str(body.language, 5)) ? str(body.language, 5) : "es";

  if (!name || !business) return NextResponse.json({ error: "required" }, { status: 422 });
  if (!EMAIL.test(email)) return NextResponse.json({ error: "email" }, { status: 422 });
  if (body.consent !== true) return NextResponse.json({ error: "consent" }, { status: 422 });

  const apiUrl = process.env.MOBY_API_URL?.replace(/\/$/, "");
  const apiKey = process.env.MOBY_API_KEY;
  if (!apiUrl || !apiKey) {
    console.error("[sorteo-instagram] Falta MOBY_API_URL o MOBY_API_KEY");
    return NextResponse.json({ error: "config" }, { status: 502 });
  }

  const attribution = cleanAttribution(body.attribution);
  const touch = (attribution?.last || attribution?.first || {}) as Record<string, string>;
  const utm = Object.fromEntries(UTM_KEYS.map((k) => [k, (touch[k] || "").slice(0, 150)]));

  const referer = req.headers.get("referer") || "";
  const marketing = body.marketing_consent === true;
  const lead = {
    form: "demo",
    role: INTEREST, // etiqueta «sorteo-instagram» en el lead
    language,
    name,
    email,
    phone,
    company: business,
    landing: LANDING,
    ...utm,
    message: `Interés en Sorteos de Instagram y Facebook verificables (Moby Social): ${business}.`,
    source: "mobyapp-web",
    page_url: /^https?:\/\//.test(referer) ? referer.slice(0, 500) : "",
    attribution,
    custom_fields: marketing
      ? {
          marketing_consent: true,
          marketing_consent_text: str(body.marketing_consent_text, 500),
          marketing_consent_version: str(body.marketing_consent_version, 40),
          marketing_consent_at: new Date().toISOString(),
        }
      : undefined,
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
      console.error(`[sorteo-instagram] Moby respondió ${res.status}: ${detail.slice(0, 300)}`);
      return NextResponse.json({ error: res.status === 400 ? "invalid" : "upstream" }, { status: res.status === 400 ? 422 : 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[sorteo-instagram] Error enviando el lead a Moby", e);
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }
}
