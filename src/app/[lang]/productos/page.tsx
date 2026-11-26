import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";
import ProductosClient from "./ProductosClient";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "productos");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "productos", "CollectionPage"), breadcrumbLd(lang, ["productos"])]} />
      <ProductosClient />
    </>
  );
}
