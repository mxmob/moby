import Link from "next/link";
import { SECTORS, SECTOR_KEYS, SECTOR_SLUGS, SECTOR_ICON, SECTORS_INDEX, SECTORS_INDEX_PATH, SLANGS, sPath, type SectorKey, type SLang } from "@/content/sectors";
import { UI } from "@/content/sectors/ui";
import { FaqSection } from "@/components/shared/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { whatsappHref } from "@/lib/site";
import { Mockup } from "./Mockups";
import { RoiCalculator } from "./RoiCalculator";
import { DemoForm } from "./DemoForm";
import { homePath, sectorJsonLd } from "./meta";

/*
 * Landing de sector (servidor). Solo la calculadora y el formulario son componentes de cliente.
 * Contenido en src/content/sectors/*.ts.
 */

const LANG_LABEL: Record<SLang, string> = { es: "ES", ca: "CA", en: "EN" };

function formatPrice(n: number, lang: SLang) {
  return new Intl.NumberFormat(lang === "en" ? "en-IE" : "es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: Number.isInteger(n) ? 0 : 2 }).format(n);
}

function Check() {
  return (
    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function SectorLanding({ sector, lang, price }: { sector: SectorKey; lang: SLang; price: number | null }) {
  const c = SECTORS[sector][lang];
  const ui = UI[lang];
  const path = SECTOR_SLUGS[sector];
  const wa = whatsappHref(c.whatsappText);

  return (
    <main>
      <JsonLd nodes={sectorJsonLd(sector, lang, price)} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 0%, rgba(6,182,212,.14) 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(139,92,246,.12) 0%, transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-white/40 mb-6 flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link href={homePath(lang)} className="hover:text-white/70">{ui.home}</Link>
            <span aria-hidden="true">›</span>
            <Link href={sPath(lang, SECTORS_INDEX_PATH)} className="hover:text-white/70">{SECTORS_INDEX[lang].name}</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/60">{c.name}</span>
            <span className="ml-auto flex gap-1" aria-label={ui.langLabel}>
              {SLANGS.map((l) => (
                <Link key={l} href={sPath(l, path)} hrefLang={l} className={`px-2 py-0.5 rounded ${l === lang ? "bg-white/10 text-white" : "hover:text-white/70"}`}>{LANG_LABEL[l]}</Link>
              ))}
            </span>
          </nav>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-6">{c.badge}</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">{c.h1}</h1>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8">{c.subtitle}</p>
              <ul className="space-y-3 mb-10">
                {c.heroBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/80"><Check />{b}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#demo" className="inline-flex justify-center items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-shadow">
                  {ui.ctaDemo}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                {wa && (
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-7 py-4 rounded-full border border-[#25D366]/50 text-[#25D366] font-semibold hover:bg-[#25D366]/10 transition-colors">
                    {ui.ctaWhatsapp}
                  </a>
                )}
              </div>
              <p className="mt-5 text-sm text-white/50">
                {price ? (
                  <><span className="text-white font-semibold">{ui.from} {formatPrice(price, lang)}{ui.perMonth}</span> · {ui.noCommission}</>
                ) : (
                  ui.noCommission
                )}
              </p>
            </div>
            <div className="hidden sm:block">
              <Mockup kind={c.features.items[0].mockup} lang={lang} />
              <p className="text-center text-xs text-white/30 mt-3">{ui.mockNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="py-16 lg:py-24 bg-[#030308]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{c.pains.title}</h2>
            {c.pains.subtitle && <p className="text-white/60 text-lg">{c.pains.subtitle}</p>}
          </div>
          <div className={`grid sm:grid-cols-2 ${c.pains.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-4`}>
            {c.pains.items.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl bg-red-500/[0.04] border border-red-500/10">
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">{c.steps.title}</h2>
          <ol className="grid md:grid-cols-3 gap-8">
            {c.steps.items.map((s, i) => (
              <li key={s.title} className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="absolute -top-4 left-8 w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                <h3 className="text-white font-semibold text-xl mb-3 mt-2">{s.title}</h3>
                <p className="text-white/60 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-16 lg:py-24 bg-[#030308]" id="funciones">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">{ui.featuresKicker}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{c.features.title}</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{c.features.subtitle}</p>
          </div>
          <div className="space-y-20">
            {c.features.items.map((f, i) => (
              <div key={f.title} className="grid lg:grid-cols-2 gap-10 items-center">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <p className="text-sm font-medium text-violet-300 mb-2">{f.module}</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{f.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">{f.text}</p>
                  <ul className="space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-white/75"><Check />{b}</li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 ? "lg:order-1" : ""}>
                  <Mockup kind={f.mockup} lang={lang} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/30 mt-12">{ui.mockNote}</p>
        </div>
      </section>

      {/* Pack */}
      {c.pack && (
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 border border-cyan-500/20">
              <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-2">{ui.packKicker}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Pack {c.pack.name}</h2>
              <p className="text-xl text-white/80 mb-3">{c.pack.title}</p>
              <p className="text-white/60 mb-8">{c.pack.text}</p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                {c.pack.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-white/80"><Check />{it}</li>
                ))}
              </ul>
              <p className="text-sm text-white/50 mb-8">{c.pack.extra}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a href="#demo" className="inline-flex justify-center px-7 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold">{ui.ctaDemo}</a>
                <p className="text-sm text-white/60">
                  {price ? <span className="text-white font-semibold">{ui.from} {formatPrice(price, lang)}{ui.perMonth}</span> : ui.packPriceDemo}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Calculadora */}
      {c.roi && (
        <section className="py-16 lg:py-24 bg-[#030308]" id="calculadora">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">{ui.roi.kicker}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{ui.roi.title}</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">{ui.roi.subtitle}</p>
            </div>
            <RoiCalculator lang={lang} planPrice={price} />
          </div>
        </section>
      )}

      {/* Local */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-3xl" aria-hidden="true">📍</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-4">{c.local.title}</h2>
          <p className="text-white/60 text-lg leading-relaxed">{c.local.text}</p>
        </div>
      </section>

      <FaqSection title={ui.faqTitle} items={c.faq} className="bg-[#030308]" />

      {/* Formulario de demo */}
      <section className="py-16 lg:py-24 scroll-mt-20" id="demo">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{c.form.title}</h2>
            <p className="text-white/60 text-lg">{c.form.subtitle}</p>
          </div>
          <DemoForm lang={lang} copy={c} landing={sPath(lang, path)} />
        </div>
      </section>

      {/* Otros sectores */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-white/70 mb-4">{ui.otherSectors}</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {SECTOR_KEYS.filter((k) => k !== sector).map((k) => (
              <Link key={k} href={sPath(lang, SECTOR_SLUGS[k])} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors">
                <span className="mr-2" aria-hidden="true">{SECTOR_ICON[k]}</span>
                <span className="text-white">{SECTORS[k][lang].name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
