import type { Language } from "./translations";
import type { SectorValue } from "@/lib/signup";

/*
 * Textos de /precios y /bienvenida (alta self-serve). Los planes, add-ons y paquetes vienen de la API;
 * aquí solo va la interfaz y las plantillas por sector que se muestran también cuando no hay nada a la venta.
 */

export interface SectorTemplate {
  value: SectorValue;
  label: string;
  hint: string;
  features: string[];
}

export const SECTOR_TEMPLATES: Record<Language, SectorTemplate[]> = {
  es: [
    {
      value: "restaurante",
      label: "Restaurante",
      hint: "Carta y menú del día, reservas, reseñas de Google y tarjeta de sellos.",
      features: ["Carta digital con QR", "Reservas online", "Reseñas de Google", "Fidelización con sellos"],
    },
    {
      value: "inmobiliaria",
      label: "Inmobiliaria",
      hint: "Cartera de propiedades, CRM de compradores, documentos y redes.",
      features: ["Cartera de propiedades", "CRM de compradores", "Documentos y dossiers", "Planificador de redes"],
    },
    {
      value: "servicios",
      label: "Estética y servicios",
      hint: "Citas online con agenda del equipo, fidelización y CRM.",
      features: ["Citas online", "Agenda del equipo", "Fidelización", "CRM de clientes"],
    },
    {
      value: "eventos",
      label: "Eventos",
      hint: "Eventos, CRM y planificador de redes.",
      features: ["Gestión de eventos", "Solicitudes y presupuestos", "CRM", "Planificador de redes"],
    },
  ],
  en: [
    {
      value: "restaurante",
      label: "Restaurant",
      hint: "Menu and daily specials, bookings, Google reviews and a stamp loyalty card.",
      features: ["Digital QR menu", "Online bookings", "Google reviews", "Stamp loyalty card"],
    },
    {
      value: "inmobiliaria",
      label: "Real estate",
      hint: "Property portfolio, buyer CRM, documents and social media.",
      features: ["Property portfolio", "Buyer CRM", "Documents and brochures", "Social media planner"],
    },
    {
      value: "servicios",
      label: "Beauty and services",
      hint: "Online appointments with your team's calendar, loyalty and CRM.",
      features: ["Online appointments", "Team calendar", "Loyalty", "Customer CRM"],
    },
    {
      value: "eventos",
      label: "Events",
      hint: "Events, CRM and social media planner.",
      features: ["Event management", "Enquiries and quotes", "CRM", "Social media planner"],
    },
  ],
};

