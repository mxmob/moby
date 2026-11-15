import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Language } from "@/i18n/translations";
import { SUB_SLUGS } from "@/content/sectors";
import { SectorLanding } from "@/components/sectors/landing/SectorLanding";
import { sectorMetadata, sectorPlanPrice } from "@/components/sectors/landing/meta";

type Props = { params: Promise<{ lang: Language; slug: string }> };

export const revalidate = 300;
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(SUB_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = SUB_SLUGS[(await params).slug];
  return key ? sectorMetadata(key, "ca") : {};
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  const key = SUB_SLUGS[slug];
  if (lang !== "es" || !key) notFound();
  return <SectorLanding sector={key} lang="ca" price={await sectorPlanPrice(key)} />;
}
