"use client";

import { useI18n } from "@/i18n/useI18n";
import { PRICING_TEXT, fill, type PricingText } from "@/i18n/pricing";
import { formatMoney, isPositive, type ItemKind, type PricingAddon, type PricingPackage, type PricingPlan } from "@/lib/signup";

export function unitLabel(kind: ItemKind, tx: PricingText) {
  return (tx.unit as Record<string, string>)[kind] ?? "";
}

function Check() {
  return (
    <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Price({ amount, kind, currency, size = "lg" }: { amount: string; kind: ItemKind; currency: string; size?: "lg" | "sm" }) {
  const { language } = useI18n();
  const tx = PRICING_TEXT[language];
  return (
    <p className="flex items-baseline gap-1.5">
      <span className={size === "lg" ? "text-4xl font-bold text-white" : "text-2xl font-bold text-white"}>
        {formatMoney(amount, language, currency)}
      </span>
      <span className="text-white/50 text-sm">{unitLabel(kind, tx)}</span>
    </p>
  );
}

function SelectButton({ selected, onClick, idle, active, primary }: { selected: boolean; onClick: () => void; idle: string; active: string; primary?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
        selected
          ? "bg-cyan-500/15 border border-cyan-400/60 text-cyan-300"
          : primary
            ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:shadow-lg hover:shadow-cyan-500/30"
            : "bg-white/5 border border-white/10 text-white/90 hover:border-cyan-400/40"
      }`}
    >
      {selected ? `✓ ${active}` : idle}
    </button>
  );
}

const cardBase = "relative flex flex-col p-6 lg:p-8 rounded-2xl border transition-all duration-300";
const cardTone = (selected: boolean, highlighted: boolean) =>
  selected
    ? "bg-cyan-500/[0.06] border-cyan-400/60 shadow-lg shadow-cyan-500/10"
    : highlighted
      ? "bg-white/[0.03] border-violet-400/40"
      : "bg-white/[0.02] border-white/5 hover:border-cyan-500/30";

function RecommendedBadge({ label }: { label: string }) {
  return (
    <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs font-bold">
      {label}
    </span>
  );
}

export function PlanCard({
  plan,
  currency,
  selected,
  recommended,
  onSelect,
}: {
  plan: PricingPlan;
  currency: string;
  selected: boolean;
  recommended: boolean;
  onSelect: () => void;
}) {
  const { language } = useI18n();
  const tx = PRICING_TEXT[language];
  return (
    <div className={`${cardBase} ${cardTone(selected, recommended)}`}>
      {recommended && <RecommendedBadge label={tx.sector.suggested} />}
      <h3 className="text-white font-semibold text-xl mb-2 mt-1">{plan.name}</h3>
      {plan.description && <p className="text-white/50 text-sm leading-relaxed mb-6">{plan.description}</p>}
      <Price amount={plan.price} kind={plan.kind} currency={currency} />
      <div className="mt-3 mb-6 space-y-1 text-sm">
        <p className="text-white/50">
          {isPositive(plan.setup_fee) ? fill(tx.setupFee, { amount: formatMoney(plan.setup_fee, language, currency) }) : tx.noSetupFee}
        </p>
        {plan.trial_days > 0 && <p className="text-green-400">{fill(tx.trial, { days: plan.trial_days })}</p>}
      </div>
      {plan.features?.length > 0 && (
        <ul className="space-y-2 mb-8">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-white/70">
              <Check />
              {f}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto">
        <SelectButton selected={selected} onClick={onSelect} idle={tx.choose} active={tx.chosen} primary={recommended} />
      </div>
    </div>
  );
}

export function AddonCard({
  addon,
  currency,
  selected,
  recommended,
  disabled,
  onToggle,
}: {
  addon: PricingAddon;
  currency: string;
  selected: boolean;
  recommended: boolean;
  disabled: boolean;
  onToggle: () => void;
}) {
  const { language } = useI18n();
  const tx = PRICING_TEXT[language];
  return (
    <div className={`relative flex flex-col p-5 rounded-2xl border transition-all duration-300 ${cardTone(selected, recommended)}`}>
      {recommended && (
        <span className="self-start mb-3 px-2.5 py-0.5 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-xs font-medium">
          {tx.sector.suggested}
        </span>
      )}
      <h3 className="text-white font-semibold mb-1">{addon.name}</h3>
      {addon.description && <p className="text-white/50 text-sm leading-relaxed mb-4">{addon.description}</p>}
      <div className="mt-auto">
        <Price amount={addon.price} kind={addon.kind} currency={currency} size="sm" />
        <div className="mt-1 mb-4 text-xs space-y-0.5">
          {isPositive(addon.setup_fee) && (
            <p className="text-white/40">{fill(tx.setupFee, { amount: formatMoney(addon.setup_fee, language, currency) })}</p>
          )}
          {addon.trial_days > 0 && <p className="text-green-400">{fill(tx.trial, { days: addon.trial_days })}</p>}
        </div>
        <button
          type="button"
          onClick={onToggle}
          disabled={disabled}
          aria-pressed={selected}
          className={`w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed ${
            selected ? "bg-cyan-500/15 border border-cyan-400/60 text-cyan-300" : "bg-white/5 border border-white/10 text-white/80 hover:border-cyan-400/40"
          }`}
        >
          {selected ? `✓ ${tx.added}` : `+ ${tx.add}`}
        </button>
      </div>
    </div>
  );
}

export function PackageCard({
  pkg,
  currency,
  selected,
  locked,
  onSelect,
}: {
  pkg: PricingPackage;
  currency: string;
  selected: boolean;
  /** Requiere código y aún no se ha aplicado */
  locked: boolean;
  onSelect: () => void;
}) {
  const { language } = useI18n();
  const tx = PRICING_TEXT[language];
  const dateFmt = (d: string) => {
    const date = new Date(d);
    return Number.isNaN(date.getTime())
      ? d
      : date.toLocaleDateString(language === "en" ? "en-GB" : "es-ES", { day: "numeric", month: "long", year: "numeric" });
  };
  return (
    <div className={`${cardBase} ${cardTone(selected, !locked)}`}>
      <h3 className="text-white font-semibold text-xl mb-2">{pkg.name}</h3>
      {pkg.description && <p className="text-white/50 text-sm leading-relaxed mb-6">{pkg.description}</p>}
      <ul className="space-y-4 mb-6">
        {pkg.items.map((it) => {
          const promo = it.promo_price != null && it.promo_price !== "" && Number(it.promo_price) < Number(it.price) && (it.promo_months ?? 0) > 0;
          const promoPrice = formatMoney(it.promo_price, language, currency);
          return (
            <li key={it.code} className="flex items-start gap-3">
              <Check />
              <div className="flex-1 text-sm">
                <p className="text-white/90 font-medium">{it.name}</p>
                <p className="text-white/50">
                  {promo && <span className="line-through mr-2 text-white/30">{formatMoney(it.price, language, currency)}</span>}
                  {promo ? promoPrice : formatMoney(it.price, language, currency)}
                  <span className="ml-1">{unitLabel(it.kind, tx)}</span>
                </p>
                {promo && (
                  <p className="text-green-400 text-xs mt-0.5">
                    {it.promo_months === 1
                      ? fill(tx.promoForOne, { price: promoPrice })
                      : fill(tx.promoFor, { price: promoPrice, months: it.promo_months ?? 0 })}
                  </p>
                )}
                {isPositive(it.setup_fee) && (
                  <p className="text-white/40 text-xs mt-0.5">{fill(tx.setupFee, { amount: formatMoney(it.setup_fee, language, currency) })}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-auto space-y-3">
        {pkg.valid_until && <p className="text-white/40 text-xs">{fill(tx.validUntil, { date: dateFmt(pkg.valid_until) })}</p>}
        {locked ? (
          <p className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white/50 text-sm text-center">{tx.requiresCode}</p>
        ) : (
          <SelectButton selected={selected} onClick={onSelect} idle={tx.choose} active={tx.chosen} primary />
        )}
      </div>
    </div>
  );
}
