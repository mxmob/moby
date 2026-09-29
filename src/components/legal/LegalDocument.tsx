"use client";

import { useI18n } from "@/i18n/useI18n";
import { Language } from "@/i18n/translations";
import { PageHero, Section } from "@/components/shared";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalContent {
  title: string;
  subtitle: string;
  updatedLabel: string;
  updated: string;
  sections: LegalSection[];
}

export function LegalDocument({ content }: { content: Record<Language, LegalContent> }) {
  const { language } = useI18n();
  const doc = content[language];

  return (
    <main>
      <PageHero h1={doc.title} subtitle={doc.subtitle} />

      <Section className="pt-0 lg:pt-0">
        <article className="max-w-3xl mx-auto">
          <p className="text-white/40 text-sm mb-10">
            {doc.updatedLabel}: {doc.updated}
          </p>

          <div className="space-y-10">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{section.heading}</h2>
                {section.paragraphs?.map((p) => (
                  <p key={p} className="text-white/70 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-white/70 leading-relaxed">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </Section>
    </main>
  );
}
