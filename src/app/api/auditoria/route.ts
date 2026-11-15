import { NextResponse } from "next/server";
import { cleanAttribution } from "@/lib/attribution";

/**
 * «Auditoría gratuita de tu ficha de Google» → contacto en el CRM de MobyApp (formulario «audit»).
 * Crea el contacto en «Prospecto» con sector, ciudad y origen; Moby avisa al equipo y responde al
 * solicitante (respuesta transaccional). La clave de API vive solo en el servidor.
 */

export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SECTORS = new Set(["barberia", "peluqueria", "estetica", "restaurante", "inmobiliaria", "otro"]);
const LANGS = new Set(["es", "ca", "en"]);

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body || typeof body !== "object") return NextResponse.json({ error: "invalid" }, { status: 400 });
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true }); // honeypot

  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const business = str(body.business, 200);
  const city = str(body.city, 100);
  const name = str(body.name, 200);
  const email = str(body.email, 254);
  const phone = str(body.phone, 50);
  const sector = SECTORS.has(str(body.sector, 40)) ? str(body.sector, 40) : "otro";
  const language = LANGS.has(str(body.language, 5)) ? str(body.language, 5) : "es";

  if (!business || !city || !name) return NextResponse.json({ error: "required" }, { status: 422 });
  if (!EMAIL.test(email)) return NextResponse.json({ error: "email" }, { status: 422 });
  if (body.consent !== true) return NextResponse.json({ error: "consent" }, { status: 422 });

  const apiUrl = process.env.MOBY_API_URL?.replace(/\/$/, "");
  const apiKey = process.env.MOBY_API_KEY;
  if (!apiUrl || !apiKey) {
    console.error("[auditoria] Falta MOBY_API_URL o MOBY_API_KEY");
    return NextResponse.json({ error: "config" }, { status: 502 });
  }

  const referer = req.headers.get("referer") || "";
  const marketing = body.marketing_consent === true;
  const lead = {
    form: "audit",
    language,
    name,
    email,
    phone,
    company: business,
    city,
    sector,
    landing: "/auditoria-google",
    message: `Solicitud de auditoría gratuita de la ficha de Google: ${business} (${city}).`,
    source: "mobyapp-web",
    page_url: /^https?:\/\//.test(referer) ? referer.slice(0, 500) : "",
    attribution: cleanAttribution(body.attribution),
    // Consentimiento de marketing (opcional y separado): lo usan las automatizaciones de Campañas
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
      console.error(`[auditoria] Moby respondió ${res.status}: ${detail.slice(0, 300)}`);
      return NextResponse.json({ error: res.status === 400 ? "invalid" : "upstream" }, { status: res.status === 400 ? 422 : 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[auditoria] Error enviando el lead a Moby", e);
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }
}
