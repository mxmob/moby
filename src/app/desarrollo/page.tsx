"use client";

import { useI18n } from "@/i18n/useI18n";
import { PageHero, Section, SectionHeader, ServiceCard, ProblemSolution, CTASection } from "@/components/shared";

export default function DesarrolloPage() {
  const { t } = useI18n();

  const icons = [<WebDevIcon key={0} />, <InternalIcon key={1} />, <ApiIcon key={2} />, <IntegrationIcon key={3} />, <MvpIcon key={4} />, <CustomIcon key={5} />];

  return (
    <main>
      <PageHero h1={t("desarrollo.hero.h1")} subtitle={t("desarrollo.hero.subtitle")} badge={t("nav.desarrollo")} />

      <Section>
        <ProblemSolution
          problemTitle={t("desarrollo.problem.title")}
          problemText={t("desarrollo.problem.text")}
          solutionTitle={t("desarrollo.solution.title")}
          solutionText={t("desarrollo.solution.text")}
        />
      </Section>

      <Section className="bg-[#030308]">
        <SectionHeader title={t("desarrollo.services.title")} centered={true} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {icons.map((icon, i) => (
            <ServiceCard key={i} name={t(`desarrollo.services.items.${i}.name`)} desc={t(`desarrollo.services.items.${i}.desc`)} icon={icon} />
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section>
        <SectionHeader title={t("desarrollo.tech.title")} subtitle={t("desarrollo.tech.subtitle")} centered={true} />
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {["Next.js", "React", "Django", "Node.js", "PostgreSQL", "AWS", "Vercel", "Stripe"].map((tech) => (
            <span
              key={tech}
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <CTASection title={t("desarrollo.cta.title")} buttonText={t("desarrollo.cta.button")} />
    </main>
  );
}

function WebDevIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>; }
function InternalIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>; }
function ApiIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>; }
function IntegrationIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>; }
function MvpIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>; }
function CustomIcon() { return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>; }
