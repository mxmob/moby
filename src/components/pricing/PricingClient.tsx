"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useI18n } from "@/i18n/useI18n";
import { PRICING_TEXT, SECTOR_TEMPLATES, fill, type SectorTemplate } from "@/i18n/pricing";
import { PageHero, Section, SectionHeader } from "@/components/shared";
import {
  canCheckout,
  cleanCode,
  formatMoney,
  isPositive,
  readRef,
  storeRef,
  type PricingData,
  type PricingPackage,
  type PricingSector,
  type PromoResult,
  type SectorValue,
} from "@/lib/signup";
import { SectorSelector } from "./SectorSelector";
import { PromoCodeField } from "./PromoCodeField";
import { AddonCard, PackageCard, PlanCard, unitLabel } from "./PricingCards";
import { CheckoutForm } from "./CheckoutForm";
import { PricingFallback } from "./PricingFallback";

const SECTOR_VALUES: SectorValue[] = ["restaurante", "inmobiliaria", "servicios", "eventos"];

/** Plantillas locales (traducidas) completadas con lo que diga la API en español. */
function mergeSectors(lang: "es" | "en", api: PricingSector[]): SectorTemplate[] {
  return SECTOR_TEMPLATES[lang].map((tpl) => {
    const remote = api.find((s) => s.value === tpl.value);
    if (!remote || lang !== "es") return tpl;
    return { ...tpl, label: remote.label || tpl.label, hint: remote.hint || tpl.hint };
  });
}

