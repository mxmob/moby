"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

/** 404 en el idioma de la URL. */
export default function NotFound() {
  const { language, href } = useI18n();
  const es = language === "es";
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 pt-32 pb-20 text-center">
      <div>
        <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{es ? "Página no encontrada" : "Page not found"}</h1>
        <p className="text-white/60 mb-8">{es ? "La página que buscas no existe o se ha movido." : "The page you are looking for doesn't exist or has moved."}</p>
        <Link href={href("/")} className="btn-primary">
          {es ? "Volver al inicio" : "Back to home"}
        </Link>
      </div>
    </main>
  );
}
