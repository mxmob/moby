"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { PageHero, Section } from "@/components/shared";

export default function SolucionesPage() {
  const { t } = useI18n();

  const sectors = [
    { key: "restaurantes", icon: "🍽️", color: "from-orange-500/20 to-red-500/10", border: "border-orange-500/20 hover:border-orange-500/40" },
    { key: "inmobiliarias", icon: "🏠", color: "from-blue-500/20 to-cyan-500/10", border: "border-blue-500/20 hover:border-blue-500/40" },
    { key: "negociosLocales", icon: "🏪", color: "from-green-500/20 to-emerald-500/10", border: "border-green-500/20 hover:border-green-500/40" },
    { key: "startups", icon: "🚀", color: "from-violet-500/20 to-purple-500/10", border: "border-violet-500/20 hover:border-violet-500/40" },
  ];

  return (
    <main>
      <PageHero h1={t("soluciones.hero.h1")} subtitle={t("soluciones.hero.subtitle")} badge={t("nav.soluciones")} />

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {sectors.map((sector) => (
            <Link
              key={sector.key}
              href={`/soluciones/${t(`soluciones.sectors.${sector.key}.slug`)}`}
              className={`group block p-8 rounded-2xl bg-gradient-to-br ${sector.color} border ${sector.border} transition-all duration-300`}
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl">{sector.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {t(`soluciones.sectors.${sector.key}.name`)}
                  </h2>
                  <p className="text-white/60 mb-4">
                    {t(`soluciones.sectors.${sector.key}.hero.subtitle`)}
                  </p>
                  <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    {t("cta.learnMore")}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
