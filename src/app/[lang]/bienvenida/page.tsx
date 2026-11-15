import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { WELCOME_TEXT } from "@/i18n/pricing";
import { WelcomeStatus } from "@/components/pricing/WelcomeStatus";

// Next 15: params es una Promise
type Props = { params: Promise<{ lang: Language }> };

/** Vuelta desde Stripe Checkout (?session_id=cs_…). Página privada: no se indexa ni va en el sitemap. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: WELCOME_TEXT[lang].title,
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  };
}

export default function Page() {
  return <WelcomeStatus />;
}
