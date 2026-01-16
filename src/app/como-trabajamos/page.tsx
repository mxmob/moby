"use client";

import { useI18n } from "@/i18n/useI18n";
import { PageHero, Section, SectionHeader, StepCard, CTASection } from "@/components/shared";

export default function ComoTrabajamosPage() {
  const { t } = useI18n();

  return (
    <main>
      <PageHero h1={t("comoTrabajamos.hero.h1")} subtitle={t("comoTrabajamos.hero.subtitle")} />

      <Section>
        <SectionHeader title={t("comoTrabajamos.process.title")} centered={true} />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[0, 1, 2, 3].map((i) => (
            <StepCard
              key={i}
              number={t(`comoTrabajamos.process.steps.${i}.number`)}
              title={t(`comoTrabajamos.process.steps.${i}.title`)}
              desc={t(`comoTrabajamos.process.steps.${i}.desc`)}
              details={[
                t(`comoTrabajamos.process.steps.${i}.details.0`),
                t(`comoTrabajamos.process.steps.${i}.details.1`),
                t(`comoTrabajamos.process.steps.${i}.details.2`),
                t(`comoTrabajamos.process.steps.${i}.details.3`),
              ]}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-[#030308]">
        <SectionHeader title={t("comoTrabajamos.values.title")} centered={true} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                {i === 0 && <EyeIcon />}
                {i === 1 && <TargetIcon />}
                {i === 2 && <ChatIcon />}
                {i === 3 && <FlexIcon />}
              </div>
              <h3 className="text-white font-semibold mb-2">{t(`comoTrabajamos.values.items.${i}.title`)}</h3>
              <p className="text-white/50 text-sm">{t(`comoTrabajamos.values.items.${i}.desc`)}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection title={t("comoTrabajamos.cta.title")} buttonText={t("comoTrabajamos.cta.button")} />
    </main>
  );
}

function EyeIcon() { return <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>; }
function TargetIcon() { return <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>; }
function ChatIcon() { return <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>; }
function FlexIcon() { return <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>; }
