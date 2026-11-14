import type { Metadata } from "next";
import type { Language } from "@/i18n/translations";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, webPageLd, breadcrumbLd } from "@/lib/seo";
import ComoTrabajamosClient from "./ComoTrabajamosClient";

type Props = { params: { lang: Language } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "comoTrabajamos");
}

export default function Page({ params }: Props) {
  const lang = params.lang;
  return (
    <>
      <JsonLd nodes={[webPageLd(lang, "comoTrabajamos", "AboutPage"), breadcrumbLd(lang, ["comoTrabajamos"])]} />
      <ComoTrabajamosClient />
    </>
  );
}
