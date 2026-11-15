"use client";

// «Auditoría gratuita de tu ficha de Google» (lead magnet). es/ca/en.
// Envía a /api/auditoria → contacto en el CRM de MobyApp (formulario «audit», etapa «Prospecto»).
import { useState } from "react";
import Link from "next/link";
import { getAttribution } from "@/lib/attribution";
import { whatsappHref } from "@/lib/site";

import type { AuditLang } from "./meta";

type Copy = {
  badge: string; h1: string; subtitle: string; bullets: string[]; howTitle: string; how: string[];
  form: {
    title: string; business: string; city: string; sector: string; sectors: [string, string][]; name: string;
    email: string; phone: string; phoneHint: string; consent: string; privacy: string; marketing: string;
    submit: string; sending: string; success: string; successText: string; error: string; invalid: string; demo: string;
  };
  trust: string; faqTitle: string; faq: [string, string][]; privacyHref: string;
};

const COPY: Record<AuditLang, Copy> = {
  es: {
    badge: "🔍 Gratis · en 48 h · sin compromiso",
    h1: "Auditoría gratuita de tu ficha de Google",
    subtitle: "Te decimos por qué tu competencia aparece antes en Google Maps y qué 5 cambios concretos te traerían más clientes. Para barberías, peluquerías, centros de estética, restaurantes e inmobiliarias.",
    bullets: [
      "Posición en Google Maps frente a 3 competidores de tu zona",
      "Reseñas: cantidad, nota, ritmo y respuestas",
      "Fotos, horario, categorías y datos que faltan",
      "Botón de reservar y enlaces (web, WhatsApp, Instagram)",
      "5 mejoras priorizadas que puedes hacer tú mismo",
    ],
    howTitle: "Cómo funciona",
    how: ["Rellenas el formulario (1 minuto)", "Revisamos tu ficha a mano, sin robots", "Te enviamos el informe por email o WhatsApp en 48 h laborables"],
    form: {
      title: "Pide tu auditoría",
      business: "Nombre del negocio", city: "Ciudad", sector: "Sector",
      sectors: [["barberia", "Barbería"], ["peluqueria", "Peluquería"], ["estetica", "Estética / belleza"], ["restaurante", "Restaurante / bar"], ["inmobiliaria", "Inmobiliaria"], ["otro", "Otro"]],
      name: "Tu nombre", email: "Email", phone: "WhatsApp o teléfono", phoneHint: "Opcional: si prefieres recibirla por WhatsApp",
      consent: "He leído y acepto la", privacy: "política de privacidad",
      marketing: "Quiero recibir por email consejos y novedades de MobyApp (puedes darte de baja cuando quieras).",
      submit: "Quiero mi auditoría gratis", sending: "Enviando…",
      success: "¡Recibido!", successText: "Revisaremos tu ficha y te enviaremos el informe en un máximo de 48 horas laborables.",
      error: "No hemos podido enviar la solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.",
      invalid: "Revisa los datos: nombre del negocio, ciudad, tu nombre y un email válido.",
      demo: "¿Lo vemos juntos? Reserva una demo de 20 minutos",
    },
    trust: "Hecho por un equipo local del Vallès. No vendemos tus datos ni te llenamos el buzón.",
    faqTitle: "Preguntas frecuentes",
    faq: [
      ["¿De verdad es gratis?", "Sí. La hacemos para que veas cómo trabajamos. Si después quieres ayuda para aplicar las mejoras, te lo explicamos; si no, el informe es tuyo igualmente."],
      ["¿Necesito darte acceso a mi cuenta de Google?", "No. Analizamos la información pública de tu ficha y de tus competidores."],
      ["¿Cuánto tardáis?", "Un máximo de 48 horas laborables desde que lo pides."],
    ],
    privacyHref: "/privacidad",
  },
  ca: {
    badge: "🔍 Gratis · en 48 h · sense compromís",
    h1: "Auditoria gratuïta de la teva fitxa de Google",
    subtitle: "T’expliquem per què la teva competència surt abans a Google Maps i quins 5 canvis concrets et portarien més clients. Per a barberies, perruqueries, centres d’estètica, restaurants i immobiliàries.",
    bullets: [
      "Posició a Google Maps davant de 3 competidors de la teva zona",
      "Ressenyes: quantitat, nota, ritme i respostes",
      "Fotos, horari, categories i dades que falten",
      "Botó de reservar i enllaços (web, WhatsApp, Instagram)",
      "5 millores prioritzades que pots fer tu mateix",
    ],
    howTitle: "Com funciona",
    how: ["Omples el formulari (1 minut)", "Revisem la teva fitxa a mà, sense robots", "T’enviem l’informe per correu o WhatsApp en 48 h laborables"],
    form: {
      title: "Demana la teva auditoria",
      business: "Nom del negoci", city: "Ciutat", sector: "Sector",
      sectors: [["barberia", "Barberia"], ["peluqueria", "Perruqueria"], ["estetica", "Estètica / bellesa"], ["restaurante", "Restaurant / bar"], ["inmobiliaria", "Immobiliària"], ["otro", "Altres"]],
      name: "El teu nom", email: "Correu electrònic", phone: "WhatsApp o telèfon", phoneHint: "Opcional: si prefereixes rebre-la per WhatsApp",
      consent: "He llegit i accepto la", privacy: "política de privacitat",
      marketing: "Vull rebre per correu consells i novetats de MobyApp (et pots donar de baixa quan vulguis).",
      submit: "Vull la meva auditoria gratis", sending: "Enviant…",
      success: "Rebut!", successText: "Revisarem la teva fitxa i t’enviarem l’informe en un màxim de 48 hores laborables.",
      error: "No hem pogut enviar la sol·licitud. Torna-ho a provar o escriu-nos per WhatsApp.",
      invalid: "Revisa les dades: nom del negoci, ciutat, el teu nom i un correu vàlid.",
      demo: "Ho mirem junts? Reserva una demo de 20 minuts",
    },
    trust: "Fet per un equip local del Vallès. No venem les teves dades ni t’omplim la bústia.",
    faqTitle: "Preguntes freqüents",
    faq: [
      ["De debò és gratis?", "Sí. La fem perquè vegis com treballem. Si després vols ajuda per aplicar les millores, t’ho expliquem; si no, l’informe és teu igualment."],
      ["Necessites accés al meu compte de Google?", "No. Analitzem la informació pública de la teva fitxa i dels teus competidors."],
      ["Quant trigueu?", "Un màxim de 48 hores laborables des que ho demanes."],
    ],
    privacyHref: "/privacidad",
  },
  en: {
    badge: "🔍 Free · within 48 h · no strings attached",
    h1: "Free audit of your Google Business Profile",
    subtitle: "We tell you why your competitors show up first on Google Maps and which 5 specific changes would bring you more customers. For barbershops, hair salons, beauty centres, restaurants and estate agents.",
    bullets: [
      "Google Maps ranking against 3 local competitors",
      "Reviews: number, rating, pace and replies",
      "Photos, opening hours, categories and missing details",
      "Booking button and links (website, WhatsApp, Instagram)",
      "5 prioritised improvements you can make yourself",
    ],
    howTitle: "How it works",
    how: ["Fill in the form (1 minute)", "We review your profile by hand, no bots", "We send you the report by email or WhatsApp within 48 working hours"],
    form: {
      title: "Request your audit",
      business: "Business name", city: "City", sector: "Sector",
      sectors: [["barberia", "Barbershop"], ["peluqueria", "Hair salon"], ["estetica", "Beauty"], ["restaurante", "Restaurant / bar"], ["inmobiliaria", "Estate agent"], ["otro", "Other"]],
      name: "Your name", email: "Email", phone: "WhatsApp or phone", phoneHint: "Optional: if you prefer to get it on WhatsApp",
      consent: "I have read and accept the", privacy: "privacy policy",
      marketing: "I want to receive MobyApp tips and news by email (unsubscribe at any time).",
      submit: "Get my free audit", sending: "Sending…",
      success: "Received!", successText: "We will review your profile and send you the report within 48 working hours.",
      error: "We could not send your request. Please try again or message us on WhatsApp.",
      invalid: "Please check: business name, city, your name and a valid email.",
      demo: "Want to see it together? Book a 20-minute demo",
    },
    trust: "Made by a local team in Barcelona’s Vallès area. We do not sell your data or flood your inbox.",
    faqTitle: "FAQ",
    faq: [
      ["Is it really free?", "Yes. We do it so you can see how we work. If you then want help applying the improvements, we will explain how; if not, the report is still yours."],
      ["Do you need access to my Google account?", "No. We analyse the public information of your profile and your competitors."],
      ["How long does it take?", "Up to 48 working hours from your request."],
    ],
    privacyHref: "/en/privacidad",
  },
};

