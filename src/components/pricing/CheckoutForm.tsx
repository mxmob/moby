"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { PRICING_TEXT, type SectorTemplate } from "@/i18n/pricing";
import { MOBY_API_URL, type SectorValue } from "@/lib/signup";

type Status = "idle" | "sending" | "error";

/** Países de la UE (para el NIF-IVA y la inversión del sujeto pasivo; GR usa el prefijo EL). */
const EU = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"];
/** Otros países habituales; el backend acepta cualquier código ISO 3166-1 de 2 letras. */
const OTHER = ["AD", "AR", "BR", "CA", "CH", "CL", "CO", "GB", "MX", "NO", "PE", "US", "UY"];

function countryOptions(lang: string) {
  let names: Intl.DisplayNames | null = null;
  try {
    names = new Intl.DisplayNames([lang === "en" ? "en" : "es"], { type: "region" });
  } catch {
    names = null;
  }
  const label = (c: string) => names?.of(c) || c;
  const sort = (list: string[]) => [...list].sort((a, b) => label(a).localeCompare(label(b), lang));
  return {
    eu: sort(EU).map((c) => ({ code: c, name: label(c) })),
    other: sort(OTHER).map((c) => ({ code: c, name: label(c) })),
  };
}

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:outline-none transition-all";

function Field({
  id,
  label,
  className = "",
  ...props
}: { id: string; label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-white/70 text-sm mb-2">
        {label}
      </label>
      <input id={id} name={id} className={inputClass} {...props} />
    </div>
  );
}

/** Saca el primer mensaje de una respuesta de error de la API ({detail} o errores por campo de DRF). */
function errorMessage(body: unknown): string {
  if (!body || typeof body !== "object") return "";
  const b = body as Record<string, unknown>;
  if (typeof b.detail === "string") return b.detail;
  for (const v of Object.values(b)) {
    if (typeof v === "string") return v;
    if (Array.isArray(v) && typeof v[0] === "string") return v[0];
    if (v && typeof v === "object") {
      const nested = errorMessage(v);
      if (nested) return nested;
    }
  }
  return "";
}

