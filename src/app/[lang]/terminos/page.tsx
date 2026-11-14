import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd } from "@/lib/seo";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { termsOfService } from "@/content/legal/terms";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "terminos");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "terminos", "WebPage"), breadcrumbLd(lang, ["terminos"])]} />
      <LegalDocument content={termsOfService} />
    </>
  );
}
