"use client";

import { useState, useEffect, useCallback } from "react";
import {
  translations,
  Language,
  defaultLanguage,
  supportedLanguages,
  getNestedValue,
} from "./translations";

const STORAGE_KEY = "mobyapp_language";

function getBrowserLanguage(): Language {
  if (typeof window === "undefined") return defaultLanguage;
  
  const browserLang = navigator.language.split("-")[0].toLowerCase();
  return supportedLanguages.includes(browserLang as Language)
    ? (browserLang as Language)
    : defaultLanguage;
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return defaultLanguage;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && supportedLanguages.includes(stored as Language)) {
    return stored as Language;
  }
  
  return getBrowserLanguage();
}

export function useI18n() {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const initial = getInitialLanguage();
    setLanguageState(initial);
    setIsHydrated(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      const currentTranslations = translations[language];
      const value = getNestedValue(currentTranslations, key);
      
      // Fallback to default language if key not found
      if (value === key && language !== defaultLanguage) {
        return getNestedValue(translations[defaultLanguage], key);
      }
      
      return value;
    },
    [language]
  );

  return {
    language,
    setLanguage,
    t,
    isHydrated,
    supportedLanguages,
  };
}
