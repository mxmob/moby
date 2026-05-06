"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n/useI18n";

type PillarKey = "digitalizacion" | "optimizacion" | "automatizacion" | "desarrollo" | "impresion3d";

interface Pillar {
  key: PillarKey;
  color: string;       // hex sólido
  glow: string;        // rgba con alpha
  icon: React.ReactNode;
}

const PILLARS: Pillar[] = [
  {
    key: "digitalizacion",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.55)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
  {
    key: "optimizacion",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.55)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 6-6" />
        <circle cx="21" cy="8" r="2" />
      </svg>
    ),
  },
  {
    key: "automatizacion",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.55)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    key: "desarrollo",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.55)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
        <path d="M14 4l-4 16" />
      </svg>
    ),
  },
  {
    key: "impresion3d",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.55)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const VIEW = 800;
const CENTER = VIEW / 2;
const NODE_RADIUS = 240;   // distancia centro → nodo
const LABEL_RADIUS = 360;  // distancia centro → label (en %)

// Pentágono con vértice arriba: ángulos -90, -18, 54, 126, 198 grados
const angleFor = (i: number) => (i * 72 - 90) * (Math.PI / 180);

export function PentagonHero() {
  const { t } = useI18n();
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [reduced, setReduced] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  // Activación secuencial (pausa cuando hay hover)
  useEffect(() => {
    if (reduced || hoverIdx !== null) return;
    intervalRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % PILLARS.length);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reduced, hoverIdx]);

  const focusedIdx = hoverIdx ?? activeIdx;

  // Coordenadas SVG de los nodos
  const nodes = PILLARS.map((_, i) => ({
    x: CENTER + NODE_RADIUS * Math.cos(angleFor(i)),
    y: CENTER + NODE_RADIUS * Math.sin(angleFor(i)),
  }));

  // Líneas: pentagrama interior (cada nodo conecta con todos los demás)
  const edges: { a: number; b: number }[] = [];
  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) edges.push({ a: i, b: j });
  }

  return (
    <div className="relative w-full max-w-[760px] aspect-square mx-auto">
      {/* Halo radial detrás */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(6,182,212,0.18) 0%, rgba(168,85,247,0.10) 35%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* SVG del pentágono */}
      <svg
        viewBox={`0 0 ${VIEW} ${VIEW}`}
        className="absolute inset-0 w-full h-full"
        role="img"
        aria-label="MobyApp: cinco áreas conectadas"
      >
        <defs>
          {/* Gradiente animado para el flujo de energía */}
          {PILLARS.map((p, i) => (
            <linearGradient
              key={`flow-${i}`}
              id={`flow-${i}`}
              gradientUnits="userSpaceOnUse"
              x1={nodes[i].x}
              y1={nodes[i].y}
              x2={CENTER}
              y2={CENTER}
            >
              <stop offset="0%" stopColor={p.color} stopOpacity="0.85" />
              <stop offset="100%" stopColor={p.color} stopOpacity="0" />
            </linearGradient>
          ))}

          <radialGradient id="core-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0b0b1a" />
            <stop offset="70%" stopColor="#0b0b1a" />
            <stop offset="100%" stopColor="#1a1a2e" />
          </radialGradient>

          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Aristas (todas tenues, las del nodo activo se realzan) */}
        {edges.map((e, idx) => {
          const isActive = e.a === focusedIdx || e.b === focusedIdx;
          return (
            <line
              key={`edge-${idx}`}
              x1={nodes[e.a].x}
              y1={nodes[e.a].y}
              x2={nodes[e.b].x}
              y2={nodes[e.b].y}
              stroke={isActive ? PILLARS[focusedIdx].color : "rgba(255,255,255,0.12)"}
              strokeWidth={isActive ? 1.4 : 0.8}
              opacity={isActive ? 0.7 : 0.35}
              style={{ transition: "all 600ms ease" }}
            />
          );
        })}

        {/* Pentágono perimetral sutil */}
        <polygon
          points={nodes.map((n) => `${n.x},${n.y}`).join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />

        {/* Líneas radiales nodo→centro con flujo de energía */}
        {nodes.map((n, i) => (
          <line
            key={`spoke-${i}`}
            x1={n.x}
            y1={n.y}
            x2={CENTER}
            y2={CENTER}
            stroke={`url(#flow-${i})`}
            strokeWidth={i === focusedIdx ? 2.4 : 1}
            opacity={i === focusedIdx ? 1 : 0.45}
            style={{ transition: "all 600ms ease" }}
          />
        ))}

        {/* Partículas viajando hacia el centro (solo el nodo activo, si motion ok) */}
        {!reduced &&
          nodes.map((n, i) =>
            i === focusedIdx ? (
              <circle key={`pulse-${i}`} r="3.5" fill={PILLARS[i].color} filter="url(#soft-glow)">
                <animateMotion
                  dur="1.6s"
                  repeatCount="indefinite"
                  path={`M${n.x},${n.y} L${CENTER},${CENTER}`}
                />
                <animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" />
              </circle>
            ) : null,
          )}

        {/* Nodos */}
        {nodes.map((n, i) => {
          const isFocused = i === focusedIdx;
          return (
            <g key={`node-${i}`} style={{ transition: "all 500ms ease" }}>
              <circle
                cx={n.x}
                cy={n.y}
                r={isFocused ? 26 : 18}
                fill="transparent"
                stroke={PILLARS[i].glow}
                strokeWidth="1.5"
                opacity={isFocused ? 0.9 : 0.45}
                filter="url(#soft-glow)"
                style={{ transition: "all 500ms ease" }}
              />
              <circle
                cx={n.x}
                cy={n.y}
                r={isFocused ? 11 : 8}
                fill={isFocused ? PILLARS[i].color : "#0b0b1a"}
                stroke={PILLARS[i].color}
                strokeWidth="2.5"
                style={{ transition: "all 500ms ease" }}
              />
            </g>
          );
        })}

        {/* Núcleo central — logo Moby */}
        <g filter="url(#soft-glow)">
          <circle cx={CENTER} cy={CENTER} r="62" fill="url(#core-gradient)" />
          <circle
            cx={CENTER}
            cy={CENTER}
            r="62"
            fill="none"
            stroke={PILLARS[focusedIdx].color}
            strokeWidth="2"
            opacity="0.85"
            style={{ transition: "stroke 600ms ease" }}
          />
          <circle
            cx={CENTER}
            cy={CENTER}
            r="74"
            fill="none"
            stroke={PILLARS[focusedIdx].color}
            strokeWidth="1"
            opacity="0.25"
            style={{ transition: "stroke 600ms ease" }}
          />
          {!reduced && (
            <circle cx={CENTER} cy={CENTER} r="62" fill="none" stroke={PILLARS[focusedIdx].color} strokeWidth="2">
              <animate attributeName="r" values="62;82;62" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
          {/* Sustituye este <text> por tu <image href="/logo-moby.svg" .../> cuando lo tengas */}
          <text
            x={CENTER}
            y={CENTER + 14}
            textAnchor="middle"
            fontSize="46"
            fontWeight="700"
            fill="#ffffff"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            M
          </text>
        </g>
      </svg>

      {/* Labels HTML posicionados sobre cada vértice */}
      {PILLARS.map((p, i) => {
        const a = angleFor(i);
        // Convertimos coords del SVG a % del contenedor para posicionar HTML
        const xPct = 50 + (LABEL_RADIUS / VIEW) * 100 * Math.cos(a);
        const yPct = 50 + (LABEL_RADIUS / VIEW) * 100 * Math.sin(a);
        const isFocused = i === focusedIdx;

        return (
          <motion.button
            key={p.key}
            type="button"
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
            onFocus={() => setHoverIdx(i)}
            onBlur={() => setHoverIdx(null)}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i + 0.3, duration: 0.5, ease: "easeOut" }}
            className={`
              absolute -translate-x-1/2 -translate-y-1/2
              w-[180px] sm:w-[200px] p-3 rounded-2xl text-left
              backdrop-blur-md border
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050510]
              transition-all duration-500
            `}
            style={{
              left: `${xPct}%`,
              top: `${yPct}%`,
              background: isFocused
                ? `linear-gradient(135deg, ${p.glow} 0%, rgba(11,11,26,0.85) 100%)`
                : "rgba(11,11,26,0.55)",
              borderColor: isFocused ? p.color : "rgba(255,255,255,0.10)",
              boxShadow: isFocused ? `0 0 32px ${p.glow}` : "none",
            }}
            aria-label={t(`pillars.${p.key}.title`) || p.key}
          >
            <div className="flex items-center gap-2 mb-1" style={{ color: p.color }}>
              {p.icon}
              <span className="text-sm font-semibold text-white">
                {t(`pillars.${p.key}.title`) || p.key}
              </span>
            </div>
            <AnimatePresence>
              {isFocused && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs text-white/70 leading-snug overflow-hidden"
                >
                  {t(`pillars.${p.key}.desc`) || ""}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
