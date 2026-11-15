import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Language } from "@/i18n/translations";
import { GiveawayLanding } from "@/components/giveaways/GiveawayLanding";
import { giveawayMetadata } from "@/components/giveaways/meta";

// Versión en catalán: /ca/herramientas/sorteo-instagram (el middleware la sirve bajo /es).
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata(): Promise<Metadata> {
  return giveawayMetadata("ca");
}

export default async function Page({ params }: Props) {
  if ((await params).lang !== "es") notFound();
  return <GiveawayLanding lang="ca" />;
}
