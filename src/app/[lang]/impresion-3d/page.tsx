import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import Impresion3dClient from "./Impresion3dClient";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "impresion3d");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "impresion3d"), breadcrumbLd(lang, ["impresion3d"]), serviceLd(lang, "impresion3d", serviceItems(lang, "impresion3d.services.items", "name"))]} />
      <Impresion3dClient />
    </>
  );
}
