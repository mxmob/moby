// Contenido de la landing «Sorteos de Instagram y Facebook verificables» (Moby Social). es/ca/en.
// Sin precios, sin testimonios ni cifras inventadas. Los límites de la API de Meta se dicen claro.
import type { GiveawayLang } from "./meta";

export type GiveawayCopy = {
  meta: { title: string; description: string; keywords: string[] };
  name: string;
  home: string;
  badge: string;
  h1: string;
  subtitle: string;
  heroBullets: string[];
  ctaLead: string;
  ctaDemo: string;
  heroNote: string;
  features: { kicker: string; title: string; subtitle: string; items: { title: string; text: string }[] };
  filters: { title: string; items: string[] };
  fair: {
    kicker: string; title: string; subtitle: string;
    steps: { title: string; text: string }[];
    formulaLabel: string; formula: string; formulaNote: string;
    extras: { title: string; text: string }[];
  };
  legal: { kicker: string; title: string; text: string; items: string[]; disclaimer: string };
  limits: { kicker: string; title: string; subtitle: string; items: { title: string; text: string }[] };
  meta_rules: { title: string; subtitle: string; items: string[] };
  steps: { title: string; items: { title: string; text: string }[] };
  faqTitle: string;
  faq: [string, string][];
  form: {
    kicker: string; title: string; text: string;
    name: string; email: string; business: string; phone: string; phoneHint: string;
    consent: string; privacy: string; marketing: string;
    submit: string; sending: string; success: string; successText: string;
    error: string; invalid: string; demo: string; trust: string;
  };
  demoBlock: { title: string; text: string; cta: string; whatsapp: string };
  whatsappText: string;
  privacyHref: string;
  contactHref: string;
};

