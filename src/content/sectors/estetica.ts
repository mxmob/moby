import type { SectorCopy, SLang } from "./types";

/** /sectores/estetica-y-bienestar — mismo motor que barberías (Citas + Rewards + Reseñas + Campañas + Vales). */
export const ESTETICA: Record<SLang, SectorCopy> = {
  es: {
    meta: {
      title: "Software de citas para centros de estética y bienestar | MobyApp",
      description: "Reservas online, recordatorios, bonos de sesiones, fidelización y reseñas de Google para centros de estética, uñas, masajes y bienestar. Sin comisión por reserva.",
      keywords: ["software centro de estética", "app citas estética", "programa reservas spa", "bonos de sesiones estética", "fidelización centro de estética"],
      ogTitle: "Cabinas llenas y clientas que repiten",
    },
    name: "Estética y bienestar",
    cardText: "Citas online por cabina y profesional, bonos de sesiones, fidelización, reseñas y recordatorios.",
    badge: "💆 Estética, uñas, masajes y bienestar",
    h1: "Cabinas llenas y clientes que repiten",
    subtitle: "Reservas online 24 h, recordatorios, bonos de sesiones y tarjeta de fidelización en el móvil. El mismo sistema que usan nuestras barberías, adaptado a tratamientos largos y bonos.",
    heroBullets: ["Tratamientos con duraciones distintas y agenda por profesional", "Bonos de sesiones y tarjetas regalo con pago online", "Recordatorios por email para reducir ausencias", "Sin comisión por reserva"],
    whatsappText: "Hola, tengo un centro de estética y me gustaría ver una demo de MobyApp.",
    pains: {
      title: "Lo que te quita tiempo (y dinero)",
      subtitle: "Un tratamiento de una hora que no se presenta es una hora perdida.",
      items: [
        { title: "Ausencias en tratamientos largos", text: "Una cancelación de última hora deja la cabina vacía y no da tiempo a llenarla." },
        { title: "Bonos en papel o en la libreta", text: "¿Cuántas sesiones le quedan? Lo buscas en la libreta mientras la clienta espera." },
        { title: "Clientas que desaparecen", text: "Terminan el bono y no vuelven. Nadie les recuerda que toca la siguiente sesión." },
      ],
    },
    steps: {
      title: "En marcha en 3 pasos",
      items: [
        { title: "Cargamos tus tratamientos", text: "Duraciones, precios, profesionales, cabinas y horarios. Lo configuramos contigo." },
        { title: "Compartes tu enlace", text: "Instagram, ficha de Google, web y QR en recepción. Reservan solas, a cualquier hora." },
        { title: "Moby hace el seguimiento", text: "Recordatorios, sesiones del bono, puntos, reseñas y reactivación de quien no vuelve." },
      ],
    },
    features: {
      title: "Un sistema pensado para tratamientos y bonos",
      subtitle: "Agenda, bonos, fidelización y reseñas conectados en Bridge.",
      items: [
        { module: "Moby Citas", title: "Reservas online por profesional y ubicación", text: "Cada tratamiento con su duración, margen entre citas y profesionales que lo hacen.", bullets: ["Márgenes antes y después de cada cita para preparar la cabina", "Cambios y cancelaciones desde el enlace del cliente, con tu política", "Recordatorios por email con la cita para el calendario"], mockup: "booking" },
        { module: "Moby Vales", title: "Bonos de sesiones y tarjetas regalo", text: "Vende bonos de 5 o 10 sesiones y tarjetas regalo online. Cada canje queda registrado.", bullets: ["Pago online con tarjeta (Stripe) y PDF para regalar", "Saldo y sesiones restantes siempre a mano", "Bonos ligados a tratamientos concretos"], mockup: "vouchers" },
        { module: "Moby Rewards", title: "Fidelización en el móvil", text: "Puntos por euro gastado, niveles y premios de cumpleaños.", bullets: ["Puntos, sellos o niveles", "Google Wallet y tarjeta web para cualquier móvil (Apple Wallet: aún no)"], mockup: "stamps" },
        { module: "Moby Reseñas y Campañas", title: "Reseñas y clientas que vuelven", text: "QR e invitaciones para Google sin filtrar opiniones, y emails automáticos para quien no vuelve.", bullets: ["Reactivación, cumpleaños y gracias por tu visita (email; WhatsApp: próximamente)", "Bajas y consentimiento gestionados (RGPD)"], mockup: "reviews" },
      ],
    },
    roi: true,
    local: { title: "Cerca de ti en el Vallès y Barcelona", text: "Equipo del Vallès Oriental. Si tu centro está en Granollers, el Vallès o el área de Barcelona, podemos ir a configurarlo contigo; si no, por videollamada." },
    faq: [
      ["¿Cobráis comisión por reserva?", "No. Cuota mensual, sin comisión por reserva ni por cliente nuevo. En ventas online de bonos solo se aplica la comisión de Stripe."],
      ["¿Puedo vender bonos de sesiones?", "Sí, con Moby Vales: bonos de sesiones y tarjetas regalo con pago online, PDF y control de saldo y canjes."],
      ["¿Los recordatorios llegan por WhatsApp?", "Hoy por email. El WhatsApp automático está en preparación."],
      ["¿Cuánto cuesta?", "Depende de los módulos y del tamaño del centro. Te damos el precio exacto en la demo, sin compromiso."],
    ],
    form: { title: "Pide tu demo gratuita", subtitle: "20 minutos, en tu centro o por videollamada.", sectors: [["estetica", "Estética / belleza"], ["bienestar", "Masajes / bienestar"], ["unas", "Uñas"]], sizeLabel: "Cabinas / profesionales", sizeKey: "cabinas" },
    ogSubtitle: "Citas online · Bonos de sesiones · Fidelización · Reseñas",
  },
  ca: {
    meta: {
      title: "Programa de cites per a centres d’estètica i benestar | MobyApp",
      description: "Reserves en línia, recordatoris, bons de sessions, fidelització i ressenyes de Google per a centres d’estètica, ungles, massatges i benestar. Sense comissió.",
      keywords: ["programa centre d’estètica", "app cites estètica", "bons de sessions"],
      ogTitle: "Cabines plenes i clientes que repeteixen",
    },
    name: "Estètica i benestar",
    cardText: "Cites en línia per cabina i professional, bons de sessions, fidelització, ressenyes i recordatoris.",
    badge: "💆 Estètica, ungles, massatges i benestar",
    h1: "Cabines plenes i clients que repeteixen",
    subtitle: "Reserves en línia 24 h, recordatoris, bons de sessions i targeta de fidelització al mòbil. El mateix sistema de les barberies, adaptat a tractaments llargs i bons.",
    heroBullets: ["Tractaments amb durades diferents i agenda per professional", "Bons de sessions i targetes regal amb pagament en línia", "Recordatoris per correu per reduir absències", "Sense comissió per reserva"],
    whatsappText: "Hola, tinc un centre d’estètica i m’agradaria veure una demo de MobyApp.",
    pains: {
      title: "El que et treu temps (i diners)",
      subtitle: "Un tractament d’una hora que no es presenta és una hora perduda.",
      items: [
        { title: "Absències en tractaments llargs", text: "Una cancel·lació d’última hora deixa la cabina buida i no hi ha temps d’omplir-la." },
        { title: "Bons en paper o a la llibreta", text: "Quantes sessions li queden? Ho busques a la llibreta mentre la clienta espera." },
        { title: "Clientes que desapareixen", text: "Acaben el bo i no tornen. Ningú els recorda que toca la sessió següent." },
      ],
    },
    steps: {
      title: "En marxa en 3 passos",
      items: [
        { title: "Carreguem els tractaments", text: "Durades, preus, professionals, cabines i horaris. Ho configurem amb tu." },
        { title: "Comparteixes l’enllaç", text: "Instagram, fitxa de Google, web i QR a recepció. Reserven soles, a qualsevol hora." },
        { title: "Moby fa el seguiment", text: "Recordatoris, sessions del bo, punts, ressenyes i reactivació de qui no torna." },
      ],
    },
    features: {
      title: "Un sistema pensat per a tractaments i bons",
      subtitle: "Agenda, bons, fidelització i ressenyes connectats a Bridge.",
      items: [
        { module: "Moby Cites", title: "Reserves en línia per professional i ubicació", text: "Cada tractament amb la seva durada, marge entre cites i professionals que el fan.", bullets: ["Marges abans i després de cada cita per preparar la cabina", "Canvis i cancel·lacions des de l’enllaç del client, amb la teva política", "Recordatoris per correu amb la cita per al calendari"], mockup: "booking" },
        { module: "Moby Vals", title: "Bons de sessions i targetes regal", text: "Ven bons de 5 o 10 sessions i targetes regal en línia. Cada bescanvi queda registrat.", bullets: ["Pagament en línia amb targeta (Stripe) i PDF per regalar", "Saldo i sessions restants sempre a mà", "Bons lligats a tractaments concrets"], mockup: "vouchers" },
        { module: "Moby Rewards", title: "Fidelització al mòbil", text: "Punts per euro gastat, nivells i premis d’aniversari.", bullets: ["Punts, segells o nivells", "Google Wallet i targeta web per a qualsevol mòbil (Apple Wallet: encara no)"], mockup: "stamps" },
        { module: "Moby Ressenyes i Campanyes", title: "Ressenyes i clientes que tornen", text: "QR i invitacions per a Google sense filtrar opinions, i correus automàtics per a qui no torna.", bullets: ["Reactivació, aniversari i gràcies per la visita (correu; WhatsApp: aviat)", "Baixes i consentiment gestionats (RGPD)"], mockup: "reviews" },
      ],
    },
    roi: true,
    local: { title: "A prop teu al Vallès i Barcelona", text: "Equip del Vallès Oriental. Si el teu centre és a Granollers, al Vallès o a l’àrea de Barcelona, podem venir a configurar-ho amb tu; si no, per videotrucada." },
    faq: [
      ["Cobreu comissió per reserva?", "No. Quota mensual, sense comissió per reserva ni per client nou. A les vendes en línia de bons només s’aplica la comissió de Stripe."],
      ["Puc vendre bons de sessions?", "Sí, amb Moby Vals: bons de sessions i targetes regal amb pagament en línia, PDF i control de saldo."],
      ["Els recordatoris arriben per WhatsApp?", "Avui per correu. El WhatsApp automàtic està en preparació."],
      ["Quant costa?", "Depèn dels mòduls i de la mida del centre. Et donem el preu exacte a la demo."],
    ],
    form: { title: "Demana la teva demo gratuïta", subtitle: "20 minuts, al teu centre o per videotrucada.", sectors: [["estetica", "Estètica / bellesa"], ["bienestar", "Massatges / benestar"], ["unas", "Ungles"]], sizeLabel: "Cabines / professionals", sizeKey: "cabinas" },
    ogSubtitle: "Cites en línia · Bons de sessions · Fidelització · Ressenyes",
  },
  en: {
    meta: {
      title: "Booking software for beauty and wellness centres | MobyApp",
      description: "Online booking, reminders, session packs, loyalty and Google reviews for beauty salons, nail bars, massage and wellness centres. No commission per booking.",
      keywords: ["beauty salon booking software", "spa appointment app", "session packs beauty"],
      ogTitle: "Full treatment rooms and clients who return",
    },
    name: "Beauty & wellness",
    cardText: "Online booking per room and therapist, session packs, loyalty, reviews and reminders.",
    badge: "💆 Beauty, nails, massage & wellness",
    h1: "Full treatment rooms and clients who return",
    subtitle: "24/7 online booking, reminders, session packs and a loyalty card on the phone. The same system our barbershops use, adapted to long treatments and packs.",
    heroBullets: ["Treatments with different durations and a diary per therapist", "Session packs and gift cards with online payment", "Email reminders to reduce no-shows", "No commission per booking"],
    whatsappText: "Hi, I run a beauty centre and I’d like to see a MobyApp demo.",
    pains: {
      title: "What costs you time (and money)",
      subtitle: "A one-hour treatment that doesn’t show up is an hour lost.",
      items: [
        { title: "No-shows on long treatments", text: "A last-minute cancellation leaves the room empty with no time to fill it." },
        { title: "Packs on paper", text: "How many sessions are left? You check the notebook while the client waits." },
        { title: "Clients who disappear", text: "They finish their pack and don’t come back. Nobody reminds them." },
      ],
    },
    steps: {
      title: "Up and running in 3 steps",
      items: [
        { title: "We load your treatments", text: "Durations, prices, therapists, rooms and hours — set up together." },
        { title: "Share your link", text: "Instagram, Google profile, website and a QR code at reception." },
        { title: "Moby follows up", text: "Reminders, pack sessions, points, reviews and win-back emails." },
      ],
    },
    features: {
      title: "Built for treatments and packs",
      subtitle: "Diary, packs, loyalty and reviews connected in Bridge.",
      items: [
        { module: "Moby Appointments", title: "Online booking per therapist and location", text: "Each treatment with its own duration, buffer time and therapists.", bullets: ["Buffers before and after each appointment to prepare the room", "Clients reschedule or cancel from their link, within your policy", "Email reminders with a calendar file"], mockup: "booking" },
        { module: "Moby Vouchers", title: "Session packs and gift cards", text: "Sell 5- or 10-session packs and gift cards online. Every redemption is logged.", bullets: ["Online card payment (Stripe) and a gift PDF", "Balance and remaining sessions always at hand", "Packs tied to specific treatments"], mockup: "vouchers" },
        { module: "Moby Rewards", title: "Loyalty on the phone", text: "Points per euro, tiers and birthday rewards.", bullets: ["Points, stamps or tiers", "Google Wallet and a web card for any phone (Apple Wallet: not yet)"], mockup: "stamps" },
        { module: "Moby Reviews & Campaigns", title: "Reviews and clients who come back", text: "QR codes and Google invitations without filtering, plus automatic win-back emails.", bullets: ["Win-back, birthday and thank-you emails (WhatsApp: coming soon)", "Consent and unsubscribes handled (GDPR)"], mockup: "reviews" },
      ],
    },
    roi: true,
    local: { title: "Close to you in the Vallès and Barcelona", text: "A team based in the Vallès Oriental. In Granollers, the Vallès or the Barcelona area we can set it up with you in person; elsewhere, by video call." },
    faq: [
      ["Do you charge a commission per booking?", "No. Monthly subscription, no commission per booking or new client. Online pack sales only carry Stripe’s fee."],
      ["Can I sell session packs?", "Yes, with Moby Vouchers: session packs and gift cards with online payment, PDF and balance tracking."],
      ["Are reminders sent by WhatsApp?", "Currently by email. Automated WhatsApp is in the works."],
      ["How much does it cost?", "It depends on modules and size. We give you the exact price in the demo."],
    ],
    form: { title: "Book your free demo", subtitle: "20 minutes, at your centre or by video call.", sectors: [["estetica", "Beauty salon"], ["bienestar", "Massage / wellness"], ["unas", "Nails"]], sizeLabel: "Rooms / therapists", sizeKey: "cabinas" },
    ogSubtitle: "Online booking · Session packs · Loyalty · Reviews",
  },
};
