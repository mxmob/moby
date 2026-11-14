import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd } from "@/lib/seo";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyPolicy } from "@/content/legal/privacy";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "privacidad");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "privacidad", "WebPage"), breadcrumbLd(lang, ["privacidad"])]} />
      <LegalDocument content={privacyPolicy} />
    </>
  );
}
