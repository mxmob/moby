import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd } from "@/lib/seo";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { legalNotice } from "@/content/legal/legalNotice";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "avisoLegal");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "avisoLegal", "WebPage"), breadcrumbLd(lang, ["avisoLegal"])]} />
      <LegalDocument content={legalNotice} />
    </>
  );
}