export const GIVEAWAY: Record<GiveawayLang, GiveawayCopy> = {
  es: {
    meta: {
      title: "Sorteo de Instagram verificable: elige ganadores de los comentarios | MobyApp",
      description: "Haz sorteos de Instagram y Facebook entre los comentarios de tu publicación o reel con filtros, suplentes, certificado PDF y verificación pública (commit-reveal con SHA-256). Incluido en Moby Social.",
      keywords: ["sorteo instagram", "sorteo de instagram", "elegir ganador instagram", "sorteo comentarios instagram", "sorteo facebook", "bases legales sorteo instagram", "sorteo verificable"],
    },
    name: "Sorteos de Instagram y Facebook",
    home: "Inicio",
    badge: "🎁 Moby Social · Sorteos verificables",
    h1: "Sorteos de Instagram y Facebook que cualquiera puede verificar",
    subtitle: "Elige ganadores al azar entre los comentarios de tu publicación o reel, con filtros claros, suplentes y una página pública donde tus seguidores pueden comprobar que el sorteo fue limpio.",
    heroBullets: [
      "Comentarios de tus propias publicaciones y reels de Instagram o Facebook",
      "Filtros: menciones mínimas, hashtag o palabra clave, una participación por persona, fecha límite",
      "Ganadores y suplentes, certificado PDF e imagen para anunciar el resultado",
      "Verificación pública: semilla secreta publicada como hash antes del sorteo y revelada después",
    ],
    ctaLead: "Quiero hacer sorteos con Moby",
    ctaDemo: "Pedir una demo",
    heroNote: "Funciona con tu cuenta profesional de Instagram o tu página de Facebook conectadas a Moby Social. En esta web no se hacen sorteos.",
    features: {
      kicker: "Qué incluye",
      title: "Todo el sorteo, de los comentarios al anuncio del ganador",
      subtitle: "Dentro de Moby Social, en Bridge, el mismo panel desde el que gestionas tus redes.",
      items: [
        { title: "Ganadores al azar entre los comentarios", text: "Eliges la publicación o el reel, Moby trae los comentarios y congela la lista de participantes antes de sortear." },
        { title: "Ganadores y suplentes", text: "Defines cuántos ganadores y cuántos suplentes quieres. Si un ganador no cumple las condiciones o no responde, pasas al siguiente suplente." },
        { title: "Pantalla de sorteo animada", text: "Una pantalla pensada para emitir en directo o en stream, para que tu comunidad vea el sorteo en tiempo real." },
        { title: "Certificado PDF e imagen del ganador", text: "Certificado con los datos de verificación e imagen para stories o feed con los colores de tu marca." },
      ],
    },
    filters: {
      title: "Filtros para que solo cuenten los comentarios válidos",
      items: [
        "Número mínimo de @menciones por comentario",
        "Hashtag o palabra clave obligatoria",
        "Una participación por usuario, o que cada comentario cuente con un máximo por persona",
        "Excluir tu propia cuenta y una lista de cuentas del equipo",
        "Excluir los comentarios publicados después de la fecha límite",
      ],
    },
    fair: {
      kicker: "Transparencia",
      title: "Cómo se verifica que el sorteo es justo",
      subtitle: "Usamos un esquema «commit-reveal»: nos comprometemos con el resultado antes de sortear, sin poder cambiarlo después.",
      steps: [
        { title: "Antes del sorteo", text: "Publicamos el hash SHA-256 de una semilla secreta generada en el servidor y el hash de la lista de participantes congelada. Desde ese momento ni tú ni nosotros podemos cambiar la semilla ni la lista sin que se note." },
        { title: "Durante el sorteo", text: "Los ganadores se eligen de forma determinista con HMAC-SHA256 usando la semilla, el hash de la lista de participantes y un contador. Con los mismos datos, el resultado es siempre el mismo." },
        { title: "Después del sorteo", text: "Se revela la semilla. En la página pública de verificación (/sorteo/<código>) cualquiera puede comprobar que coincide con el hash publicado y recalcular los ganadores." },
      ],
      formulaLabel: "Cálculo de cada ganador",
      formula: "HMAC-SHA256(semilla, hash_participantes + contador)",
      formulaNote: "Es el mismo cálculo que hace la página de verificación; no depende de nuestra palabra.",
      extras: [
        { title: "Página pública de verificación", text: "Cada sorteo tiene su enlace /sorteo/<código> con las reglas, los hashes, la semilla revelada y los ganadores." },
        { title: "Certificado PDF", text: "Un documento con los datos del sorteo y de la verificación para guardarlo o compartirlo." },
        { title: "Imagen de anuncio", text: "Formato story y feed, con los colores de tu marca, lista para publicar." },
      ],
    },
    legal: {
      kicker: "Bases legales",
      title: "Plantilla de bases legales para España",
      text: "Moby genera un borrador de bases legales a partir de los datos de tu sorteo para que lo revises y lo adaptes.",
      items: [
        "Información sobre protección de datos (RGPD) de los participantes",
        "Exención de Meta: «Instagram/Facebook no patrocina, avala ni administra esta promoción ni está asociado a ella»",
        "Aviso: los premios de más de 300 € están sujetos a retención o ingreso a cuenta del IRPF; consúltalo con tu asesor",
      ],
      disclaimer: "Es una plantilla orientativa, no asesoramiento legal. Revísala con tu asesor antes de publicar el sorteo.",
    },
    limits: {
      kicker: "Lo que no hacemos (y por qué)",
      title: "Límites honestos",
      subtitle: "Preferimos decirlo claro antes de que nos lo preguntes.",
      items: [
        { title: "No se puede comprobar automáticamente si te siguen o si dieron «me gusta»", text: "La API de Instagram y Facebook no permite saber si un participante sigue la cuenta o le ha dado «me gusta» a la publicación. En Moby estos requisitos se comprueban a mano sobre el ganador, con una lista de verificación, antes de confirmarlo." },
        { title: "No se puede comprobar la antigüedad de la cuenta", text: "La API no ofrece la fecha de creación de las cuentas de los participantes, así que no filtramos cuentas nuevas por antigüedad." },
        { title: "Solo en tus propias cuentas", text: "Funciona con cuentas profesionales de Instagram y páginas de Facebook que conectas a Moby. No se pueden hacer sorteos en publicaciones de otras personas ni sorteos públicos anónimos desde esta web." },
      ],
    },
    meta_rules: {
      title: "Recuerda las normas de promociones de Meta",
      subtitle: "Resumen práctico; las condiciones completas están en las políticas de Instagram y Facebook.",
      items: [
        "No pidas a la gente que se etiquete en contenido en el que no aparece.",
        "En Facebook, no pidas compartir la publicación en la biografía (timeline) como requisito para participar.",
        "Incluye la exención: Instagram/Facebook no patrocina, avala ni administra la promoción.",
      ],
    },
    steps: {
      title: "Cómo funciona, en 5 pasos",
      items: [
        { title: "Conecta tu cuenta", text: "Conecta tu cuenta profesional de Instagram o tu página de Facebook a Moby Social." },
        { title: "Elige la publicación y las reglas", text: "Selecciona la publicación o el reel, los filtros, la fecha límite, los ganadores y los suplentes." },
        { title: "Trae los comentarios", text: "Moby descarga los comentarios, aplica los filtros y congela la lista de participantes con su hash." },
        { title: "Sortea en directo", text: "Lanza el sorteo en la pantalla animada, ideal para un directo o un stream." },
        { title: "Comparte el certificado", text: "Publica la imagen del ganador, comparte la página de verificación y descarga el certificado PDF." },
      ],
    },
    faqTitle: "Preguntas frecuentes sobre sorteos de Instagram",
    faq: [
      ["¿Puedo hacer el sorteo aquí mismo, sin registrarme?", "No. En esta web solo explicamos la herramienta. Los sorteos se hacen dentro de Moby Social, en Bridge, con tu cuenta de Instagram o tu página de Facebook conectadas."],
      ["¿Cómo sé que el sorteo no está amañado?", "Antes de sortear publicamos el hash SHA-256 de una semilla secreta y el hash de la lista de participantes. Después se revela la semilla y cualquiera puede recalcular los ganadores en la página pública /sorteo/<código>. Si alguien cambiara la semilla o la lista, los hashes no coincidirían."],
      ["¿Moby comprueba que el ganador me sigue y le dio «me gusta»?", "No automáticamente: la API de Instagram y Facebook no lo permite. Moby te muestra una lista de verificación para comprobarlo a mano sobre el ganador antes de confirmarlo; si no cumple, pasas al suplente."],
      ["¿Puedo sortear en una publicación de otra cuenta?", "No. Solo funciona con cuentas profesionales de Instagram y páginas de Facebook que tú conectas a Moby."],
      ["¿Qué filtros puedo aplicar?", "Menciones mínimas por comentario, hashtag o palabra clave obligatoria, una participación por usuario (o cada comentario cuenta, con un máximo), exclusión de tu cuenta y de una lista del equipo, y exclusión de comentarios posteriores a la fecha límite."],
      ["¿Las bases legales que genera Moby son válidas?", "Son una plantilla orientativa para España (RGPD, exención de Meta y aviso del IRPF para premios de más de 300 €). No es asesoramiento legal: revísalas con tu asesor."],
      ["¿Puedo mostrar el sorteo en un directo?", "Sí. La pantalla de sorteo animada está pensada para emitirla en un directo de Instagram o en un stream."],
    ],
    form: {
      kicker: "Empieza",
      title: "Quiero hacer sorteos verificables",
      text: "Déjanos tus datos y te explicamos cómo activar los sorteos en Moby Social para tu negocio.",
      name: "Tu nombre", email: "Email", business: "Nombre del negocio o cuenta", phone: "WhatsApp o teléfono", phoneHint: "Opcional",
      consent: "He leído y acepto la", privacy: "política de privacidad",
      marketing: "Quiero recibir por email consejos y novedades de MobyApp (puedes darte de baja cuando quieras).",
      submit: "Quiero hacer sorteos con Moby", sending: "Enviando…",
      success: "¡Recibido!", successText: "Te escribiremos en breve para explicarte cómo hacer tu primer sorteo con Moby Social.",
      error: "No hemos podido enviar la solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.",
      invalid: "Revisa los datos: tu nombre, el nombre del negocio y un email válido.",
      demo: "¿Lo vemos juntos? Reserva una demo",
      trust: "No vendemos tus datos ni te llenamos el buzón.",
    },
    demoBlock: { title: "¿Prefieres verlo en directo?", text: "Te enseñamos Moby Social y un sorteo de prueba en una videollamada corta.", cta: "Pedir una demo", whatsapp: "Escribir por WhatsApp" },
    whatsappText: "¡Hola! Me interesan los sorteos de Instagram de Moby Social.",
    privacyHref: "/privacidad",
    contactHref: "/contacto",
  },
  ca: {
    meta: {
      title: "Sorteig d’Instagram verificable: tria guanyadors dels comentaris | MobyApp",
      description: "Fes sortejos d’Instagram i Facebook entre els comentaris de la teva publicació o reel amb filtres, suplents, certificat PDF i verificació pública (commit-reveal amb SHA-256). Inclòs a Moby Social.",
      keywords: ["sorteig instagram", "sorteig d'instagram", "triar guanyador instagram", "sorteig comentaris instagram", "sorteig facebook", "bases legals sorteig", "sorteig verificable"],
    },
    name: "Sortejos d’Instagram i Facebook",
    home: "Inici",
    badge: "🎁 Moby Social · Sortejos verificables",
    h1: "Sortejos d’Instagram i Facebook que tothom pot verificar",
    subtitle: "Tria guanyadors a l’atzar entre els comentaris de la teva publicació o reel, amb filtres clars, suplents i una pàgina pública on els teus seguidors poden comprovar que el sorteig ha estat net.",
    heroBullets: [
      "Comentaris de les teves pròpies publicacions i reels d’Instagram o Facebook",
      "Filtres: mencions mínimes, hashtag o paraula clau, una participació per persona, data límit",
      "Guanyadors i suplents, certificat PDF i imatge per anunciar el resultat",
      "Verificació pública: llavor secreta publicada com a hash abans del sorteig i revelada després",
    ],
    ctaLead: "Vull fer sortejos amb Moby",
    ctaDemo: "Demanar una demo",
    heroNote: "Funciona amb el teu compte professional d’Instagram o la teva pàgina de Facebook connectats a Moby Social. En aquesta web no es fan sortejos.",
    features: {
      kicker: "Què inclou",
      title: "Tot el sorteig, dels comentaris a l’anunci del guanyador",
      subtitle: "Dins de Moby Social, a Bridge, el mateix panell des del qual gestiones les xarxes.",
      items: [
        { title: "Guanyadors a l’atzar entre els comentaris", text: "Tries la publicació o el reel, Moby porta els comentaris i congela la llista de participants abans de sortejar." },
        { title: "Guanyadors i suplents", text: "Defineixes quants guanyadors i quants suplents vols. Si un guanyador no compleix les condicions o no respon, passes al següent suplent." },
        { title: "Pantalla de sorteig animada", text: "Una pantalla pensada per emetre en directe o en un stream, perquè la teva comunitat vegi el sorteig en temps real." },
        { title: "Certificat PDF i imatge del guanyador", text: "Certificat amb les dades de verificació i imatge per a stories o feed amb els colors de la teva marca." },
      ],
    },
    filters: {
      title: "Filtres perquè només comptin els comentaris vàlids",
      items: [
        "Nombre mínim de @mencions per comentari",
        "Hashtag o paraula clau obligatòria",
        "Una participació per usuari, o que cada comentari compti amb un màxim per persona",
        "Excloure el teu propi compte i una llista de comptes de l’equip",
        "Excloure els comentaris publicats després de la data límit",
      ],
    },
    fair: {
      kicker: "Transparència",
      title: "Com es verifica que el sorteig és just",
      subtitle: "Fem servir un esquema «commit-reveal»: ens comprometem amb el resultat abans de sortejar, sense poder-lo canviar després.",
      steps: [
        { title: "Abans del sorteig", text: "Publiquem el hash SHA-256 d’una llavor secreta generada al servidor i el hash de la llista de participants congelada. A partir d’aquell moment ni tu ni nosaltres podem canviar la llavor ni la llista sense que es noti." },
        { title: "Durant el sorteig", text: "Els guanyadors es trien de manera determinista amb HMAC-SHA256 fent servir la llavor, el hash de la llista de participants i un comptador. Amb les mateixes dades, el resultat és sempre el mateix." },
        { title: "Després del sorteig", text: "Es revela la llavor. A la pàgina pública de verificació (/sorteo/<codi>) qualsevol pot comprovar que coincideix amb el hash publicat i recalcular els guanyadors." },
      ],
      formulaLabel: "Càlcul de cada guanyador",
      formula: "HMAC-SHA256(llavor, hash_participants + comptador)",
      formulaNote: "És el mateix càlcul que fa la pàgina de verificació; no depèn de la nostra paraula.",
      extras: [
        { title: "Pàgina pública de verificació", text: "Cada sorteig té el seu enllaç /sorteo/<codi> amb les regles, els hashos, la llavor revelada i els guanyadors." },
        { title: "Certificat PDF", text: "Un document amb les dades del sorteig i de la verificació per guardar-lo o compartir-lo." },
        { title: "Imatge d’anunci", text: "Format story i feed, amb els colors de la teva marca, a punt per publicar." },
      ],
    },
    legal: {
      kicker: "Bases legals",
      title: "Plantilla de bases legals per a Espanya",
      text: "Moby genera un esborrany de bases legals a partir de les dades del teu sorteig perquè el revisis i l’adaptis.",
      items: [
        "Informació sobre protecció de dades (RGPD) dels participants",
        "Exempció de Meta: «Instagram/Facebook no patrocina, avala ni administra aquesta promoció ni hi està associat»",
        "Avís: els premis de més de 300 € estan subjectes a retenció o ingrés a compte de l’IRPF; consulta-ho amb el teu assessor",
      ],
      disclaimer: "És una plantilla orientativa, no assessorament legal. Revisa-la amb el teu assessor abans de publicar el sorteig.",
    },
    limits: {
      kicker: "El que no fem (i per què)",
      title: "Límits honestos",
      subtitle: "Preferim dir-ho clar abans que ens ho preguntis.",
      items: [
        { title: "No es pot comprovar automàticament si et segueixen o si han fet «m’agrada»", text: "L’API d’Instagram i Facebook no permet saber si un participant segueix el compte o ha fet «m’agrada» a la publicació. A Moby aquests requisits es comproven a mà sobre el guanyador, amb una llista de verificació, abans de confirmar-lo." },
        { title: "No es pot comprovar l’antiguitat del compte", text: "L’API no ofereix la data de creació dels comptes dels participants, així que no filtrem comptes nous per antiguitat." },
        { title: "Només als teus propis comptes", text: "Funciona amb comptes professionals d’Instagram i pàgines de Facebook que connectes a Moby. No es poden fer sortejos en publicacions d’altres persones ni sortejos públics anònims des d’aquesta web." },
      ],
    },
    meta_rules: {
      title: "Recorda les normes de promocions de Meta",
      subtitle: "Resum pràctic; les condicions completes són a les polítiques d’Instagram i Facebook.",
      items: [
        "No demanis a la gent que s’etiqueti en contingut on no surt.",
        "A Facebook, no demanis compartir la publicació a la biografia (timeline) com a requisit per participar.",
        "Inclou l’exempció: Instagram/Facebook no patrocina, avala ni administra la promoció.",
      ],
    },
    steps: {
      title: "Com funciona, en 5 passos",
      items: [
        { title: "Connecta el teu compte", text: "Connecta el teu compte professional d’Instagram o la teva pàgina de Facebook a Moby Social." },
        { title: "Tria la publicació i les regles", text: "Selecciona la publicació o el reel, els filtres, la data límit, els guanyadors i els suplents." },
        { title: "Porta els comentaris", text: "Moby descarrega els comentaris, aplica els filtres i congela la llista de participants amb el seu hash." },
        { title: "Sorteja en directe", text: "Llança el sorteig a la pantalla animada, ideal per a un directe o un stream." },
        { title: "Comparteix el certificat", text: "Publica la imatge del guanyador, comparteix la pàgina de verificació i descarrega el certificat PDF." },
      ],
    },
    faqTitle: "Preguntes freqüents sobre sortejos d’Instagram",
    faq: [
      ["Puc fer el sorteig aquí mateix, sense registrar-me?", "No. En aquesta web només expliquem l’eina. Els sortejos es fan dins de Moby Social, a Bridge, amb el teu compte d’Instagram o la teva pàgina de Facebook connectats."],
      ["Com sé que el sorteig no està manipulat?", "Abans de sortejar publiquem el hash SHA-256 d’una llavor secreta i el hash de la llista de participants. Després es revela la llavor i qualsevol pot recalcular els guanyadors a la pàgina pública /sorteo/<codi>. Si algú canviés la llavor o la llista, els hashos no coincidirien."],
      ["Moby comprova que el guanyador em segueix i ha fet «m’agrada»?", "No automàticament: l’API d’Instagram i Facebook no ho permet. Moby et mostra una llista de verificació per comprovar-ho a mà sobre el guanyador abans de confirmar-lo; si no compleix, passes al suplent."],
      ["Puc sortejar en una publicació d’un altre compte?", "No. Només funciona amb comptes professionals d’Instagram i pàgines de Facebook que tu connectes a Moby."],
      ["Quins filtres puc aplicar?", "Mencions mínimes per comentari, hashtag o paraula clau obligatòria, una participació per usuari (o cada comentari compta, amb un màxim), exclusió del teu compte i d’una llista de l’equip, i exclusió de comentaris posteriors a la data límit."],
      ["Les bases legals que genera Moby són vàlides?", "Són una plantilla orientativa per a Espanya (RGPD, exempció de Meta i avís de l’IRPF per a premis de més de 300 €). No és assessorament legal: revisa-les amb el teu assessor."],
      ["Puc mostrar el sorteig en un directe?", "Sí. La pantalla de sorteig animada està pensada per emetre-la en un directe d’Instagram o en un stream."],
    ],
    form: {
      kicker: "Comença",
      title: "Vull fer sortejos verificables",
      text: "Deixa’ns les teves dades i t’expliquem com activar els sortejos a Moby Social per al teu negoci.",
      name: "El teu nom", email: "Correu electrònic", business: "Nom del negoci o compte", phone: "WhatsApp o telèfon", phoneHint: "Opcional",
      consent: "He llegit i accepto la", privacy: "política de privacitat",
      marketing: "Vull rebre per correu consells i novetats de MobyApp (et pots donar de baixa quan vulguis).",
      submit: "Vull fer sortejos amb Moby", sending: "Enviant…",
      success: "Rebut!", successText: "T’escriurem aviat per explicar-te com fer el teu primer sorteig amb Moby Social.",
      error: "No hem pogut enviar la sol·licitud. Torna-ho a provar o escriu-nos per WhatsApp.",
      invalid: "Revisa les dades: el teu nom, el nom del negoci i un correu vàlid.",
      demo: "Ho mirem junts? Reserva una demo",
      trust: "No venem les teves dades ni t’omplim la bústia.",
    },
    demoBlock: { title: "Prefereixes veure-ho en directe?", text: "T’ensenyem Moby Social i un sorteig de prova en una videotrucada curta.", cta: "Demanar una demo", whatsapp: "Escriure per WhatsApp" },
    whatsappText: "Hola! M’interessen els sortejos d’Instagram de Moby Social.",
    privacyHref: "/privacidad",
    contactHref: "/contacto",
  },
  en: {
    meta: {
      title: "Verifiable Instagram giveaway: pick winners from comments | MobyApp",
      description: "Run Instagram and Facebook giveaways from the comments on your post or reel, with filters, substitutes, a PDF certificate and public verification (commit-reveal with SHA-256). Included in Moby Social.",
      keywords: ["instagram giveaway", "instagram giveaway picker", "pick instagram winner", "instagram comment picker", "facebook giveaway", "giveaway rules spain", "verifiable giveaway"],
    },
    name: "Instagram & Facebook giveaways",
    home: "Home",
    badge: "🎁 Moby Social · Verifiable giveaways",
    h1: "Instagram and Facebook giveaways anyone can verify",
    subtitle: "Pick random winners from the comments on your post or reel, with clear filters, substitutes and a public page where your followers can check the draw was fair.",
    heroBullets: [
      "Comments from your own Instagram or Facebook posts and reels",
      "Filters: minimum mentions, hashtag or keyword, one entry per person, deadline",
      "Winners and substitutes, PDF certificate and an image to announce the result",
      "Public verification: secret seed published as a hash before the draw and revealed afterwards",
    ],
    ctaLead: "I want to run giveaways with Moby",
    ctaDemo: "Request a demo",
    heroNote: "Works with your Instagram professional account or Facebook Page connected to Moby Social. No draws are run on this website.",
    features: {
      kicker: "What’s included",
      title: "The whole giveaway, from comments to winner announcement",
      subtitle: "Inside Moby Social, in Bridge, the same dashboard you use to manage your social media.",
      items: [
        { title: "Random winners from the comments", text: "Choose the post or reel; Moby fetches the comments and freezes the participants list before the draw." },
        { title: "Winners and substitutes", text: "Set how many winners and substitutes you want. If a winner doesn’t meet the rules or doesn’t reply, you move to the next substitute." },
        { title: "Animated draw screen", text: "A screen designed for live broadcasts and streams, so your community can watch the draw in real time." },
        { title: "PDF certificate and winner image", text: "A certificate with the verification data and an image for stories or feed in your brand colours." },
      ],
    },
    filters: {
      title: "Filters so only valid comments count",
      items: [
        "Minimum number of @mentions per comment",
        "Required hashtag or keyword",
        "One entry per user, or each comment counts up to a cap per person",
        "Exclude your own account and a staff blocklist",
        "Exclude comments posted after the deadline",
      ],
    },
    fair: {
      kicker: "Transparency",
      title: "How the fairness of the draw is verified",
      subtitle: "We use a commit-reveal scheme: we commit to the result before the draw, with no way to change it afterwards.",
      steps: [
        { title: "Before the draw", text: "We publish the SHA-256 hash of a secret seed generated on the server and the hash of the frozen participants list. From then on, neither you nor we can change the seed or the list without it showing." },
        { title: "During the draw", text: "Winners are picked deterministically with HMAC-SHA256 using the seed, the participants-list hash and a counter. Same inputs, same result, every time." },
        { title: "After the draw", text: "The seed is revealed. On the public verification page (/sorteo/<code>) anyone can check it matches the published hash and recompute the winners." },
      ],
      formulaLabel: "How each winner is computed",
      formula: "HMAC-SHA256(seed, participants_hash + counter)",
      formulaNote: "It is the same calculation the verification page runs; you don’t have to take our word for it.",
      extras: [
        { title: "Public verification page", text: "Each draw has its own /sorteo/<code> link with the rules, hashes, revealed seed and winners." },
        { title: "PDF certificate", text: "A document with the draw and verification details to keep or share." },
        { title: "Announcement image", text: "Story and feed formats, in your brand colours, ready to post." },
      ],
    },
    legal: {
      kicker: "Official rules",
      title: "Giveaway rules template for Spain",
      text: "Moby drafts the official rules (“bases legales”) from your giveaway details so you can review and adapt them.",
      items: [
        "Data protection information (GDPR) for participants",
        "Meta disclaimer: “This promotion is in no way sponsored, endorsed or administered by, or associated with, Instagram/Facebook”",
        "Note: in Spain, prizes over €300 are subject to income tax (IRPF) withholding; check with your advisor",
      ],
      disclaimer: "This is a guideline template, not legal advice. Review it with your advisor before publishing the giveaway.",
    },
    limits: {
      kicker: "What we don’t do (and why)",
      title: "Honest limits",
      subtitle: "We’d rather say it up front than have you find out later.",
      items: [
        { title: "Follows and likes can’t be checked automatically", text: "The Instagram and Facebook API doesn’t let anyone check whether a participant follows the account or liked the post. In Moby these requirements are checked manually on the winner, with a checklist, before confirming." },
        { title: "Account age can’t be checked", text: "The API doesn’t expose when participants’ accounts were created, so we don’t filter new accounts by age." },
        { title: "Only on your own accounts", text: "It works with Instagram professional accounts and Facebook Pages you connect to Moby. You can’t run draws on other people’s posts, and there are no anonymous public draws on this website." },
      ],
    },
    meta_rules: {
      title: "Remember Meta’s promotion guidelines",
      subtitle: "A practical summary; the full terms are in Instagram’s and Facebook’s policies.",
      items: [
        "Don’t ask people to tag themselves in content they don’t appear in.",
        "On Facebook, don’t require sharing the post on their timeline to enter.",
        "Include the disclaimer: Instagram/Facebook does not sponsor, endorse or administer the promotion.",
      ],
    },
    steps: {
      title: "How it works, in 5 steps",
      items: [
        { title: "Connect your account", text: "Connect your Instagram professional account or Facebook Page to Moby Social." },
        { title: "Choose the post and rules", text: "Select the post or reel, filters, deadline, number of winners and substitutes." },
        { title: "Fetch the comments", text: "Moby downloads the comments, applies the filters and freezes the participants list with its hash." },
        { title: "Draw live", text: "Run the draw on the animated screen, perfect for a live or a stream." },
        { title: "Share the certificate", text: "Post the winner image, share the verification page and download the PDF certificate." },
      ],
    },
    faqTitle: "Instagram giveaway FAQ",
    faq: [
      ["Can I run the draw right here, without signing up?", "No. This page only explains the tool. Draws run inside Moby Social, in Bridge, with your Instagram account or Facebook Page connected."],
      ["How do I know the draw isn’t rigged?", "Before the draw we publish the SHA-256 hash of a secret seed and the hash of the participants list. Afterwards the seed is revealed and anyone can recompute the winners on the public /sorteo/<code> page. If anyone changed the seed or the list, the hashes wouldn’t match."],
      ["Does Moby check that the winner follows me and liked the post?", "Not automatically: the Instagram and Facebook API doesn’t allow it. Moby gives you a checklist to verify it manually on the winner before confirming; if they don’t qualify, you move to a substitute."],
      ["Can I run a giveaway on another account’s post?", "No. It only works with Instagram professional accounts and Facebook Pages you connect to Moby."],
      ["Which filters can I use?", "Minimum mentions per comment, required hashtag or keyword, one entry per user (or each comment counts, with a cap), excluding your own account and a staff list, and excluding comments posted after the deadline."],
      ["Are the rules Moby generates legally valid?", "They are a guideline template for Spain (GDPR, Meta disclaimer and the IRPF note for prizes over €300). It isn’t legal advice: review them with your advisor."],
      ["Can I show the draw on a live stream?", "Yes. The animated draw screen is designed to be broadcast on an Instagram live or a stream."],
    ],
    form: {
      kicker: "Get started",
      title: "I want verifiable giveaways",
      text: "Leave your details and we’ll explain how to enable giveaways in Moby Social for your business.",
      name: "Your name", email: "Email", business: "Business or account name", phone: "WhatsApp or phone", phoneHint: "Optional",
      consent: "I have read and accept the", privacy: "privacy policy",
      marketing: "I want to receive MobyApp tips and news by email (unsubscribe at any time).",
      submit: "I want to run giveaways with Moby", sending: "Sending…",
      success: "Received!", successText: "We’ll be in touch shortly to explain how to run your first giveaway with Moby Social.",
      error: "We could not send your request. Please try again or message us on WhatsApp.",
      invalid: "Please check: your name, business name and a valid email.",
      demo: "Want to see it together? Book a demo",
      trust: "We do not sell your data or flood your inbox.",
    },
    demoBlock: { title: "Prefer to see it live?", text: "We’ll show you Moby Social and a test draw in a short video call.", cta: "Request a demo", whatsapp: "Message us on WhatsApp" },
    whatsappText: "Hi! I’m interested in Moby Social’s Instagram giveaways.",
    privacyHref: "/en/privacidad",
    contactHref: "/en/contacto",
  },
};
