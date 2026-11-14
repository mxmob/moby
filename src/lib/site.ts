/** Configuración pública de la marca (canónicas, JSON-LD, contacto). */

/**
 * Dominio canónico. www.mobyapp.us sirve la misma web, pero canónicas, hreflang,
 * sitemap, OG y JSON-LD apuntan siempre aquí para evitar contenido duplicado.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mobyapp.eu").replace(/\/$/, "");
export const absoluteUrl = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_NAME = "MobyApp";
export const EMAIL = "hello@mobyapp.us";
/** Teléfono en formato internacional (E.164) */
export const PHONE = "+34673885283";
export const PHONE_DISPLAY = "+34 673 88 52 83";
/** Número de WhatsApp sin "+" ni espacios. Si se deja vacío, se ocultan los botones de WhatsApp. */
export const WHATSAPP = "34673885283";
export const whatsappHref = (text?: string) =>
  WHATSAPP ? `https://wa.me/${WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ""}` : "";

export const GA_ID = "G-W0F96M0XR3";
export const STORE_3D_URL = "https://3d.mobyapp.eu";
