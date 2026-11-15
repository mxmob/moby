import type { SectorCopy, SLang } from "./types";

/** /barberias-y-peluquerias — la landing principal (Moby Citas + Rewards + Reseñas + Campañas + Vales). */
export const BARBERIAS: Record<SLang, SectorCopy> = {
  es: {
    meta: {
      title: "Software de reservas para barberías y peluquerías | MobyApp",
      description:
        "App de citas online, recordatorios, tarjeta de puntos y sellos, reseñas de Google y bonos regalo para barberías y peluquerías. Sin comisión por reserva.",
      keywords: [
        "software reservas barbería",
        "app citas peluquería",
        "programa de fidelización peluquería",
        "reservas online barbería",
        "tarjeta de sellos barbería",
        "agenda online peluquería",
        "barbería Granollers",
      ],
      ogTitle: "Agenda llena y clientes que vuelven",
    },
    name: "Barberías y peluquerías",
    cardText: "Citas online, recordatorios, puntos y sellos, reseñas de Google, reactivación y bonos regalo.",
    badge: "✂️ Para barberías y peluquerías",
    h1: "Agenda llena y clientes que vuelven",
    subtitle:
      "Reservas online 24 h, recordatorios automáticos, tarjeta de puntos en el móvil y más reseñas en Google. Todo en un solo sistema para tu barbería o peluquería, sin comisiones por reserva.",
    heroBullets: [
      "Enlace de reservas para Instagram, tu ficha de Google y tu web",
      "Confirmación y recordatorios automáticos para reducir plantones",
      "Puntos y sellos en el móvil, también en Google Wallet",
      "Sin comisión por reserva: los clientes son tuyos",
    ],
    whatsappText: "Hola, tengo una barbería/peluquería y me gustaría ver una demo de MobyApp.",
    pains: {
      title: "¿Te suena?",
      subtitle: "Lo que más dinero cuesta en una barbería no se ve en la caja.",
      items: [
        { title: "Plantones que vacían la agenda", text: "Un cliente que no viene es un hueco que ya no vendes. Sin un recordatorio, se olvida, y te enteras cuando ya es tarde." },
        { title: "El WhatsApp no para", text: "Das horas entre corte y corte, contestas de noche y lo apuntas en la libreta. Alguna cita se cruza o se pierde." },
        { title: "Clientes que no vuelven", text: "Vienen una vez y no sabes si volverán. Nadie les recuerda que ya les toca ni les da un motivo para repetir." },
        { title: "Pocas reseñas en Google", text: "Tus clientes salen contentos, pero no lo dicen en Google. Y la barbería de la esquina aparece antes que tú en Maps." },
      ],
    },
    steps: {
      title: "En marcha en 3 pasos",
      items: [
        { title: "Configuramos tu barbería contigo", text: "Servicios, precios, duración, equipo y horarios. Lo dejamos listo en una sesión, en persona si estás en el Vallès o en Barcelona." },
        { title: "Compartes tu enlace de reservas", text: "En la bio de Instagram, en tu ficha de Google, en tu web y en un QR en el espejo. Tus clientes reservan solos, a cualquier hora." },
        { title: "Moby trabaja mientras cortas", text: "Confirma y recuerda las citas, suma puntos o sellos en cada visita, pide la reseña y avisa a quien hace semanas que no viene." },
      ],
    },
    features: {
      title: "Todo lo que necesita tu barbería, conectado",
      subtitle: "Una agenda, una ficha por cliente y un solo panel. Sin hojas de cálculo ni cinco apps distintas.",
      items: [
        {
          module: "Moby Citas",
          title: "Reservas online y agenda del equipo",
          text: "Tus clientes eligen servicio, barbero, día y hora desde el móvil. Tú lo ves todo en la agenda de Bridge.",
          bullets: [
            "Servicios con duración y precio; cada profesional con su horario, descansos y vacaciones",
            "El cliente cambia o cancela desde su enlace, con el margen que tú decidas",
            "Confirmación y recordatorios por email (24 h y 2 h antes, configurable) con la cita para el calendario",
            "Agenda del día por email a cada profesional, check-in y control de no-shows",
          ],
          mockup: "booking",
        },
        {
          module: "Moby Citas",
          title: "Tu día, de un vistazo",
          text: "Agenda por profesional con colores por servicio. Mueves una cita arrastrando y apuntas las que llegan sin reserva o por teléfono.",
          bullets: [
            "Citas de la web, por teléfono o sin cita previa en el mismo sitio",
            "Ficha de cliente con historial de visitas",
            "Avisos en Bridge cuando entra o se cancela una reserva",
          ],
          mockup: "agenda",
        },
        {
          module: "Moby Rewards",
          title: "Tarjeta de puntos y sellos en el móvil",
          text: "Adiós a la tarjeta de cartón que se pierde. «10 sellos = corte gratis», puntos por euro gastado o las dos cosas a la vez.",
          bullets: [
            "Sellos, puntos o híbrido; niveles y catálogo de premios",
            "Puntos de bienvenida, de cumpleaños y por traer a un amigo",
            "Tarjeta en Google Wallet y página web que funciona en cualquier móvil (Apple Wallet: aún no)",
          ],
          mockup: "stamps",
        },
        {
          module: "Moby Reseñas",
          title: "Más reseñas en Google, sin trampas",
          text: "Pedir la reseña en el momento justo multiplica las opiniones. Y lo hacemos cumpliendo las normas de Google.",
          bullets: [
            "QR imprimible para el mostrador o el espejo",
            "Invitación por email después de la visita (una por visita, con baja en un clic)",
            "Opinión privada opcional para saber qué mejorar",
            "A todos se les muestra el botón de Google: no filtramos las malas ni damos premios por reseñar",
          ],
          mockup: "reviews",
        },
        {
          module: "Moby Campañas",
          title: "Recupera a los clientes que no vuelven",
          text: "Moby detecta quién hace tiempo que no viene y le escribe por ti, con un enlace directo para reservar.",
          bullets: [
            "Automatización de reactivación: «Hace 6 semanas que no te vemos»",
            "Felicitación de cumpleaños, bienvenida y gracias por tu visita",
            "Segmentos, consentimiento y bajas gestionadas (RGPD)",
            "Por email; WhatsApp automático: próximamente",
          ],
          mockup: "reactivation",
        },
        {
          module: "Moby Vales",
          title: "Bonos y tarjetas regalo",
          text: "Vende bonos de cortes y tarjetas regalo desde tu web o tu Instagram. Dinero por adelantado y clientes que vuelven.",
          bullets: [
            "Vales regalo por importe (25 €, 50 €…) y bonos de sesiones (p. ej. 5 cortes)",
            "Pago online con tarjeta (Stripe) y PDF listo para regalar",
            "Consulta de saldo y canje desde Bridge",
          ],
          mockup: "vouchers",
        },
        {
          module: "Bridge",
          title: "Un panel para todo, también en el móvil",
          text: "Bridge es tu centro de control: agenda, clientes, fidelización, reseñas y números del mes.",
          bullets: [
            "Se instala en el móvil como una app, con avisos push",
            "Analítica de tu web sin cookies e informe mensual por email",
            "App móvil nativa: próximamente",
          ],
          mockup: "panel",
        },
      ],
    },
    pack: {
      name: "Barbería Pro",
      title: "Todo lo que llena la agenda, en un pack",
      text: "Pensado para barberías y peluquerías de 1 a 10 sillas que quieren menos huecos y más clientes que repiten.",
      items: [
        "Moby Citas: reservas online, agenda del equipo y recordatorios",
        "Moby Rewards: tarjeta de puntos y sellos en el móvil",
        "Moby Reseñas: QR e invitaciones para Google",
        "Reactivación: campañas automáticas para quien no vuelve",
        "Configuración inicial con nosotros y soporte cercano",
      ],
      extra: "Opcional: bonos y tarjetas regalo con Moby Vales.",
    },
    roi: true,
    local: {
      title: "Cerca de ti: Granollers, el Vallès y Barcelona",
      text:
        "Somos un equipo del Vallès Oriental. Si tu barbería o peluquería está en Granollers, el Vallès o el área de Barcelona, podemos pasar a configurarlo contigo y a formar a tu equipo. Si estás en otro punto de España, lo hacemos por videollamada. Te atendemos en castellano y en catalán.",
    },
    faq: [
      ["¿Cobráis comisión por cada reserva o por cliente nuevo?", "No. MobyApp funciona con una cuota mensual: no cobramos comisión por reserva ni por cliente nuevo. Si vendes bonos o tarjetas regalo con pago online, solo se aplica la comisión del procesador de pagos (Stripe)."],
      ["¿Los recordatorios se envían por WhatsApp?", "Hoy la confirmación y los recordatorios se envían por email, con la cita para añadir al calendario. El envío automático por WhatsApp está en preparación. Puedes seguir usando tu WhatsApp para hablar con tus clientes."],
      ["¿Mis clientes tienen que descargarse una app?", "No. Reservan desde un enlace web y la tarjeta de puntos funciona en el navegador del móvil o en Google Wallet. No tienen que instalar nada."],
      ["¿Funciona con iPhone?", "Sí. La reserva y la tarjeta de fidelización funcionan en el navegador de cualquier móvil. La tarjeta en Apple Wallet todavía no está disponible; en Android puede guardarse en Google Wallet."],
      ["Ya uso otra app de reservas. ¿Puedo cambiarme?", "Sí. Te ayudamos a configurar servicios, equipo y horarios y vemos contigo cómo traer tu lista de clientes. La diferencia: con MobyApp el canal es tuyo, no pagas comisión por reserva y tienes fidelización, reseñas y reactivación en el mismo sistema."],
      ["¿Pedir reseñas así está permitido por Google?", "Sí. Mostramos el botón de Google a todos los clientes, sin filtrar opiniones negativas y sin dar premios a cambio de reseñas, que es lo que prohíben las normas de Google."],
      ["¿Cuánto cuesta?", "Depende de los módulos y del tamaño de tu negocio. En la demo te enseñamos el sistema con datos de ejemplo y te damos el precio exacto, sin compromiso."],
      ["¿Sirve para peluquería de señora o para un centro de estética?", "Sí. Los servicios pueden tener duraciones distintas, varias personas en el equipo y bonos de sesiones. Tienes más detalles en nuestra página de estética y bienestar."],
    ],
    form: {
      title: "Pide tu demo gratuita",
      subtitle: "20 minutos, en tu local o por videollamada. Te enseñamos una barbería de demostración funcionando.",
      sectors: [["barberia", "Barbería"], ["peluqueria", "Peluquería"]],
      sizeLabel: "Número de sillas",
      sizeKey: "sillas",
    },
    ogSubtitle: "Citas online · Puntos y sellos · Reseñas · Reactivación · Bonos",
  },

  ca: {
    meta: {
      title: "Programa de reserves per a barberies i perruqueries | MobyApp",
      description:
        "Cites en línia, recordatoris, targeta de punts i segells, ressenyes de Google i vals regal per a barberies i perruqueries. Sense comissió per reserva.",
      keywords: ["programa reserves barberia", "app cites perruqueria", "programa de fidelització perruqueria", "barberia Granollers", "reserves en línia barberia"],
      ogTitle: "Agenda plena i clients que tornen",
    },
    name: "Barberies i perruqueries",
    cardText: "Cites en línia, recordatoris, punts i segells, ressenyes de Google, reactivació i vals regal.",
    badge: "✂️ Per a barberies i perruqueries",
    h1: "Agenda plena i clients que tornen",
    subtitle:
      "Reserves en línia 24 h, recordatoris automàtics, targeta de punts al mòbil i més ressenyes a Google. Tot en un sol sistema per a la teva barberia o perruqueria, sense comissions per reserva.",
    heroBullets: [
      "Enllaç de reserves per a Instagram, la fitxa de Google i el web",
      "Confirmació i recordatoris automàtics per reduir plantades",
      "Punts i segells al mòbil, també a Google Wallet",
      "Sense comissió per reserva: els clients són teus",
    ],
    whatsappText: "Hola, tinc una barberia/perruqueria i m’agradaria veure una demo de MobyApp.",
    pains: {
      title: "Et sona?",
      subtitle: "El que més diners costa en una barberia no es veu a la caixa.",
      items: [
        { title: "Plantades que buiden l’agenda", text: "Un client que no ve és un forat que ja no vens. Sense recordatori se n’oblida, i te n’assabentes quan ja és tard." },
        { title: "El WhatsApp no para", text: "Dones hores entre tall i tall, contestes de nit i ho apuntes a la llibreta. Alguna cita es creua o es perd." },
        { title: "Clients que no tornen", text: "Vénen un cop i no saps si tornaran. Ningú els recorda que ja els toca ni els dona un motiu per repetir." },
        { title: "Poques ressenyes a Google", text: "Els teus clients surten contents, però no ho diuen a Google. I la barberia de la cantonada surt abans a Maps." },
      ],
    },
    steps: {
      title: "En marxa en 3 passos",
      items: [
        { title: "Configurem la barberia amb tu", text: "Serveis, preus, durada, equip i horaris. Ho deixem a punt en una sessió, en persona si ets al Vallès o a Barcelona." },
        { title: "Comparteixes el teu enllaç de reserves", text: "A la bio d’Instagram, a la fitxa de Google, al web i en un QR al mirall. Els clients reserven sols, a qualsevol hora." },
        { title: "Moby treballa mentre talles", text: "Confirma i recorda les cites, suma punts o segells a cada visita, demana la ressenya i avisa qui fa setmanes que no ve." },
      ],
    },
    features: {
      title: "Tot el que necessita la teva barberia, connectat",
      subtitle: "Una agenda, una fitxa per client i un sol panell. Sense fulls de càlcul ni cinc apps diferents.",
      items: [
        { module: "Moby Cites", title: "Reserves en línia i agenda de l’equip", text: "Els clients trien servei, barber, dia i hora des del mòbil. Tu ho veus tot a l’agenda de Bridge.", bullets: ["Serveis amb durada i preu; cada professional amb el seu horari, descansos i vacances", "El client canvia o cancel·la des del seu enllaç, amb el marge que tu decideixis", "Confirmació i recordatoris per correu (24 h i 2 h abans, configurable) amb la cita per al calendari", "Agenda del dia per correu a cada professional, check-in i control de no-shows"], mockup: "booking" },
        { module: "Moby Cites", title: "El teu dia, d’un cop d’ull", text: "Agenda per professional amb colors per servei. Mous una cita arrossegant i apuntes les que arriben sense reserva o per telèfon.", bullets: ["Cites del web, per telèfon o sense cita prèvia al mateix lloc", "Fitxa de client amb historial de visites", "Avisos a Bridge quan entra o es cancel·la una reserva"], mockup: "agenda" },
        { module: "Moby Rewards", title: "Targeta de punts i segells al mòbil", text: "Adeu a la targeta de cartró que es perd. «10 segells = tall gratis», punts per euro gastat o totes dues coses.", bullets: ["Segells, punts o híbrid; nivells i catàleg de premis", "Punts de benvinguda, d’aniversari i per portar un amic", "Targeta a Google Wallet i pàgina web que funciona a qualsevol mòbil (Apple Wallet: encara no)"], mockup: "stamps" },
        { module: "Moby Ressenyes", title: "Més ressenyes a Google, sense trampes", text: "Demanar la ressenya al moment just multiplica les opinions. I ho fem complint les normes de Google.", bullets: ["QR imprimible per al taulell o el mirall", "Invitació per correu després de la visita (una per visita, amb baixa en un clic)", "Opinió privada opcional per saber què millorar", "A tothom se li mostra el botó de Google: no filtrem les dolentes ni donem premis per ressenyar"], mockup: "reviews" },
        { module: "Moby Campanyes", title: "Recupera els clients que no tornen", text: "Moby detecta qui fa temps que no ve i li escriu per tu, amb un enllaç directe per reservar.", bullets: ["Automatització de reactivació: «Fa 6 setmanes que no et veiem»", "Felicitació d’aniversari, benvinguda i gràcies per la visita", "Segments, consentiment i baixes gestionades (RGPD)", "Per correu; WhatsApp automàtic: aviat"], mockup: "reactivation" },
        { module: "Moby Vals", title: "Bons i targetes regal", text: "Ven bons de talls i targetes regal des del web o l’Instagram. Diners per avançat i clients que tornen.", bullets: ["Vals regal per import (25 €, 50 €…) i bons de sessions (p. ex. 5 talls)", "Pagament en línia amb targeta (Stripe) i PDF a punt per regalar", "Consulta de saldo i bescanvi des de Bridge"], mockup: "vouchers" },
        { module: "Bridge", title: "Un panell per a tot, també al mòbil", text: "Bridge és el teu centre de control: agenda, clients, fidelització, ressenyes i números del mes.", bullets: ["S’instal·la al mòbil com una app, amb avisos push", "Analítica del web sense galetes i informe mensual per correu", "App mòbil nativa: aviat"], mockup: "panel" },
      ],
    },
    pack: {
      name: "Barberia Pro",
      title: "Tot el que omple l’agenda, en un pack",
      text: "Pensat per a barberies i perruqueries d’1 a 10 cadires que volen menys forats i més clients que repeteixen.",
      items: ["Moby Cites: reserves en línia, agenda de l’equip i recordatoris", "Moby Rewards: targeta de punts i segells al mòbil", "Moby Ressenyes: QR i invitacions per a Google", "Reactivació: campanyes automàtiques per a qui no torna", "Configuració inicial amb nosaltres i suport proper"],
      extra: "Opcional: bons i targetes regal amb Moby Vals.",
    },
    roi: true,
    local: {
      title: "A prop teu: Granollers, el Vallès i Barcelona",
      text: "Som un equip del Vallès Oriental. Si la teva barberia o perruqueria és a Granollers, al Vallès o a l’àrea de Barcelona, podem passar a configurar-ho amb tu i formar el teu equip. Si ets en un altre punt, ho fem per videotrucada. T’atenem en català i en castellà.",
    },
    faq: [
      ["Cobreu comissió per cada reserva o per client nou?", "No. MobyApp funciona amb una quota mensual: no cobrem comissió per reserva ni per client nou. Si vens bons o targetes regal amb pagament en línia, només s’aplica la comissió del processador de pagaments (Stripe)."],
      ["Els recordatoris s’envien per WhatsApp?", "Avui la confirmació i els recordatoris s’envien per correu, amb la cita per afegir al calendari. L’enviament automàtic per WhatsApp està en preparació. Pots continuar fent servir el teu WhatsApp per parlar amb els clients."],
      ["Els clients s’han de descarregar una app?", "No. Reserven des d’un enllaç web i la targeta de punts funciona al navegador del mòbil o a Google Wallet."],
      ["Funciona amb iPhone?", "Sí. La reserva i la targeta funcionen al navegador de qualsevol mòbil. La targeta a Apple Wallet encara no està disponible; a Android es pot desar a Google Wallet."],
      ["Ja faig servir una altra app de reserves. Puc canviar?", "Sí. T’ajudem a configurar serveis, equip i horaris i mirem amb tu com portar la llista de clients. Amb MobyApp el canal és teu, no pagues comissió per reserva i tens fidelització, ressenyes i reactivació al mateix sistema."],
      ["Demanar ressenyes així està permès per Google?", "Sí. Mostrem el botó de Google a tots els clients, sense filtrar opinions negatives i sense donar premis a canvi de ressenyes."],
      ["Quant costa?", "Depèn dels mòduls i de la mida del negoci. A la demo t’ensenyem el sistema amb dades d’exemple i et donem el preu exacte, sense compromís."],
      ["Serveix per a perruqueria de senyora o un centre d’estètica?", "Sí. Els serveis poden tenir durades diferents, diverses persones a l’equip i bons de sessions."],
    ],
    form: {
      title: "Demana la teva demo gratuïta",
      subtitle: "20 minuts, al teu local o per videotrucada. T’ensenyem una barberia de demostració funcionant.",
      sectors: [["barberia", "Barberia"], ["peluqueria", "Perruqueria"]],
      sizeLabel: "Nombre de cadires",
      sizeKey: "sillas",
    },
    ogSubtitle: "Cites en línia · Punts i segells · Ressenyes · Reactivació · Bons",
  },

  en: {
    meta: {
      title: "Booking software for barbershops and hair salons | MobyApp",
      description:
        "Online booking, reminders, points and stamp cards, Google reviews and gift cards for barbershops and hair salons in Spain. No commission per booking.",
      keywords: ["barbershop booking software", "hair salon appointment app", "salon loyalty program", "barber Barcelona software"],
      ogTitle: "A full diary and clients who come back",
    },
    name: "Barbershops & hair salons",
    cardText: "Online booking, reminders, points and stamps, Google reviews, win-back campaigns and gift cards.",
    badge: "✂️ For barbershops & hair salons",
    h1: "A full diary and clients who come back",
    subtitle:
      "24/7 online booking, automatic reminders, a loyalty card on your clients’ phones and more Google reviews. One system for your barbershop or salon, with no commission per booking.",
    heroBullets: [
      "Booking link for Instagram, your Google profile and your website",
      "Automatic confirmations and reminders to cut no-shows",
      "Points and stamps on the phone, also in Google Wallet",
      "No commission per booking: your clients stay yours",
    ],
    whatsappText: "Hi, I run a barbershop/hair salon and I’d like to see a MobyApp demo.",
    pains: {
      title: "Sound familiar?",
      subtitle: "What costs a barbershop the most money never shows up in the till.",
      items: [
        { title: "No-shows that empty your diary", text: "A client who doesn’t turn up is a slot you can’t sell anymore. Without a reminder, they forget." },
        { title: "WhatsApp never stops", text: "You book clients between cuts, reply at night and write it in a notebook. Some appointments clash or get lost." },
        { title: "Clients who don’t come back", text: "They come once and you don’t know if they’ll return. Nobody reminds them it’s time for a cut." },
        { title: "Too few Google reviews", text: "Your clients leave happy but don’t say so on Google, and the shop round the corner ranks above you on Maps." },
      ],
    },
    steps: {
      title: "Up and running in 3 steps",
      items: [
        { title: "We set it up with you", text: "Services, prices, durations, team and opening hours, ready in one session — in person if you’re in the Vallès or Barcelona area." },
        { title: "Share your booking link", text: "In your Instagram bio, Google profile, website and a QR code on the mirror. Clients book on their own, any time." },
        { title: "Moby works while you cut", text: "It confirms and reminds, adds points or stamps on every visit, asks for the review and nudges clients who haven’t been in for weeks." },
      ],
    },
    features: {
      title: "Everything your barbershop needs, connected",
      subtitle: "One diary, one profile per client and one dashboard. No spreadsheets, no five different apps.",
      items: [
        { module: "Moby Appointments", title: "Online booking and team diary", text: "Clients pick service, barber, day and time from their phone. You see everything in the Bridge diary.", bullets: ["Services with duration and price; each team member with their own hours, breaks and holidays", "Clients reschedule or cancel from their link, within the notice you set", "Email confirmation and reminders (24 h and 2 h before, configurable) with a calendar file", "Daily agenda email for each team member, check-in and no-show tracking"], mockup: "booking" },
        { module: "Moby Appointments", title: "Your day at a glance", text: "A diary per team member, colour-coded by service. Drag to move appointments and add walk-ins or phone bookings.", bullets: ["Web, phone and walk-in appointments in one place", "Client profile with visit history", "Bridge alerts when a booking comes in or is cancelled"], mockup: "agenda" },
        { module: "Moby Rewards", title: "Points and stamp card on the phone", text: "No more lost paper cards. “10 stamps = free haircut”, points per euro spent, or both.", bullets: ["Stamps, points or hybrid; tiers and rewards catalogue", "Welcome, birthday and refer-a-friend points", "Google Wallet card and a web card that works on any phone (Apple Wallet: not yet)"], mockup: "stamps" },
        { module: "Moby Reviews", title: "More Google reviews, no tricks", text: "Asking at the right moment multiplies reviews — and we do it within Google’s rules.", bullets: ["Printable QR code for the counter or mirror", "Email invitation after the visit (one per visit, one-click unsubscribe)", "Optional private feedback so you know what to improve", "Everyone sees the Google button: we don’t filter bad reviews or reward reviewers"], mockup: "reviews" },
        { module: "Moby Campaigns", title: "Win back clients who stopped coming", text: "Moby spots who hasn’t been in for a while and writes to them for you, with a direct booking link.", bullets: ["Win-back automation: “We haven’t seen you for 6 weeks”", "Birthday, welcome and thank-you emails", "Segments, consent and unsubscribes handled (GDPR)", "By email; automated WhatsApp: coming soon"], mockup: "reactivation" },
        { module: "Moby Vouchers", title: "Packs and gift cards", text: "Sell haircut packs and gift cards from your website or Instagram. Money up front and clients who return.", bullets: ["Gift cards by amount (€25, €50…) and session packs (e.g. 5 haircuts)", "Online card payment (Stripe) and a ready-to-gift PDF", "Balance check and redemption from Bridge"], mockup: "vouchers" },
        { module: "Bridge", title: "One dashboard for everything, on your phone too", text: "Bridge is your control centre: diary, clients, loyalty, reviews and monthly figures.", bullets: ["Installs on your phone like an app, with push notifications", "Cookieless website analytics and a monthly email report", "Native mobile app: coming soon"], mockup: "panel" },
      ],
    },
    pack: {
      name: "Barber Pro",
      title: "Everything that fills the diary, in one pack",
      text: "Built for barbershops and salons with 1 to 10 chairs that want fewer gaps and more repeat clients.",
      items: ["Moby Appointments: online booking, team diary and reminders", "Moby Rewards: points and stamp card on the phone", "Moby Reviews: QR codes and Google review invitations", "Win-back: automatic campaigns for clients who don’t return", "Onboarding with us and friendly local support"],
      extra: "Optional: packs and gift cards with Moby Vouchers.",
    },
    roi: true,
    local: {
      title: "Close to you: Granollers, the Vallès and Barcelona",
      text: "We’re a team based in the Vallès Oriental. If your barbershop or salon is in Granollers, the Vallès or the Barcelona area, we can come over to set it up and train your team. Elsewhere in Spain, we do it by video call. We speak Spanish, Catalan and English.",
    },
    faq: [
      ["Do you charge a commission per booking or per new client?", "No. MobyApp is a monthly subscription: no commission per booking or per new client. If you sell packs or gift cards with online payment, only the payment processor’s fee (Stripe) applies."],
      ["Are reminders sent by WhatsApp?", "Today confirmations and reminders are sent by email, with a calendar file. Automated WhatsApp messages are in the works. You can keep using your WhatsApp to chat with clients."],
      ["Do my clients need to download an app?", "No. They book from a web link and the loyalty card works in the phone’s browser or in Google Wallet."],
      ["Does it work on iPhone?", "Yes. Booking and the loyalty card work in any phone’s browser. Apple Wallet passes aren’t available yet; on Android the card can be saved to Google Wallet."],
      ["I already use another booking app. Can I switch?", "Yes. We help you set up services, team and hours and look at how to bring your client list. With MobyApp the channel is yours, there’s no commission per booking, and loyalty, reviews and win-back live in the same system."],
      ["Is asking for reviews this way allowed by Google?", "Yes. Every client sees the Google button, with no filtering of negative opinions and no rewards for reviews — the practices Google’s policies forbid."],
      ["How much does it cost?", "It depends on the modules and the size of your business. In the demo we show you the system with sample data and give you the exact price, no commitment."],
    ],
    form: {
      title: "Book your free demo",
      subtitle: "20 minutes, at your shop or by video call. We’ll show you a demo barbershop running live.",
      sectors: [["barberia", "Barbershop"], ["peluqueria", "Hair salon"]],
      sizeLabel: "Number of chairs",
      sizeKey: "sillas",
    },
    ogSubtitle: "Online booking · Points & stamps · Reviews · Win-back · Gift cards",
  },
};
