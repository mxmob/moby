import { ImageResponse } from "next/og";
import { SECTORS, SECTORS_INDEX, SECTOR_KEYS, type SectorKey, type SLang } from "@/content/sectors";
import { absoluteUrl } from "@/lib/site";

/**
 * Imagen para compartir (1200×630) de las landings de sector: /api/og/sector?k=barberias&l=es
 * (k = barberias | estetica | restaurantes | inmobiliarias | index; l = es | ca | en).
 */

const mark = absoluteUrl("/brand/moby-mark-512.png");

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const k = searchParams.get("k") || "index";
  const l = (["es", "ca", "en"].includes(searchParams.get("l") || "") ? searchParams.get("l") : "es") as SLang;
  const sector = SECTOR_KEYS.includes(k as SectorKey) ? SECTORS[k as SectorKey][l] : null;
  const title = sector ? sector.meta.ogTitle : SECTORS_INDEX[l].h1;
  const kicker = sector ? sector.name : SECTORS_INDEX[l].name;
  const subtitle = sector ? sector.ogSubtitle : SECTOR_KEYS.map((s) => SECTORS[s][l].name).join(" · ");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#050510", color: "#ffffff" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 85% 25%, rgba(6,182,212,.25), transparent 55%), radial-gradient(circle at 10% 95%, rgba(139,92,246,.28), transparent 50%)" }} />
        <div style={{ position: "absolute", left: 72, right: 72, top: 64, height: 3, background: "linear-gradient(90deg, #06b6d4, #8b5cf6, transparent)" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mark} width={300} height={300} style={{ position: "absolute", right: 60, top: 120, opacity: 0.9 }} alt="" />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "64px 72px", width: "100%" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#22d3ee" }}>MobyApp · {kicker}</div>
          <div style={{ display: "flex", fontSize: 66, lineHeight: 1.05, fontWeight: 800, marginTop: 18, maxWidth: 820 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 26, marginTop: 26, color: "rgba(255,255,255,.72)", maxWidth: 900 }}>{subtitle}</div>
          <div style={{ display: "flex", fontSize: 22, marginTop: 22, color: "rgba(255,255,255,.45)" }}>mobyapp.eu · Granollers · Vallès · Barcelona</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800" } }
  );
}
