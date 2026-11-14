"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { onOpenCookieSettings, saveConsent, useConsent } from "@/lib/consent";

/**
 * Primera capa: Rechazar / Aceptar / Configurar con el mismo peso visual (guía AEPD).
 * Segunda capa: categorías, sin nada marcado por defecto salvo las necesarias.
 */
export function CookieBanner() {
  const { t, href } = useI18n();
  const consent = useConsent();
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => onOpenCookieSettings(() => setSettings(true)), []);
  useEffect(() => {
    if (settings) {
      setAnalytics(!!consent?.analytics);
      dialogRef.current?.focus();
    }
  }, [settings, consent]);

  // Escape cierra el panel solo si ya hay una elección guardada
  useEffect(() => {
    if (!settings) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && consent) setSettings(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [settings, consent]);

  const decide = (choice: { analytics: boolean }) => {
    saveConsent(choice);
    setSettings(false);
  };

  // undefined = render de servidor: no se pinta nada hasta saber si ya eligió
  if (consent === undefined) return null;
  const showBanner = consent === null && !settings;
  if (!showBanner && !settings) return null;

  const btn =
    "h-11 px-4 rounded-full text-sm font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/15 hover:border-cyan-400/50 transition-colors";
  const policyLink = (
    <Link href={href("/cookies")} className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300">
      {t("cookies.policy")}
    </Link>
  );

  if (showBanner) {
    return (
      <div
        role="region"
        aria-label={t("cookies.title")}
        className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:left-5 sm:bottom-5 z-[70] sm:max-w-[460px]"
      >
        <div className="rounded-2xl bg-[#0a0a1a]/95 backdrop-blur-xl border border-white/10 p-5 sm:p-6 shadow-2xl shadow-black/60">
          <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 mb-4" aria-hidden="true" />
          <p className="text-white font-semibold text-lg">{t("cookies.title")}</p>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            {t("cookies.text")} {policyLink}
          </p>
          <div className="mt-4 grid grid-cols-1 min-[400px]:grid-cols-3 gap-2">
            <button type="button" onClick={() => decide({ analytics: false })} className={btn}>
              {t("cookies.reject")}
            </button>
            <button type="button" onClick={() => decide({ analytics: true })} className={btn}>
              {t("cookies.accept")}
            </button>
            <button type="button" onClick={() => setSettings(true)} className={btn}>
              {t("cookies.configure")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-end sm:place-items-center p-3">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => consent !== null && setSettings(false)}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        className="relative w-full sm:max-w-lg rounded-2xl bg-[#0a0a1a] border border-white/10 p-6 sm:p-7 shadow-2xl shadow-black/60 outline-none"
      >
        {consent !== null && (
          <button
            type="button"
            onClick={() => setSettings(false)}
            className="absolute top-4 right-4 p-1 text-white/50 hover:text-white"
            aria-label={t("cookies.close")}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        <h2 id="cookie-settings-title" className="text-2xl font-semibold text-white">
          {t("cookies.settingsTitle")}
        </h2>
        <p className="mt-2 text-sm text-white/60 leading-relaxed">
          {t("cookies.text")} {policyLink}
        </p>
        <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
          <li className="py-4 flex gap-4 items-start">
            <div className="flex-1">
              <p className="font-semibold text-white">{t("cookies.necessaryTitle")}</p>
              <p className="text-sm text-white/60">{t("cookies.necessaryText")}</p>
            </div>
            <span className="text-xs font-semibold text-cyan-400 whitespace-nowrap pt-1">{t("cookies.alwaysOn")}</span>
          </li>
          <li className="py-4">
            <label className="flex gap-4 items-start cursor-pointer">
              <div className="flex-1">
                <p className="font-semibold text-white">{t("cookies.analyticsTitle")}</p>
                <p className="text-sm text-white/60">{t("cookies.analyticsText")}</p>
              </div>
              <input
                type="checkbox"
                role="switch"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 h-5 w-5 accent-cyan-500"
              />
            </label>
          </li>
        </ul>
        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          <button type="button" onClick={() => decide({ analytics: false })} className={btn}>
            {t("cookies.reject")}
          </button>
          <button type="button" onClick={() => decide({ analytics: true })} className={btn}>
            {t("cookies.accept")}
          </button>
          <button
            type="button"
            onClick={() => decide({ analytics })}
            className="h-11 px-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            {t("cookies.save")}
          </button>
        </div>
      </div>
    </div>
  );
}