export const PRICING_TEXT = {
  es: {
    hero: {
      badge: "Precios",
      h1: "Planes claros para digitalizar tu negocio",
      subtitle: "Elige tu sector, mira qué incluye cada plan y contrata online en unos minutos. Sin permanencia: cancelas cuando quieras.",
    },
    sector: {
      title: "¿Qué tipo de negocio tienes?",
      subtitle: "Te sugerimos el plan y los módulos que mejor encajan",
      all: "Todos",
      suggested: "Recomendado",
    },
    plans: { title: "Planes", subtitle: "Suscripción" },
    addons: { title: "Módulos adicionales", subtitle: "Añádelos a tu plan" },
    packages: { title: "Paquetes y promociones", subtitle: "Ofertas especiales" },
    unit: { monthly: "/mes", yearly: "/año", setup: "pago único", dfy_monthly: "/mes" },
    setupFee: "Alta: {amount}",
    noSetupFee: "Sin coste de alta",
    trial: "{days} días de prueba gratis",
    promoFor: "{price} durante {months} meses",
    promoForOne: "{price} el primer mes",
    validUntil: "Válido hasta el {date}",
    requiresCode: "Requiere código promocional",
    choose: "Elegir",
    chosen: "Seleccionado",
    add: "Añadir",
    added: "Añadido",
    taxNote: "Precios sin IVA. Los impuestos aplicables se calculan en el pago.",
    cancelled: "Has cancelado el pago. Puedes revisar tu selección y volver a intentarlo cuando quieras.",
    promo: {
      label: "¿Tienes un código promocional?",
      placeholder: "Ej. IRONIC27",
      apply: "Aplicar",
      checking: "Comprobando…",
      remove: "Quitar",
      invalid: "Este código no es válido o ha caducado.",
      error: "No hemos podido comprobar el código. Inténtalo de nuevo.",
      soon: "Código válido; esta promoción estará disponible próximamente.",
      valid: "Código aplicado.",
      partner: "Código de {name} aplicado.",
    },
    refApplied: "Has llegado con una recomendación: la tendremos en cuenta al contratar.",
    fallback: {
      badge: "Contratación online muy pronto",
      title: "Cuéntanos tu negocio y te preparamos una propuesta",
      text: "Estamos terminando de preparar la contratación online. Mientras tanto, escríbenos y te enviamos un presupuesto cerrado adaptado a tu sector, sin compromiso.",
      cta: "Solicitar información",
      secondary: "Ver cómo trabajamos",
      sectorsTitle: "Soluciones por sector",
      sectorsSubtitle: "Lo que incluye cada plantilla",
      points: ["Respuesta en menos de 24 horas", "Presupuesto cerrado, sin sorpresas", "Sin permanencia"],
      promoKept: "Guardamos tu código {code}: menciónalo al contactarnos.",
    },
    summary: {
      title: "Tu selección",
      empty: "Elige un plan o un paquete para continuar.",
      total: "Total recurrente",
      setup: "Alta (pago único)",
      continue: "Continuar con la contratación",
    },
    checkout: {
      title: "Datos de contratación",
      subtitle: "Solo para empresas y profesionales. Pagarás de forma segura con Stripe.",
      company: "Empresa",
      owner: "Persona responsable",
      companyName: "Nombre de la empresa *",
      taxId: "CIF / NIF",
      phone: "Teléfono",
      address: "Dirección",
      city: "Ciudad",
      postalCode: "Código postal",
      province: "Provincia",
      firstName: "Nombre *",
      lastName: "Apellidos",
      email: "Email *",
      ownerPhone: "Teléfono",
      sector: "Sector",
      sectorNone: "Selecciona tu sector",
      promoCode: "Código promocional",
      b2b: "Declaro que contrato en nombre de una empresa o como profesional, no como consumidor.",
      terms: "He leído y acepto los",
      termsLink: "términos y condiciones de contratación",
      submit: "Contratar y pagar",
      sending: "Redirigiendo al pago…",
      required: "Revisa los campos obligatorios y acepta las condiciones.",
      error: "No hemos podido iniciar el pago. Inténtalo de nuevo en unos minutos.",
      secure: "Pago seguro con Stripe. Recibirás la factura por email.",
    },
  },
  en: {
    hero: {
      badge: "Pricing",
      h1: "Clear plans to digitalize your business",
      subtitle: "Choose your industry, see what each plan includes and sign up online in minutes. No lock-in: cancel whenever you want.",
    },
    sector: {
      title: "What kind of business do you run?",
      subtitle: "We suggest the plan and modules that fit best",
      all: "All",
      suggested: "Recommended",
    },
    plans: { title: "Plans", subtitle: "Subscription" },
    addons: { title: "Add-on modules", subtitle: "Add them to your plan" },
    packages: { title: "Packages and promotions", subtitle: "Special offers" },
    unit: { monthly: "/month", yearly: "/year", setup: "one-off", dfy_monthly: "/month" },
    setupFee: "Setup: {amount}",
    noSetupFee: "No setup fee",
    trial: "{days}-day free trial",
    promoFor: "{price} for {months} months",
    promoForOne: "{price} for the first month",
    validUntil: "Valid until {date}",
    requiresCode: "Requires a promo code",
    choose: "Choose",
    chosen: "Selected",
    add: "Add",
    added: "Added",
    taxNote: "Prices exclude VAT. Applicable taxes are calculated at checkout.",
    cancelled: "You cancelled the payment. You can review your selection and try again whenever you like.",
    promo: {
      label: "Have a promo code?",
      placeholder: "e.g. IRONIC27",
      apply: "Apply",
      checking: "Checking…",
      remove: "Remove",
      invalid: "This code is not valid or has expired.",
      error: "We couldn't check the code. Please try again.",
      soon: "Valid code; this promotion will be available soon.",
      valid: "Code applied.",
      partner: "{name} code applied.",
    },
    refApplied: "You arrived through a referral: we'll take it into account when you sign up.",
    fallback: {
      badge: "Online sign-up coming soon",
      title: "Tell us about your business and we'll prepare a proposal",
      text: "We're putting the finishing touches on online sign-up. In the meantime, write to us and we'll send you a fixed quote tailored to your industry, with no commitment.",
      cta: "Request information",
      secondary: "See how we work",
      sectorsTitle: "Solutions by industry",
      sectorsSubtitle: "What each template includes",
      points: ["Reply within 24 hours", "Fixed quote, no surprises", "No lock-in"],
      promoKept: "We've saved your code {code}: mention it when you contact us.",
    },
    summary: {
      title: "Your selection",
      empty: "Choose a plan or a package to continue.",
      total: "Recurring total",
      setup: "Setup (one-off)",
      continue: "Continue to sign-up",
    },
    checkout: {
      title: "Sign-up details",
      subtitle: "For businesses and professionals only. You'll pay securely with Stripe.",
      company: "Company",
      owner: "Account owner",
      companyName: "Company name *",
      taxId: "Tax ID (VAT / CIF)",
      phone: "Phone",
      address: "Address",
      city: "City",
      postalCode: "Postal code",
      province: "Province / region",
      firstName: "First name *",
      lastName: "Last name",
      email: "Email *",
      ownerPhone: "Phone",
      sector: "Industry",
      sectorNone: "Select your industry",
      promoCode: "Promo code",
      b2b: "I confirm I am signing up on behalf of a business or as a professional, not as a consumer.",
      terms: "I have read and accept the",
      termsLink: "terms and conditions of purchase",
      submit: "Sign up and pay",
      sending: "Redirecting to payment…",
      required: "Please check the required fields and accept the terms.",
      error: "We couldn't start the payment. Please try again in a few minutes.",
      secure: "Secure payment with Stripe. You'll receive the invoice by email.",
    },
  },
} satisfies Record<Language, unknown>;

