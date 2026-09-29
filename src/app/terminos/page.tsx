import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { termsOfService } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: "Términos y Condiciones | MobyApp",
  description: "Términos y condiciones de uso del sitio web y de las aplicaciones móviles de MobyApp.",
  alternates: { canonical: "https://mobyapp.eu/terminos" },
};

export default function TerminosPage() {
  return <LegalDocument content={termsOfService} />;
}
