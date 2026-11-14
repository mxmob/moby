import type { Metadata } from "next";
import { getNestedValue, translations, type Language } from "@/i18n/translations";
import { CONTACT_FAQ } from "@/i18n/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/shared/FaqSection";
import { breadcrumbLd, faqLd, pageMetadata, webPageLd } from "@/lib/seo";
import ContactoClient from "./ContactoClient";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "contacto");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const t = (k: string) => getNestedValue(translations[lang], k);
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "contacto", "ContactPage"), breadcrumbLd(lang, ["contacto"]), faqLd(CONTACT_FAQ[lang])]} />
      <ContactoClient />
      <FaqSection title={t("faq.title")} subtitle={t("faq.subtitle")} items={CONTACT_FAQ[lang]} className="bg-[#030308]" />
    </>
  );
}
