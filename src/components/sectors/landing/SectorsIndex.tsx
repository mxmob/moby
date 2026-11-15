import Link from "next/link";
import { SECTORS, SECTOR_KEYS, SECTOR_SLUGS, SECTOR_ICON, SECTORS_INDEX, SECTORS_INDEX_PATH, SLANGS, sPath, type SLang } from "@/content/sectors";
import { UI } from "@/content/sectors/ui";
import { JsonLd } from "@/components/seo/JsonLd";
import { whatsappHref } from "@/lib/site";
import { homePath, sectorsIndexJsonLd } from "./meta";

const LANG_LABEL: Record<SLang, string> = { es: "ES", ca: "CA", en: "EN" };

/** /sectores — índice de soluciones por sector (barberías la primera y destacada). */
export function SectorsIndex({ lang }: { lang: SLang }) {
  const c = SECTORS_INDEX[lang];
  const ui = UI[lang];
  const contact = lang === "en" ? "/en/contacto" : "/contacto";
  return (
    <main>
      <JsonLd nodes={sectorsIndexJsonLd(lang)} />
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(6,182,212,.1) 0%, transparent 55%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-white/40 mb-8 flex items-center gap-2">
            <Link href={homePath(lang)} className="hover:text-white/70">{ui.home}</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/60">{c.name}</span>
            <span className="ml-auto flex gap-1" aria-label={ui.langLabel}>
              {SLANGS.map((l) => (
                <Link key={l} href={sPath(l, SECTORS_INDEX_PATH)} hrefLang={l} className={`px-2 py-0.5 rounded ${l === lang ? "bg-white/10 text-white" : "hover:text-white/70"}`}>{LANG_LABEL[l]}</Link>
              ))}
            </span>
          </nav>
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-6">{c.badge}</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">{c.h1}</h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">{c.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-5">
          {SECTOR_KEYS.map((k, i) => {
            const s = SECTORS[k][lang];
            return (
              <Link key={k} href={sPath(lang, SECTOR_SLUGS[k])} className={`group block p-7 rounded-2xl border transition-colors ${i === 0 ? "sm:col-span-2 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border-cyan-500/25 hover:border-cyan-400/50" : "bg-white/[0.02] border-white/5 hover:border-cyan-500/30"}`}>
                <span className="text-3xl" aria-hidden="true">{SECTOR_ICON[k]}</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-3 mb-2 group-hover:text-cyan-300 transition-colors">{s.name}</h2>
                <p className="text-white/60 mb-4">{s.cardText}</p>
                <span className="text-cyan-400 text-sm font-medium">{ui.seeSector} →</span>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-10 rounded-3xl bg-white/[0.02] border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-3">{c.more}</h2>
          <p className="text-white/60 mb-6">{c.moreText}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={contact} className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold">{ui.ctaDemo}</Link>
            {whatsappHref() && <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-[#25D366]/50 text-[#25D366] font-semibold">WhatsApp</a>}
          </div>
        </div>
      </section>
    </main>
  );
}
