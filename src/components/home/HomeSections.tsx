"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { Scene } from "@/components/shared/Scene";
import type { SceneKey } from "@/lib/scenes";

export function NotWebsSection() {
  const { t, href } = useI18n();

  return (
    <section className="py-20 lg:py-28 bg-[#050510]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">{t("home.notWebs.subtitle")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">{t("home.notWebs.title")}</h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">{t("home.notWebs.description")}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h3 className="text-white/60 font-semibold text-lg">{t("home.notWebs.comparison.web.title")}</h3>
            </div>
            <ul className="space-y-3">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-3 text-white/40">
                  <svg className="w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                  {t(`home.notWebs.comparison.web.items.${i}`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-violet-500/5 border border-cyan-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-white font-semibold text-lg">{t("home.notWebs.comparison.system.title")}</h3>
            </div>
            <ul className="space-y-3">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t(`home.notWebs.comparison.system.items.${i}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PentagonExplainedSection() {
  const { t, href, language } = useI18n();
  const areas: { key: string; icon: string; href: string; scene: SceneKey }[] = [
    { key: "digitalizacion", icon: "🎯", href: "/digitalizacion", scene: "digitalizacion" },
    { key: "optimizacion", icon: "📈", href: "/optimizacion", scene: "optimizacion" },
    { key: "automatizacion", icon: "⚡", href: "/automatizacion", scene: "automatizacion" },
    { key: "desarrollo", icon: "💻", href: "/desarrollo", scene: "desarrollo" },
    { key: "impresion3d", icon: "🔧", href: "/impresion-3d", scene: "impresion3d" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#030308]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">{t("home.pentagon.subtitle")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">{t("home.pentagon.title")}</h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">{t("home.pentagon.description")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {areas.map((area) => (
            <Link key={area.key} href={href(area.href)} className="group overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 text-center">
              <Scene
                scene={area.scene}
                lang={language}
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
                className="aspect-[16/10]"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative px-6 pb-6">
              <div className="-mt-6 mb-3 mx-auto w-12 h-12 rounded-full bg-[#0b0b1d] border border-white/10 flex items-center justify-center text-2xl relative">{area.icon}</div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{t(`home.pentagon.areas.${area.key}.title`)}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{t(`home.pentagon.areas.${area.key}.desc`)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowWeWorkSection() {
  const { t, href, language } = useI18n();

  return (
    <section className="py-20 lg:py-28 bg-[#050510]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">{t("home.howWeWork.subtitle")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{t("home.howWeWork.title")}</h2>
        </div>
        <Scene
          scene="comoTrabajamos"
          lang={language}
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="aspect-[16/9] md:aspect-[3/1] rounded-3xl border border-white/10 mb-12"
          imgClassName="object-[center_40%]"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="relative">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 h-full">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-bold mb-4">{t(`home.howWeWork.steps.${i}.number`)}</span>
                <h3 className="text-white font-semibold text-xl mb-3">{t(`home.howWeWork.steps.${i}.title`)}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{t(`home.howWeWork.steps.${i}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href={href("/como-trabajamos")} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
            {t("cta.learnMore")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SectorsSection() {
  const { t, href, language } = useI18n();
  const sectors: { key: number; icon: string; scene: SceneKey }[] = [
    { key: 0, icon: "🍽️", scene: "sectorRestaurantes" },
    { key: 1, icon: "🏠", scene: "sectorInmobiliarias" },
    { key: 2, icon: "🏪", scene: "digitalizacion" },
    { key: 3, icon: "🚀", scene: "desarrollo" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#030308]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">{t("home.sectors.subtitle")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{t("home.sectors.title")}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sectors.map((sector) => (
            <Link key={sector.key} href={href(t(`home.sectors.items.${sector.key}.href`))} className="group overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
              <Scene
                scene={sector.scene}
                lang={language}
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/3]"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-6">
                <div className="text-3xl mb-4">{sector.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">{t(`home.sectors.items.${sector.key}.name`)}</h3>
                <p className="text-white/50 text-sm">{t(`home.sectors.items.${sector.key}.desc`)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href={href("/soluciones")} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white/5 hover:border-white/30 transition-all">
            {t("home.sectors.viewAll")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  const { t, href } = useI18n();

  return (
    <section className="py-20 lg:py-28 bg-[#050510]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t("home.finalCta.title")}</h2>
          <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">{t("home.finalCta.subtitle")}</p>
          <Link href={href("/contacto")} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-100">
            {t("home.finalCta.button")}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
