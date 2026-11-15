"use client";

import { useState } from "react";
import Link from "next/link";
import type { SectorCopy, SLang } from "@/content/sectors";
import { UI } from "@/content/sectors/ui";
import { getAttribution } from "@/lib/attribution";
import { whatsappHref } from "@/lib/site";

/** Solicitud de demo → /api/demo → lead «demo» en el CRM de MobyApp con sector, tamaño, ciudad y UTM. */

const input =
  "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400/60 transition-colors";

export function DemoForm({ lang, copy, landing }: { lang: SLang; copy: SectorCopy; landing: string }) {
  const t = UI[lang].form;
  const f = copy.form;
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error" | "invalid">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const email = v("email");
    if (!v("name") || !v("business") || !v("city") || v("phone").replace(/\D/g, "").length < 6 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || fd.get("consent") !== "on") {
      setState("invalid");
      return;
    }
    setState("sending");
    // UTM de la URL actual (si llega desde una campaña) además del origen guardado
    const params = new URLSearchParams(window.location.search);
    const utm = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].map((k) => [k, params.get(k) || ""]));
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: v("name"),
          business: v("business"),
          city: v("city"),
          size: v("size"),
          size_label: f.sizeKey,
          phone: v("phone"),
          email,
          sector: v("sector") || f.sectors[0][0],
          consent: true,
          language: lang,
          landing,
          website: v("website"),
          ...utm,
          attribution: getAttribution(),
        }),
      });
      setState(res.ok ? "ok" : res.status === 422 ? "invalid" : "error");
    } catch {
      setState("error");
    }
  }

  const wa = whatsappHref(copy.whatsappText);

  if (state === "ok") {
    return (
      <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center min-h-[420px] flex flex-col items-center justify-center" role="status">
        <p className="text-2xl font-bold text-white mb-2">{t.success}</p>
        <p className="text-white/70 max-w-md">{t.successText}</p>
        {wa && (
          <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-[#05300f] font-semibold">
            {UI[lang].ctaWhatsapp}
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="d-name" className="block text-sm text-white/70 mb-1.5">{t.name} *</label>
          <input id="d-name" name="name" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="d-business" className="block text-sm text-white/70 mb-1.5">{t.business} *</label>
          <input id="d-business" name="business" required autoComplete="organization" className={input} />
        </div>
        <div>
          <label htmlFor="d-city" className="block text-sm text-white/70 mb-1.5">{t.city} *</label>
          <input id="d-city" name="city" required autoComplete="address-level2" placeholder="Granollers" className={input} />
        </div>
        <div>
          <label htmlFor="d-size" className="block text-sm text-white/70 mb-1.5">{f.sizeLabel}</label>
          <input id="d-size" name="size" type="number" inputMode="numeric" min={0} max={500} className={input} />
        </div>
        {f.sectors.length > 1 && (
          <div className="sm:col-span-2">
            <label htmlFor="d-sector" className="block text-sm text-white/70 mb-1.5">{t.sector}</label>
            <select id="d-sector" name="sector" defaultValue={f.sectors[0][0]} className={input}>
              {f.sectors.map(([value, label]) => (
                <option key={value} value={value} className="bg-[#0b0b1d]">{label}</option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label htmlFor="d-phone" className="block text-sm text-white/70 mb-1.5">{t.phone} *</label>
          <input id="d-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+34 6__ ___ ___" className={input} />
        </div>
        <div>
          <label htmlFor="d-email" className="block text-sm text-white/70 mb-1.5">{t.email} *</label>
          <input id="d-email" name="email" type="email" required autoComplete="email" className={input} />
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm text-white/60">
        <input type="checkbox" name="consent" required className="mt-1 accent-cyan-400" />
        <span>
          {t.consent}{" "}
          <Link href={lang === "en" ? "/en/privacidad" : "/privacidad"} className="text-cyan-400 underline" target="_blank">{t.privacy}</Link>{" "}
          {t.consentTail}
        </span>
      </label>
      {(state === "invalid" || state === "error") && (
        <p className="text-sm text-red-300" role="alert">{state === "invalid" ? t.invalid : t.error}</p>
      )}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button type="submit" disabled={state === "sending"} className="flex-1 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold disabled:opacity-60 hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow">
          {state === "sending" ? t.sending : t.submit}
        </button>
        {wa && (
          <a href={wa} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full border border-[#25D366]/50 text-[#25D366] font-semibold text-center hover:bg-[#25D366]/10 transition-colors">
            WhatsApp
          </a>
        )}
      </div>
      <p className="text-xs text-white/40">{t.trust}</p>
    </form>
  );
}
