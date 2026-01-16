"use client";

import { useI18n } from "@/i18n/useI18n";
import { Language } from "@/i18n/translations";

const languageLabels: Record<Language, string> = {
  es: "ES",
  en: "EN",
};

export function LanguageSwitch() {
  const { language, setLanguage, supportedLanguages, isHydrated } = useI18n();

  if (!isHydrated) {
    return (
      <div className="flex items-center gap-1 text-sm">
        <span className="text-white/40">--</span>
      </div>
    );
  }

  return (
    <div 
      className="flex items-center gap-1 text-sm"
      role="group"
      aria-label="Language selection"
    >
      {supportedLanguages.map((lang, index) => (
        <span key={lang} className="flex items-center">
          <button
            onClick={() => setLanguage(lang)}
            className={`
              px-2 py-1 rounded-md transition-all duration-300
              ${language === lang 
                ? "text-cyan-400 bg-cyan-400/10" 
                : "text-white/50 hover:text-white/80 hover:bg-white/5"
              }
            `}
            aria-pressed={language === lang}
            aria-label={`Switch to ${lang === "es" ? "Spanish" : "English"}`}
          >
            {languageLabels[lang]}
          </button>
          {index < supportedLanguages.length - 1 && (
            <span className="text-white/20 mx-0.5">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
