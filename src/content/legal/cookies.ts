import type { LegalContent } from "@/components/legal/LegalDocument";
import type { Language } from "@/i18n/translations";

/*
 * Política de cookies (LSSI art. 22.2 y guía de la AEPD).
 * Si se añade o quita alguna cookie, actualiza esta lista y sube CONSENT_VERSION en src/lib/consent.ts.
 * Las secciones 3 y 4 recogen el inventario de las webs, paneles y widgets de producto (repos moby-embed y rewards):
 * si cambia lo que guardan, actualízalas también. REVISIÓN LEGAL: pendiente de revisión jurídica.
 */
export const cookiePolicy: Record<Language, LegalContent> = {
  es: {
    title: "Política de Cookies",
    subtitle: "Qué cookies y tecnologías similares usa la web de MobyApp, para qué y cómo gestionarlas.",
    updatedLabel: "Última actualización",
    updated: "26 de noviembre de 2026",
    sections: [
      {
        heading: "1. Qué son las cookies",
        paragraphs: [
          "Las cookies son pequeños archivos que un sitio web guarda en tu navegador. Tecnologías similares, como el almacenamiento local del navegador (localStorage), cumplen funciones parecidas. Esta política se aplica a los sitios web mobyapp.eu y mobyapp.us, a las webs y paneles de los productos Moby (feeds, booking, reviews, catalog, boost, cart y rewards.mobyapp.eu) y a sus widgets.",
        ],
      },
      {
        heading: "2. Cookies que usamos",
        paragraphs: ["Estas son todas las cookies y tecnologías de almacenamiento que puede usar la web www.mobyapp.eu:"],
        list: [
          "mobyapp-consent (almacenamiento local, propia, necesaria): guarda tu elección sobre cookies, con su fecha y versión, para no volver a preguntarte en cada visita. Duración: 12 meses; después te volvemos a preguntar. No requiere consentimiento.",
          "mobyapp-ref (almacenamiento local, propia, analítica): si llegas a la web con un enlace de recomendación o de un partner (?ref=), guarda ese código para aplicarlo si contratas un servicio más adelante. Duración: 30 días. Solo se guarda si aceptas la analítica; si la rechazas o retiras, se borra al momento. Sin consentimiento, el código solo se conserva mientras navegas por la web, sin guardarse en tu dispositivo. No se envía a terceros.",
          "moby_attr_first y moby_attr_last (almacenamiento local, propia, analítica): atribución de origen de las visitas para medir campañas (parámetros utm, dominio de la web de origen y página de entrada; sin datos personales). Duración: 30 días. Solo se guardan si aceptas la analítica; si la rechazas o retiras, se borran al momento. Sin consentimiento, el origen solo se calcula en memoria durante la página actual y se envía con los formularios, sin guardarse en tu dispositivo.",
          "_ga (cookie de Google Analytics, tercero: Google Ireland Ltd., analítica): distingue a los usuarios de forma anónima para elaborar estadísticas de uso. Duración: 2 años. Solo se instala si aceptas la analítica.",
          "_ga_<ID> (cookie de Google Analytics, tercero: Google Ireland Ltd., analítica): mantiene el estado de la sesión para medir las visitas. Duración: 2 años. Solo se instala si aceptas la analítica.",
          "Medición de audiencia anónima sin cookies, propia: contamos las visitas de forma agregada sin instalar cookies, sin guardar tu dirección IP y sin identificarte. Si tu navegador envía la señal «Do Not Track» o «Global Privacy Control», no se mide tu visita.",
        ],
      },
      {
        heading: "3. Webs y paneles de los productos Moby",
        paragraphs: [
          "Las webs de Moby Feed, Booking, Reviews, Catalog, Boost, Cart y Rewards no usan cookies ni almacenamiento de analítica, publicidad o redes sociales, y sirven las tipografías desde su propio dominio, por lo que no muestran banner de consentimiento: todo lo que guardan es técnico o lo pides tú, y está exento según el artículo 22.2 de la LSSI y la guía de la AEPD. Solo se usa almacenamiento local del navegador (localStorage y sessionStorage), nunca cookies:",
        ],
        list: [
          "mf-lang, mb-lang, mr-lang y mc-lang (localStorage, propia, preferencia): recuerda el idioma que eliges en la web o el panel de Feed, Booking, Reviews, Catalog o Cart para no redirigirte a otro. Se guarda cuando eliges un idioma. Duración: hasta que lo borres.",
          "mf-access, mb-access, mr-access, mc-access, mf-refresh, mb-refresh, mr-refresh, mc-refresh, mf-org, mb-org, mr-org, mc-org y mb-user (localStorage, propia, técnica): mantienen iniciada la sesión en el panel del producto y la organización elegida. Duración: hasta que cierres sesión.",
          "mf-wp, mb-wp, mr-wp, mc-wp, mf-wp-shop, mr-wp-shop y mr-wp-seen y, en el panel de Moby Booking en pruebas locales, mb-api (sessionStorage) (localStorage, propia, técnica): recuerdan la web de WordPress desde la que pulsaste «Conectar con Moby» para devolverte a ella con la conexión hecha. Duración: hasta completar o cancelar la conexión.",
          "mf-fx-account y mr-fx-google (localStorage, propia, preferencia): recuerdan que ya conectaste tu primera cuenta de Instagram, TikTok o Google para no repetir el mensaje de bienvenida. Duración: hasta que lo borres.",
          "mb-wiz-seen y mb-web-done (localStorage, propia, preferencia): recuerdan los pasos ya hechos del asistente de configuración de Moby Booking (por ejemplo, que copiaste el código para tu web). Duración: hasta que lo borres.",
          "moby_rewards_panel_session y moby_rewards_biz (localStorage, propia, técnica): sesión del panel de Moby Rewards y código del negocio. Duración: hasta cerrar sesión o borrarlo.",
          "Medición de audiencia anónima sin cookies de rewards.mobyapp.eu: igual que en www.mobyapp.eu, sin cookies, sin guardar nada en el dispositivo ni la IP, y respeta «Do Not Track» y «Global Privacy Control».",
        ],
      },
      {
        heading: "4. Widgets instalados en webs de nuestros clientes",
        paragraphs: [
          "Los widgets de Moby se cargan en webs de otros negocios, que son responsables de informar a sus visitantes y, si procede, de pedir su consentimiento. Para que puedan hacerlo, este es su comportamiento:",
        ],
        list: [
          "Moby Feed (feed.js): no instala cookies ni guarda nada en el navegador. Para contar vistas de forma anónima envía a Moby la dirección de la página, el idioma y la zona horaria. Las imágenes se sirven desde servidores de Moby en la UE. Solo si el visitante pulsa «Reproducir» en un vídeo se carga el vídeo desde la red social; en TikTok, su reproductor oficial (www.tiktok.com/player), que puede instalar cookies de TikTok. El negocio puede desactivar el reproductor de TikTok en el panel para que los vídeos se abran en TikTok, o declararlo en su política como cookie de terceros que se carga a petición del visitante.",
          "Moby Reviews (reviews.js): no instala cookies ni guarda nada en el navegador. Si el negocio muestra reseñas importadas de Google, las fotos de sus autores se cargan desde servidores de Google (googleusercontent.com), que reciben la IP del visitante; el negocio debe mencionarlo en su política de privacidad.",
          "Moby Booking (booking.js y la página de reservas /book): no instala cookies ni guarda nada en el navegador. Si el negocio cobra una señal, el pago se hace en la página de Stripe o del TPV del banco, con sus propias cookies.",
          "Moby Boost (boost.js): no instala cookies ni guarda nada en el navegador por defecto; la variante de las pruebas A/B se elige en cada carga de página. Solo si el negocio añade el atributo data-ab-storage (porque ya recoge el consentimiento con su herramienta de cookies), guarda moby-boost-v (sessionStorage, analítica, hasta cerrar la pestaña) para mantener la misma variante durante la visita. Si el visitante activa las notificaciones push, el navegador guarda su suscripción.",
          "Moby Rewards (rewards.js) y los plugins de WordPress de Moby Cart y Moby Rewards: no instalan cookies propias; Moby Cart usa la sesión de WooCommerce que ya existe en la tienda.",
          "Texto que puede usar el negocio en su política de cookies: «Esta web usa [Moby Feed / Moby Reviews / Moby Booking / Moby Boost], un servicio de Moby App, LLC, que no instala cookies ni almacena información en tu dispositivo. [Si usas el reproductor de TikTok:] Al pulsar «Reproducir» en un vídeo de TikTok se carga el reproductor de TikTok, que puede instalar sus propias cookies (www.tiktok.com/legal/cookie-policy).» Los plugins de WordPress añaden además un texto sugerido en Ajustes → Privacidad.",
        ],
      },
      {
        heading: "5. Cookies de analítica y consentimiento",
        paragraphs: [
          "Las cookies de analítica son opcionales y están desactivadas por defecto. Solo se descarga Google Analytics y se instalan sus cookies después de que pulses \"Aceptar\" o actives la analítica en \"Configurar\". Si rechazas, la web funciona exactamente igual.",
          "Google Analytics puede tratar datos fuera del Espacio Económico Europeo; Google se acoge al Marco de Privacidad de Datos UE-EE. UU. y a las Cláusulas Contractuales Tipo. Más información en la política de privacidad de Google: policies.google.com/privacy.",
        ],
      },
      {
        heading: "6. Cómo aceptar, rechazar o retirar el consentimiento",
        paragraphs: [
          "Puedes cambiar tu elección en cualquier momento desde el enlace \"Configurar cookies\" del pie de página. Si retiras el consentimiento, dejamos de cargar Google Analytics y borramos sus cookies (_ga y _ga_<ID>) y el origen guardado (moby_attr_first y moby_attr_last) de tu navegador.",
          "También puedes bloquear o eliminar las cookies desde la configuración de tu navegador (Chrome, Firefox, Safari, Edge…), aunque la elección guardada en la web se perderá y te volveremos a preguntar.",
        ],
      },
      {
        heading: "7. Más información",
        paragraphs: [
          "Para saber cómo tratamos tus datos personales consulta nuestra Política de privacidad (www.mobyapp.eu/privacidad). Para cualquier duda: privacy@mobyapp.eu.",
        ],
      },
    ],
  },
  en: {
    title: "Cookie Policy",
    subtitle: "Which cookies and similar technologies the MobyApp website uses, why, and how to manage them.",
    updatedLabel: "Last updated",
    updated: "November 26, 2026",
    sections: [
      {
        heading: "1. What cookies are",
        paragraphs: [
          "Cookies are small files that a website stores in your browser. Similar technologies, such as the browser's local storage (localStorage), serve similar purposes. This policy applies to the mobyapp.eu and mobyapp.us websites, to the Moby product websites and dashboards (feeds, booking, reviews, catalog, boost, cart and rewards.mobyapp.eu) and to their widgets.",
        ],
      },
      {
        heading: "2. Cookies we use",
        paragraphs: ["These are all the cookies and storage technologies the www.mobyapp.eu website may use:"],
        list: [
          "mobyapp-consent (local storage, first-party, necessary): stores your cookie choice, with its date and version, so we don't ask you again on every visit. Duration: 12 months; after that we ask again. Does not require consent.",
          "mobyapp-ref (local storage, first-party, analytics): if you arrive at the website through a referral or partner link (?ref=), stores that code so it can be applied if you purchase a service later. Duration: 30 days. Only stored if you accept analytics; if you reject or withdraw it, it is deleted immediately. Without consent, the code is only kept while you browse the website, without being stored on your device. Not shared with third parties.",
          "moby_attr_first and moby_attr_last (local storage, first-party, analytics): attribution of visit origin to measure campaigns (utm parameters, referring site domain and landing page; no personal data). Duration: 30 days. Only stored if you accept analytics; if you reject or withdraw it, they are deleted immediately. Without consent, the origin is only computed in memory for the current page and sent with forms, without being stored on your device.",
          "_ga (Google Analytics cookie, third party: Google Ireland Ltd., analytics): distinguishes users anonymously to produce usage statistics. Duration: 2 years. Only set if you accept analytics.",
          "_ga_<ID> (Google Analytics cookie, third party: Google Ireland Ltd., analytics): keeps the session state to measure visits. Duration: 2 years. Only set if you accept analytics.",
          "Anonymous, cookieless first-party audience measurement: we count visits in aggregate without setting cookies, storing your IP address or identifying you. If your browser sends a Do Not Track or Global Privacy Control signal, your visit is not measured.",
        ],
      },
      {
        heading: "3. Moby product websites and dashboards",
        paragraphs: [
          "The Moby Feed, Booking, Reviews, Catalog, Boost, Cart and Rewards websites use no analytics, advertising or social media cookies or storage, and serve their fonts from their own domain, so they show no consent banner: everything they store is technical or requested by you, and is exempt under article 22.2 of the Spanish LSSI and the AEPD guidelines. They only use the browser's local storage (localStorage and sessionStorage), never cookies:",
        ],
        list: [
          "mf-lang, mb-lang, mr-lang and mc-lang (localStorage, first-party, preference): remembers the language you choose on the Feed, Booking, Reviews, Catalog or Cart website or dashboard so you are not redirected to another one. Stored when you choose a language. Duration: until you delete it.",
          "mf-access, mb-access, mr-access, mc-access, mf-refresh, mb-refresh, mr-refresh, mc-refresh, mf-org, mb-org, mr-org, mc-org and mb-user (localStorage, first-party, technical): keep you signed in to the product dashboard and remember the selected organisation. Duration: until you sign out.",
          "mf-wp, mb-wp, mr-wp, mc-wp, mf-wp-shop, mr-wp-shop and mr-wp-seen and, in the Moby Booking dashboard during local testing, mb-api (sessionStorage) (localStorage, first-party, technical): remember the WordPress site from which you clicked \"Connect with Moby\" to send you back to it once connected. Duration: until the connection is completed or cancelled.",
          "mf-fx-account and mr-fx-google (localStorage, first-party, preference): remember that you have already connected your first Instagram, TikTok or Google account so the welcome message is not repeated. Duration: until you delete it.",
          "mb-wiz-seen and mb-web-done (localStorage, first-party, preference): remember the Moby Booking setup steps you have already completed (for example, that you copied the code for your website). Duration: until you delete it.",
          "moby_rewards_panel_session and moby_rewards_biz (localStorage, first-party, technical): Moby Rewards dashboard session and business code. Duration: until you sign out or delete it.",
          "Anonymous, cookieless audience measurement on rewards.mobyapp.eu: as on www.mobyapp.eu, with no cookies, nothing stored on the device and no IP address kept, honouring Do Not Track and Global Privacy Control.",
        ],
      },
      {
        heading: "4. Widgets installed on our customers' websites",
        paragraphs: [
          "Moby widgets load on other businesses' websites, which are responsible for informing their visitors and, where required, asking for consent. To help them do so, this is how they behave:",
        ],
        list: [
          "Moby Feed (feed.js): sets no cookies and stores nothing in the browser. To count views anonymously it sends Moby the page address, language and time zone. Images are served from Moby's servers in the EU. Only if the visitor clicks Play on a video is the video loaded from the social network; for TikTok, its official player (www.tiktok.com/player), which may set TikTok cookies. The business can turn off the TikTok player in the dashboard so videos open on TikTok, or declare it in its policy as a third-party cookie loaded at the visitor's request.",
          "Moby Reviews (reviews.js): sets no cookies and stores nothing in the browser. If the business shows reviews imported from Google, their authors' photos are loaded from Google's servers (googleusercontent.com), which receive the visitor's IP address; the business should mention this in its privacy policy.",
          "Moby Booking (booking.js and the /book booking page): sets no cookies and stores nothing in the browser. If the business takes a deposit, payment happens on the Stripe or bank POS page, with their own cookies.",
          "Moby Boost (boost.js): sets no cookies and stores nothing in the browser by default; the A/B test variant is picked on each page load. Only if the business adds the data-ab-storage attribute (because it already collects consent with its cookie tool) does it store moby-boost-v (sessionStorage, analytics, until the tab is closed) to keep the same variant during the visit. If the visitor turns on push notifications, the browser stores their subscription.",
          "Moby Rewards (rewards.js) and the Moby Cart and Moby Rewards WordPress plugins: set no cookies of their own; Moby Cart uses the WooCommerce session the store already has.",
          "Text the business can use in its cookie policy: \"This website uses [Moby Feed / Moby Reviews / Moby Booking / Moby Boost], a service of Moby App, LLC, which sets no cookies and stores no information on your device. [If you use the TikTok player:] When you click Play on a TikTok video, the TikTok player is loaded, which may set its own cookies (www.tiktok.com/legal/cookie-policy).\" The WordPress plugins also add a suggested text under Settings → Privacy.",
        ],
      },
      {
        heading: "5. Analytics cookies and consent",
        paragraphs: [
          "Analytics cookies are optional and disabled by default. Google Analytics is only downloaded and its cookies only set after you click \"Accept\" or enable analytics under \"Settings\". If you reject them, the website works exactly the same.",
          "Google Analytics may process data outside the European Economic Area; Google relies on the EU-US Data Privacy Framework and Standard Contractual Clauses. More information in Google's privacy policy: policies.google.com/privacy.",
        ],
      },
      {
        heading: "6. How to accept, reject or withdraw consent",
        paragraphs: [
          "You can change your choice at any time using the \"Cookie settings\" link in the footer. If you withdraw consent, we stop loading Google Analytics and delete its cookies (_ga and _ga_<ID>) and the stored origin (moby_attr_first and moby_attr_last) from your browser.",
          "You can also block or delete cookies in your browser settings (Chrome, Firefox, Safari, Edge…), although the choice saved on the website will be lost and we will ask you again.",
        ],
      },
      {
        heading: "7. More information",
        paragraphs: [
          "To learn how we process your personal data, see our Privacy policy (www.mobyapp.eu/en/privacidad). For any questions: privacy@mobyapp.eu.",
        ],
      },
    ],
  },
};