export type PricingText = (typeof PRICING_TEXT)["es"];

export const WELCOME_TEXT = {
  es: {
    title: "Bienvenida",
    processing: { h1: "Estamos preparando tu cuenta…", text: "Tu pago se ha recibido. Esto solo tarda unos segundos; no cierres esta página." },
    completed: {
      h1: "¡Bienvenido a MobyApp!",
      text: "Te hemos enviado un email a {email} para crear tu contraseña.",
      textNoEmail: "Te hemos enviado un email para crear tu contraseña.",
      org: "Cuenta: {org}",
      cta: "Ir a Bridge",
      spam: "Si no ves el email en unos minutos, revisa la carpeta de spam.",
    },
    slow: {
      h1: "Tu cuenta está casi lista",
      text: "El pago se ha completado pero estamos tardando más de lo normal en crear tu cuenta. Recibirás un email en breve; si no llega en unos minutos, escríbenos.",
    },
    expired: {
      h1: "El pago no se ha completado",
      text: "La sesión de pago ha caducado o se ha cancelado. No se ha realizado ningún cargo.",
      cta: "Volver a precios",
    },
    error: {
      h1: "No hemos podido comprobar tu pago",
      text: "Si has completado el pago, recibirás un email de confirmación en breve. Si tienes dudas, contáctanos.",
      missing: "Falta el identificador de la sesión de pago.",
      cta: "Contactar",
      back: "Volver a precios",
    },
  },
  en: {
    title: "Welcome",
    processing: { h1: "We're setting up your account…", text: "Your payment has been received. This only takes a few seconds; please don't close this page." },
    completed: {
      h1: "Welcome to MobyApp!",
      text: "We've sent an email to {email} so you can create your password.",
      textNoEmail: "We've sent you an email so you can create your password.",
      org: "Account: {org}",
      cta: "Go to Bridge",
      spam: "If you don't see the email in a few minutes, check your spam folder.",
    },
    slow: {
      h1: "Your account is almost ready",
      text: "The payment went through but creating your account is taking longer than usual. You'll get an email shortly; if it doesn't arrive in a few minutes, contact us.",
    },
    expired: {
      h1: "The payment was not completed",
      text: "The payment session expired or was cancelled. You have not been charged.",
      cta: "Back to pricing",
    },
    error: {
      h1: "We couldn't check your payment",
      text: "If you completed the payment, you'll receive a confirmation email shortly. If in doubt, contact us.",
      missing: "The payment session identifier is missing.",
      cta: "Contact us",
      back: "Back to pricing",
    },
  },
} satisfies Record<Language, unknown>;

export const fill = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k: string) => (k in vars ? String(vars[k]) : `{${k}}`));
