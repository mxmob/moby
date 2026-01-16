"use client";

import { useI18n } from "@/i18n/useI18n";
import { PageHero, Section, SectionHeader, ProblemSolution, CTASection } from "@/components/shared";

export default function RestaurantesPage() {
  const { t } = useI18n();

  return (
    <main>
      <PageHero
        h1={t("soluciones.sectors.restaurantes.hero.h1")}
        subtitle={t("soluciones.sectors.restaurantes.hero.subtitle")}
        badge="🍽️ Restaurantes"
      />

      <Section>
        <ProblemSolution
          problemTitle="El problema"
          problemText={t("soluciones.sectors.restaurantes.problem")}
          solutionTitle="Nuestra solución"
          solutionText={t("soluciones.sectors.restaurantes.solution")}
        />
      </Section>

      <Section className="bg-[#030308]">
        <SectionHeader title="Qué incluye" centered={true} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/80 text-sm">{t(`soluciones.sectors.restaurantes.services.${i}`)}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-4">
            {t("soluciones.sectors.restaurantes.caseStudy.title")}
          </span>
          <p className="text-white/70 text-lg italic">
            &ldquo;{t("soluciones.sectors.restaurantes.caseStudy.text")}&rdquo;
          </p>
        </div>
      </Section>

      <CTASection title="¿Tienes un restaurante?" buttonText={t("cta.contact")} />
    </main>
  );
}
