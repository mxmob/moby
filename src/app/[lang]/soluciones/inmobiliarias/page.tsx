import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import { SectorPage } from "@/components/sectors/SectorPage";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "inmobiliarias");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "inmobiliarias"), breadcrumbLd(lang, ["soluciones", "inmobiliarias"]), serviceLd(lang, "inmobiliarias", serviceItems(lang, "soluciones.sectors.inmobiliarias.services"))]} />
      <SectorPage sectorKey="inmobiliarias" />
    </>
  );
}
