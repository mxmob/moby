import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd } from "@/lib/seo";
import SolucionesClient from "./SolucionesClient";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "soluciones");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "soluciones", "CollectionPage"), breadcrumbLd(lang, ["soluciones"])]} />
      <SolucionesClient />
    </>
  );
}
