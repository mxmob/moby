import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import AutomatizacionClient from "./AutomatizacionClient";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "automatizacion");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "automatizacion"), breadcrumbLd(lang, ["automatizacion"]), serviceLd(lang, "automatizacion", serviceItems(lang, "automatizacion.services.items", "name"))]} />
      <AutomatizacionClient />
    </>
  );
}
