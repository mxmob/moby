import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Language } from "@/i18n/translations";
import { AuditPage } from "@/components/audit/AuditPage";
import { auditMetadata } from "@/components/audit/meta";

// Versión en catalán de la auditoría gratuita: /ca/auditoria-google (el middleware la sirve bajo /es).
type Props = { params: Promise<{ lang: Language }> };

export async function generateMetadata(): Promise<Metadata> {
  return auditMetadata("ca");
}

export default async function Page({ params }: Props) {
  if ((await params).lang !== "es") notFound();
  return <AuditPage lang="ca" />;
}
