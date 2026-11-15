"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { PRICING_TEXT, fill, type SectorTemplate } from "@/i18n/pricing";
import type { SectorValue } from "@/lib/signup";
import { SectorIcon } from "./SectorSelector";

/** Lo que se ve cuando no hay nada a la venta, la contratación está desactivada o la API no responde. */
export function PricingFallback({
  sectors,
  selected,
  onSelect,
  promoCode,
  promo,
}: {
  sectors: SectorTemplate[];
  selected: SectorValue | "";
  onSelect: (v: SectorValue | "") => void;
  promoCode: string;
  promo: React.ReactNode;
}) {
  const { language, href } = useI18n();
  const tx = PRICING_TEXT[language].fallback;

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* Plantillas por sector, sin precios */}
      <div>
        <div className="text-center mb-10">
          <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">{tx.sectorsSubtitle}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{tx.sectorsTitle}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s) => {
            const active = selected === s.value;
            return (
              <button
                key={s.value}
                type="button"
                onClick={() => onSelect(active ? "" : s.value)}
                aria-pressed={active}
                className={`group text-left flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                  active
                    ? "bg-cyan-500/[0.06] border-cyan-400/60 shadow-lg shadow-cyan-500/10"
                    : selected
                      ? "bg-white/[0.01] border-white/5 opacity-60 hover:opacity-100"
                      : "bg-white/[0.02] border-white/5 hover:border-cyan-500/30"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    active ? "bg-cyan-500/20 text-cyan-300" : "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20"
                  }`}
                >
                  <SectorIcon sector={s.value} className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{s.hint}</p>
                <ul className="mt-auto space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
      </div>

      {/* CTA: solicitar información */}
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.12) 0%, transparent 55%)" }}
          />
          <div className="relative grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-5">
                {tx.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{tx.title}</h2>
              <p className="text-white/60 leading-relaxed mb-6">{tx.text}</p>
              <ul className="space-y-2 mb-8 inline-block text-left">
                {tx.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/70">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href={href("/contacto")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-100"
                >
                  {tx.cta}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href={href("/como-trabajamos")}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 text-white/80 font-medium hover:border-white/20 hover:text-white transition-all"
                >
                  {tx.secondary}
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              {promo}
              {promoCode && <p className="mt-1 text-xs text-white/40">{fill(tx.promoKept, { code: promoCode })}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
