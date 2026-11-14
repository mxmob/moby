import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import Impresion3dClient from "./Impresion3dClient";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "impresion3d");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "impresion3d"), breadcrumbLd(lang, ["impresion3d"]), serviceLd(lang, "impresion3d", serviceItems(lang, "impresion3d.services.items", "name"))]} />
      <Impresion3dClient />
    </>
  );
}
