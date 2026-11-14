import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import DigitalizacionClient from "./DigitalizacionClient";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "digitalizacion");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "digitalizacion"), breadcrumbLd(lang, ["digitalizacion"]), serviceLd(lang, "digitalizacion", serviceItems(lang, "digitalizacion.services.items", "name"))]} />
      <DigitalizacionClient />
    </>
  );
}
