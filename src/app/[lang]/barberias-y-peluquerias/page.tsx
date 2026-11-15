import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { SectorLanding } from "@/components/sectors/landing/SectorLanding";
import { sectorMetadata, sectorPlanPrice } from "@/components/sectors/landing/meta";

// /barberias-y-peluquerias y /en/barberias-y-peluquerias. El catalán vive en app/[lang]/ca/…
type Props = { params: Promise<{ lang: Language }> };

// «desde X €/mes» se lee del catálogo público (solo si está a la venta), revalidando cada 5 min
export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return sectorMetadata("barberias", (await params).lang === "en" ? "en" : "es");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <SectorLanding sector="barberias" lang={lang === "en" ? "en" : "es"} price={await sectorPlanPrice("barberias")} />;
}
