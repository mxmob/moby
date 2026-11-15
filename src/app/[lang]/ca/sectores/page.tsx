import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Language } from "@/i18n/translations";
import { SectorsIndex } from "@/components/sectors/landing/SectorsIndex";
import { sectorsIndexMetadata } from "@/components/sectors/landing/meta";

type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata(): Promise<Metadata> {
  return sectorsIndexMetadata("ca");
}

export default async function Page({ params }: Props) {
  if ((await params).lang !== "es") notFound();
  return <SectorsIndex lang="ca" />;
}
