"use client";

import { useCallback, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { translations, Language, defaultLanguage, supportedLanguages, getNestedValue } from "./translations";
import { LanguageContext } from "./I18nProvider";
import { localePath, stripLocale } from "./config";

export function useI18n() {
  const language = useContext(LanguageContext);
  const router = useRouter();
  const pathname = usePathname() || "/";

  /** Cambia de idioma navegando a la misma página en el otro idioma (conserva la query). */
  const setLanguage = useCallback(
    (lang: Language) => {
      if (lang === language) return;
      const search = typeof window !== "undefined" ? window.location.search : "";
      router.push(localePath(lang, stripLocale(pathname)) + search);
    },
    [language, pathname, router]
  );

  /** Enlace interno en el idioma actual: href("/contacto") → "/en/contacto" en inglés. */
  const href = useCallback(
    (path: string) => (path.startsWith("/") ? localePath(language, path) : path),
    [language]
  );

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(translations[language], key);
      // Si falta la clave en el idioma actual, se usa el idioma por defecto
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
    href,
    // El idioma ya es correcto desde el render del servidor
    isHydrated: true,
    supportedLanguages,
  };
}
