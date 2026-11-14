import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd, serviceLd, serviceItems } from "@/lib/seo";
import DigitalizacionClient from "./DigitalizacionClient";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "digitalizacion");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "digitalizacion"), breadcrumbLd(lang, ["digitalizacion"]), serviceLd(lang, "digitalizacion", serviceItems(lang, "digitalizacion.services.items", "name"))]} />
      <DigitalizacionClient />
    </>
  );
}
