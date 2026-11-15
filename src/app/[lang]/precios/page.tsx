import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";
import { fetchPricing } from "@/lib/signup";
import { PricingClient } from "@/components/pricing/PricingClient";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

// Precios desde la API con caché corta (la propia petición revalida cada 5 min)
export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata((await params).lang, "precios");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const data = await fetchPricing();
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "precios", "WebPage"), breadcrumbLd(lang, ["precios"])]} />
      <PricingClient data={data} />
    </>
  );
}
