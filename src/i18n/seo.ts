import type { Language } from "./translations";

/*
 * Títulos y descripciones de cada página para buscadores (≤60 y 140–160 caracteres).
 * El tipo obliga a tener los dos idiomas en todas las páginas.
 */

export type PageKey =
  | "home"
  | "digitalizacion"
  | "optimizacion"
  | "automatizacion"
  | "desarrollo"
  | "impresion3d"
  | "soluciones"
  | "restaurantes"
  | "inmobiliarias"
  | "negociosLocales"
  | "startups"
  | "comoTrabajamos"
  | "contacto"
  | "privacidad"
  | "terminos"
  | "cookies";

export interface PageSeo {
  title: string;
  description: string;
  /** Nombre corto para migas de pan y datos estructurados */
  name: string;
  /** Tipo de servicio (schema.org serviceType) en páginas de servicio o sector */
  serviceType?: string;
}

/** Ruta (sin prefijo de idioma) de cada página */
export const PAGE_PATHS: Record<PageKey, string> = {
  home: "/",
  digitalizacion: "/digitalizacion",
  optimizacion: "/optimizacion",
  automatizacion: "/automatizacion",
  desarrollo: "/desarrollo",
  impresion3d: "/impresion-3d",
  soluciones: "/soluciones",
  restaurantes: "/soluciones/restaurantes",
  inmobiliarias: "/soluciones/inmobiliarias",
  negociosLocales: "/soluciones/negocios-locales",
  startups: "/soluciones/startups",
  comoTrabajamos: "/como-trabajamos",
  contacto: "/contacto",
  privacidad: "/privacidad",
  terminos: "/terminos",
  cookies: "/cookies",
};

