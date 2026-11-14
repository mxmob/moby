import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import { SectorPage } from "@/components/sectors/SectorPage";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "startups");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "startups"), breadcrumbLd(lang, ["soluciones", "startups"]), serviceLd(lang, "startups", serviceItems(lang, "soluciones.sectors.startups.services"))]} />
      <SectorPage sectorKey="startups" />
    </>
  );
}
