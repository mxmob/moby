import type { LegalContent } from "@/components/legal/LegalDocument";
import type { Language } from "@/i18n/translations";

// TODO(MobyApp): añadir el domicilio social registrado de MobyApp LLC cuando esté confirmado.
// Mientras esté vacío no se muestra.
const LLC_ADDRESS_ES = "";
const LLC_ADDRESS_EN = "";

export const privacyPolicy: Record<Language, LegalContent> = {
  es: {
    title: "Política de Privacidad",
    subtitle: "Cómo MobyApp recoge, usa y protege tus datos en nuestra web y en nuestras aplicaciones móviles.",
    updatedLabel: "Última actualización",
    updated: "15 de noviembre de 2026",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        paragraphs: [
          `El responsable del tratamiento de tus datos personales es MobyApp LLC, sociedad de responsabilidad limitada constituida en Estados Unidos${LLC_ADDRESS_ES ? `, con domicilio en ${LLC_ADDRESS_ES}` : ""} (en adelante, "MobyApp", "nosotros"), que opera la marca MobyApp en España y Europa. Puedes contactarnos en cualquier momento en hello@mobyapp.us.`,
        ],
      },
      {
        heading: "2. Ámbito de aplicación",
        paragraphs: [
          "Esta política se aplica a los sitios web mobyapp.eu y mobyapp.us a la plataforma de gestión para negocios Bridge (bridge.mobyapp.eu), incluida su función de redes sociales Moby Social, y a todas las aplicaciones móviles publicadas por MobyApp como desarrollador en Google Play y en otras tiendas de aplicaciones (en adelante, las \"Aplicaciones\"). Al usar los sitios web o las Aplicaciones aceptas las prácticas descritas en esta política.",
        ],
      },
      {
        heading: "3. Datos que recogemos",
        paragraphs: ["Solo recogemos los datos necesarios para que el servicio funcione:"],
        list: [
          "Datos que nos facilitas: nombre, correo electrónico, teléfono (opcional), empresa y el contenido de los mensajes que nos envías a través del formulario de contacto, correo electrónico o WhatsApp. Si una Aplicación permite crear una cuenta, también el correo electrónico, nombre de usuario y contraseña (almacenada cifrada).",
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
          "Meta Platforms (Facebook e Instagram) y TikTok, solo cuando nos pides publicar contenido en tus cuentas: les enviamos el texto y los archivos de esa publicación.",
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
          "Puedes solicitar en cualquier momento la eliminación de tu cuenta y de todos los datos asociados enviando un correo a hello@mobyapp.us con el asunto \"Eliminar mi cuenta\" desde la dirección registrada, indicando el nombre de la Aplicación. Si la Aplicación ofrece la opción, también puedes hacerlo desde sus ajustes. Para los datos de Facebook, Instagram o TikTok, consulta la sección 10.",
          "Eliminaremos tus datos en un plazo máximo de 30 días. Solo conservaremos, bloqueada, la información que estemos obligados a mantener por ley (por ejemplo, datos de facturación).",
        ],
      },
      {
        heading: "10. Datos de redes sociales conectadas (Facebook, Instagram y TikTok)",
        paragraphs: [
          "Si usas Moby Social en Bridge y conectas tus cuentas con «Iniciar sesión con Facebook» (Meta) o con TikTok Login Kit, recibimos de esas plataformas, solo con tu autorización expresa y solo de las Páginas y cuentas que elijas:",
        ],
        list: [
          "Meta (Facebook e Instagram): el identificador de tu usuario de Facebook (solo para atender solicitudes de eliminación), el nombre, identificador, foto y enlace de tus Páginas de Facebook y de las cuentas profesionales de Instagram vinculadas, su número de seguidores y publicaciones, los tokens de acceso de esas Páginas (guardados cifrados), las publicaciones que creas o publicas desde Moby y las que ya existen en esas cuentas (texto, imágenes o vídeos, fecha y enlace), el número de comentarios y reacciones y las estadísticas (alcance, impresiones, visualizaciones, interacciones, guardados, compartidos y seguidores por día).",
          "TikTok: tu identificador abierto (open_id), nombre visible, nombre de usuario, foto de perfil, número de seguidores, «me gusta» y vídeos, la lista de tus vídeos públicos con sus estadísticas, las opciones de publicación de tu cuenta (privacidad, comentarios, dúo, stitch) y los tokens de acceso y renovación (guardados cifrados).",
          "Finalidad: exclusivamente prestarte las funciones que solicitas: programar y publicar tu propio contenido en tus Páginas y cuentas, añadir el primer comentario que tú escribas, mostrarte las estadísticas de tus publicaciones y cuentas en Bridge y, solo si creas un widget de Moby Feed, mostrar tus propias publicaciones en tu web. Base legal: ejecución del contrato.",
          "No leemos mensajes privados ni datos de tus seguidores; no vendemos ni alquilamos estos datos; no los usamos para publicidad, elaboración de perfiles ni para entrenar modelos de inteligencia artificial, y no los compartimos con terceros salvo con los proveedores de alojamiento y almacenamiento que actúan como encargados del tratamiento. Cumplimos las Condiciones de la Plataforma de Meta y las Condiciones para desarrolladores de TikTok.",
          "Conservación: los tokens de acceso se eliminan en el momento en que desconectas la cuenta en Bridge o retiras el acceso a Moby desde Facebook, Instagram o TikTok. El resto de datos de esa cuenta (perfil, publicaciones en caché y estadísticas) se conserva mientras uses Moby Social para que tengas tu histórico, y se elimina por completo cuando eliges «Eliminar datos» en Bridge, cuando envías la solicitud de eliminación desde Facebook o cuando nos lo pides por correo (en un plazo máximo de 30 días), y en todo caso 30 días después de que cierres tu cuenta de Bridge.",
          "Eliminación: instrucciones paso a paso en www.mobyapp.eu/eliminacion-de-datos (desde Bridge, desde la configuración de Facebook, Instagram o TikTok, o escribiendo a hello@mobyapp.us).",
        ],
      },
      {
        heading: "11. Tus derechos",
        paragraphs: [
          "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento, escribiendo a hello@mobyapp.us. Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        ],
      },
      {
        heading: "12. Menores de edad",
        paragraphs: [
          "Nuestros servicios no están dirigidos a menores de 14 años y no recogemos conscientemente sus datos. Si detectamos que hemos recibido datos de un menor sin el consentimiento de sus padres o tutores, los eliminaremos.",
        ],
      },
      {
        heading: "13. Cookies",
        paragraphs: [
          "La web utiliza almacenamiento técnico necesario para recordar tu elección sobre cookies y, solo si lo aceptas, cookies de analítica de Google Analytics para entender cómo se usa el sitio. Puedes aceptar, rechazar o cambiar tu elección en cualquier momento desde el enlace \"Configurar cookies\" del pie de página. Tienes el detalle de cada cookie, su finalidad y duración en nuestra Política de cookies (www.mobyapp.eu/cookies).",
        ],
      },
      {
        heading: "14. Cambios en esta política",
        paragraphs: [
          "Podemos actualizar esta política. Publicaremos la nueva versión en esta página con su fecha de actualización y, si los cambios son relevantes, te lo comunicaremos en la Aplicación o por correo electrónico.",
        ],
      },
      {
        heading: "15. Contacto",
        paragraphs: ["Para cualquier consulta sobre privacidad: hello@mobyapp.us"],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    subtitle: "How MobyApp collects, uses and protects your data on our website and in our mobile apps.",
    updatedLabel: "Last updated",
    updated: "November 15, 2026",
    sections: [
      {
        heading: "1. Data controller",
        paragraphs: [
          `The controller of your personal data is MobyApp LLC, a limited liability company organised in the United States${LLC_ADDRESS_EN ? `, with its registered address at ${LLC_ADDRESS_EN}` : ""} ("MobyApp", "we", "us"), which operates the MobyApp brand in Spain and Europe. You can contact us at any time at hello@mobyapp.us.`,
        ],
      },
      {
        heading: "2. Scope",
        paragraphs: [
          "This policy applies to the mobyapp.eu and mobyapp.us websites to the Bridge business management platform (bridge.mobyapp.eu), including its Moby Social feature, and to all mobile applications published by MobyApp as a developer on Google Play and other app stores (the \"Apps\"). By using the websites or the Apps you accept the practices described in this policy.",
        ],
      },
      {
        heading: "3. Data we collect",
        paragraphs: ["We only collect the data needed for the service to work:"],
        list: [
          "Data you provide: name, email address, phone number (optional), company and the content of messages you send us through the contact form, email or WhatsApp. If an App lets you create an account, also your email, username and password (stored encrypted).",
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
          "Meta Platforms (Facebook and Instagram) and TikTok, only when you ask us to publish content to your accounts: we send them the text and files of that post.",
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
          "You can request deletion of your account and all associated data at any time by emailing hello@mobyapp.us with the subject \"Delete my account\" from your registered address and stating the App name. If the App offers the option, you can also do it from its settings. For Facebook, Instagram or TikTok data, see section 10.",
          "We will delete your data within 30 days at most. We only keep, in restricted form, information we are legally required to retain (for example, billing records).",
        ],
      },
      {
        heading: "10. Data from connected social media accounts (Facebook, Instagram and TikTok)",
        paragraphs: [
          "If you use Moby Social in Bridge and connect your accounts with Facebook Login (Meta) or TikTok Login Kit, we receive from those platforms, only with your explicit authorisation and only for the Pages and accounts you choose:",
        ],
        list: [
          "Meta (Facebook and Instagram): your Facebook user ID (only to handle deletion requests), the name, ID, picture and link of your Facebook Pages and the linked Instagram professional accounts, their follower and post counts, the Page access tokens (stored encrypted), the posts you create or publish through Moby and the posts already on those accounts (text, images or videos, date and link), comment and reaction counts, and insights (reach, impressions, views, engagement, saves, shares and daily followers).",
          "TikTok: your open ID, display name, username, profile picture, follower, like and video counts, the list of your public videos with their statistics, your account's posting options (privacy, comments, duet, stitch) and the access and refresh tokens (stored encrypted).",
          "Purpose: solely to provide the features you request: scheduling and publishing your own content to your Pages and accounts, adding the first comment you write, showing you the insights of your posts and accounts in Bridge and, only if you create a Moby Feed widget, displaying your own posts on your website. Legal basis: performance of a contract.",
          "We do not read private messages or your followers' data; we do not sell or rent this data; we do not use it for advertising, profiling or to train artificial intelligence models; and we do not share it with third parties other than the hosting and storage providers acting as our data processors. We comply with the Meta Platform Terms and the TikTok Developer Terms of Service.",
          "Retention: access tokens are deleted as soon as you disconnect the account in Bridge or remove Moby's access from Facebook, Instagram or TikTok. The rest of that account's data (profile, cached posts and insights) is kept while you use Moby Social so you keep your history, and is fully deleted when you choose \"Delete data\" in Bridge, when you send a deletion request from Facebook or when you ask us by email (within 30 days at most), and in any case 30 days after you close your Bridge account.",
          "Deletion: step-by-step instructions at www.mobyapp.eu/en/eliminacion-de-datos (from Bridge, from your Facebook, Instagram or TikTok settings, or by emailing hello@mobyapp.us).",
        ],
      },
      {
        heading: "11. Your rights",
        paragraphs: [
          "You can exercise your rights of access, rectification, erasure, objection, restriction of processing and data portability, and withdraw your consent, by writing to hello@mobyapp.us. If you believe we have not handled your request properly, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).",
        ],
      },
      {
        heading: "12. Children",
        paragraphs: [
          "Our services are not directed at children under 14 and we do not knowingly collect their data. If we learn that we have received data from a child without parental consent, we will delete it.",
        ],
      },
      {
        heading: "13. Cookies",
        paragraphs: [
          "The website uses necessary technical storage to remember your cookie choice and, only if you accept them, Google Analytics cookies to understand how the site is used. You can accept, reject or change your choice at any time using the \"Cookie settings\" link in the footer. Details of each cookie, its purpose and duration are in our Cookie policy (www.mobyapp.eu/en/cookies).",
        ],
      },
      {
        heading: "14. Changes to this policy",
        paragraphs: [
          "We may update this policy. We will publish the new version on this page with its update date and, if the changes are significant, notify you in the App or by email.",
        ],
      },
      {
        heading: "15. Contact",
        paragraphs: ["For any privacy question: hello@mobyapp.us"],
      },
    ],
  },
};
