import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd } from "@/lib/seo";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { cookiePolicy } from "@/content/legal/cookies";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "cookies");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "cookies", "WebPage"), breadcrumbLd(lang, ["cookies"])]} />
      <LegalDocument content={cookiePolicy} />
    </>
  );
}
