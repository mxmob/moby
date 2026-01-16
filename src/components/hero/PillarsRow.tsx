"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/useI18n";

type PillarKey = "digitalizacion" | "optimizacion" | "automatizacion" | "desarrollo" | "impresion3d";

interface Pillar {
  key: PillarKey;
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    key: "digitalizacion",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
  {
    key: "optimizacion",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 6-6" />
        <circle cx="21" cy="8" r="2" />
      </svg>
    ),
  },
  {
    key: "automatizacion",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    key: "desarrollo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
        <path d="M14 4l-4 16" />
      </svg>
    ),
  },
  {
    key: "impresion3d",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export function PillarsRow() {
  const { t } = useI18n();
  const [activeTooltip, setActiveTooltip] = useState<PillarKey | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div 
        className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
        role="list"
        aria-label="Service pillars"
      >
        {pillars.map((pillar) => (
          <div
            key={pillar.key}
            className="relative group"
            onMouseEnter={() => setActiveTooltip(pillar.key)}
            onMouseLeave={() => setActiveTooltip(null)}
            onFocus={() => setActiveTooltip(pillar.key)}
            onBlur={() => setActiveTooltip(null)}
            role="listitem"
          >
            <button
              className={`
                flex flex-col items-center gap-2 p-3 rounded-xl
                transition-all duration-300 ease-out
                hover:bg-white/5 focus:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400/50
                ${activeTooltip === pillar.key ? "bg-white/5" : ""}
              `}
              aria-describedby={`tooltip-${pillar.key}`}
            >
              <div 
                className={`
                  p-3 rounded-xl border transition-all duration-300
                  ${activeTooltip === pillar.key 
                    ? "border-cyan-400/50 text-cyan-400 shadow-lg shadow-cyan-400/20" 
                    : "border-white/10 text-white/60 hover:text-white/80"
                  }
                `}
              >
                {pillar.icon}
              </div>
              <span 
                className={`
                  text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300
                  ${activeTooltip === pillar.key ? "text-white" : "text-white/60"}
                `}
              >
                {t(`pillars.${pillar.key}`)}
              </span>
            </button>

            {/* Tooltip */}
            <div
              id={`tooltip-${pillar.key}`}
              role="tooltip"
              className={`
                absolute left-1/2 -translate-x-1/2 bottom-full mb-3
                px-4 py-2 rounded-lg
                bg-gray-900/95 border border-white/10 backdrop-blur-sm
                text-sm text-white/90 text-center
                whitespace-nowrap max-w-[200px] sm:max-w-[250px]
                transition-all duration-200 ease-out
                pointer-events-none z-50
                ${activeTooltip === pillar.key 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-2"
                }
              `}
              style={{ 
                whiteSpace: "normal",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(6, 182, 212, 0.1)"
              }}
            >
              {t(`tooltip.${pillar.key}`)}
              {/* Arrow */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 
                  border-l-[6px] border-l-transparent 
                  border-r-[6px] border-r-transparent 
                  border-t-[6px] border-t-gray-900/95"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
