"use client";

import { useI18n } from "@/i18n/useI18n";
import { openCookieSettings } from "@/lib/consent";

/** Botón del pie para volver a abrir la configuración de cookies. */
export function CookieSettingsLink({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {t("footer.cookieSettings")}
    </button>
  );
}
