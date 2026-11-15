"use client";

import { useI18n } from "@/i18n/useI18n";
import { PRICING_TEXT, type SectorTemplate } from "@/i18n/pricing";
import type { SectorValue } from "@/lib/signup";

const ICONS: Record<SectorValue, string> = {
  // Cubiertos, casa, tijeras, calendario (trazos de 24px)
  restaurante: "M8 3v8m-3-8v5a3 3 0 006 0V3M8 11v10m9-18c-1.7 0-3 2.2-3 5v5h3m0-10v18",
  inmobiliaria: "M3 11l9-7 9 7M5 9.5V20h5v-6h4v6h5V9.5",
  servicios: "M6 6a3 3 0 100 6 3 3 0 000-6zm0 12a3 3 0 100-6 3 3 0 000 6zm2.1-9.9L20 20M8.1 15.9L20 4",
  eventos: "M8 2v4m8-4v4M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z",
};

export function SectorIcon({ sector, className = "w-5 h-5" }: { sector: SectorValue; className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICONS[sector] ?? ICONS.servicios} />
    </svg>
  );
}

export function SectorSelector({
  sectors,
  value,
  onChange,
}: {
  sectors: SectorTemplate[];
  value: SectorValue | "";
  onChange: (v: SectorValue | "") => void;
}) {
  const { language } = useI18n();
  const tx = PRICING_TEXT[language];
  return (
    <div className="text-center">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">{tx.sector.title}</h2>
      <p className="text-white/50 mb-6">{tx.sector.subtitle}</p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3" role="radiogroup" aria-label={tx.sector.title}>
        <button
          type="button"
          role="radio"
          aria-checked={value === ""}
          onClick={() => onChange("")}
          className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
            value === "" ? "bg-cyan-500/15 border-cyan-400/60 text-cyan-300" : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/20"
          }`}
        >
          {tx.sector.all}
        </button>
        {sectors.map((s) => (
          <button
            key={s.value}
            type="button"
            role="radio"
            aria-checked={value === s.value}
            onClick={() => onChange(s.value)}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
              value === s.value
                ? "bg-cyan-500/15 border-cyan-400/60 text-cyan-300"
                : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/20"
            }`}
          >
            <SectorIcon sector={s.value} className="w-4 h-4" />
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
