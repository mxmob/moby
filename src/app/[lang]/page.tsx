import type { Metadata } from "next";
import { getNestedValue, translations, type Language } from "@/i18n/translations";
import { HOME_FAQ } from "@/i18n/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/shared/FaqSection";
import { faqLd, pageMetadata, webPageLd } from "@/lib/seo";
import { Hero } from "@/components/hero/Hero";
import {
  NotWebsSection,
  PentagonExplainedSection,
  HowWeWorkSection,
  SectorsSection,
  FinalCTASection,
} from "@/components/home/HomeSections";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "home");
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const t = (k: string) => getNestedValue(translations[lang], k);
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "home"), faqLd(HOME_FAQ[lang])]} />
      <Hero />
      <NotWebsSection />
      <PentagonExplainedSection />
      <HowWeWorkSection />
      <SectorsSection />
      <FaqSection title={t("faq.title")} subtitle={t("faq.subtitle")} items={HOME_FAQ[lang]} />
      <FinalCTASection />
    </>
  );
}
