import type { Language } from "./translations";

/*
 * Preguntas frecuentes visibles (inicio y contacto) que también se publican como FAQPage en JSON-LD.
 * Todo sale del contenido de la propia web: no añadir precios, clientes ni cifras que no estén publicados.
 */

export type FaqItem = readonly [question: string, answer: string];

export const HOME_FAQ: Record<Language, readonly FaqItem[]> = {
  es: [
    [
      "¿Qué hace MobyApp?",
      "MobyApp construye sistemas tecnológicos para negocios. Integramos cinco áreas en un solo ecosistema: digitalización (webs orientadas a conversión, SEO y Google Business), optimización de procesos, automatización, desarrollo de software a medida e impresión 3D.",
    ],
    [
      "¿Hacéis solo páginas web?",
      "No. Una web es un escaparate; un sistema trabaja por ti. Diseñamos sistemas que captan y cualifican leads, automatizan el seguimiento y se integran con tu operativa, y la web es solo una de sus piezas.",
    ],
    [
      "¿Con qué sectores trabajáis?",
      "Tenemos soluciones específicas para restaurantes (menú digital con QR, reservas y reseñas), inmobiliarias (CRM y automatización de leads), negocios locales (SEO local, Google Business y fidelización) y startups (MVPs y sistemas escalables). Cada proyecto se adapta al negocio.",
    ],
    [
      "¿Cómo es vuestra forma de trabajar?",
      "En cuatro fases: escuchamos y analizamos tu negocio en una entrevista inicial gratuita; diseñamos una propuesta con alcance definido y presupuesto cerrado; construimos con metodología ágil, en sprints de 2 semanas con demos; y lanzamos y acompañamos con formación, soporte y optimización continua.",
    ],
    [
      "¿Dónde trabajáis?",
      "Trabajamos 100% online con negocios de España y del resto de Europa.",
    ],
    [
      "¿Qué podéis fabricar con impresión 3D?",
      "Prototipos rápidos, series cortas sin moldes, piezas personalizadas, soportes y carcasas, adaptadores y conectores, y merchandising funcional, sin mínimos y desde una sola pieza. Los llaveros 3D personalizados con el logo de tu empresa se pueden pedir en la tienda 3d.mobyapp.eu.",
    ],
    [
      "¿Cuánto cuesta un proyecto?",
      "Depende del alcance. Tras la entrevista inicial, que es gratuita, te enviamos una propuesta técnica con presupuesto cerrado, cronograma realista y entregables definidos, sin letra pequeña ni sorpresas.",
    ],
    [
      "¿Cómo empiezo?",
      "Cuéntanos qué necesitas en el formulario de contacto o escribiéndonos a hello@mobyapp.eu. Respondemos en menos de 24 horas, sin compromiso.",
    ],
  ],
  en: [
    [
      "What does MobyApp do?",
      "MobyApp builds technology systems for businesses. We integrate five areas into a single ecosystem: digitalization (conversion-focused websites, SEO and Google Business), process optimization, automation, custom software development and 3D printing.",
    ],
    [
      "Do you only build websites?",
      "No. A website is a storefront; a system works for you. We design systems that capture and qualify leads, automate follow-up and integrate with your operations, and the website is just one of their pieces.",
    ],
    [
      "Which industries do you work with?",
      "We have specific solutions for restaurants (digital QR menu, bookings and reviews), real estate agencies (CRM and lead automation), local businesses (local SEO, Google Business and loyalty) and startups (MVPs and scalable systems). Every project is adapted to the business.",
    ],
    [
      "How do you work?",
      "In four phases: we listen and analyze your business in a free initial interview; we design a proposal with defined scope and a fixed budget; we build with an agile methodology, in 2-week sprints with demos; and we launch and support you with training, support and continuous optimization.",
    ],
    [
      "Where do you work?",
      "We work 100% online with businesses in Spain and across the rest of Europe.",
    ],
    [
      "What can you make with 3D printing?",
      "Rapid prototypes, short runs without molds, custom parts, mounts and enclosures, adapters and connectors, and functional merchandising, with no minimums and starting from a single piece. Custom 3D keychains with your company logo can be ordered at 3d.mobyapp.eu.",
    ],
    [
      "How much does a project cost?",
      "It depends on the scope. After the initial interview, which is free, we send you a technical proposal with a fixed budget, a realistic timeline and defined deliverables, with no fine print or surprises.",
    ],
    [
      "How do I get started?",
      "Tell us what you need through the contact form or by emailing hello@mobyapp.eu. We respond within 24 hours, with no commitment.",
    ],
  ],
};

export const CONTACT_FAQ: Record<Language, readonly FaqItem[]> = {
  es: [
    [
      "¿Qué pasa después de enviar el formulario?",
      "Te respondemos en menos de 24 horas para concertar una entrevista inicial gratuita en la que entendemos tu negocio, tus problemas reales y tus objetivos.",
    ],
    [
      "¿Tiene coste la primera conversación?",
      "No. La entrevista inicial y el análisis de tu situación son gratuitos y sin compromiso.",
    ],
    [
      "¿Qué debo contar en el mensaje?",
      "Basta con una descripción breve: a qué se dedica tu negocio, qué problema quieres resolver y qué objetivo tienes. Sin formularios eternos; el resto lo vemos en la conversación.",
    ],
    [
      "¿Cómo se fija el presupuesto?",
      "Tras analizar tu caso te enviamos una propuesta técnica detallada con presupuesto cerrado, cronograma realista y entregables definidos.",
    ],
    [
      "¿Trabajáis con empresas fuera de España?",
      "Sí. Trabajamos 100% online con negocios de España y del resto de Europa, en español o en inglés.",
    ],
    [
      "¿Qué hacéis con mis datos?",
      "Los usamos solo para responder a tu consulta y, si lo pides, enviarte un presupuesto. No los cedemos a terceros salvo obligación legal y puedes pedir su supresión en cualquier momento en privacy@mobyapp.eu. Los detalles están en la política de privacidad.",
    ],
  ],
  en: [
    [
      "What happens after I send the form?",
      "We get back to you within 24 hours to arrange a free initial interview in which we understand your business, your real problems and your goals.",
    ],
    [
      "Is the first conversation free?",
      "Yes. The initial interview and the analysis of your situation are free and with no commitment.",
    ],
    [
      "What should I include in my message?",
      "A short description is enough: what your business does, what problem you want to solve and what your goal is. No endless forms; we cover the rest in the conversation.",
    ],
    [
      "How is the budget set?",
      "After analyzing your case we send you a detailed technical proposal with a fixed budget, a realistic timeline and defined deliverables.",
    ],
    [
      "Do you work with companies outside Spain?",
      "Yes. We work 100% online with businesses in Spain and across the rest of Europe, in Spanish or English.",
    ],
    [
      "What do you do with my data?",
      "We only use it to answer your enquiry and, if you ask, send you a quote. We don't share it with third parties unless required by law, and you can request its deletion at any time at privacy@mobyapp.eu. Details are in the privacy policy.",
    ],
  ],
};
