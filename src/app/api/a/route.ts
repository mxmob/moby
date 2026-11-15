import { NextRequest, NextResponse } from "next/server";

/**
 * Medición de audiencia anónima sin cookies, propia (MobyApp).
 * Recibe el beacon del navegador (mismo dominio) y lo reenvía al backend de Moby con la
 * clave de esta web (ANALYTICS_KEY, solo en servidor), la IP/UA del visitante (el backend no
 * los guarda: solo calcula un identificador con una sal diaria que se borra) y el país de Vercel.
 * Más detalles: moby_back/apps/web_analytics/README.md
 */
const ENDPOINT = process.env.ANALYTICS_URL || "https://harpoon.mobyapp.eu/api/v1/analytics/collect/";

export async function POST(req: NextRequest) {
  const key = process.env.ANALYTICS_KEY;
  const done = (status: string) => new NextResponse(null, { status: 204, headers: { "x-analytics": status } });
  if (!key || process.env.VERCEL_ENV !== "production") return done("off");
  if (req.headers.get("dnt") === "1" || req.headers.get("sec-gpc") === "1") return done("dnt");
  const origin = req.headers.get("origin");
  try {
    if (origin && new URL(origin).host !== req.headers.get("host")) return done("origin");
  } catch {
    return done("origin");
  }
  const body = (await req.text()).slice(0, 4000);
  try {
    JSON.parse(body);
  } catch {
    return done("invalid");
  }
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "";
  try {
    const r = await fetch(ENDPOINT, {
      method: "POST",
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": key,
        "X-Analytics-IP": ip,
        "X-Analytics-UA": req.headers.get("user-agent") || "",
        "X-Analytics-Country": req.headers.get("x-vercel-ip-country") || "",
        "Accept-Language": req.headers.get("accept-language") || "",
      },
      body,
    });
    return done(String(r.status));
  } catch {
    return done("error");
  }
}
