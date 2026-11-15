import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { SectorsIndex } from "@/components/sectors/landing/SectorsIndex";
import { sectorsIndexMetadata } from "@/components/sectors/landing/meta";

type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return sectorsIndexMetadata((await params).lang === "en" ? "en" : "es");
}

export default async function Page({ params }: Props) {
  return <SectorsIndex lang={(await params).lang === "en" ? "en" : "es"} />;
}
