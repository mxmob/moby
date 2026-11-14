import type { Metadata } from "next";
import { getNestedValue, translations, type Language } from "@/i18n/translations";
import { CONTACT_FAQ } from "@/i18n/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/shared/FaqSection";
import { breadcrumbLd, faqLd, pageMetadata, webPageLd } from "@/lib/seo";
import ContactoClient from "./ContactoClient";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "contacto");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  const t = (k: string) => getNestedValue(translations[lang], k);
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "contacto", "ContactPage"), breadcrumbLd(lang, ["contacto"]), faqLd(CONTACT_FAQ[lang])]} />
      <ContactoClient />
      <FaqSection title={t("faq.title")} subtitle={t("faq.subtitle")} items={CONTACT_FAQ[lang]} className="bg-[#030308]" />
    </>
  );
}
