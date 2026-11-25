import { useId } from "react";
import { BRAND_CYAN, BRAND_VIOLET, WHALE_GRADIENT, WHALE_PATHS, WHALE_VIEWBOX } from "@/lib/brand";

type MarkProps = {
  className?: string;
  /** El trazo se dibuja al cargar (estático con prefers-reduced-motion). */
  animated?: boolean;
  /** Brillo suave bajo el trazo. */
  glow?: boolean;
  /** Grosor del trazo en unidades del lienzo de 512 (7 = el del logo). */
  stroke?: number;
  title?: string;
};

/** Ballena de MobyApp en SVG en línea (nítida a cualquier tamaño). */
export function MobyMark({ className, animated = false, glow = true, stroke = 7, title }: MarkProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const gid = `moby-g-${uid}`;
  const fid = `moby-b-${uid}`;
  const g = WHALE_GRADIENT;
  const paths = WHALE_PATHS.map((d, i) => <path key={i} d={d} pathLength={1} />);

  return (
    <svg
      viewBox={WHALE_VIEWBOX}
      className={[animated ? "moby-draw" : "", className].filter(Boolean).join(" ")}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        <linearGradient id={gid} x1={g.x1} y1={g.y1} x2={g.x2} y2={g.y2} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={BRAND_CYAN} />
          <stop offset="1" stopColor={BRAND_VIOLET} />
        </linearGradient>
        {glow && (
          <filter id={fid} x="-25%" y="-35%" width="150%" height="170%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        )}
      </defs>
      <g fill="none" stroke={`url(#${gid})`} strokeLinecap="round" strokeLinejoin="round">
        {glow && (
          <g className="moby-glow" filter={`url(#${fid})`} opacity={0.55} strokeWidth={stroke * 2}>
            {paths}
          </g>
        )}
        <g strokeWidth={stroke}>{paths}</g>
      </g>
    </svg>
  );
}

/** Wordmark «Moby App»: Space Grotesk, «Moby» blanco y «App» fina con el degradado de marca. */
export function MobyWordmark({ className }: { className?: string }) {
  return (
    <span className={["font-display leading-none tracking-[-0.01em] whitespace-nowrap", className].filter(Boolean).join(" ")}>
      <span className="font-[450] text-[#f5f7ff]">Moby</span>{" "}
      <span className="font-light bg-gradient-to-r from-[#22d3ee] to-[#8b5cf6] bg-clip-text text-transparent">App</span>
    </span>
  );
}
