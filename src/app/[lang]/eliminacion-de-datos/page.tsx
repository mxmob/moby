import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd } from "@/lib/seo";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { dataDeletion } from "@/content/legal/dataDeletion";

// Instrucciones de eliminación de datos (Meta / TikTok App Review)
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "eliminacionDatos");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "eliminacionDatos", "WebPage"), breadcrumbLd(lang, ["eliminacionDatos"])]} />
      <LegalDocument content={dataDeletion} />
    </>
  );
}
