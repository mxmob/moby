import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import { SectorPage } from "@/components/sectors/SectorPage";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "negociosLocales");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "negociosLocales"), breadcrumbLd(lang, ["soluciones", "negociosLocales"]), serviceLd(lang, "negociosLocales", serviceItems(lang, "soluciones.sectors.negociosLocales.services"))]} />
      <SectorPage sectorKey="negociosLocales" />
    </>
  );
}
