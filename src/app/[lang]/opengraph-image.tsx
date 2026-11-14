import { ImageResponse } from "next/og";
import { isLocale } from "@/i18n/config";
import { translations } from "@/i18n/translations";
import { absoluteUrl } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MobyApp";

// La ballena de la marca (fichero público; en Vercel la función no tiene acceso a public/ por disco)
const mark = absoluteUrl("/brand/moby-mark-512.png");

/** Imagen para compartir en redes (WhatsApp, LinkedIn, X…) en cada idioma. */
export default function OgImage({ params }: { params: { lang: string } }) {
  const t = translations[isLocale(params.lang) ? params.lang : "es"];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#050510", color: "#ffffff" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 80% 30%, rgba(6,182,212,.22), transparent 55%), radial-gradient(circle at 15% 90%, rgba(139,92,246,.25), transparent 50%)",
          }}
        />
        <div style={{ position: "absolute", left: 72, right: 72, top: 64, height: 3, background: "linear-gradient(90deg, #06b6d4, #8b5cf6, transparent)" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mark} width={400} height={400} style={{ position: "absolute", right: 40, top: 110 }} alt="" />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "64px 72px", width: "100%" }}>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: 1, color: "#22d3ee" }}>MobyApp</div>
          <div style={{ fontSize: 58, lineHeight: 1.1, fontWeight: 700, marginTop: 16, maxWidth: 760 }}>{t.home.hero_h1}</div>
          <div style={{ fontSize: 26, marginTop: 24, color: "rgba(255,255,255,.7)", maxWidth: 760 }}>{t.footer.location}</div>
        </div>
      </div>
    ),
    size
  );
}
