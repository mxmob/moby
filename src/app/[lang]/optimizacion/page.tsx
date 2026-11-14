import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import OptimizacionClient from "./OptimizacionClient";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "optimizacion");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "optimizacion"), breadcrumbLd(lang, ["optimizacion"]), serviceLd(lang, "optimizacion", serviceItems(lang, "optimizacion.services.items", "name"))]} />
      <OptimizacionClient />
    </>
  );
}
