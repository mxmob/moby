import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyPolicy } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Política de Privacidad | MobyApp",
  description: "Política de privacidad del sitio web y de las aplicaciones móviles de MobyApp.",
  alternates: { canonical: "https://mobyapp.eu/privacidad" },
};

export default function PrivacidadPage() {
  return <LegalDocument content={privacyPolicy} />;
}
