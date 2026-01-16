"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { LanguageSwitch } from "@/components/LanguageSwitch";

export function Navbar() {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/digitalizacion", label: t("nav.digitalizacion") },
    { href: "/optimizacion", label: t("nav.optimizacion") },
    { href: "/automatizacion", label: t("nav.automatizacion") },
    { href: "/desarrollo", label: t("nav.desarrollo") },
    { href: "/impresion-3d", label: t("nav.impresion3d") },
    { href: "/soluciones", label: t("nav.soluciones") },
    { href: "/como-trabajamos", label: t("nav.comoTrabajamos") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-base">M</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              {t("brand")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageSwitch />
            </div>
            <Link
              href="/contacto"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                bg-gradient-to-r from-cyan-500/20 to-violet-500/20
                border border-cyan-400/30 hover:border-cyan-400/60
                text-white/90 text-sm font-medium
                transition-all duration-300
                hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {t("cta.contact")}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-white/50 text-sm">{t("language")}</span>
                <LanguageSwitch />
              </div>
              <Link
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 px-5 py-3 rounded-full text-center
                  bg-gradient-to-r from-cyan-500 to-violet-600
                  text-white font-medium"
              >
                {t("cta.contact")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
