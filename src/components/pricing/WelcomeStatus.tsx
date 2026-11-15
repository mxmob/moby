"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { WELCOME_TEXT, fill } from "@/i18n/pricing";
import { MOBY_API_URL, type CheckoutStatus } from "@/lib/signup";

type View = "processing" | "completed" | "slow" | "expired" | "error" | "missing";

const POLL_MS = 2000;
const MAX_MS = 30000;
const SESSION_RE = /^cs_[A-Za-z0-9_]{1,250}$/;

const safeUrl = (u?: string | null) => {
  try {
    return u && new URL(u).protocol === "https:" ? u : "";
  } catch {
    return "";
  }
};

export function WelcomeStatus() {
  const { language, href } = useI18n();
  const tx = WELCOME_TEXT[language];
  const [view, setView] = useState<View>("processing");
  const [info, setInfo] = useState<CheckoutStatus | null>(null);

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get("session_id") || "";
    if (!SESSION_RE.test(sessionId)) {
      setView("missing");
      return;
    }
    let stopped = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let gotResponse = false;
    const started = Date.now();

    const poll = async () => {
      try {
        const res = await fetch(`${MOBY_API_URL}/signup/checkout/status/?session_id=${encodeURIComponent(sessionId)}`, {
          headers: { Accept: "application/json" },
          cache: "no-store",
        });
        if (res.ok) {
          gotResponse = true;
          const body = (await res.json()) as CheckoutStatus;
          if (stopped) return;
          setInfo(body);
          if (body.status === "completed") return setView("completed");
          if (body.status === "expired") return setView("expired");
        } else if (res.status === 404 || res.status === 400) {
          if (!stopped) setView("error");
          return;
        }
      } catch {
        /* red caída: reintentamos hasta el límite */
      }
      if (stopped) return;
      if (Date.now() - started >= MAX_MS) {
        setView(gotResponse ? "slow" : "error");
        return;
      }
      timer = setTimeout(poll, POLL_MS);
    };
    void poll();
    return () => {
      stopped = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  const bridge = safeUrl(info?.bridge_url);
  const primaryBtn =
    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-100";
  const secondaryBtn =
    "inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 text-white/80 font-medium hover:border-white/20 hover:text-white transition-all";

  let icon: React.ReactNode;
  let h1 = "";
  let body: React.ReactNode = null;
  let actions: React.ReactNode = null;

  switch (view) {
    case "processing":
      icon = <span className="w-10 h-10 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" aria-hidden="true" />;
      h1 = tx.processing.h1;
      body = <p>{tx.processing.text}</p>;
      break;
    case "completed":
      icon = (
        <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
      h1 = tx.completed.h1;
      body = (
        <>
          <p>{info?.email ? fill(tx.completed.text, { email: info.email }) : tx.completed.textNoEmail}</p>
          {info?.organization && <p className="mt-2 text-white/40 text-sm">{fill(tx.completed.org, { org: info.organization })}</p>}
          <p className="mt-4 text-white/40 text-sm">{tx.completed.spam}</p>
        </>
      );
      actions = bridge ? (
        <a href={bridge} className={primaryBtn}>
          {tx.completed.cta}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      ) : null;
      break;
    case "slow":
      icon = (
        <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
      h1 = tx.slow.h1;
      body = <p>{tx.slow.text}</p>;
      actions = (
        <Link href={href("/contacto")} className={secondaryBtn}>
          {tx.error.cta}
        </Link>
      );
      break;
    case "expired":
      icon = (
        <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
      h1 = tx.expired.h1;
      body = <p>{tx.expired.text}</p>;
      actions = (
        <Link href={href("/precios")} className={primaryBtn}>
          {tx.expired.cta}
        </Link>
      );
      break;
    default:
      icon = (
        <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
      h1 = tx.error.h1;
      body = (
        <>
          {view === "missing" && <p className="mb-2">{tx.error.missing}</p>}
          <p>{tx.error.text}</p>
        </>
      );
      actions = (
        <>
          <Link href={href("/contacto")} className={primaryBtn}>
            {tx.error.cta}
          </Link>
          <Link href={href("/precios")} className={secondaryBtn}>
            {tx.error.back}
          </Link>
        </>
      );
  }

  return (
    <main>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.08) 0%, transparent 50%)" }}
        />
        <div className="relative w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 text-center" aria-live="polite">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center">{icon}</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">{h1}</h1>
            <div className="text-lg text-white/60 leading-relaxed">{body}</div>
            {actions && <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">{actions}</div>}
          </div>
        </div>
      </section>
    </main>
  );
}
