import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import { SectorPage } from "@/components/sectors/SectorPage";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "restaurantes");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "restaurantes"), breadcrumbLd(lang, ["soluciones", "restaurantes"]), serviceLd(lang, "restaurantes", serviceItems(lang, "soluciones.sectors.restaurantes.services"))]} />
      <SectorPage sectorKey="restaurantes" />
    </>
  );
}
