"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/useI18n";
import { Language } from "@/i18n/translations";
import { localePath, stripLocale } from "@/i18n/config";

const languageLabels: Record<Language, string> = {
  es: "ES",
  en: "EN",
};

/** ES / EN: enlaces a la misma página en el otro idioma (rastreables por buscadores). */
export function LanguageSwitch() {
  const { language, supportedLanguages } = useI18n();
  const path = stripLocale(usePathname() || "/");

  return (
    <div className="flex items-center gap-1 text-sm" role="group" aria-label="Language selection">
      {supportedLanguages.map((lang, index) => (
        <span key={lang} className="flex items-center">
          <Link
            href={localePath(lang, path)}
            hrefLang={lang}
            lang={lang}
            className={`
              px-2 py-1 rounded-md transition-all duration-300
              ${language === lang ? "text-cyan-400 bg-cyan-400/10" : "text-white/50 hover:text-white/80 hover:bg-white/5"}
            `}
            aria-current={language === lang ? "true" : undefined}
            aria-label={lang === "es" ? "Español" : "English"}
          >
            {languageLabels[lang]}
          </Link>
          {index < supportedLanguages.length - 1 && <span className="text-white/20 mx-0.5">/</span>}
        </span>
      ))}
    </div>
  );
}
