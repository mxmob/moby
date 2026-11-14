import { graph } from "@/lib/seo";

/** Datos estructurados de la página: un único <script type="application/ld+json"> con @graph. */
export function JsonLd({ nodes }: { nodes: object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: graph(...nodes) }} />;
}
