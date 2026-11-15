import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { AuditPage } from "@/components/audit/AuditPage";
import { auditMetadata } from "@/components/audit/meta";

// Auditoría gratuita de la ficha de Google (lead magnet): /auditoria-google y /en/auditoria-google.
// La versión en catalán vive en /ca/auditoria-google (app/[lang]/ca/auditoria-google).
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return auditMetadata((await params).lang === "en" ? "en" : "es");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <AuditPage lang={lang === "en" ? "en" : "es"} />;
}
