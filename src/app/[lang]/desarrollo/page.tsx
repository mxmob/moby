import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import DesarrolloClient from "./DesarrolloClient";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "desarrollo");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "desarrollo"), breadcrumbLd(lang, ["desarrollo"]), serviceLd(lang, "desarrollo", serviceItems(lang, "desarrollo.services.items", "name"))]} />
      <DesarrolloClient />
    </>
  );
}
