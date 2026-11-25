"use client";

/* eslint-disable @next/next/no-img-element -- logos SVG pequeños servidos desde /public/brand/products */
import { useI18n } from "@/i18n/useI18n";
import { CTASection, PageHero, Section } from "@/components/shared";
import { PRODUCTS, PRODUCT_CATEGORIES, productHref, productLogo } from "@/content/products";

export default function ProductosClient() {
  const { t, language } = useI18n();

  return (
    <main>
      <PageHero badge={t("productos.hero.badge")} h1={t("productos.hero.h1")} subtitle={t("productos.hero.subtitle")} />

      <Section className="pt-0 lg:pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PRODUCTS.map((p) => {
            const active = p.status === "active";
            return (
              <article
                key={p.id}
                id={p.id}
                className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                  active
                    ? "bg-white/[0.03] border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.05]"
                    : "bg-white/[0.015] border-dashed border-white/10"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/5"
                    style={{ boxShadow: `0 8px 30px -12px ${p.color}` }}
                  >
                    <img src={productLogo(p)} alt="" width={56} height={56} className="h-14 w-14 object-contain" loading="lazy" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold text-white">{p.name}</h2>
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      {PRODUCT_CATEGORIES[p.category]?.[language] ?? p.category}
                    </p>
                  </div>
                  {!active && (
                    <span className="ml-auto self-start rounded-full bg-violet-500/15 border border-violet-400/30 px-2.5 py-1 text-[11px] font-medium text-violet-200 whitespace-nowrap">
                      {t("productos.soon")}
                    </span>
                  )}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{p.description[language]}</p>
                {active ? (
                  <a
                    href={productHref(p, "products_page")}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 self-start px-5 py-2.5 rounded-full
                      bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 hover:border-cyan-400/60
                      text-white/90 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    {p.cta[language]}
                    <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span className="self-start text-sm text-white/40">
                    {t("productos.soonCta")}
                    {p.logoPlaceholder ? ` · ${t("productos.provisionalLogo")}` : ""}
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </Section>

      <CTASection title={t("productos.ctaTitle")} buttonText={t("productos.ctaButton")} />
    </main>
  );
}
