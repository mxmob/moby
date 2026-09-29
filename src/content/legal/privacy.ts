import type { LegalContent } from "@/components/legal/LegalDocument";
import type { Language } from "@/i18n/translations";

export const privacyPolicy: Record<Language, LegalContent> = {
  es: {
    title: "Política de Privacidad",
    subtitle: "Cómo MobyApp recoge, usa y protege tus datos en nuestra web y en nuestras aplicaciones móviles.",
    updatedLabel: "Última actualización",
    updated: "29 de septiembre de 2026",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        paragraphs: [
          "El responsable del tratamiento de tus datos personales es MobyApp (en adelante, \"MobyApp\", \"nosotros\"), con actividad en España. Puedes contactarnos en cualquier momento en hello@mobyapp.us.",
        ],
      },
      {
        heading: "2. Ámbito de aplicación",
        paragraphs: [
          "Esta política se aplica a los sitios web mobyapp.eu y mobyapp.us y a todas las aplicaciones móviles publicadas por MobyApp como desarrollador en Google Play y en otras tiendas de aplicaciones (en adelante, las \"Aplicaciones\"). Al usar los sitios web o las Aplicaciones aceptas las prácticas descritas en esta política.",
        ],
      },
      {
        heading: "3. Datos que recogemos",
        paragraphs: ["Solo recogemos los datos necesarios para que el servicio funcione:"],
        list: [
          "Datos que nos facilitas: nombre, correo electrónico, empresa y el contenido de los mensajes que nos envías a través del formulario de contacto, correo electrónico o WhatsApp. Si una Aplicación permite crear una cuenta, también el correo electrónico, nombre de usuario y contraseña (almacenada cifrada).",
          "Datos técnicos y de uso: modelo del dispositivo, versión del sistema operativo, idioma, dirección IP, identificadores de la aplicación, páginas o pantallas visitadas, fecha y hora de acceso e informes de errores y fallos.",
          "Datos obtenidos mediante permisos del dispositivo (cámara, ubicación, notificaciones, almacenamiento, etc.): solo cuando una función concreta lo requiere y siempre después de que lo autorices expresamente. Puedes retirar estos permisos en cualquier momento desde los ajustes del dispositivo.",
        ],
      },
      {
        heading: "4. Para qué usamos tus datos y base legal",
        list: [
          "Prestar el servicio y las funciones de las Aplicaciones que solicitas (ejecución de un contrato).",
          "Responder a tus consultas y solicitudes de presupuesto (consentimiento y medidas precontractuales).",
          "Mantener la seguridad, prevenir el fraude y corregir errores técnicos (interés legítimo).",
          "Elaborar estadísticas agregadas de uso para mejorar la web y las Aplicaciones (consentimiento o interés legítimo, según corresponda).",
          "Cumplir con nuestras obligaciones legales.",
        ],
        paragraphs: [
          "No vendemos tus datos personales ni los usamos para publicidad personalizada sin tu consentimiento.",
        ],
      },
      {
        heading: "5. Con quién compartimos los datos",
        paragraphs: [
          "Solo compartimos datos con proveedores que nos ayudan a prestar el servicio y que actúan como encargados del tratamiento bajo contrato, por ejemplo:",
        ],
        list: [
          "Proveedores de alojamiento, bases de datos y almacenamiento en la nube.",
          "Servicios de analítica y diagnóstico de errores (por ejemplo, Google Analytics o Google Firebase).",
          "Google Play y otras tiendas de aplicaciones, para la distribución de las Aplicaciones y, en su caso, la gestión de pagos. MobyApp no recibe ni almacena los datos de tu tarjeta.",
          "Autoridades públicas, cuando lo exija la ley.",
        ],
      },
      {
        heading: "6. Transferencias internacionales",
        paragraphs: [
          "Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En esos casos nos aseguramos de que existan garantías adecuadas, como las Cláusulas Contractuales Tipo de la Comisión Europea o el Marco de Privacidad de Datos UE-EE. UU.",
        ],
      },
      {
        heading: "7. Conservación de los datos",
        paragraphs: [
          "Conservamos tus datos mientras tengas una cuenta activa o mientras sea necesario para la finalidad para la que se recogieron. Los mensajes de contacto se conservan un máximo de 24 meses. Después los eliminamos o anonimizamos, salvo que debamos conservarlos por obligación legal.",
        ],
      },
      {
        heading: "8. Seguridad",
        paragraphs: [
          "Aplicamos medidas técnicas y organizativas para proteger tus datos: cifrado en tránsito (HTTPS/TLS), control de acceso restringido y proveedores con estándares de seguridad reconocidos. Ningún sistema es infalible, pero trabajamos para minimizar los riesgos.",
        ],
      },
      {
        heading: "9. Eliminación de la cuenta y de los datos",
        paragraphs: [
          "Puedes solicitar en cualquier momento la eliminación de tu cuenta y de todos los datos asociados enviando un correo a hello@mobyapp.us con el asunto \"Eliminar mi cuenta\" desde la dirección registrada, indicando el nombre de la Aplicación. Si la Aplicación ofrece la opción, también puedes hacerlo desde sus ajustes.",
          "Eliminaremos tus datos en un plazo máximo de 30 días. Solo conservaremos, bloqueada, la información que estemos obligados a mantener por ley (por ejemplo, datos de facturación).",
        ],
      },
      {
        heading: "10. Tus derechos",
        paragraphs: [
          "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento, escribiendo a hello@mobyapp.us. Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        ],
      },
      {
        heading: "11. Menores de edad",
        paragraphs: [
          "Nuestros servicios no están dirigidos a menores de 14 años y no recogemos conscientemente sus datos. Si detectamos que hemos recibido datos de un menor sin el consentimiento de sus padres o tutores, los eliminaremos.",
        ],
      },
      {
        heading: "12. Cookies",
        paragraphs: [
          "La web utiliza cookies técnicas y de analítica (Google Analytics) para entender cómo se usa el sitio. Puedes bloquear o eliminar las cookies desde la configuración de tu navegador.",
        ],
      },
      {
        heading: "13. Cambios en esta política",
        paragraphs: [
          "Podemos actualizar esta política. Publicaremos la nueva versión en esta página con su fecha de actualización y, si los cambios son relevantes, te lo comunicaremos en la Aplicación o por correo electrónico.",
        ],
      },
      {
        heading: "14. Contacto",
        paragraphs: ["Para cualquier consulta sobre privacidad: hello@mobyapp.us"],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    subtitle: "How MobyApp collects, uses and protects your data on our website and in our mobile apps.",
    updatedLabel: "Last updated",
    updated: "September 29, 2026",
    sections: [
      {
        heading: "1. Data controller",
        paragraphs: [
          "The controller of your personal data is MobyApp (\"MobyApp\", \"we\", \"us\"), operating in Spain. You can contact us at any time at hello@mobyapp.us.",
        ],
      },
      {
        heading: "2. Scope",
        paragraphs: [
          "This policy applies to the mobyapp.eu and mobyapp.us websites and to all mobile applications published by MobyApp as a developer on Google Play and other app stores (the \"Apps\"). By using the websites or the Apps you accept the practices described in this policy.",
        ],
      },
      {
        heading: "3. Data we collect",
        paragraphs: ["We only collect the data needed for the service to work:"],
        list: [
          "Data you provide: name, email address, company and the content of messages you send us through the contact form, email or WhatsApp. If an App lets you create an account, also your email, username and password (stored encrypted).",
          "Technical and usage data: device model, operating system version, language, IP address, app identifiers, pages or screens visited, access date and time, and error and crash reports.",
          "Data obtained through device permissions (camera, location, notifications, storage, etc.): only when a specific feature requires it and always after you explicitly grant it. You can revoke these permissions at any time in your device settings.",
        ],
      },
      {
        heading: "4. How we use your data and legal basis",
        list: [
          "To provide the service and the App features you request (performance of a contract).",
          "To answer your enquiries and quote requests (consent and pre-contractual steps).",
          "To keep the service secure, prevent fraud and fix technical errors (legitimate interest).",
          "To produce aggregated usage statistics to improve the website and the Apps (consent or legitimate interest, as applicable).",
          "To comply with our legal obligations.",
        ],
        paragraphs: [
          "We do not sell your personal data or use it for personalised advertising without your consent.",
        ],
      },
      {
        heading: "5. Who we share data with",
        paragraphs: [
          "We only share data with providers that help us deliver the service and act as data processors under contract, for example:",
        ],
        list: [
          "Hosting, database and cloud storage providers.",
          "Analytics and crash reporting services (for example, Google Analytics or Google Firebase).",
          "Google Play and other app stores, for distributing the Apps and, where applicable, handling payments. MobyApp never receives or stores your card details.",
          "Public authorities, when required by law.",
        ],
      },
      {
        heading: "6. International transfers",
        paragraphs: [
          "Some providers may process data outside the European Economic Area. In those cases we make sure appropriate safeguards are in place, such as the European Commission's Standard Contractual Clauses or the EU-US Data Privacy Framework.",
        ],
      },
      {
        heading: "7. Data retention",
        paragraphs: [
          "We keep your data while you have an active account or for as long as needed for the purpose it was collected for. Contact messages are kept for a maximum of 24 months. After that we delete or anonymise them, unless we are legally required to keep them.",
        ],
      },
      {
        heading: "8. Security",
        paragraphs: [
          "We apply technical and organisational measures to protect your data: encryption in transit (HTTPS/TLS), restricted access control and providers with recognised security standards. No system is infallible, but we work to minimise risks.",
        ],
      },
      {
        heading: "9. Account and data deletion",
        paragraphs: [
          "You can request deletion of your account and all associated data at any time by emailing hello@mobyapp.us with the subject \"Delete my account\" from your registered address and stating the App name. If the App offers the option, you can also do it from its settings.",
          "We will delete your data within 30 days at most. We only keep, in restricted form, information we are legally required to retain (for example, billing records).",
        ],
      },
      {
        heading: "10. Your rights",
        paragraphs: [
          "You can exercise your rights of access, rectification, erasure, objection, restriction of processing and data portability, and withdraw your consent, by writing to hello@mobyapp.us. If you believe we have not handled your request properly, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).",
        ],
      },
      {
        heading: "11. Children",
        paragraphs: [
          "Our services are not directed at children under 14 and we do not knowingly collect their data. If we learn that we have received data from a child without parental consent, we will delete it.",
        ],
      },
      {
        heading: "12. Cookies",
        paragraphs: [
          "The website uses technical and analytics cookies (Google Analytics) to understand how the site is used. You can block or delete cookies in your browser settings.",
        ],
      },
      {
        heading: "13. Changes to this policy",
        paragraphs: [
          "We may update this policy. We will publish the new version on this page with its update date and, if the changes are significant, notify you in the App or by email.",
        ],
      },
      {
        heading: "14. Contact",
        paragraphs: ["For any privacy question: hello@mobyapp.us"],
      },
    ],
  },
};
