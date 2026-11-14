"use client";

import { createContext } from "react";
import type { Language } from "./translations";

/** Idioma de la página, decidido por la URL en el layout de [lang] (correcto también en el servidor). */
export const LanguageContext = createContext<Language>("es");

export function I18nProvider({ lang, children }: { lang: Language; children: React.ReactNode }) {
  return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>;
}
