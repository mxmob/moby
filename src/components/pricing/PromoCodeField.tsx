"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/useI18n";
import { PRICING_TEXT, fill } from "@/i18n/pricing";
import { MOBY_API_URL, cleanCode, type PromoResult } from "@/lib/signup";

type State = "idle" | "checking" | "valid" | "soon" | "invalid" | "error";

/**
 * Campo de código promocional: valida con POST /signup/promo/.
 * `initialCode` (de ?promo=) se valida automáticamente al montar.
 */
export function PromoCodeField({
  initialCode,
  onChange,
}: {
  initialCode: string;
  /** Código aplicado (válido) y su resultado; código vacío y null al quitarlo. */
  onChange: (code: string, result: PromoResult | null) => void;
}) {
  const { language } = useI18n();
  const tx = PRICING_TEXT[language].promo;
  const [code, setCode] = useState(initialCode);
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const validate = async (raw: string) => {
    const c = cleanCode(raw);
    if (!c) return;
    setCode(c);
    setState("checking");
    setMessage("");
    try {
      const res = await fetch(`${MOBY_API_URL}/signup/promo/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ code: c }),
      });
      const body = (await res.json().catch(() => ({}))) as PromoResult;
      if (res.ok && body.valid) {
        // Siempre guardamos el código válido (aunque la promo aún no esté disponible) para enviarlo al contratar
        onChangeRef.current(c, body);
        if (body.available === false) {
          setState("soon");
          setMessage(tx.soon);
        } else {
          setState("valid");
          const fallback = body.partner_name ? fill(tx.partner, { name: body.partner_name }) : tx.valid;
          // Los mensajes de la API vienen en español
          setMessage(language === "es" ? body.message || fallback : fallback);
        }
      } else if (res.status === 404 || res.status === 400 || body.valid === false) {
        onChangeRef.current("", null);
        setState("invalid");
        setMessage(language === "es" ? body.message || tx.invalid : tx.invalid);
      } else {
        setState("error");
        setMessage(tx.error);
      }
    } catch {
      setState("error");
      setMessage(tx.error);
    }
  };

  useEffect(() => {
    if (initialCode) void validate(initialCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCode]);

  const clear = () => {
    setCode("");
    setState("idle");
    setMessage("");
    onChangeRef.current("", null);
  };

  const applied = state === "valid" || state === "soon";
  const color = state === "valid" ? "text-green-400" : state === "soon" ? "text-cyan-300" : "text-red-400";

  return (
    <div className="w-full">
      <label htmlFor="promo-code" className="block text-white/70 text-sm mb-2">
        {tx.label}
      </label>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (applied) clear();
          else void validate(code);
        }}
      >
        <input
          id="promo-code"
          value={code}
          onChange={(e) => {
            setCode(e.target.value.toUpperCase());
            if (state !== "checking" && state !== "idle") {
              setState("idle");
              setMessage("");
            }
          }}
          readOnly={applied}
          maxLength={64}
          autoComplete="off"
          spellCheck={false}
          placeholder={tx.placeholder}
          className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 uppercase tracking-wider focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:outline-none transition-all read-only:text-white/70"
        />
        <button
          type="submit"
          disabled={state === "checking" || (!applied && !cleanCode(code))}
          className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 text-sm font-medium hover:border-cyan-400/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {state === "checking" ? tx.checking : applied ? tx.remove : tx.apply}
        </button>
      </form>
      <div aria-live="polite" className="min-h-[1.5rem]">
        {message && <p className={`mt-2 text-sm ${color}`}>{message}</p>}
      </div>
    </div>
  );
}
