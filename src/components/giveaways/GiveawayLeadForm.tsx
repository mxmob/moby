"use client";

// Formulario de la landing de sorteos de Instagram → /api/sorteo-instagram → lead en el CRM de MobyApp
// (formulario «demo» con interés «sorteo-instagram»). Mismo consentimiento y origen que la auditoría gratuita.
import { useState } from "react";
import Link from "next/link";
import { getAttribution } from "@/lib/attribution";
import type { GiveawayCopy } from "./content";
import type { GiveawayLang } from "./meta";

const MARKETING_TEXT_VERSION = "sorteo-instagram-2026-11";

export function GiveawayLeadForm({ lang, f, privacyHref }: { lang: GiveawayLang; f: GiveawayCopy["form"]; privacyHref: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "invalid">("idle");
  const demoUrl = process.env.NEXT_PUBLIC_DEMO_BOOKING_URL || "";

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    setStatus("sending");
    try {
      const marketing = d.get("marketing") === "on";
      const res = await fetch("/api/sorteo-instagram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: lang,
          name: d.get("name"), email: d.get("email"), business: d.get("business"), phone: d.get("phone"),
          consent: d.get("consent") === "on",
          marketing_consent: marketing, marketing_consent_text: marketing ? f.marketing : "",
          marketing_consent_version: MARKETING_TEXT_VERSION,
          website: d.get("website"), // honeypot
          attribution: getAttribution(),
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else setStatus(res.status === 422 ? "invalid" : "error");
    } catch {
      setStatus("error");
    }
  };

  const input = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:outline-none";

  if (status === "success") {
    return (
      <div className="text-center py-10" aria-live="polite">
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center text-green-400 text-2xl">✓</div>
        <h3 className="text-2xl font-bold text-white mb-2">{f.success}</h3>
        <p className="text-white/60 mb-6">{f.successText}</p>
        {demoUrl && (
          <a href={demoUrl} className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold">{f.demo}</a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="relative space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-white/70 text-sm">{f.name}
          <input name="name" required maxLength={200} autoComplete="name" className={`${input} mt-1.5`} />
        </label>
        <label className="block text-white/70 text-sm">{f.business}
          <input name="business" required maxLength={200} autoComplete="organization" className={`${input} mt-1.5`} />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-white/70 text-sm">{f.email}
          <input name="email" type="email" required maxLength={254} autoComplete="email" className={`${input} mt-1.5`} />
        </label>
        <label className="block text-white/70 text-sm">{f.phone}
          <input name="phone" type="tel" maxLength={50} autoComplete="tel" placeholder={f.phoneHint} className={`${input} mt-1.5`} />
        </label>
      </div>
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="giveaway-website">Website</label>
        <input type="text" id="giveaway-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="flex items-start gap-3 text-sm text-white/70 cursor-pointer">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-cyan-500" />
        <span>{f.consent} <Link href={privacyHref} className="text-cyan-400 underline underline-offset-2">{f.privacy}</Link>.</span>
      </label>
      <label className="flex items-start gap-3 text-sm text-white/50 cursor-pointer">
        <input type="checkbox" name="marketing" className="mt-0.5 h-4 w-4 flex-shrink-0 accent-cyan-500" />
        <span>{f.marketing}</span>
      </label>
      <button type="submit" disabled={status === "sending"} className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50">
        {status === "sending" ? f.sending : f.submit}
      </button>
      <div aria-live="polite">
        {status === "error" && <p className="text-center text-red-400 text-sm">{f.error}</p>}
        {status === "invalid" && <p className="text-center text-red-400 text-sm">{f.invalid}</p>}
      </div>
      <p className="text-xs text-white/40 text-center">{f.trust}</p>
    </form>
  );
}
