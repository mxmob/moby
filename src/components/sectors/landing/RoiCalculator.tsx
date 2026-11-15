"use client";

import { useMemo, useState } from "react";
import type { SLang } from "@/content/sectors";
import { UI } from "@/content/sectors/ui";

/*
 * Calculadora orientativa: plantones recuperados + visitas extra por fidelización/reactivación.
 * Los porcentajes de mejora son SUPUESTOS editables (rotulados como estimación), nunca promesas.
 * Si el catálogo está a la venta, `planPrice` llega del endpoint público de precios; si no, el
 * usuario puede escribir una cuota para comparar (opcional).
 */

const SLOTS_PER_CHAIR = 8 * 24; // citas/día × días/mes

function fmt(n: number, lang: SLang) {
  return new Intl.NumberFormat(lang === "en" ? "en-IE" : lang === "ca" ? "ca-ES" : "es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(Math.round(n));
}

function Field({ id, label, value, onChange, min, max, step = 1, suffix }: { id: string; label: string; value: number; onChange: (v: number) => void; min: number; max: number; step?: number; suffix?: string }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-center justify-between gap-3 text-sm text-white/70 mb-2">
        <span>{label}</span>
        <span className="text-white font-semibold tabular-nums whitespace-nowrap">{value}{suffix}</span>
      </label>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-cyan-400" />
    </div>
  );
}

export function RoiCalculator({ lang, planPrice }: { lang: SLang; planPrice: number | null }) {
  const t = UI[lang].roi;
  const [chairs, setChairs] = useState(3);
  const [ticket, setTicket] = useState(18);
  const [visits, setVisits] = useState(400);
  const [noShow, setNoShow] = useState(8);
  const [reduction, setReduction] = useState(40);
  const [uplift, setUplift] = useState(5);
  const [priceInput, setPriceInput] = useState<string>(planPrice ? String(planPrice) : "");

  const r = useMemo(() => {
    const capacity = chairs * SLOTS_PER_CHAIR;
    const lostVisits = visits * (noShow / 100);
    const recoveredVisits = lostVisits * (reduction / 100);
    const wantedExtra = visits * (uplift / 100);
    const free = Math.max(0, capacity - visits);
    const extraVisits = Math.min(wantedExtra, free);
    const recoveredNoShow = recoveredVisits * ticket;
    const extra = extraVisits * ticket;
    const total = recoveredNoShow + extra;
    const price = Number(priceInput.replace(",", "."));
    const hasPrice = Number.isFinite(price) && price > 0;
    return { capacity, recoveredNoShow, extra, total, capped: wantedExtra > free, price: hasPrice ? price : null };
  }, [chairs, ticket, visits, noShow, reduction, uplift, priceInput]);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6">
        <Field id="roi-chairs" label={t.chairs} value={chairs} onChange={setChairs} min={1} max={15} />
        <Field id="roi-ticket" label={t.ticket} value={ticket} onChange={setTicket} min={5} max={120} suffix=" €" />
        <Field id="roi-visits" label={t.clients} value={visits} onChange={setVisits} min={20} max={3000} step={10} />
        <p className="text-xs text-white/40 -mt-3">{t.capacity.replace("{n}", String(r.capacity))}</p>
        <Field id="roi-noshow" label={t.noShow} value={noShow} onChange={setNoShow} min={0} max={30} suffix=" %" />
        <div className="pt-2 border-t border-white/5 space-y-6">
          <Field id="roi-reduction" label={t.noShowReduction} value={reduction} onChange={setReduction} min={0} max={80} suffix=" %" />
          <Field id="roi-uplift" label={t.returnUplift} value={uplift} onChange={setUplift} min={0} max={30} suffix=" %" />
        </div>
        <div>
          <label htmlFor="roi-price" className="block text-sm text-white/70 mb-2">{t.price}</label>
          <input id="roi-price" inputMode="decimal" value={priceInput} onChange={(e) => setPriceInput(e.target.value.replace(/[^\d.,]/g, "").slice(0, 7))} placeholder={t.pricePlaceholder} className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400/60" />
          {!planPrice && <p className="text-xs text-white/40 mt-1.5">{t.priceHint}</p>}
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-violet-500/5 border border-cyan-500/20 lg:sticky lg:top-28" aria-live="polite">
        <dl className="space-y-4">
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-white/70 text-sm">{t.recoveredNoShow}</dt>
            <dd className="text-white text-xl font-semibold tabular-nums">{fmt(r.recoveredNoShow, lang)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-white/70 text-sm">{t.extraVisits}</dt>
            <dd className="text-white text-xl font-semibold tabular-nums">{fmt(r.extra, lang)}</dd>
          </div>
          <div className="pt-4 border-t border-white/10">
            <dt className="text-white/70 text-sm">{t.total}</dt>
            <dd className="text-4xl sm:text-5xl font-bold text-white tabular-nums mt-1">
              {fmt(r.total, lang)}
              <span className="text-base font-medium text-white/50"> {t.perMonth.replace("€", "").trim()}</span>
            </dd>
          </div>
          {r.price !== null && (
            <div className="pt-4 border-t border-white/10 flex items-baseline justify-between gap-4">
              <dt className="text-white/70 text-sm">{t.net}</dt>
              <dd className="text-right">
                <span className={`text-2xl font-semibold tabular-nums ${r.total - r.price >= 0 ? "text-emerald-300" : "text-red-300"}`}>{fmt(r.total - r.price, lang)}</span>
                {r.total > 0 && <span className="block text-xs text-white/50">≈ {(r.total / r.price).toFixed(1)} {t.multiple}</span>}
              </dd>
            </div>
          )}
        </dl>
        {r.capped && <p className="text-xs text-amber-300/80 mt-4">{t.capped}</p>}
        <p className="text-xs text-white/40 mt-6">{t.disclaimer}</p>
      </div>
    </div>
  );
}
