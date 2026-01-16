"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { GalaxyBackground } from "./GalaxyBackground";
import { PentagonSystem } from "./PentagonSystem";
import { PillarsRow } from "./PillarsRow";

export function Hero() {
  const { t, isHydrated } = useI18n();

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden bg-[#050510]"
      aria-label="Hero section"
    >
      <GalaxyBackground />

      {/* Noise overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.015] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div 
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 16, 0.4) 70%, rgba(5, 5, 16, 0.8) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Main Hero Content */}
      <main className="relative z-20 flex flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-40 lg:pt-44">
        {/* Pentagon System */}
        <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] mb-8 md:mb-12 opacity-90">
          <PentagonSystem />
        </div>

        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 
            className={`
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-bold leading-tight tracking-tight
              bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent
              transition-opacity duration-500
              ${isHydrated ? "opacity-100" : "opacity-0"}
            `}
          >
            {t("home.hero_h1")}
          </h1>

          <p 
            className={`
              text-base sm:text-lg md:text-xl 
              text-white/60 leading-relaxed max-w-3xl mx-auto
              transition-opacity duration-500 delay-100
              ${isHydrated ? "opacity-100" : "opacity-0"}
            `}
          >
            {t("home.hero_sub")}
          </p>

          {/* CTAs */}
          <div 
            className={`
              flex flex-col sm:flex-row items-center justify-center gap-4 pt-6
              transition-opacity duration-500 delay-200
              ${isHydrated ? "opacity-100" : "opacity-0"}
            `}
          >
            <Link
              href="/soluciones"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full
                bg-gradient-to-r from-cyan-500 to-violet-600
                text-white font-semibold text-base
                transition-all duration-300
                hover:shadow-xl hover:shadow-cyan-500/30
                hover:scale-105 active:scale-100"
            >
              <span>{t("cta.primary")}</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/optimizacion"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                bg-white/5 border border-white/20
                text-white/90 font-medium text-base
                transition-all duration-300
                hover:bg-white/10 hover:border-white/30"
            >
              {t("cta.secondary")}
            </Link>

            <Link
              href="/como-trabajamos"
              className="inline-flex items-center gap-2 px-6 py-3
                text-white/60 font-medium text-sm
                transition-all duration-300
                hover:text-white/90 underline-offset-4 hover:underline"
            >
              {t("cta.tertiary")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Pillars Row */}
        <div 
          className={`
            mt-16 md:mt-20 lg:mt-24 w-full
            transition-opacity duration-500 delay-300
            ${isHydrated ? "opacity-100" : "opacity-0"}
          `}
        >
          <PillarsRow />
        </div>
      </main>

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(5, 5, 16, 1) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
