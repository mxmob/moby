"use client";

import { useI18n } from "@/i18n/useI18n";
import { PageHero, Section, SectionHeader, ServiceCard, ProblemSolution, CTASection } from "@/components/shared";

export default function AutomatizacionPage() {
  const { t } = useI18n();

  const icons = [<OrderIcon key={0} />, <BookingIcon key={1} />, <InvoiceIcon key={2} />, <FollowupIcon key={3} />, <IntegrationIcon key={4} />, <DashboardIcon key={5} />];

  return (
    <main>
      <PageHero h1={t("automatizacion.hero.h1")} subtitle={t("automatizacion.hero.subtitle")} badge={t("nav.automatizacion")} />

      <Section>
        <ProblemSolution
          problemTitle={t("automatizacion.problem.title")}
          problemText={t("automatizacion.problem.text")}
          solutionTitle={t("automatizacion.solution.title")}
          solutionText={t("automatizacion.solution.text")}
        />
      </Section>

      <Section className="bg-[#030308]">
        <SectionHeader title={t("automatizacion.services.title")} centered={true} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {icons.map((icon, i) => (
            <ServiceCard key={i} name={t(`automatizacion.services.items.${i}.name`)} desc={t(`automatizacion.services.items.${i}.desc`)} icon={icon} />
          ))}
        </div>
      </Section>

      {/* Ejemplo real */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader title={t("automatizacion.example.title")} centered={true} />
          <div className="p-8 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-violet-500/5 border border-cyan-500/20">
            <p className="text-white/80 text-lg mb-6 text-center">
              {t("automatizacion.example.scenario")}
            </p>
            <div className="space-y-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 text-sm font-bold">{i + 1}</span>
                  </div>
                  <p className="text-white/70 pt-1">{t(`automatizacion.example.steps.${i}`)}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-cyan-400 font-medium">{t("automatizacion.example.result")}</p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection title={t("automatizacion.cta.title")} buttonText={t("automatizacion.cta.button")} />
    </main>
  );
}

function OrderIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>; }
function BookingIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>; }
function InvoiceIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" /></svg>; }
function FollowupIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>; }
function IntegrationIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>; }
function DashboardIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>; }
