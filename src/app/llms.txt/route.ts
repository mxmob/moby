import { getNestedValue, translations } from "@/i18n/translations";
import { localePath } from "@/i18n/config";
import { PAGE_PATHS, SEO, type PageKey } from "@/i18n/seo";
import { HOME_FAQ } from "@/i18n/faq";
import { serviceItems } from "@/lib/seo";
import { GIVEAWAY } from "@/components/giveaways/content";
import { GIVEAWAY_PATHS } from "@/components/giveaways/meta";
import { SECTORS, SECTOR_KEYS, SECTOR_SLUGS, SECTORS_INDEX_PATH } from "@/content/sectors";
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

## Software MobyApp por sector

Índice: ${absoluteUrl(SECTORS_INDEX_PATH)} (también en catalán: ${absoluteUrl("/ca" + SECTORS_INDEX_PATH)} e inglés: ${absoluteUrl("/en" + SECTORS_INDEX_PATH)}). Sin comisión por reserva ni por pedido; demo gratuita por WhatsApp o formulario. Soporte en persona en Granollers, el Vallès y Barcelona.

${SECTOR_KEYS.map((k) => {
  const c = SECTORS[k].es;
  return `### [${c.name}](${absoluteUrl(SECTOR_SLUGS[k])})\n\n${c.meta.description}\n\n${c.features.items.map((f) => `- ${f.module} — ${f.title}: ${f.bullets.join("; ")}`).join("\n")}${c.pack ? `\n\nPack ${c.pack.name}: ${c.pack.items.join("; ")}.` : ""}`;
}).join("\n\n")}

Disponible hoy: recordatorios y campañas por email, tarjeta en Google Wallet y tarjeta web. Aún no: WhatsApp automático, Apple Wallet y app móvil nativa (próximamente).

## Herramientas gratuitas

- [Auditoría gratuita de tu ficha de Google](${absoluteUrl("/auditoria-google")}): 5 mejoras priorizadas para tu ficha de Google Maps en 48 h.
- [${GIVEAWAY.es.name} verificables](${absoluteUrl(GIVEAWAY_PATHS.es)}) (Moby Social): ${GIVEAWAY.es.meta.description} Límites: la API de Meta no permite comprobar si un participante sigue la cuenta o dio «me gusta» (se revisa a mano sobre el ganador) ni la antigüedad de la cuenta; solo funciona con cuentas profesionales de Instagram y páginas de Facebook propias conectadas.

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