export function CheckoutForm({
  plan,
  addons,
  pkg,
  sector,
  onSectorChange,
  sectors,
  promoCode,
  refCode,
}: {
  plan: string | null;
  addons: string[];
  pkg: string | null;
  sector: SectorValue | "";
  onSectorChange: (v: SectorValue | "") => void;
  sectors: SectorTemplate[];
  promoCode: string;
  refCode: string;
}) {
  const { language, href } = useI18n();
  const tx = PRICING_TEXT[language].checkout;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [country, setCountry] = useState("ES");
  const countries = useMemo(() => countryOptions(language), [language]);
  const isEuAbroad = country !== "ES" && EU.includes(country);
  const prefix = country === "GR" ? "EL" : country;
  const taxLabel = country === "ES" ? tx.taxId : isEuAbroad ? tx.taxIdEu : tx.taxIdOther;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setError(tx.required);
      setStatus("error");
      return;
    }
    const d = new FormData(form);
    const s = (k: string) => String(d.get(k) ?? "").trim();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`${MOBY_API_URL}/signup/checkout/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          plan,
          addons,
          package: pkg,
          promo_code: s("promo_code").toUpperCase(),
          ref: refCode,
          sector: s("sector"),
          company: {
            name: s("company_name"),
            legal_name: s("company_name"),
            tax_id: s("tax_id"),
            phone: s("company_phone"),
            address: s("address"),
            city: s("city"),
            postal_code: s("postal_code"),
            province: s("province"),
            country: s("country") || "ES",
          },
          owner: {
            first_name: s("first_name"),
            last_name: s("last_name"),
            email: s("email"),
            phone: s("owner_phone"),
          },
          accept_terms: d.get("accept_terms") === "on",
          lang: language,
        }),
      });
      const body = (await res.json().catch(() => ({}))) as { url?: string };
      if (res.ok && body.url) {
        window.location.href = body.url;
        return;
      }
      setError(errorMessage(body) || tx.error);
      setStatus("error");
    } catch {
      setError(tx.error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div>
        <h3 className="text-white font-semibold text-lg mb-4">{tx.company}</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field id="company_name" label={tx.companyName} required maxLength={200} autoComplete="organization" className="sm:col-span-2" />
          <div>
            <label htmlFor="country" className="block text-white/70 text-sm mb-2">
              {tx.country}
            </label>
            <select
              id="country"
              name="country"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              autoComplete="country"
              className={`${inputClass} appearance-none`}
            >
              <optgroup label="UE / EU" className="bg-[#0a0a1a]">
                {countries.eu.map((c) => (
                  <option key={c.code} value={c.code} className="bg-[#0a0a1a]">
                    {c.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="—" className="bg-[#0a0a1a]">
                {countries.other.map((c) => (
                  <option key={c.code} value={c.code} className="bg-[#0a0a1a]">
                    {c.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
          <div>
            <Field
              id="tax_id"
              label={taxLabel}
              maxLength={32}
              placeholder={isEuAbroad ? `${prefix}123456789` : undefined}
              aria-describedby={isEuAbroad ? "tax_id_hint" : undefined}
            />
            {isEuAbroad && (
              <p id="tax_id_hint" className="mt-1 text-xs text-white/40">
                {tx.vatHint}
              </p>
            )}
          </div>
          <Field id="company_phone" label={tx.phone} type="tel" maxLength={50} autoComplete="tel" />
          <Field id="address" label={tx.address} maxLength={255} autoComplete="street-address" className="sm:col-span-2" />
          <Field id="city" label={tx.city} maxLength={100} autoComplete="address-level2" />
          <Field id="postal_code" label={tx.postalCode} maxLength={16} autoComplete="postal-code" />
          <Field id="province" label={tx.province} maxLength={100} autoComplete="address-level1" />
          <div>
            <label htmlFor="sector" className="block text-white/70 text-sm mb-2">
              {tx.sector}
            </label>
            <select
              id="sector"
              name="sector"
              value={sector}
              onChange={(e) => onSectorChange(e.target.value as SectorValue | "")}
              className={`${inputClass} appearance-none`}
            >
              <option value="" className="bg-[#0a0a1a]">
                {tx.sectorNone}
              </option>
              {sectors.map((s) => (
                <option key={s.value} value={s.value} className="bg-[#0a0a1a]">
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg mb-4">{tx.owner}</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field id="first_name" label={tx.firstName} required maxLength={150} autoComplete="given-name" />
          <Field id="last_name" label={tx.lastName} maxLength={150} autoComplete="family-name" />
          <Field id="email" label={tx.email} type="email" required maxLength={254} autoComplete="email" />
          <Field id="owner_phone" label={tx.ownerPhone} type="tel" maxLength={50} autoComplete="tel" />
        </div>
      </div>

      <Field
        id="promo_code"
        label={tx.promoCode}
        key={promoCode}
        defaultValue={promoCode}
        maxLength={64}
        autoComplete="off"
        spellCheck={false}
        className="max-w-xs"
      />

      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm text-white/70 cursor-pointer">
          <input type="checkbox" name="b2b" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-cyan-500" />
          <span>{tx.b2b}</span>
        </label>
        <label className="flex items-start gap-3 text-sm text-white/70 cursor-pointer">
          <input type="checkbox" name="accept_terms" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-cyan-500" />
          <span>
            {tx.terms}{" "}
            <Link href={href("/terminos")} target="_blank" className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300">
              {tx.termsLink}
            </Link>
            .
          </span>
        </label>
      </div>

      <div className="space-y-3">
        <button
          type="submit"
          disabled={status === "sending" || (!plan && !pkg)}
          className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? tx.sending : tx.submit}
        </button>
        <p className="flex items-center justify-center gap-2 text-xs text-white/40">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          {tx.secure}
        </p>
        <div aria-live="polite">{status === "error" && error && <p className="text-center text-red-400 text-sm">{error}</p>}</div>
      </div>
    </form>
  );
}
