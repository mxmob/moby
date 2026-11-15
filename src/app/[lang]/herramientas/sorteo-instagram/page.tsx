import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { GiveawayLanding } from "@/components/giveaways/GiveawayLanding";
import { giveawayMetadata } from "@/components/giveaways/meta";

// Sorteos de Instagram y Facebook verificables (Moby Social): /herramientas/sorteo-instagram y /en/…
// La versión en catalán vive en /ca/herramientas/sorteo-instagram (app/[lang]/ca/…).
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return giveawayMetadata((await params).lang === "en" ? "en" : "es");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <GiveawayLanding lang={lang === "en" ? "en" : "es"} />;
}
