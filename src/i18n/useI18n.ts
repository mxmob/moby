"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import {
  translations,
  Language,
  defaultLanguage,
  supportedLanguages,
  getNestedValue,
} from "./translations";

const STORAGE_KEY = "mobyapp_language";

function isSupported(lang: string | null): lang is Language {
  return !!lang && supportedLanguages.includes(lang as Language);
}

function getBrowserLanguage(): Language {
  if (typeof window === "undefined") return defaultLanguage;

  const browserLang = navigator.language.split("-")[0].toLowerCase();
  return isSupported(browserLang) ? browserLang : defaultLanguage;
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return defaultLanguage;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isSupported(stored)) return stored;
  } catch {
    // localStorage no disponible (modo privado, etc.)
  }

  return getBrowserLanguage();
}

// Estado compartido por todos los componentes que usan useI18n,
// para que al cambiar el idioma se actualice toda la página a la vez.
let currentLanguage: Language | null = null;
const listeners = new Set<() => void>();

function applyLanguage(lang: Language) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  listeners.forEach((listener) => listener());
}

// Sincroniza entre pestañas abiertas
function onStorage(e: StorageEvent) {
  if (e.key === STORAGE_KEY && isSupported(e.newValue)) applyLanguage(e.newValue);
}

function subscribe(listener: () => void) {
  if (listeners.size === 0) window.addEventListener("storage", onStorage);
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): Language {
  if (currentLanguage === null) {
    currentLanguage = getInitialLanguage();
    document.documentElement.lang = currentLanguage;
  }
  return currentLanguage;
}

function getServerSnapshot(): Language {
  return defaultLanguage;
}

export function useI18n() {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage no disponible
    }
    applyLanguage(lang);
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
