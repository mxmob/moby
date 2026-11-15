import type { LegalContent } from "@/components/legal/LegalDocument";
import type { Language } from "@/i18n/translations";

/*
 * Política de cookies (LSSI art. 22.2 y guía de la AEPD).
 * Si se añade o quita alguna cookie, actualiza esta lista y sube CONSENT_VERSION en src/lib/consent.ts.
 */
export const cookiePolicy: Record<Language, LegalContent> = {
  es: {
    title: "Política de Cookies",
    subtitle: "Qué cookies y tecnologías similares usa la web de MobyApp, para qué y cómo gestionarlas.",
    updatedLabel: "Última actualización",
    updated: "15 de noviembre de 2026",
    sections: [
      {
        heading: "1. Qué son las cookies",
        paragraphs: [
          "Las cookies son pequeños archivos que un sitio web guarda en tu navegador. Tecnologías similares, como el almacenamiento local del navegador (localStorage), cumplen funciones parecidas. Esta política se aplica a los sitios web mobyapp.eu y mobyapp.us.",
        ],
      },
      {
        heading: "2. Cookies que usamos",
        paragraphs: ["Estas son todas las cookies y tecnologías de almacenamiento que puede usar la web:"],
        list: [
          "mobyapp-consent (almacenamiento local, propia, necesaria): guarda tu elección sobre cookies, con su fecha y versión, para no volver a preguntarte en cada visita. Duración: 12 meses; después te volvemos a preguntar. No requiere consentimiento.",
          "mobyapp-ref (almacenamiento local, propia, necesaria): si llegas a la web con un enlace de recomendación o de un partner (?ref=), guarda ese código para aplicarlo si contratas un servicio. Duración: 30 días. No se envía a terceros.",
          "_ga (cookie de Google Analytics, tercero: Google Ireland Ltd., analítica): distingue a los usuarios de forma anónima para elaborar estadísticas de uso. Duración: 2 años. Solo se instala si aceptas la analítica.",
          "_ga_<ID> (cookie de Google Analytics, tercero: Google Ireland Ltd., analítica): mantiene el estado de la sesión para medir las visitas. Duración: 2 años. Solo se instala si aceptas la analítica.",
          "Medición de audiencia anónima sin cookies, propia: contamos las visitas de forma agregada sin instalar cookies, sin guardar tu dirección IP y sin identificarte. Si tu navegador envía la señal «Do Not Track» o «Global Privacy Control», no se mide tu visita.",
        ],
      },
      {
        heading: "3. Cookies de analítica y consentimiento",
        paragraphs: [
          "Las cookies de analítica son opcionales y están desactivadas por defecto. Solo se descarga Google Analytics y se instalan sus cookies después de que pulses \"Aceptar\" o actives la analítica en \"Configurar\". Si rechazas, la web funciona exactamente igual.",
          "Google Analytics puede tratar datos fuera del Espacio Económico Europeo; Google se acoge al Marco de Privacidad de Datos UE-EE. UU. y a las Cláusulas Contractuales Tipo. Más información en la política de privacidad de Google: policies.google.com/privacy.",
        ],
      },
      {
        heading: "4. Cómo aceptar, rechazar o retirar el consentimiento",
        paragraphs: [
          "Puedes cambiar tu elección en cualquier momento desde el enlace \"Configurar cookies\" del pie de página. Si retiras el consentimiento, dejamos de cargar Google Analytics y borramos sus cookies (_ga y _ga_<ID>) de tu navegador.",
          "También puedes bloquear o eliminar las cookies desde la configuración de tu navegador (Chrome, Firefox, Safari, Edge…), aunque la elección guardada en la web se perderá y te volveremos a preguntar.",
        ],
      },
      {
        heading: "5. Más información",
        paragraphs: [
          "Para saber cómo tratamos tus datos personales consulta nuestra Política de privacidad (www.mobyapp.eu/privacidad). Para cualquier duda: hello@mobyapp.us.",
        ],
      },
    ],
  },
  en: {
    title: "Cookie Policy",
    subtitle: "Which cookies and similar technologies the MobyApp website uses, why, and how to manage them.",
    updatedLabel: "Last updated",
    updated: "November 15, 2026",
    sections: [
      {
        heading: "1. What cookies are",
        paragraphs: [
          "Cookies are small files that a website stores in your browser. Similar technologies, such as the browser's local storage (localStorage), serve similar purposes. This policy applies to the mobyapp.eu and mobyapp.us websites.",
        ],
      },
      {
        heading: "2. Cookies we use",
        paragraphs: ["These are all the cookies and storage technologies the website may use:"],
        list: [
          "mobyapp-consent (local storage, first-party, necessary): stores your cookie choice, with its date and version, so we don't ask you again on every visit. Duration: 12 months; after that we ask again. Does not require consent.",
          "mobyapp-ref (local storage, first-party, necessary): if you arrive at the website through a referral or partner link (?ref=), stores that code so it can be applied if you purchase a service. Duration: 30 days. Not shared with third parties.",
          "_ga (Google Analytics cookie, third party: Google Ireland Ltd., analytics): distinguishes users anonymously to produce usage statistics. Duration: 2 years. Only set if you accept analytics.",
          "_ga_<ID> (Google Analytics cookie, third party: Google Ireland Ltd., analytics): keeps the session state to measure visits. Duration: 2 years. Only set if you accept analytics.",
          "Anonymous, cookieless first-party audience measurement: we count visits in aggregate without setting cookies, storing your IP address or identifying you. If your browser sends a Do Not Track or Global Privacy Control signal, your visit is not measured.",
        ],
      },
      {
        heading: "3. Analytics cookies and consent",
        paragraphs: [
          "Analytics cookies are optional and disabled by default. Google Analytics is only downloaded and its cookies only set after you click \"Accept\" or enable analytics under \"Settings\". If you reject them, the website works exactly the same.",
          "Google Analytics may process data outside the European Economic Area; Google relies on the EU-US Data Privacy Framework and Standard Contractual Clauses. More information in Google's privacy policy: policies.google.com/privacy.",
        ],
      },
      {
        heading: "4. How to accept, reject or withdraw consent",
        paragraphs: [
          "You can change your choice at any time using the \"Cookie settings\" link in the footer. If you withdraw consent, we stop loading Google Analytics and delete its cookies (_ga and _ga_<ID>) from your browser.",
          "You can also block or delete cookies in your browser settings (Chrome, Firefox, Safari, Edge…), although the choice saved on the website will be lost and we will ask you again.",
        ],
      },
      {
        heading: "5. More information",
        paragraphs: [
          "To learn how we process your personal data, see our Privacy policy (www.mobyapp.eu/en/privacidad). For any questions: hello@mobyapp.us.",
        ],
      },
    ],
  },
};
