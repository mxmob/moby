import { getNestedValue, translations } from "@/i18n/translations";
import { localePath } from "@/i18n/config";
import { PAGE_PATHS, SEO, type PageKey } from "@/i18n/seo";
import { HOME_FAQ } from "@/i18n/faq";
import { serviceItems } from "@/lib/seo";
import { absoluteUrl, EMAIL, PHONE_DISPLAY, STORE_3D_URL, WHATSAPP } from "@/lib/site";

/**
 * /llms.txt — resumen en Markdown para buscadores y asistentes con IA (llmstxt.org):
 * qué es MobyApp, servicios, sectores, cómo trabajamos, contacto y preguntas frecuentes.
 */
export const dynamic = "force-static";

const t = (k: string) => getNestedValue(translations.es, k);
const link = (key: PageKey) => `[${SEO[key].es.name}](${absoluteUrl(PAGE_PATHS[key])})`;

export function GET() {
  const services: [PageKey, string][] = [
    ["digitalizacion", "digitalizacion.services.items"],
    ["optimizacion", "optimizacion.services.items"],
    ["automatizacion", "automatizacion.services.items"],
    ["desarrollo", "desarrollo.services.items"],
    ["impresion3d", "impresion3d.services.items"],
  ];
  const sectors: [PageKey, string][] = [
    ["restaurantes", "soluciones.sectors.restaurantes.services"],
    ["inmobiliarias", "soluciones.sectors.inmobiliarias.services"],
    ["negociosLocales", "soluciones.sectors.negociosLocales.services"],
    ["startups", "soluciones.sectors.startups.services"],
  ];

  const body = `# MobyApp

> ${t("home.hero_h1")} ${t("home.hero_sub")} Trabajamos 100% online con negocios de España y Europa. Web en español e inglés.

- Web: ${absoluteUrl("/")} (English: ${absoluteUrl(localePath("en", "/"))})
- Email: ${EMAIL}
${WHATSAPP ? `- WhatsApp: ${PHONE_DISPLAY} (https://wa.me/${WHATSAPP})\n` : ""}- Contacto: ${absoluteUrl("/contacto")}
- Tienda de impresión 3D: ${STORE_3D_URL}

## Servicios

${services
  .map(
    ([key, base]) =>
      `### ${link(key)}\n\n${SEO[key].es.description}\n\n${serviceItems("es", base, "name")
        .map((n, i) => `- ${n}: ${t(`${base}.${i}.desc`)}`)
        .join("\n")}`
  )
  .join("\n\n")}

## Soluciones por sector

${sectors
  .map(([key, base]) => `### ${link(key)}\n\n${SEO[key].es.description}\n\nIncluye: ${serviceItems("es", base).join(", ")}.`)
  .join("\n\n")}

## Cómo trabajamos

${[0, 1, 2, 3]
  .map((i) => `${i + 1}. **${t(`comoTrabajamos.process.steps.${i}.title`)}**: ${t(`comoTrabajamos.process.steps.${i}.desc`)}`)
  .join("\n")}

Más detalle: ${absoluteUrl(PAGE_PATHS.comoTrabajamos)}

## Preguntas frecuentes

${HOME_FAQ.es.map(([q, a]) => `### ${q}\n\n${a}`).join("\n\n")}

## Información legal

- [Privacidad](${absoluteUrl("/privacidad")}) · [Términos](${absoluteUrl("/terminos")}) · [Cookies](${absoluteUrl("/cookies")})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
