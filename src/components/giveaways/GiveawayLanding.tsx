import Link from "next/link";
import { FaqSection } from "@/components/shared/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { whatsappHref } from "@/lib/site";
import { GIVEAWAY } from "./content";
import { GIVEAWAY_PATHS, giveawayHomePath, giveawayJsonLd, type GiveawayLang } from "./meta";
import { GiveawayLeadForm } from "./GiveawayLeadForm";

/*
 * Landing «Sorteos de Instagram y Facebook verificables» (Moby Social). Servidor; solo el formulario es de cliente.
 * No hay sorteo interactivo en la web: los sorteos se hacen en Bridge con la cuenta conectada.
 */

const LANG_LABEL: Record<GiveawayLang, string> = { es: "ES", ca: "CA", en: "EN" };
const LANGS: GiveawayLang[] = ["es", "ca", "en"];

function Check() {
  return (
    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  );
}

export function GiveawayLanding({ lang }: { lang: GiveawayLang }) {
  const c = GIVEAWAY[lang];
  const wa = whatsappHref(c.whatsappText);
  const demoUrl = process.env.NEXT_PUBLIC_DEMO_BOOKING_URL || c.contactHref;
  const demoExternal = /^https?:\/\//.test(demoUrl);

  return (
    <main lang={lang}>
      <JsonLd nodes={giveawayJsonLd(lang)} />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 0%, rgba(6,182,212,.14) 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(139,92,246,.12) 0%, transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-white/40 mb-6 flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link href={giveawayHomePath(lang)} className="hover:text-white/70">{c.home}</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white/60">{c.name}</span>
            <span className="ml-auto flex gap-1">
              {LANGS.map((l) => (
                <Link key={l} href={GIVEAWAY_PATHS[l]} hrefLang={l} className={`px-2 py-0.5 rounded ${l === lang ? "bg-white/10 text-white" : "hover:text-white/70"}`}>{LANG_LABEL[l]}</Link>
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
                <a href="#empezar" className="inline-flex justify-center items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-shadow">
                  {c.ctaLead}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a href={demoUrl} {...(demoExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex justify-center items-center px-7 py-4 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition-colors">
                  {c.ctaDemo}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/50">{c.heroNote}</p>
            </div>

            {/* Ilustración del esquema commit-reveal (sin datos reales) */}
            <div className="hidden sm:block">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-cyan-500/5 font-mono text-xs sm:text-sm">
                {c.fair.steps.map((s, i) => (
                  <div key={s.title} className={`flex gap-4 ${i ? "mt-5 pt-5 border-t border-white/5" : ""}`}>
                    <span className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold flex items-center justify-center flex-shrink-0 font-sans">{i + 1}</span>
                    <div>
                      <p className="text-white font-semibold font-sans mb-1">{s.title}</p>
                      <p className="text-cyan-300/80 break-all">
                        {i === 0 ? "sha256(seed) · sha256(participants)" : i === 1 ? c.fair.formula : "/sorteo/<code> → seed ✓"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-16 lg:py-24 bg-[#030308]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">{c.features.kicker}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{c.features.title}</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{c.features.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {c.features.items.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/[0.06] to-violet-500/[0.06] border border-cyan-500/15">
            <h3 className="text-white font-semibold text-xl mb-5">{c.filters.title}</h3>
            <ul className="space-y-3">
              {c.filters.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-white/80"><Check />{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Verificable */}
      <section className="py-16 lg:py-24" id="verificable">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">{c.fair.kicker}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{c.fair.title}</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{c.fair.subtitle}</p>
          </div>
          <ol className="grid md:grid-cols-3 gap-8 mb-10">
            {c.fair.steps.map((s, i) => (
              <li key={s.title} className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="absolute -top-4 left-8 w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                <h3 className="text-white font-semibold text-xl mb-3 mt-2">{s.title}</h3>
                <p className="text-white/60 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="max-w-3xl mx-auto text-center p-6 rounded-2xl bg-black/40 border border-white/10 mb-12">
            <p className="text-white/50 text-sm mb-2">{c.fair.formulaLabel}</p>
            <code className="block text-cyan-300 font-mono text-sm sm:text-base break-all">{c.fair.formula}</code>
            <p className="text-white/40 text-xs mt-3">{c.fair.formulaNote}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {c.fair.extras.map((x) => (
              <div key={x.title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="text-white font-semibold mb-2">{x.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Límites honestos */}
      <section className="py-16 lg:py-24 bg-[#030308]" id="limites">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-medium tracking-wide uppercase mb-3">{c.limits.kicker}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{c.limits.title}</h2>
            <p className="text-white/60 text-lg">{c.limits.subtitle}</p>
          </div>
          <div className="space-y-4">
            {c.limits.items.map((it) => (
              <div key={it.title} className="flex gap-4 p-6 rounded-2xl bg-amber-500/[0.04] border border-amber-500/15">
                <Cross />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{it.title}</h3>
                  <p className="text-white/60 leading-relaxed">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bases legales + normas de Meta */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-2">{c.legal.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{c.legal.title}</h2>
            <p className="text-white/60 mb-6">{c.legal.text}</p>
            <ul className="space-y-3 mb-6">
              {c.legal.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-white/80"><Check />{it}</li>
              ))}
            </ul>
            <p className="text-sm text-white/45 border-t border-white/5 pt-4">{c.legal.disclaimer}</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <p className="text-violet-300 text-sm font-medium tracking-wide uppercase mb-2">Meta</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{c.meta_rules.title}</h2>
            <p className="text-white/60 mb-6">{c.meta_rules.subtitle}</p>
            <ul className="space-y-3">
              {c.meta_rules.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-white/80"><Check />{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 pasos */}
      <section className="py-16 lg:py-24 bg-[#030308]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">{c.steps.title}</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {c.steps.items.map((s, i) => (
              <li key={s.title} className="relative p-6 pt-8 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Formulario + demo */}
      <section className="py-16 lg:py-24" id="empezar">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 shadow-2xl shadow-cyan-500/5">
            <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-2">{c.form.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{c.form.title}</h2>
            <p className="text-white/60 mb-6">{c.form.text}</p>
            <GiveawayLeadForm lang={lang} f={c.form} privacyHref={c.privacyHref} />
          </div>
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 border border-cyan-500/20">
            <h2 className="text-xl font-bold text-white mb-2">{c.demoBlock.title}</h2>
            <p className="text-white/60 mb-6">{c.demoBlock.text}</p>
            <div className="flex flex-col gap-3">
              <a href={demoUrl} {...(demoExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex justify-center px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-white/90 transition-colors">{c.demoBlock.cta}</a>
              {wa && (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center px-6 py-3 rounded-full border border-[#25D366]/50 text-[#25D366] font-semibold hover:bg-[#25D366]/10 transition-colors">{c.demoBlock.whatsapp}</a>
              )}
            </div>
          </div>
        </div>
      </section>

      <FaqSection title={c.faqTitle} items={c.faq} className="bg-[#030308]" />
    </main>
  );
}
