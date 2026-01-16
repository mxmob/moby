"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { PageHero, Section, CTASection } from "@/components/shared";

interface SectorPageProps {
  sectorKey: "restaurantes" | "inmobiliarias" | "negociosLocales" | "startups";
}

export function SectorPage({ sectorKey }: SectorPageProps) {
  const { t } = useI18n();

  const basePath = `soluciones.sectors.${sectorKey}`;

  // Get services array length (we know it's 6 for all sectors)
  const servicesCount = 6;

  return (
    <>
      <PageHero
        h1={t(`${basePath}.hero.h1`)}
        subtitle={t(`${basePath}.hero.subtitle`)}
        badge={t(`${basePath}.name`)}
      />

      {/* Problem & Solution */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Problem */}
          <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">El problema</h3>
            </div>
            <p className="text-white/60 leading-relaxed">
              {t(`${basePath}.problem`)}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Nuestra solución</h3>
            </div>
            <p className="text-white/60 leading-relaxed">
              {t(`${basePath}.solution`)}
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-[#030308]">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Qué incluye
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {Array.from({ length: servicesCount }).map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/80">
                  {t(`${basePath}.services.${i}`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Case Study */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-4">
              {t(`${basePath}.caseStudy.title`)}
            </span>
            <p className="text-white/80 text-lg leading-relaxed">
              {t(`${basePath}.caseStudy.text`)}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#030308]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            ¿Te identificas con esto?
          </h2>
          <p className="text-white/50 mb-8">
            Cuéntanos tu situación y te explicamos cómo podemos ayudarte.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
              bg-gradient-to-r from-cyan-500 to-violet-600
              text-white font-semibold
              transition-all duration-300
              hover:shadow-xl hover:shadow-cyan-500/30
              hover:scale-105"
          >
            {t("cta.contact")}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Section>
    </>
  );
}
