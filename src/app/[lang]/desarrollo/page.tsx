import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import DesarrolloClient from "./DesarrolloClient";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "desarrollo");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "desarrollo"), breadcrumbLd(lang, ["desarrollo"]), serviceLd(lang, "desarrollo", serviceItems(lang, "desarrollo.services.items", "name"))]} />
      <DesarrolloClient />
    </>
  );
}
