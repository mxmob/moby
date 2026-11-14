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

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "home");
}

export default function HomePage({ params }: Props) {
  const lang = params.lang;
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
