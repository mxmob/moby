import type { SectorCopy, SLang } from "./types";

/** /sectores/inmobiliarias — cartera de propiedades, dossier, contratos, redes y CRM. */
export const INMOBILIARIAS: Record<SLang, SectorCopy> = {
  es: {
    meta: {
      title: "CRM y software para inmobiliarias: propiedades y dossier | MobyApp",
      description: "Cartera de propiedades, dossier PDF para compartir, contratos prerrellenados, publicaciones de Instagram y CRM de compradores para inmobiliarias. Pide tu demo.",
      keywords: ["CRM inmobiliaria", "software inmobiliaria", "dossier inmobiliario PDF", "programa gestión inmobiliaria", "inmobiliaria Granollers"],
      ogTitle: "Tu cartera, tus contactos y tus redes en un solo sitio",
    },
    name: "Inmobiliarias",
    cardText: "Cartera de propiedades, dossier PDF, contratos prerrellenados, posts de Instagram y CRM de compradores.",
    badge: "🏠 Agencias inmobiliarias",
    h1: "Tu cartera, tus contactos y tus redes en un solo sitio",
    subtitle: "Da de alta una propiedad una vez y úsala en tu web, en el dossier PDF, en los contratos y en Instagram. Con un CRM que no deja escapar a ningún comprador.",
    heroBullets: ["Fichas de propiedad que alimentan tu web", "Dossier PDF con enlace para compartir", "Contratos y documentos prerrellenados desde la ficha"],
    whatsappText: "Hola, tengo una inmobiliaria y me gustaría ver una demo de MobyApp.",
    pains: {
      title: "Lo que frena a una agencia",
      subtitle: "",
      items: [
        { title: "Copiar y pegar la misma propiedad", text: "Web, dossier, contrato, Instagram… La misma información escrita cinco veces." },
        { title: "Compradores en el WhatsApp y en el Excel", text: "Un interesado sin seguimiento es una operación que se lleva otro." },
        { title: "Redes sociales sin tiempo", text: "Sabes que tienes que publicar, pero entre visitas no llegas." },
      ],
    },
    steps: {
      title: "Cómo funciona",
      items: [
        { title: "Cargamos tu cartera", text: "Propiedades, fotos y datos, con tu marca." },
        { title: "Conectamos tu web", text: "Tus propiedades se publican en tu web y los formularios entran en el CRM." },
        { title: "Trabajas desde Bridge", text: "Dossiers, documentos, publicaciones y seguimiento de compradores." },
      ],
    },
    features: {
      title: "Lo que incluye",
      subtitle: "Un sistema pensado para agencias pequeñas y medianas.",
      items: [
        { module: "Propiedades", title: "Cartera y web conectadas", text: "Tus fichas se publican en tu web mediante API y los contactos llegan al CRM con la propiedad de origen.", bullets: ["Fotos, características y precio", "Formularios de la web directos al CRM"], mockup: "property" },
        { module: "Dossier y documentos", title: "Dossier PDF y contratos prerrellenados", text: "Genera el dossier de una propiedad con enlace para compartir y documentos como hoja de visita, encargo u oferta, prerrellenados desde la ficha.", bullets: ["Plantillas de partida que revisas antes de firmar", "Enlace para compartir por WhatsApp o email"], mockup: "dossier" },
        { module: "CRM", title: "Compradores y propietarios en su etapa", text: "Embudo de oportunidades con tareas, notas y avisos.", bullets: ["Etapas, tareas y recordatorios", "Origen de cada contacto (web, portal, campaña)"], mockup: "pipeline" },
        { module: "Moby Social", title: "Publicaciones de Instagram", text: "Planifica las publicaciones de tus propiedades desde el mismo panel.", bullets: ["Calendario de publicaciones", "Métricas de tus redes"], mockup: "social" },
      ],
    },
    local: { title: "Agencias del Vallès y Barcelona", text: "Equipo del Vallès Oriental. Si tu agencia está en Granollers, el Vallès o el área de Barcelona, podemos configurarlo contigo en tu oficina." },
    faq: [
      ["¿Puedo usarlo con mi web actual?", "Sí. Las propiedades se pueden publicar en tu web mediante nuestra API y los formularios crear contactos en el CRM. Si no tienes web, también te la hacemos."],
      ["¿Los contratos son válidos tal cual?", "Son plantillas de partida prerrellenadas con los datos de la ficha. Revísalas siempre (o tu asesor) antes de firmar."],
      ["¿Cuánto cuesta?", "Depende de los módulos y del tamaño de la agencia. Te damos el precio exacto en la demo."],
    ],
    form: { title: "Pide tu demo gratuita", subtitle: "Te enseñamos una inmobiliaria de demostración con propiedades, dossier y CRM.", sectors: [["inmobiliaria", "Inmobiliaria"]], sizeLabel: "Número de agentes", sizeKey: "agentes" },
    ogSubtitle: "Propiedades · Dossier PDF · Contratos · Instagram · CRM",
  },
  ca: {
    meta: {
      title: "CRM i programa per a immobiliàries: propietats i dossier | MobyApp",
      description: "Cartera de propietats, dossier PDF per compartir, contractes emplenats, publicacions d’Instagram i CRM de compradors per a immobiliàries. Demana la teva demo.",
      keywords: ["CRM immobiliària", "programa immobiliària", "dossier immobiliari"],
      ogTitle: "La teva cartera, els teus contactes i les xarxes en un sol lloc",
    },
    name: "Immobiliàries",
    cardText: "Cartera de propietats, dossier PDF, contractes emplenats, posts d’Instagram i CRM de compradors.",
    badge: "🏠 Agències immobiliàries",
    h1: "La teva cartera, els contactes i les xarxes en un sol lloc",
    subtitle: "Dona d’alta una propietat un cop i fes-la servir al web, al dossier PDF, als contractes i a Instagram. Amb un CRM que no deixa escapar cap comprador.",
    heroBullets: ["Fitxes de propietat que alimenten el web", "Dossier PDF amb enllaç per compartir", "Contractes i documents emplenats des de la fitxa"],
    whatsappText: "Hola, tinc una immobiliària i m’agradaria veure una demo de MobyApp.",
    pains: {
      title: "El que frena una agència",
      subtitle: "",
      items: [
        { title: "Copiar i enganxar la mateixa propietat", text: "Web, dossier, contracte, Instagram… La mateixa informació escrita cinc cops." },
        { title: "Compradors al WhatsApp i a l’Excel", text: "Un interessat sense seguiment és una operació que s’endú un altre." },
        { title: "Xarxes socials sense temps", text: "Saps que has de publicar, però entre visites no hi arribes." },
      ],
    },
    steps: {
      title: "Com funciona",
      items: [
        { title: "Carreguem la cartera", text: "Propietats, fotos i dades, amb la teva marca." },
        { title: "Connectem el web", text: "Les propietats es publiquen al web i els formularis entren al CRM." },
        { title: "Treballes des de Bridge", text: "Dossiers, documents, publicacions i seguiment de compradors." },
      ],
    },
    features: {
      title: "Què inclou",
      subtitle: "Un sistema pensat per a agències petites i mitjanes.",
      items: [
        { module: "Propietats", title: "Cartera i web connectats", text: "Les fitxes es publiquen al web via API i els contactes arriben al CRM amb la propietat d’origen.", bullets: ["Fotos, característiques i preu", "Formularis del web directes al CRM"], mockup: "property" },
        { module: "Dossier i documents", title: "Dossier PDF i contractes emplenats", text: "Genera el dossier d’una propietat amb enllaç per compartir i documents com full de visita, encàrrec o oferta.", bullets: ["Plantilles de partida que revises abans de signar", "Enllaç per compartir per WhatsApp o correu"], mockup: "dossier" },
        { module: "CRM", title: "Compradors i propietaris a la seva etapa", text: "Embut d’oportunitats amb tasques, notes i avisos.", bullets: ["Etapes, tasques i recordatoris", "Origen de cada contacte"], mockup: "pipeline" },
        { module: "Moby Social", title: "Publicacions d’Instagram", text: "Planifica les publicacions de les propietats des del mateix panell.", bullets: ["Calendari de publicacions", "Mètriques de les xarxes"], mockup: "social" },
      ],
    },
    local: { title: "Agències del Vallès i Barcelona", text: "Equip del Vallès Oriental. Si la teva agència és a Granollers, al Vallès o a l’àrea de Barcelona, podem configurar-ho amb tu a l’oficina." },
    faq: [
      ["El puc fer servir amb el meu web?", "Sí. Les propietats es poden publicar al web via la nostra API i els formularis creen contactes al CRM."],
      ["Els contractes són vàlids tal qual?", "Són plantilles de partida emplenades amb les dades de la fitxa. Revisa-les sempre abans de signar."],
      ["Quant costa?", "Depèn dels mòduls i de la mida de l’agència. Et donem el preu exacte a la demo."],
    ],
    form: { title: "Demana la teva demo gratuïta", subtitle: "T’ensenyem una immobiliària de demostració amb propietats, dossier i CRM.", sectors: [["inmobiliaria", "Immobiliària"]], sizeLabel: "Nombre d’agents", sizeKey: "agentes" },
    ogSubtitle: "Propietats · Dossier PDF · Contractes · Instagram · CRM",
  },
  en: {
    meta: {
      title: "CRM and software for real estate agencies | MobyApp",
      description: "Property portfolio, shareable PDF dossier, pre-filled contracts, Instagram posts and a buyer CRM for real estate agencies in Spain. Book your demo.",
      keywords: ["real estate CRM Spain", "estate agency software", "property dossier PDF"],
      ogTitle: "Your listings, contacts and social media in one place",
    },
    name: "Real estate agencies",
    cardText: "Property portfolio, PDF dossier, pre-filled contracts, Instagram posts and a buyer CRM.",
    badge: "🏠 Real estate agencies",
    h1: "Your listings, contacts and social media in one place",
    subtitle: "Add a property once and use it on your website, in the PDF dossier, in contracts and on Instagram — with a CRM that never loses a buyer.",
    heroBullets: ["Listings that feed your website", "Shareable PDF dossier", "Documents pre-filled from the listing"],
    whatsappText: "Hi, I run a real estate agency and I’d like to see a MobyApp demo.",
    pains: {
      title: "What slows an agency down",
      subtitle: "",
      items: [
        { title: "Copy-pasting the same property", text: "Website, dossier, contract, Instagram… the same details typed five times." },
        { title: "Buyers lost in WhatsApp and Excel", text: "A lead without follow-up is a deal someone else closes." },
        { title: "No time for social media", text: "You know you should post, but between viewings you never get to it." },
      ],
    },
    steps: {
      title: "How it works",
      items: [
        { title: "We load your portfolio", text: "Properties, photos and details, with your branding." },
        { title: "We connect your website", text: "Listings publish to your site and forms land in the CRM." },
        { title: "Work from Bridge", text: "Dossiers, documents, posts and buyer follow-up." },
      ],
    },
    features: {
      title: "What’s included",
      subtitle: "Built for small and mid-sized agencies.",
      items: [
        { module: "Properties", title: "Portfolio and website connected", text: "Listings publish to your website via API and enquiries reach the CRM with the property attached.", bullets: ["Photos, features and price", "Website forms straight into the CRM"], mockup: "property" },
        { module: "Dossier & documents", title: "PDF dossier and pre-filled documents", text: "Create a property dossier with a share link, plus viewing sheets, mandates or offers pre-filled from the listing.", bullets: ["Starting templates you review before signing", "Share via WhatsApp or email"], mockup: "dossier" },
        { module: "CRM", title: "Buyers and owners at every stage", text: "Deal pipeline with tasks, notes and alerts.", bullets: ["Stages, tasks and reminders", "Source of every contact"], mockup: "pipeline" },
        { module: "Moby Social", title: "Instagram posts", text: "Plan your property posts from the same dashboard.", bullets: ["Post calendar", "Social media metrics"], mockup: "social" },
      ],
    },
    local: { title: "Agencies in the Vallès and Barcelona", text: "A team based in the Vallès Oriental. Around Granollers, the Vallès or Barcelona we can set it up with you at your office." },
    faq: [
      ["Can I use it with my current website?", "Yes. Listings can be published on your site through our API and forms create CRM contacts."],
      ["Are the contracts ready to sign?", "They’re starting templates pre-filled from the listing. Always review them before signing."],
      ["How much does it cost?", "It depends on modules and agency size. We give you the exact price in the demo."],
    ],
    form: { title: "Book your free demo", subtitle: "We’ll show you a demo agency with listings, dossier and CRM.", sectors: [["inmobiliaria", "Real estate agency"]], sizeLabel: "Number of agents", sizeKey: "agentes" },
    ogSubtitle: "Listings · PDF dossier · Contracts · Instagram · CRM",
  },
};