const MARKETING_TEXT_VERSION = "auditoria-2026-11";

export function AuditPage({ lang }: { lang: AuditLang }) {
  const c = COPY[lang];
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "invalid">("idle");
  const demoUrl = process.env.NEXT_PUBLIC_DEMO_BOOKING_URL || "";
  const wa = whatsappHref(lang === "en" ? "Hi! I have a question about the free Google audit." : lang === "ca" ? "Hola! Tinc un dubte sobre l’auditoria gratuïta de Google." : "¡Hola! Tengo una duda sobre la auditoría gratuita de Google.");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    setStatus("sending");
    try {
      const marketing = d.get("marketing") === "on";
      const res = await fetch("/api/auditoria", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: lang,
          business: d.get("business"), city: d.get("city"), sector: d.get("sector"), name: d.get("name"),
          email: d.get("email"), phone: d.get("phone"), consent: d.get("consent") === "on",
          marketing_consent: marketing, marketing_consent_text: marketing ? c.form.marketing : "",
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

  return (
    <main lang={lang}>
      <section className="relative pt-32 pb-16 lg:pt-40">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(6,182,212,.10) 0%, transparent 55%)" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">{c.badge}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">{c.h1}</h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8">{c.subtitle}</p>
            <ul className="space-y-3 mb-10">
              {c.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/80">
                  <svg className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {b}
                </li>
              ))}
            </ul>
            <h2 className="text-white font-semibold text-lg mb-4">{c.howTitle}</h2>
            <ol className="grid sm:grid-cols-3 gap-3">
              {c.how.map((h, i) => (
                <li key={h} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-white/70">
                  <span className="block text-cyan-400 font-bold text-lg mb-1">{i + 1}</span>{h}
                </li>
              ))}
            </ol>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 shadow-2xl shadow-cyan-500/5">
            {status === "success" ? (
              <div className="text-center py-10" aria-live="polite">
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center text-green-400 text-2xl">✓</div>
                <h2 className="text-2xl font-bold text-white mb-2">{c.form.success}</h2>
                <p className="text-white/60 mb-6">{c.form.successText}</p>
                {demoUrl && (
                  <a href={demoUrl} className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold">{c.form.demo}</a>
                )}
              </div>
            ) : (
              <form onSubmit={submit} className="relative space-y-4">
                <h2 className="text-xl font-semibold text-white mb-2">{c.form.title}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block text-white/70 text-sm">{c.form.business}
                    <input name="business" required maxLength={200} autoComplete="organization" className={`${input} mt-1.5`} />
                  </label>
                  <label className="block text-white/70 text-sm">{c.form.city}
                    <input name="city" required maxLength={100} autoComplete="address-level2" className={`${input} mt-1.5`} />
                  </label>
                </div>
                <label className="block text-white/70 text-sm">{c.form.sector}
                  <select name="sector" defaultValue="barberia" className={`${input} mt-1.5 [&>option]:text-gray-900`}>
                    {c.form.sectors.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </label>
                <label className="block text-white/70 text-sm">{c.form.name}
                  <input name="name" required maxLength={200} autoComplete="name" className={`${input} mt-1.5`} />
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block text-white/70 text-sm">{c.form.email}
                    <input name="email" type="email" required maxLength={254} autoComplete="email" className={`${input} mt-1.5`} />
                  </label>
                  <label className="block text-white/70 text-sm">{c.form.phone}
                    <input name="phone" type="tel" maxLength={50} autoComplete="tel" placeholder={c.form.phoneHint} className={`${input} mt-1.5`} />
                  </label>
                </div>
                <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="audit-website">Website</label>
                  <input type="text" id="audit-website" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <label className="flex items-start gap-3 text-sm text-white/70 cursor-pointer">
                  <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-cyan-500" />
                  <span>{c.form.consent} <Link href={c.privacyHref} className="text-cyan-400 underline underline-offset-2">{c.form.privacy}</Link>.</span>
                </label>
                <label className="flex items-start gap-3 text-sm text-white/50 cursor-pointer">
                  <input type="checkbox" name="marketing" className="mt-0.5 h-4 w-4 flex-shrink-0 accent-cyan-500" />
                  <span>{c.form.marketing}</span>
                </label>
                <button type="submit" disabled={status === "sending"} className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50">
                  {status === "sending" ? c.form.sending : c.form.submit}
                </button>
                <div aria-live="polite">
                  {status === "error" && <p className="text-center text-red-400 text-sm">{c.form.error}</p>}
                  {status === "invalid" && <p className="text-center text-red-400 text-sm">{c.form.invalid}</p>}
                </div>
                <p className="text-xs text-white/40 text-center">{c.trust}</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#030308]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">{c.faqTitle}</h2>
          <div className="space-y-3">
            {c.faq.map(([q, a]) => (
              <details key={q} className="group p-5 rounded-xl bg-white/[0.03] border border-white/5">
                <summary className="cursor-pointer text-white font-medium list-none flex justify-between">{q}<span className="text-cyan-400 group-open:rotate-45 transition-transform">+</span></summary>
                <p className="mt-3 text-white/60">{a}</p>
              </details>
            ))}
          </div>
          {wa && (
            <p className="mt-8 text-center text-white/50 text-sm">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="text-green-400 underline underline-offset-2">WhatsApp</a>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
