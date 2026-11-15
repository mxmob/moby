import type { SectorCopy, SLang } from "./types";

/** /sectores/restaurantes — carta digital, pedidos online, reservas, reseñas y fidelización. */
export const RESTAURANTES: Record<SLang, SectorCopy> = {
  es: {
    meta: {
      title: "Carta digital, pedidos y reservas para restaurantes | MobyApp",
      description: "Carta QR con alérgenos, menú del día, pedidos online para recoger o a domicilio, reservas de mesa, reseñas de Google y tarjeta de sellos. Sin comisión por pedido.",
      keywords: ["carta digital restaurante", "carta QR alérgenos", "pedidos online restaurante sin comisión", "reservas restaurante online", "fidelización restaurante"],
      ogTitle: "Más mesas, más pedidos y clientes que vuelven",
    },
    name: "Restaurantes y bares",
    cardText: "Carta QR con alérgenos, menú del día, pedidos online, reservas de mesa, reseñas y tarjeta de sellos.",
    badge: "🍽️ Restaurantes, bares y cafeterías",
    h1: "Más mesas, más pedidos y clientes que vuelven",
    subtitle: "Tu carta digital con alérgenos, pedidos online sin comisiones de plataforma, reservas de mesa y más reseñas en Google. Todo gestionado desde un panel.",
    heroBullets: ["Carta QR con alérgenos y menú del día, siempre actualizada", "Pedidos online para recoger o a domicilio, sin comisión por pedido", "Reservas de mesa desde tu web y tu ficha de Google"],
    whatsappText: "Hola, tengo un restaurante y me gustaría ver una demo de MobyApp.",
    pains: {
      title: "Lo de cada día",
      subtitle: "",
      items: [
        { title: "Carta en PDF que nadie actualiza", text: "Cambias un plato o un precio y la carta del QR sigue diciendo otra cosa. Y los alérgenos, en la cabeza del camarero." },
        { title: "Comisiones de las plataformas de delivery", text: "Cada pedido que entra por una plataforma se lleva un buen pellizco del margen." },
        { title: "Reservas por teléfono en plena hora punta", text: "Suena el teléfono con la sala llena y la reserva acaba en un papel." },
      ],
    },
    steps: {
      title: "Cómo funciona",
      items: [
        { title: "Subimos tu carta", text: "Platos, precios, fotos, alérgenos y menú del día. Lo configuramos contigo." },
        { title: "QR en las mesas y enlace en tu web", text: "Carta, pedidos y reservas desde el móvil del cliente." },
        { title: "Gestionas desde Bridge", text: "Pedidos y reservas en tiempo real, reseñas y fidelización." },
      ],
    },
    features: {
      title: "Lo que incluye",
      subtitle: "Módulos que puedes activar según lo que necesite tu local.",
      items: [
        { module: "Carta digital", title: "Carta QR con alérgenos y menú del día", text: "Cambias un precio y se actualiza al momento en todas las mesas.", bullets: ["Alérgenos por plato", "Menú del día y carta en varios idiomas", "PDF del menú del día para imprimir"], mockup: "menu" },
        { module: "Pedidos online", title: "Para recoger o a domicilio", text: "Tu propio canal de pedidos, sin comisión por pedido.", bullets: ["Pago en el local o con tarjeta online (Stripe)", "Avisos de pedido nuevo en Bridge"], mockup: "orders" },
        { module: "Reservas", title: "Reservas de mesa", text: "Widget de reservas para tu web con recordatorio al cliente.", bullets: ["Turnos y capacidad", "Recordatorios por email"], mockup: "reservations" },
        { module: "Reseñas y Rewards", title: "Reseñas de Google y tarjeta de sellos", text: "QR en la mesa para opinar en Google y tarjeta de sellos en el móvil.", bullets: ["Sin filtrar opiniones (normas de Google)", "Google Wallet y tarjeta web (Apple Wallet: aún no)"], mockup: "stamps" },
      ],
    },
    local: { title: "Cerca de ti en el Vallès y Barcelona", text: "Equipo del Vallès Oriental. En Granollers, el Vallès o el área de Barcelona podemos pasar por tu local a configurarlo; si no, por videollamada." },
    faq: [
      ["¿Cobráis comisión por pedido?", "No. Cuota mensual sin comisión por pedido. Si cobras online con tarjeta, solo se aplica la comisión de Stripe."],
      ["¿Puedo cambiar la carta yo mismo?", "Sí, desde Bridge cambias platos, precios, fotos y alérgenos y se actualiza al momento."],
      ["¿Cuánto cuesta?", "Depende de los módulos. Te damos el precio exacto en la demo."],
    ],
    form: { title: "Pide tu demo gratuita", subtitle: "Te enseñamos un restaurante de demostración con carta, pedidos y reservas.", sectors: [["restaurante", "Restaurante"], ["bar", "Bar / cafetería"]], sizeLabel: "Número de mesas", sizeKey: "mesas" },
    ogSubtitle: "Carta QR · Pedidos online · Reservas · Reseñas · Sellos",
  },
  ca: {
    meta: {
      title: "Carta digital, comandes i reserves per a restaurants | MobyApp",
      description: "Carta QR amb al·lèrgens, menú del dia, comandes en línia per recollir o a domicili, reserves de taula, ressenyes de Google i targeta de segells. Sense comissió.",
      keywords: ["carta digital restaurant", "carta QR al·lèrgens", "comandes en línia restaurant"],
      ogTitle: "Més taules, més comandes i clients que tornen",
    },
    name: "Restaurants i bars",
    cardText: "Carta QR amb al·lèrgens, menú del dia, comandes en línia, reserves de taula, ressenyes i segells.",
    badge: "🍽️ Restaurants, bars i cafeteries",
    h1: "Més taules, més comandes i clients que tornen",
    subtitle: "La teva carta digital amb al·lèrgens, comandes en línia sense comissions de plataforma, reserves de taula i més ressenyes a Google. Tot des d’un panell.",
    heroBullets: ["Carta QR amb al·lèrgens i menú del dia, sempre actualitzada", "Comandes per recollir o a domicili, sense comissió per comanda", "Reserves de taula des del web i la fitxa de Google"],
    whatsappText: "Hola, tinc un restaurant i m’agradaria veure una demo de MobyApp.",
    pains: {
      title: "El de cada dia",
      subtitle: "",
      items: [
        { title: "Carta en PDF que ningú actualitza", text: "Canvies un plat o un preu i la carta del QR continua dient una altra cosa." },
        { title: "Comissions de les plataformes de repartiment", text: "Cada comanda que entra per una plataforma s’endú un bon tros del marge." },
        { title: "Reserves per telèfon en hora punta", text: "Sona el telèfon amb la sala plena i la reserva acaba en un paper." },
      ],
    },
    steps: {
      title: "Com funciona",
      items: [
        { title: "Pugem la teva carta", text: "Plats, preus, fotos, al·lèrgens i menú del dia." },
        { title: "QR a les taules i enllaç al web", text: "Carta, comandes i reserves des del mòbil del client." },
        { title: "Ho gestiones des de Bridge", text: "Comandes i reserves en temps real, ressenyes i fidelització." },
      ],
    },
    features: {
      title: "Què inclou",
      subtitle: "Mòduls que pots activar segons el que necessiti el teu local.",
      items: [
        { module: "Carta digital", title: "Carta QR amb al·lèrgens i menú del dia", text: "Canvies un preu i s’actualitza al moment a totes les taules.", bullets: ["Al·lèrgens per plat", "Menú del dia i carta en diversos idiomes", "PDF del menú del dia per imprimir"], mockup: "menu" },
        { module: "Comandes en línia", title: "Per recollir o a domicili", text: "El teu propi canal de comandes, sense comissió per comanda.", bullets: ["Pagament al local o amb targeta (Stripe)", "Avisos de comanda nova a Bridge"], mockup: "orders" },
        { module: "Reserves", title: "Reserves de taula", text: "Giny de reserves per al web amb recordatori al client.", bullets: ["Torns i capacitat", "Recordatoris per correu"], mockup: "reservations" },
        { module: "Ressenyes i Rewards", title: "Ressenyes de Google i targeta de segells", text: "QR a la taula per opinar a Google i targeta de segells al mòbil.", bullets: ["Sense filtrar opinions", "Google Wallet i targeta web (Apple Wallet: encara no)"], mockup: "stamps" },
      ],
    },
    local: { title: "A prop teu al Vallès i Barcelona", text: "Equip del Vallès Oriental. A Granollers, el Vallès o l’àrea de Barcelona podem passar pel teu local; si no, per videotrucada." },
    faq: [
      ["Cobreu comissió per comanda?", "No. Quota mensual sense comissió per comanda. Amb pagament en línia només s’aplica la comissió de Stripe."],
      ["Puc canviar la carta jo mateix?", "Sí, des de Bridge canvies plats, preus, fotos i al·lèrgens al moment."],
      ["Quant costa?", "Depèn dels mòduls. Et donem el preu exacte a la demo."],
    ],
    form: { title: "Demana la teva demo gratuïta", subtitle: "T’ensenyem un restaurant de demostració amb carta, comandes i reserves.", sectors: [["restaurante", "Restaurant"], ["bar", "Bar / cafeteria"]], sizeLabel: "Nombre de taules", sizeKey: "mesas" },
    ogSubtitle: "Carta QR · Comandes · Reserves · Ressenyes · Segells",
  },
  en: {
    meta: {
      title: "Digital menu, online orders and bookings for restaurants | MobyApp",
      description: "QR menu with allergens, daily menu, online orders for pickup or delivery, table bookings, Google reviews and a stamp card for restaurants. No commission per order.",
      keywords: ["restaurant digital menu", "QR menu allergens", "commission-free online ordering"],
      ogTitle: "More tables, more orders, more regulars",
    },
    name: "Restaurants & bars",
    cardText: "QR menu with allergens, daily menu, online orders, table bookings, reviews and stamp card.",
    badge: "🍽️ Restaurants, bars & cafés",
    h1: "More tables, more orders, more regulars",
    subtitle: "Your digital menu with allergens, online orders without platform commissions, table bookings and more Google reviews — all from one dashboard.",
    heroBullets: ["QR menu with allergens and daily menu, always up to date", "Pickup and delivery orders with no commission per order", "Table bookings from your website and Google profile"],
    whatsappText: "Hi, I run a restaurant and I’d like to see a MobyApp demo.",
    pains: {
      title: "Every single day",
      subtitle: "",
      items: [
        { title: "A PDF menu nobody updates", text: "You change a dish or a price and the QR menu still says otherwise." },
        { title: "Delivery platform commissions", text: "Every order through a platform takes a big bite out of your margin." },
        { title: "Phone bookings at peak time", text: "The phone rings with a full room and the booking ends up on a scrap of paper." },
      ],
    },
    steps: {
      title: "How it works",
      items: [
        { title: "We upload your menu", text: "Dishes, prices, photos, allergens and daily menu." },
        { title: "QR on tables, link on your site", text: "Menu, orders and bookings from the guest’s phone." },
        { title: "Manage it in Bridge", text: "Live orders and bookings, reviews and loyalty." },
      ],
    },
    features: {
      title: "What’s included",
      subtitle: "Modules you can switch on as your venue needs them.",
      items: [
        { module: "Digital menu", title: "QR menu with allergens and daily menu", text: "Change a price and it updates instantly on every table.", bullets: ["Allergens per dish", "Daily menu and multilingual menu", "Printable daily menu PDF"], mockup: "menu" },
        { module: "Online orders", title: "Pickup or delivery", text: "Your own ordering channel, no commission per order.", bullets: ["Pay at the venue or by card online (Stripe)", "New-order alerts in Bridge"], mockup: "orders" },
        { module: "Bookings", title: "Table bookings", text: "Booking widget for your website with guest reminders.", bullets: ["Shifts and capacity", "Email reminders"], mockup: "reservations" },
        { module: "Reviews & Rewards", title: "Google reviews and stamp card", text: "Table QR codes for Google reviews and a stamp card on the phone.", bullets: ["No review filtering (Google policy)", "Google Wallet and web card (Apple Wallet: not yet)"], mockup: "stamps" },
      ],
    },
    local: { title: "Close to you in the Vallès and Barcelona", text: "A team based in the Vallès Oriental. Around Granollers, the Vallès or Barcelona we can visit your venue; elsewhere, by video call." },
    faq: [
      ["Do you charge a commission per order?", "No. Monthly subscription with no commission per order. Online card payments only carry Stripe’s fee."],
      ["Can I edit the menu myself?", "Yes. In Bridge you change dishes, prices, photos and allergens instantly."],
      ["How much does it cost?", "It depends on the modules. We give you the exact price in the demo."],
    ],
    form: { title: "Book your free demo", subtitle: "We’ll show you a demo restaurant with menu, orders and bookings.", sectors: [["restaurante", "Restaurant"], ["bar", "Bar / café"]], sizeLabel: "Number of tables", sizeKey: "mesas" },
    ogSubtitle: "QR menu · Online orders · Bookings · Reviews · Stamps",
  },
};