export const SEO: Record<PageKey, Record<Language, PageSeo>> = {
  home: {
    es: {
      title: "MobyApp | Digitalización, automatización y software",
      description:
        "Sistemas tecnológicos para negocios: webs que convierten, SEO, automatización, software a medida e impresión 3D. 100% online en España y Europa.",
      name: "Inicio",
    },
    en: {
      title: "MobyApp | Digitalization, automation and software",
      description:
        "Technology systems for businesses: websites that convert, SEO, process automation, custom software and 3D printing. 100% online across Spain and Europe.",
      name: "Home",
    },
  },
  digitalizacion: {
    es: {
      title: "Digitalización y SEO para pymes | MobyApp",
      description:
        "Webs orientadas a conversión, SEO local y técnico, Google Business y funnels de captación. Hacemos visible tu negocio y convertimos visitas en clientes.",
      name: "Digitalización",
      serviceType: "Digitalización de negocios y SEO",
    },
    en: {
      title: "Business digitalization and SEO for SMEs | MobyApp",
      description:
        "Conversion-focused websites, local and technical SEO, Google Business and lead capture funnels. We make your business visible and turn visits into clients.",
      name: "Digitalization",
      serviceType: "Business digitalization and SEO",
    },
  },
  optimizacion: {
    es: {
      title: "Optimización de procesos y CRM para empresas | MobyApp",
      description:
        "Auditoría de procesos, CRM ligero o a medida, chatbots y análisis de KPIs. Ayudamos a negocios que ya funcionan a reducir errores, costes y tareas manuales.",
      name: "Optimización",
      serviceType: "Optimización de procesos empresariales",
    },
    en: {
      title: "Business process optimization and CRM | MobyApp",
      description:
        "Process audits, lightweight or custom CRM, chatbots and KPI analysis. We help businesses that already work to cut errors, costs and manual tasks as they grow.",
      name: "Optimization",
      serviceType: "Business process optimization",
    },
  },
  automatizacion: {
    es: {
      title: "Automatización de procesos para negocios | MobyApp",
      description:
        "Automatizamos pedidos, reservas, facturación, seguimiento de clientes e integraciones entre herramientas para que dejes de perder horas en tareas repetitivas.",
      name: "Automatización",
      serviceType: "Automatización de procesos de negocio",
    },
    en: {
      title: "Business process automation | MobyApp",
      description:
        "We automate orders, bookings, invoicing, customer follow-up and integrations between your tools so your team stops losing hours on repetitive manual tasks.",
      name: "Automation",
      serviceType: "Business process automation",
    },
  },
  desarrollo: {
    es: {
      title: "Desarrollo de software a medida y MVPs | MobyApp",
      description:
        "Aplicaciones web, herramientas internas, backends, APIs, integraciones y MVPs para startups con Next.js, React, Django y Node.js. Software que encaja contigo.",
      name: "Desarrollo",
      serviceType: "Desarrollo de software a medida",
    },
    en: {
      title: "Custom software development and MVPs | MobyApp",
      description:
        "Web apps, internal tools, backends, APIs, integrations and startup MVPs built with Next.js, React, Django and Node.js. Custom software that fits your business.",
      name: "Development",
      serviceType: "Custom software development",
    },
  },
  impresion3d: {
    es: {
      title: "Impresión 3D profesional: prototipos y piezas | MobyApp",
      description:
        "Prototipado rápido, series cortas sin moldes, piezas a medida, carcasas, adaptadores y llaveros 3D personalizados con tu logo. Sin mínimos, desde una unidad.",
      name: "Impresión 3D",
      serviceType: "Impresión 3D y fabricación aditiva",
    },
    en: {
      title: "Professional 3D printing: prototypes and parts | MobyApp",
      description:
        "Rapid prototyping, short runs without molds, custom parts, enclosures, adapters and custom 3D keychains with your logo. No minimums, starting from one unit.",
      name: "3D printing",
      serviceType: "3D printing and additive manufacturing",
    },
  },
  soluciones: {
    es: {
      title: "Soluciones tecnológicas por sector | MobyApp",
      description:
        "Soluciones específicas para restaurantes, inmobiliarias, negocios locales y startups: reservas, CRM, SEO local, automatización de leads y desarrollo de MVPs.",
      name: "Soluciones",
    },
    en: {
      title: "Technology solutions by industry | MobyApp",
      description:
        "Specific solutions for restaurants, real estate agencies, local businesses and startups: bookings, CRM, local SEO, lead automation and MVP development.",
      name: "Solutions",
    },
  },
  restaurantes: {
    es: {
      title: "Tecnología para restaurantes: carta QR y reservas | MobyApp",
      description:
        "Menú digital con QR, reservas online, gestión automática de reseñas, fidelización, pedidos para llevar y dashboards de ocupación para tu restaurante.",
      name: "Restaurantes",
      serviceType: "Software y digitalización para restaurantes",
    },
    en: {
      title: "Restaurant technology: QR menu and bookings | MobyApp",
      description:
        "Digital QR menu, online reservations, automatic review management, loyalty program, takeaway orders and occupancy dashboards to help your restaurant grow.",
      name: "Restaurants",
      serviceType: "Restaurant software and digitalization",
    },
  },
  inmobiliarias: {
    es: {
      title: "CRM inmobiliario y automatización de leads | MobyApp",
      description:
        "CRM inmobiliario a medida, automatización de leads, fichas de propiedades optimizadas, matching cliente-propiedad y reporting de ventas para inmobiliarias.",
      name: "Inmobiliarias",
      serviceType: "CRM y automatización para inmobiliarias",
    },
    en: {
      title: "Real estate CRM and lead automation | MobyApp",
      description:
        "Custom real estate CRM, lead automation, optimized property listings, automatic client-property matching and sales reporting for real estate agencies.",
      name: "Real estate",
      serviceType: "CRM and automation for real estate agencies",
    },
  },
  negociosLocales: {
    es: {
      title: "SEO local y captación para negocios locales | MobyApp",
      description:
        "Google Business optimizado, SEO local, web orientada a conversión, sistema de reseñas, fidelización y WhatsApp Business automatizado para negocios locales.",
      name: "Negocios locales",
      serviceType: "SEO local y captación de clientes",
    },
    en: {
      title: "Local SEO and customer acquisition | MobyApp",
      description:
        "Optimized Google Business, local SEO, conversion-focused website, review system, loyalty program and automated WhatsApp Business for local businesses.",
      name: "Local businesses",
      serviceType: "Local SEO and customer acquisition",
    },
  },
  startups: {
    es: {
      title: "Desarrollo de MVP para startups | MobyApp",
      description:
        "Desarrollo de MVP, product discovery, arquitectura escalable e iteración ágil. Construimos tu producto en semanas, no meses, escalable desde el primer día.",
      name: "Startups",
      serviceType: "Desarrollo de MVP para startups",
    },
    en: {
      title: "MVP development for startups | MobyApp",
      description:
        "MVP development, product discovery, scalable architecture and agile iteration. We build your product in weeks, not months, ready to scale from day one.",
      name: "Startups",
      serviceType: "MVP development for startups",
    },
  },
  comoTrabajamos: {
    es: {
      title: "Cómo trabajamos: proceso y metodología | MobyApp",
      description:
        "Escuchamos, diseñamos, construimos y acompañamos: entrevista inicial gratuita, presupuesto cerrado, sprints de 2 semanas y soporte tras el lanzamiento.",
      name: "Cómo trabajamos",
    },
    en: {
      title: "How we work: process and methodology | MobyApp",
      description:
        "We listen, design, build and support: a free initial interview, a fixed budget with no surprises, 2-week sprints with demos and support after launch.",
      name: "How we work",
    },
  },
  contacto: {
    es: {
      title: "Contacto: cuéntanos tu proyecto | MobyApp",
      description:
        "Cuéntanos qué necesitas y te respondemos en menos de 24 horas, sin compromiso. Trabajamos 100% online con negocios y empresas de España y Europa.",
      name: "Contacto",
    },
    en: {
      title: "Contact: tell us about your project | MobyApp",
      description:
        "Tell us what you need and we'll get back to you within 24 hours, with no commitment. We work 100% online with businesses across Spain and Europe.",
      name: "Contact",
    },
  },
  privacidad: {
    es: {
      title: "Política de privacidad | MobyApp",
      description:
        "Cómo MobyApp recoge, usa y protege tus datos personales en su web y aplicaciones: responsable, finalidades, base legal, conservación y tus derechos RGPD.",
      name: "Privacidad",
    },
    en: {
      title: "Privacy policy | MobyApp",
      description:
        "How MobyApp collects, uses and protects your personal data on its website and apps: controller, purposes, legal basis, retention and your GDPR rights.",
      name: "Privacy",
    },
  },
  terminos: {
    es: {
      title: "Términos y condiciones | MobyApp",
      description:
        "Términos y condiciones de uso del sitio web y de las aplicaciones de MobyApp: requisitos, uso permitido, propiedad intelectual, responsabilidad y ley aplicable.",
      name: "Términos",
    },
    en: {
      title: "Terms and conditions | MobyApp",
      description:
        "Terms and conditions for using the MobyApp website and apps: eligibility, acceptable use, intellectual property, limitation of liability and governing law.",
      name: "Terms",
    },
  },
  cookies: {
    es: {
      title: "Política de cookies | MobyApp",
      description:
        "Qué cookies usa la web de MobyApp, para qué sirven, cuánto duran y cómo aceptar, rechazar o retirar tu consentimiento para la analítica en cualquier momento.",
      name: "Cookies",
    },
    en: {
      title: "Cookie policy | MobyApp",
      description:
        "Which cookies the MobyApp website uses, what they are for, how long they last and how to accept, reject or withdraw your consent to analytics at any time.",
      name: "Cookies",
    },
  },
};
