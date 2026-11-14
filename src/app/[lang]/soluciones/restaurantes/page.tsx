import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import { SectorPage } from "@/components/sectors/SectorPage";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "restaurantes");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "restaurantes"), breadcrumbLd(lang, ["soluciones", "restaurantes"]), serviceLd(lang, "restaurantes", serviceItems(lang, "soluciones.sectors.restaurantes.services"))]} />
      <SectorPage sectorKey="restaurantes" />
    </>
  );
}