export function PricingClient({ data }: { data: PricingData | null }) {
  const { language } = useI18n();
  const tx = PRICING_TEXT[language];
  const sale = canCheckout(data);
  const currency = data?.currency || "EUR";

  const [sector, setSector] = useState<SectorValue | "">("");
  const [plan, setPlan] = useState<string | null>(null);
  const [addons, setAddons] = useState<string[]>([]);
  const [pkg, setPkg] = useState<string | null>(null);
  const [initialPromo, setInitialPromo] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promo, setPromo] = useState<PromoResult | null>(null);
  const [refCode, setRefCode] = useState("");
  const [cancelled, setCancelled] = useState(false);

  // ?promo=, ?ref=, ?sector= y ?cancelado=1 (vuelta desde Stripe)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const ref = q.get("ref");
    if (ref) storeRef(ref.trim());
    setRefCode(readRef() || (ref ?? "").trim());
    const p = cleanCode(q.get("promo"));
    if (p) {
      setInitialPromo(p);
      setPromoCode(p);
    }
    const s = q.get("sector") as SectorValue | null;
    if (s && SECTOR_VALUES.includes(s)) setSector(s);
    setCancelled(q.get("cancelado") === "1");
  }, []);

  const sectors = useMemo(() => mergeSectors(language, data?.sectors ?? []), [language, data]);
  const apiSector = data?.sectors.find((s) => s.value === sector);
  const suggestedPlan = apiSector?.suggested_plan ?? null;
  const suggestedAddons = useMemo(() => new Set(apiSector?.addons ?? []), [apiSector]);

  // Paquetes visibles: los de la API + el del código promocional (si está disponible)
  const packages = useMemo(() => {
    const list: PricingPackage[] = [...(data?.packages ?? [])];
    const promoPkg = promo?.available !== false ? promo?.package : undefined;
    if (promoPkg && !list.some((p) => p.code === promoPkg.code)) list.unshift(promoPkg);
    return list;
  }, [data, promo]);
  const unlockedPkg = promo?.available !== false ? promo?.package?.code : undefined;

  // Recomendados primero
  const sortedAddons = useMemo(() => {
    const list = [...(data?.addons ?? [])];
    return list.sort((a, b) => Number(suggestedAddons.has(b.code)) - Number(suggestedAddons.has(a.code)));
  }, [data, suggestedAddons]);

  const onPromo = useCallback((code: string, result: PromoResult | null) => {
    setPromoCode(code);
    setPromo(result);
    const p = result?.available !== false ? result?.package : undefined;
    if (p) {
      setPkg(p.code);
      setPlan(null);
      setAddons([]);
    }
  }, []);

  const choosePlan = (code: string) => {
    setPkg(null);
    setPlan((cur) => (cur === code ? null : code));
  };
  const choosePackage = (code: string) => {
    setPlan(null);
    setAddons([]);
    setPkg((cur) => (cur === code ? null : code));
  };
  const toggleAddon = (code: string) => setAddons((cur) => (cur.includes(code) ? cur.filter((c) => c !== code) : [...cur, code]));

  const promoField = <PromoCodeField initialCode={initialPromo} onChange={onPromo} />;

  const notices = (
    <>
      {cancelled && (
        <p className="max-w-3xl mx-auto mb-8 px-5 py-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm text-center">
          {tx.cancelled}
        </p>
      )}
      {refCode && (
        <p className="max-w-3xl mx-auto mb-8 px-5 py-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-200 text-sm text-center">
          {tx.refApplied}
        </p>
      )}
    </>
  );

  if (!sale) {
    return (
      <main>
        <PageHero badge={tx.hero.badge} h1={tx.hero.h1} subtitle={tx.hero.subtitle} />
        <Section className="pt-0 lg:pt-0">
          {notices}
          <PricingFallback sectors={sectors} selected={sector} onSelect={setSector} promoCode={promoCode} promo={promoField} />
        </Section>
      </main>
    );
  }

  /* ───────── Contratación online ───────── */
  const selPlan = data.plans.find((p) => p.code === plan);
  const selPkg = packages.find((p) => p.code === pkg);
  const selAddons = data.addons.filter((a) => addons.includes(a.code));
  const lines: { name: string; price: string; unit: string }[] = [];
  let setupTotal = 0;
  if (selPlan) {
    lines.push({ name: selPlan.name, price: selPlan.price, unit: unitLabel(selPlan.kind, tx) });
    setupTotal += Number(selPlan.setup_fee || 0);
  }
  for (const a of selAddons) {
    lines.push({ name: a.name, price: a.price, unit: unitLabel(a.kind, tx) });
    setupTotal += Number(a.setup_fee || 0);
  }
  if (selPkg) {
    for (const it of selPkg.items) {
      const promoActive = it.promo_price != null && it.promo_price !== "" && (it.promo_months ?? 0) > 0;
      lines.push({ name: it.name, price: promoActive ? (it.promo_price as string) : it.price, unit: unitLabel(it.kind, tx) });
      setupTotal += Number(it.setup_fee || 0);
    }
  }
  const hasSelection = !!selPlan || !!selPkg;

  return (
    <main>
      <PageHero badge={tx.hero.badge} h1={tx.hero.h1} subtitle={tx.hero.subtitle} />

      <Section className="pt-0 lg:pt-0">
        {notices}
        <SectorSelector sectors={sectors} value={sector} onChange={setSector} />
        {sector && <p className="mt-4 text-center text-white/50 text-sm">{sectors.find((s) => s.value === sector)?.hint}</p>}
      </Section>

      {data.plans.length > 0 && (
        <Section className="pt-0 lg:pt-0">
          <SectionHeader title={tx.plans.title} subtitle={tx.plans.subtitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.plans.map((p) => (
              <PlanCard
                key={p.code}
                plan={p}
                currency={currency}
                selected={plan === p.code}
                recommended={suggestedPlan === p.code}
                onSelect={() => choosePlan(p.code)}
              />
            ))}
          </div>
        </Section>
      )}

      {sortedAddons.length > 0 && (
        <Section className="pt-0 lg:pt-0">
          <SectionHeader title={tx.addons.title} subtitle={tx.addons.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {sortedAddons.map((a) => (
              <AddonCard
                key={a.code}
                addon={a}
                currency={currency}
                selected={addons.includes(a.code)}
                recommended={suggestedAddons.has(a.code)}
                disabled={!plan}
                onToggle={() => toggleAddon(a.code)}
              />
            ))}
          </div>
        </Section>
      )}

      <Section className="pt-0 lg:pt-0">
        {packages.length > 0 && (
          <>
            <SectionHeader title={tx.packages.title} subtitle={tx.packages.subtitle} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {packages.map((p) => (
                <PackageCard
                  key={p.code}
                  pkg={p}
                  currency={currency}
                  selected={pkg === p.code}
                  locked={p.promo_code_required && unlockedPkg !== p.code}
                  onSelect={() => choosePackage(p.code)}
                />
              ))}
            </div>
          </>
        )}
        <div className="max-w-md mx-auto">{promoField}</div>
        <p className="mt-6 text-center text-white/40 text-xs">{tx.taxNote}</p>
      </Section>

      <Section id="contratar" className="pt-0 lg:pt-0">
        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <aside className="lg:col-span-2 lg:order-2">
            <div className="lg:sticky lg:top-28 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h2 className="text-white font-semibold text-lg mb-4">{tx.summary.title}</h2>
              {hasSelection ? (
                <>
                  <ul className="space-y-3 mb-4">
                    {lines.map((l, i) => (
                      <li key={`${l.name}-${i}`} className="flex justify-between gap-4 text-sm">
                        <span className="text-white/70">{l.name}</span>
                        <span className="text-white whitespace-nowrap">
                          {formatMoney(l.price, language, currency)}
                          <span className="text-white/40 ml-1">{l.unit}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  {isPositive(setupTotal) && (
                    <p className="flex justify-between gap-4 pt-4 border-t border-white/5 text-sm">
                      <span className="text-white/50">{tx.summary.setup}</span>
                      <span className="text-white">{formatMoney(setupTotal, language, currency)}</span>
                    </p>
                  )}
                  {(selPlan?.trial_days ?? 0) > 0 && (
                    <p className="mt-3 text-green-400 text-sm">{fill(tx.trial, { days: selPlan?.trial_days ?? 0 })}</p>
                  )}
                  <p className="mt-4 text-white/40 text-xs">{tx.taxNote}</p>
                </>
              ) : (
                <p className="text-white/50 text-sm">{tx.summary.empty}</p>
              )}
            </div>
          </aside>
          <div className="lg:col-span-3 lg:order-1">
            {hasSelection ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-2">{tx.checkout.title}</h2>
                <p className="text-white/50 text-sm mb-8">{tx.checkout.subtitle}</p>
                <CheckoutForm
                  plan={plan}
                  addons={plan ? addons : []}
                  pkg={pkg}
                  sector={sector}
                  onSectorChange={setSector}
                  sectors={sectors}
                  promoCode={promoCode}
                  refCode={refCode}
                />
              </div>
            ) : (
              <div className="h-full flex items-center justify-center p-8 rounded-2xl border border-dashed border-white/10 text-white/40 text-sm text-center">
                {tx.summary.empty}
              </div>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}
