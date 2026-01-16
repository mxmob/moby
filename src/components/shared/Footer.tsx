"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

export function Footer() {
  const { t } = useI18n();

  const serviceLinks = [
    { href: "/digitalizacion", label: t("nav.digitalizacion") },
    { href: "/optimizacion", label: t("nav.optimizacion") },
    { href: "/automatizacion", label: t("nav.automatizacion") },
    { href: "/desarrollo", label: t("nav.desarrollo") },
    { href: "/impresion-3d", label: t("nav.impresion3d") },
  ];

  const sectorLinks = [
    { href: "/soluciones/restaurantes", label: "Restaurantes" },
    { href: "/soluciones/inmobiliarias", label: "Inmobiliarias" },
    { href: "/soluciones/negocios-locales", label: "Negocios locales" },
    { href: "/soluciones/startups", label: "Startups" },
  ];

  const companyLinks = [
    { href: "/como-trabajamos", label: t("nav.comoTrabajamos") },
    { href: "/contacto", label: t("nav.contacto") },
  ];

  return (
    <footer className="bg-[#030308] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-white font-semibold text-xl">{t("brand")}</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              {t("footer.tagline")}
            </p>
            <p className="text-white/30 text-sm">
              {t("footer.location")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
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
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
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
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidad" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terminos" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
