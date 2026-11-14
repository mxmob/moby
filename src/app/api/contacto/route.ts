import { NextResponse } from "next/server";
import { isLocale } from "@/i18n/config";

/**
 * Formulario de contacto de la web → lead en el CRM de Moby (Bridge).
 * La clave de API vive solo en el servidor (MOBY_API_KEY); el navegador nunca la ve.
 */

export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TIMEOUT_MS = 8000;

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body || typeof body !== "object") return NextResponse.json({ error: "invalid" }, { status: 400 });

  // Honeypot: los bots rellenan el campo oculto "website". Se responde OK sin guardar nada.
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true });

  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const name = str(body.name, 200);
  const email = str(body.email, 254);
  const phone = str(body.phone, 50);
  const company = str(body.company, 200);
  const message = str(body.message, 4000);

  if (!name) return NextResponse.json({ error: "name" }, { status: 422 });
  if (!EMAIL.test(email)) return NextResponse.json({ error: "email" }, { status: 422 });
  if (!message) return NextResponse.json({ error: "message" }, { status: 422 });
  if (body.consent !== true) return NextResponse.json({ error: "consent" }, { status: 422 });

  const apiUrl = process.env.MOBY_API_URL?.replace(/\/$/, "");
  const apiKey = process.env.MOBY_API_KEY;
  if (!apiUrl || !apiKey) {
    console.error("[contacto] Falta MOBY_API_URL o MOBY_API_KEY");
    return NextResponse.json({ error: "config" }, { status: 502 });
  }

  const referer = req.headers.get("referer") || "";
  const lead = {
    form: "contact",
    language: isLocale(body.language) ? body.language : "es",
    name,
    email,
    phone,
    company,
    message,
    source: "mobyapp-web",
    page_url: /^https?:\/\//.test(referer) ? referer.slice(0, 500) : "",
  };

  try {
    const res = await fetch(`${apiUrl}/leads/`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", "X-Api-Key": apiKey },
      body: JSON.stringify(lead),
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`[contacto] Moby respondió ${res.status}: ${detail.slice(0, 300)}`);
      return NextResponse.json({ error: res.status === 400 ? "invalid" : "upstream" }, { status: res.status === 400 ? 422 : 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contacto] Error enviando el lead a Moby", e);
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }
}
