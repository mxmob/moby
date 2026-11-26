"use client";

import Link from "next/link";
import { MobyMark, MobyWordmark } from "./MobyLogo";
import { CookieSettingsLink } from "@/components/consent/CookieSettingsLink";
import { EMAIL, PHONE_DISPLAY, whatsappHref } from "@/lib/site";
import { useI18n } from "@/i18n/useI18n";
import { PRODUCTS, productHref } from "@/content/products";

export function Footer() {
  const { t, href, language } = useI18n();

  const serviceLinks = [
    { href: "/digitalizacion", label: t("nav.digitalizacion") },
    { href: "/optimizacion", label: t("nav.optimizacion") },
    { href: "/automatizacion", label: t("nav.automatizacion") },
    { href: "/desarrollo", label: t("nav.desarrollo") },
    { href: "/impresion-3d", label: t("nav.impresion3d") },
  ];

  const sectorLinks = [
    { href: "/barberias-y-peluquerias", label: t("nav.barberias") },
    { href: "/sectores", label: t("nav.sectores") },
    { href: "/soluciones/restaurantes", label: t("soluciones.sectors.restaurantes.name") },
    { href: "/soluciones/inmobiliarias", label: t("soluciones.sectors.inmobiliarias.name") },
    { href: "/soluciones/negocios-locales", label: t("soluciones.sectors.negociosLocales.name") },
    { href: "/soluciones/startups", label: t("soluciones.sectors.startups.name") },
  ];

  const toolLinks = [
    { href: "/auditoria-google", label: t("nav.auditoria") },
    { href: "/herramientas/sorteo-instagram", label: t("nav.sorteoInstagram") },
  ];

  const companyLinks = [
    { href: "/como-trabajamos", label: t("nav.comoTrabajamos") },
    { href: "/precios", label: t("nav.precios") },
    { href: "/contacto", label: t("nav.contacto") },
  ];

  return (
    <footer className="bg-[#030308] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={href("/")} className="inline-flex items-center gap-3 mb-5" aria-label="MobyApp">
              <MobyMark className="h-10 w-auto overflow-visible" />
              <MobyWordmark className="text-2xl" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              {t("footer.tagline")}
            </p>
            <p className="text-white/30 text-sm mb-3">
              {t("footer.location")}
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                <a href={`mailto:${EMAIL}`} className="text-white/50 hover:text-white transition-colors">{EMAIL}</a>
              </li>
              {whatsappHref() && (
                <li>
                  <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                    WhatsApp {PHONE_DISPLAY}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={href(link.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.sectors")}</h4>
            <ul className="space-y-3">
              {sectorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={href(link.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Herramientas gratuitas */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.tools")}</h4>
            <ul className="space-y-3">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={href(link.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos (catálogo único: public/products.json) */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.products")}</h4>
            <ul className="space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  {p.status === "active" ? (
                    <a
                      href={productHref(p)}
                      target="_blank"
                      rel="noopener"
                      title={p.description[language]}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {p.name}
                    </a>
                  ) : (
                    <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-white/35 text-sm" title={p.description[language]}>
                      {p.name}
                      <span className="rounded-full border border-white/10 px-1.5 py-px text-[10px] uppercase tracking-wide text-white/40">
                        {t("footer.soon")}
                      </span>
                    </span>
                  )}
                </li>
              ))}
              <li>
                <Link href={href("/productos")} className="text-cyan-400/80 hover:text-cyan-300 text-sm transition-colors">
                  {t("footer.allProducts")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={href(link.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            {t("footer.copyright").replace("{year}", String(new Date().getFullYear()))}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href={href("/privacidad")} className="text-white/30 hover:text-white/60 text-sm transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href={href("/terminos")} className="text-white/30 hover:text-white/60 text-sm transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href={href("/cookies")} className="text-white/30 hover:text-white/60 text-sm transition-colors">
              {t("footer.cookies")}
            </Link>
            <Link href={href("/eliminacion-de-datos")} className="text-white/30 hover:text-white/60 text-sm transition-colors">
              {t("footer.dataDeletion")}
            </Link>
            <CookieSettingsLink className="text-white/30 hover:text-white/60 text-sm transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
