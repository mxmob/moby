"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { PageHero, Section, SectionHeader, ServiceCard, ProblemSolution, CTASection } from "@/components/shared";

export default function Impresion3DPage() {
  const { t } = useI18n();

  const icons = [<PrototypeIcon key={0} />, <ProductionIcon key={1} />, <CustomIcon key={2} />, <MountIcon key={3} />, <AdapterIcon key={4} />, <MerchIcon key={5} />];

  return (
    <main>
      <PageHero h1={t("impresion3d.hero.h1")} subtitle={t("impresion3d.hero.subtitle")} badge={t("nav.impresion3d")} />

      <Section>
        <ProblemSolution
          problemTitle={t("impresion3d.problem.title")}
          problemText={t("impresion3d.problem.text")}
          solutionTitle={t("impresion3d.solution.title")}
          solutionText={t("impresion3d.solution.text")}
        />
      </Section>

      <Section className="bg-[#030308]">
        <SectionHeader title={t("impresion3d.services.title")} centered={true} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {icons.map((icon, i) => (
            <ServiceCard key={i} name={t(`impresion3d.services.items.${i}.name`)} desc={t(`impresion3d.services.items.${i}.desc`)} icon={icon} />
          ))}
        </div>
      </Section>

      {/* Highlight: Llaveros 3D */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-violet-500/10 via-cyan-500/5 to-transparent border border-violet-500/20">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-16 h-16 lg:w-20 lg:h-20 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div className="text-center lg:text-left flex-1">
                <span className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium mb-4">
                  ⭐ Producto estrella
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  {t("impresion3d.highlight.title")}
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  {t("impresion3d.highlight.desc")}
                </p>
                <Link
                  href="https://3d.mobyapp.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                    bg-gradient-to-r from-violet-500 to-cyan-500
                    text-white font-semibold
                    transition-all duration-300
                    hover:shadow-lg hover:shadow-violet-500/30"
                >
                  {t("impresion3d.highlight.link")}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection title={t("impresion3d.cta.title")} buttonText={t("impresion3d.cta.button")} />
    </main>
  );
}

function PrototypeIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>; }
function ProductionIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>; }
function CustomIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>; }
function MountIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>; }
function AdapterIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>; }
function MerchIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>; }
