import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Language } from "@/i18n/translations";
import { SectorLanding } from "@/components/sectors/landing/SectorLanding";
import { sectorMetadata, sectorPlanPrice } from "@/components/sectors/landing/meta";

// Versió en català: /ca/barberias-y-peluquerias (el middleware la serveix sota /es).
type Props = { params: Promise<{ lang: Language }> };

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return sectorMetadata("barberias", "ca");
}

export default async function Page({ params }: Props) {
  if ((await params).lang !== "es") notFound();
  return <SectorLanding sector="barberias" lang="ca" price={await sectorPlanPrice("barberias")} />;
}
