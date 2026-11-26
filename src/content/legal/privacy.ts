import type { LegalContent } from "@/components/legal/LegalDocument";
import type { Language } from "@/i18n/translations";

// Datos de la entidad que presta la plataforma y los servicios (ADR-025 en el vault moby-docs; datos del dueño, 2026-11-23).
// Pendiente (no inventar): número de registro (Delaware File Number) y representante en la UE (art. 27 RGPD).
// REVISIÓN LEGAL: texto preparado sin abogado; pendiente de revisión jurídica (roles responsable/encargado por producto,
// transferencias a EE. UU. y representante del art. 27 RGPD).
export const LLC = {
  legalName: "Moby App, LLC",
  tradeName: "Moby App",
  state: "Delaware",
  ein: "61-2182565",
  address: "131 Continental Dr, Suite 305, Newark, DE 19713, United States",
  phone: "+1 (754) 273-6237",
} as const;
export const LLC_IDENTITY_ES = `${LLC.legalName} (nombre comercial: ${LLC.tradeName}), sociedad de responsabilidad limitada constituida en el Estado de ${LLC.state} (EE. UU.), con domicilio en ${LLC.address} y número de identificación fiscal (EIN) ${LLC.ein}`;
export const LLC_IDENTITY_EN = `${LLC.legalName} (doing business as ${LLC.tradeName}), a limited liability company organised under the laws of the State of ${LLC.state} (USA), with its registered address at ${LLC.address} and Employer Identification Number (EIN) ${LLC.ein}`;

export const privacyPolicy: Record<Language, LegalContent> = {
  es: {
    title: "Política de Privacidad",
    subtitle: "Cómo MobyApp recoge, usa y protege tus datos en nuestra web y en nuestras aplicaciones móviles.",
    updatedLabel: "Última actualización",
    updated: "26 de noviembre de 2026",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        paragraphs: [
          `El responsable del tratamiento de tus datos personales es ${LLC_IDENTITY_ES} (en adelante, "MobyApp", "nosotros"), que opera la marca MobyApp en España y Europa. Puedes contactarnos en cualquier momento en hello@mobyapp.eu o en el teléfono ${LLC.phone}; para cualquier asunto de privacidad o protección de datos, escribe a privacy@mobyapp.eu. Representante en la Unión Europea (art. 27 RGPD): [PENDIENTE: nombre y dirección del representante en la UE].`,
        ],
      },
      {
        heading: "2. Ámbito de aplicación",
        paragraphs: [
          "Esta política se aplica a los sitios web mobyapp.eu y mobyapp.us a la plataforma de gestión para negocios Bridge (bridge.mobyapp.eu), incluida su función de redes sociales Moby Social, a las webs, paneles, widgets y plugins de WordPress de los productos Moby Feed (feeds.mobyapp.eu), Moby Booking (booking.mobyapp.eu), Moby Reviews (reviews.mobyapp.eu), Moby Catalog (catalog.mobyapp.eu), Moby Boost (boost.mobyapp.eu), Moby Cart (cart.mobyapp.eu) y Moby Rewards (rewards.mobyapp.eu), y a todas las aplicaciones móviles publicadas por MobyApp como desarrollador en Google Play y en otras tiendas de aplicaciones (en adelante, las \"Aplicaciones\"). La sección 11 explica qué datos trata cada producto y quién es el responsable. Al usar los sitios web o las Aplicaciones aceptas las prácticas descritas en esta política.",
        ],
      },
      {
        heading: "3. Datos que recogemos",
        paragraphs: ["Solo recogemos los datos necesarios para que el servicio funcione:"],
        list: [
          "Datos que nos facilitas: nombre, correo electrónico, teléfono (opcional), empresa y el contenido de los mensajes que nos envías a través del formulario de contacto, correo electrónico o WhatsApp. Si una Aplicación permite crear una cuenta, también el correo electrónico, nombre de usuario y contraseña (almacenada cifrada).",
          "Datos de contratación y facturación, si contratas un servicio: nombre, NIF/CIF, dirección y teléfono de la empresa, nombre, correo electrónico y teléfono de la persona responsable, plan contratado, código promocional o de recomendación utilizado e historial de pagos y facturas. Los datos de la tarjeta los recoge directamente Stripe.",
          "Datos técnicos y de uso: modelo del dispositivo, versión del sistema operativo, idioma, dirección IP, identificadores de la aplicación, páginas o pantallas visitadas, fecha y hora de acceso e informes de errores y fallos.",
          "Datos obtenidos mediante permisos del dispositivo (cámara, ubicación, notificaciones, almacenamiento, etc.): solo cuando una función concreta lo requiere y siempre después de que lo autorices expresamente. Puedes retirar estos permisos en cualquier momento desde los ajustes del dispositivo.",
        ],
      },
      {
        heading: "4. Para qué usamos tus datos y base legal",
        list: [
          "Prestar el servicio y las funciones de las Aplicaciones que solicitas (ejecución de un contrato).",
          "Gestionar la contratación, los cobros, la facturación y, en su caso, la atribución a un partner o el programa de recomendación (ejecución de un contrato y cumplimiento de obligaciones legales fiscales y contables).",
          "Responder a tus consultas y solicitudes de presupuesto (consentimiento y medidas precontractuales).",
          "Mantener la seguridad, prevenir el fraude y corregir errores técnicos (interés legítimo).",
          "Elaborar estadísticas agregadas de uso para mejorar la web y las Aplicaciones (consentimiento o interés legítimo, según corresponda).",
          "Contar las visitas de la web con nuestra medición de audiencia propia y sin cookies: no instala cookies ni guarda nada en tu dispositivo, no guarda tu dirección IP ni otros datos personales y solo produce cifras agregadas; si tu navegador envía «Do Not Track» o «Global Privacy Control», no se mide tu visita (interés legítimo en entender y mejorar la web). Más detalles en la política de cookies.",
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
          "Alojamiento y almacenamiento: Salesforce, Inc. (Heroku), aplicación y base de datos en la región de la UE (Irlanda); Microsoft Ireland Operations Ltd. (Azure Blob Storage), archivos, en la UE; Vercel Inc., servidor de las webs, paneles y scripts de los widgets (trata direcciones IP y registros técnicos).",
          "Envío de emails transaccionales (altas, contraseñas, confirmaciones, recordatorios y avisos): [PENDIENTE: nombre y ubicación del proveedor de email].",
          "Diagnóstico de errores del servidor: Functional Software, Inc. (Sentry), que recibe los datos técnicos del error y, en su caso, el identificador de la cuenta afectada.",
          "Higgsfield AI, para la generación de imágenes y vídeos con IA en Bridge (estudio de creatividades), solo cuando el negocio lo usa: recibe las instrucciones y las imágenes que el negocio aporta para esa generación.",
          "Telegram, solo si el negocio activa los avisos por Telegram en un producto: recibe el texto del aviso que el propio negocio pide.",
          "Servicios de analítica y diagnóstico de errores (por ejemplo, Google Analytics o Google Firebase).",
          "OpenAI (OpenAI Ireland Ltd. / OpenAI, L.L.C.), para las funciones de inteligencia artificial de Bridge (asistente, redacción y traducción de textos) y de los productos Moby (respuestas sugeridas a reseñas, textos de emails de Moby Cart, explicación de errores de catálogo en Moby Catalog). Solo recibe el contenido necesario para cada petición, que según su contrato de encargado del tratamiento no se usa para entrenar sus modelos.",
          "Servicios de notificaciones push del navegador o del sistema operativo (Google, Apple, Mozilla, Microsoft), que reciben el aviso cifrado para entregarlo en tu dispositivo.",
          "Stripe (Stripe Payments Europe, Ltd. y sus afiliadas), como procesador de pagos para la contratación online de los servicios: recibe los datos de pago y de facturación necesarios para cobrar las suscripciones y gestionar el portal de cliente. MobyApp no recibe ni almacena los datos completos de tu tarjeta.",
          "Google Play y otras tiendas de aplicaciones, para la distribución de las Aplicaciones y, en su caso, la gestión de pagos. MobyApp no recibe ni almacena los datos de tu tarjeta.",
          "El partner o distribuidor autorizado con cuyo código o enlace hayas contratado, y el cliente que te haya recomendado: solo el nombre de tu empresa, los servicios contratados y su estado, para el cálculo de comisiones o créditos.",
          "Meta Platforms (Facebook e Instagram) y TikTok, solo cuando nos pides publicar contenido en tus cuentas: les enviamos el texto y los archivos de esa publicación.",
          "Autoridades públicas, cuando lo exija la ley.",
        ],
      },
      {
        heading: "6. Transferencias internacionales",
        paragraphs: [
          "MobyApp es una sociedad estadounidense y algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo, aunque los datos de los productos se alojan en la UE. En esos casos nos aseguramos de que existan garantías adecuadas, como las Cláusulas Contractuales Tipo de la Comisión Europea o el Marco de Privacidad de Datos UE-EE. UU.",
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
          "Puedes solicitar en cualquier momento la eliminación de tu cuenta y de todos los datos asociados enviando un correo a privacy@mobyapp.eu con el asunto \"Eliminar mi cuenta\" desde la dirección registrada, indicando el nombre de la Aplicación. Si la Aplicación ofrece la opción, también puedes hacerlo desde sus ajustes. Para los datos de Facebook, Instagram o TikTok, consulta la sección 10.",
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
          "Finalidad: exclusivamente prestarte las funciones que solicitas: programar y publicar tu propio contenido en tus Páginas y cuentas, añadir el primer comentario que tú escribas, ejecutar las automatizaciones de mensajes que actives, mostrarte las estadísticas de tus publicaciones y cuentas en Bridge y, solo si creas un widget de Moby Feed, mostrar tus propias publicaciones en tu web. Base legal: ejecución del contrato.",
          "Mensajes automáticos (solo si el negocio activa esta función en Bridge y concede a Moby los permisos de mensajería de Meta): recibimos los mensajes directos que las personas envían a esa Página o cuenta de Instagram (texto, botones pulsados, tipo de adjunto, respuestas y menciones en historias), los comentarios publicados en sus publicaciones y, de quien escribe o comenta, su identificador con ámbito de la Página o de Instagram, su nombre y su nombre de usuario. Los usamos únicamente para ejecutar las automatizaciones que configura el negocio (respuesta pública o privada a un comentario, respuesta a palabras clave, bienvenida, respuesta a menciones), mostrar las conversaciones en la bandeja de Bridge para que el equipo responda y, si la persona lo acepta expresamente en la conversación, guardar el email o teléfono que facilita como contacto en el CRM del negocio. Respetamos la ventana de 24 horas de Meta (no enviamos mensajes promocionales fuera de ella) y quien escribe puede dejar de recibir mensajes automáticos respondiendo STOP o BAJA. Para estos datos el negocio es el responsable del tratamiento y MobyApp actúa como encargado. Los mensajes se conservan 180 días como máximo y se eliminan antes si el negocio desconecta la cuenta, borra la conversación o se recibe una solicitud de eliminación. Si el negocio pide una «respuesta sugerida con IA», el texto reciente de esa conversación se envía a nuestro proveedor de IA (OpenAI) solo para generar la sugerencia, sin que se use para entrenar modelos; una respuesta generada con IA solo se envía sin revisión si el negocio lo activa expresamente, y entonces se indica en el propio mensaje.",
          "Fuera de los mensajes y comentarios descritos para las automatizaciones, no leemos mensajes privados ni datos de los seguidores; no vendemos ni alquilamos estos datos; no los usamos para publicidad, elaboración de perfiles ni para entrenar modelos de inteligencia artificial, y no los compartimos con terceros salvo con los proveedores de alojamiento y almacenamiento que actúan como encargados del tratamiento. Cumplimos las Condiciones de la Plataforma de Meta y las Condiciones para desarrolladores de TikTok.",
          "Conservación: los tokens de acceso se eliminan en el momento en que desconectas la cuenta en Bridge o retiras el acceso a Moby desde Facebook, Instagram o TikTok. Los mensajes y comentarios de las automatizaciones se borran también en ese momento. El resto de datos de esa cuenta (perfil, publicaciones en caché y estadísticas) se conserva mientras uses Moby Social para que tengas tu histórico, y se elimina por completo cuando eliges «Eliminar datos» en Bridge, cuando envías la solicitud de eliminación desde Facebook o cuando nos lo pides por correo (en un plazo máximo de 30 días), y en todo caso 30 días después de que cierres tu cuenta de Bridge.",
          "Eliminación: instrucciones paso a paso en www.mobyapp.eu/eliminacion-de-datos (desde Bridge, desde la configuración de Facebook, Instagram o TikTok, o escribiendo a privacy@mobyapp.eu).",
        ],
      },
      {
        heading: "11. Productos Moby: qué datos tratan y quién es el responsable",
        paragraphs: [
          "En todos los productos, MobyApp es responsable de los datos de la cuenta del negocio cliente (nombre, email, empresa, web, plan, facturación y uso del panel), que trata para prestar el servicio (ejecución del contrato) y cumplir sus obligaciones legales. Los datos de los clientes finales de cada negocio se tratan así:",
        ],
        list: [
          "Moby Feed: el widget muestra en la web del negocio sus propias publicaciones de Instagram y TikTok. De los visitantes de esa web solo se recibe, para contar vistas de forma anónima, la dirección de la página, el idioma y la zona horaria; no se instalan cookies ni se guarda la IP para esta finalidad. Si el visitante pulsa «Reproducir» en un vídeo de TikTok se carga el reproductor oficial de TikTok, que se rige por su propia política.",
          "Moby Booking: el negocio es el responsable de los datos de sus clientes que reservan (nombre, email, teléfono, notas, cita y pago de la señal) y MobyApp actúa como encargado del tratamiento para gestionar la reserva y enviar confirmaciones y recordatorios.",
          "Moby Reviews: el negocio es el responsable de las reseñas y de los datos de quien las escribe o recibe una petición de opinión (nombre, email, valoración, texto y foto opcional), y MobyApp actúa como encargado. Las reseñas importadas de Google se muestran con la atribución de Google y las fotos de sus autores se cargan desde los servidores de Google.",
          "Moby Catalog: sincroniza los productos de la tienda con Google Merchant Center y Meta Commerce; no trata datos de clientes finales. MobyApp guarda cifrados los tokens de acceso de esas cuentas.",
          "Moby Boost: el negocio es el responsable del email o la suscripción push de quien pide un aviso de stock o de precio (con la prueba de su consentimiento) y MobyApp actúa como encargado. Las recomendaciones se calculan con pedidos sin datos de clientes.",
          "Moby Cart: el negocio es el responsable de los datos de los carritos abandonados (email o teléfono, productos, importes y prueba del consentimiento o de la base legal) y MobyApp actúa como encargado para enviar los recordatorios. Se borran a los 30 días salvo que el negocio fije otro plazo.",
          "Moby Rewards: el negocio es el responsable de los datos de los socios de su programa de fidelización y MobyApp actúa como encargado; el detalle está en rewards.mobyapp.eu/privacidad.",
          "Cuando MobyApp actúa como encargado, trata los datos solo siguiendo las instrucciones del negocio y según el Acuerdo de encargo del tratamiento (www.mobyapp.eu/encargo-tratamiento). Si eres cliente de uno de esos negocios, ejerce tus derechos ante él; si nos escribes a nosotros, le trasladaremos tu solicitud.",
        ],
      },
      {
        heading: "12. Tus derechos",
        paragraphs: [
          "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento, escribiendo a privacy@mobyapp.eu. Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        ],
      },
      {
        heading: "13. Menores de edad",
        paragraphs: [
          "Nuestros servicios no están dirigidos a menores de 14 años y no recogemos conscientemente sus datos. Si detectamos que hemos recibido datos de un menor sin el consentimiento de sus padres o tutores, los eliminaremos.",
        ],
      },
      {
        heading: "14. Cookies",
        paragraphs: [
          "La web utiliza almacenamiento técnico necesario para recordar tu elección sobre cookies y, solo si lo aceptas, cookies de analítica de Google Analytics para entender cómo se usa el sitio. Puedes aceptar, rechazar o cambiar tu elección en cualquier momento desde el enlace \"Configurar cookies\" del pie de página. Las webs y paneles de los productos Moby solo usan almacenamiento técnico (sesión del panel y preferencia de idioma) y no instalan cookies de analítica ni de terceros. Tienes el detalle de cada cookie y elemento de almacenamiento, su finalidad y duración, también de los widgets, en nuestra Política de cookies (www.mobyapp.eu/cookies).",
        ],
      },
      {
        heading: "15. Cambios en esta política",
        paragraphs: [
          "Podemos actualizar esta política. Publicaremos la nueva versión en esta página con su fecha de actualización y, si los cambios son relevantes, te lo comunicaremos en la Aplicación o por correo electrónico.",
        ],
      },
      {
        heading: "16. Contacto",
        paragraphs: ["Para cualquier consulta sobre privacidad: privacy@mobyapp.eu"],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    subtitle: "How MobyApp collects, uses and protects your data on our website and in our mobile apps.",
    updatedLabel: "Last updated",
    updated: "November 26, 2026",
    sections: [
      {
        heading: "1. Data controller",
        paragraphs: [
          `The controller of your personal data is ${LLC_IDENTITY_EN} ("MobyApp", "we", "us"), which operates the MobyApp brand in Spain and Europe. You can contact us at any time at hello@mobyapp.eu or by phone on ${LLC.phone}; for any privacy or data protection matter, write to privacy@mobyapp.eu. Representative in the European Union (art. 27 GDPR): [PENDING: name and address of the EU representative].`,
        ],
      },
      {
        heading: "2. Scope",
        paragraphs: [
          "This policy applies to the mobyapp.eu and mobyapp.us websites to the Bridge business management platform (bridge.mobyapp.eu), including its Moby Social feature, to the websites, dashboards, widgets and WordPress plugins of the Moby Feed (feeds.mobyapp.eu), Moby Booking (booking.mobyapp.eu), Moby Reviews (reviews.mobyapp.eu), Moby Catalog (catalog.mobyapp.eu), Moby Boost (boost.mobyapp.eu), Moby Cart (cart.mobyapp.eu) and Moby Rewards (rewards.mobyapp.eu) products, and to all mobile applications published by MobyApp as a developer on Google Play and other app stores (the \"Apps\"). Section 11 explains what data each product processes and who the controller is. By using the websites or the Apps you accept the practices described in this policy.",
        ],
      },
      {
        heading: "3. Data we collect",
        paragraphs: ["We only collect the data needed for the service to work:"],
        list: [
          "Data you provide: name, email address, phone number (optional), company and the content of messages you send us through the contact form, email or WhatsApp. If an App lets you create an account, also your email, username and password (stored encrypted).",
          "Purchase and billing data, if you purchase a service: the business name, tax ID, address and phone number, the account owner's name, email and phone number, the plan purchased, any promo or referral code used and the payment and invoice history. Card details are collected directly by Stripe.",
          "Technical and usage data: device model, operating system version, language, IP address, app identifiers, pages or screens visited, access date and time, and error and crash reports.",
          "Data obtained through device permissions (camera, location, notifications, storage, etc.): only when a specific feature requires it and always after you explicitly grant it. You can revoke these permissions at any time in your device settings.",
        ],
      },
      {
        heading: "4. How we use your data and legal basis",
        list: [
          "To provide the service and the App features you request (performance of a contract).",
          "To manage purchases, payments, invoicing and, where applicable, partner attribution or the referral programme (performance of a contract and compliance with tax and accounting obligations).",
          "To answer your enquiries and quote requests (consent and pre-contractual steps).",
          "To keep the service secure, prevent fraud and fix technical errors (legitimate interest).",
          "To produce aggregated usage statistics to improve the website and the Apps (consent or legitimate interest, as applicable).",
          "To count website visits with our own cookieless, first-party audience measurement: it sets no cookies and stores nothing on your device, keeps neither your IP address nor any other personal data and only produces aggregated figures; if your browser sends a Do Not Track or Global Privacy Control signal, your visit is not measured (legitimate interest in understanding and improving the website). See the cookie policy for details.",
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
          "Hosting and storage: Salesforce, Inc. (Heroku), application and database in the EU region (Ireland); Microsoft Ireland Operations Ltd. (Azure Blob Storage), files, in the EU; Vercel Inc., hosting of the websites, dashboards and widget scripts (processes IP addresses and technical logs).",
          "Transactional email delivery (sign-ups, passwords, confirmations, reminders and notifications): [PENDING: name and location of the email provider].",
          "Server error diagnostics: Functional Software, Inc. (Sentry), which receives the technical data of the error and, where relevant, the ID of the affected account.",
          "Higgsfield AI, for AI image and video generation in Bridge (creative studio), only when the business uses it: it receives the instructions and images the business provides for that generation.",
          "Telegram, only if the business turns on Telegram notifications in a product: it receives the text of the notification the business asks for.",
          "Analytics and crash reporting services (for example, Google Analytics or Google Firebase).",
          "OpenAI (OpenAI Ireland Ltd. / OpenAI, L.L.C.), for the artificial intelligence features in Bridge (assistant, text drafting and translation) and in the Moby products (suggested review replies, Moby Cart email copy, catalogue error explanations in Moby Catalog). It only receives the content needed for each request, which under its data processing agreement is not used to train its models.",
          "Browser and operating system push notification services (Google, Apple, Mozilla, Microsoft), which receive the encrypted notification to deliver it to your device.",
          "Stripe (Stripe Payments Europe, Ltd. and its affiliates), as payment processor for online purchases of the services: it receives the payment and billing data needed to charge subscriptions and run the customer portal. MobyApp never receives or stores your full card details.",
          "Google Play and other app stores, for distributing the Apps and, where applicable, handling payments. MobyApp never receives or stores your card details.",
          "The authorised partner or reseller whose code or link you used to sign up, and the customer who referred you: only your business name, the services purchased and their status, to calculate commissions or credits.",
          "Meta Platforms (Facebook and Instagram) and TikTok, only when you ask us to publish content to your accounts: we send them the text and files of that post.",
          "Public authorities, when required by law.",
        ],
      },
      {
        heading: "6. International transfers",
        paragraphs: [
          "MobyApp is a US company and some providers may process data outside the European Economic Area, although product data is hosted in the EU. In those cases we make sure appropriate safeguards are in place, such as the European Commission's Standard Contractual Clauses or the EU-US Data Privacy Framework.",
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
          "You can request deletion of your account and all associated data at any time by emailing privacy@mobyapp.eu with the subject \"Delete my account\" from your registered address and stating the App name. If the App offers the option, you can also do it from its settings. For Facebook, Instagram or TikTok data, see section 10.",
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
          "Purpose: solely to provide the features you request: scheduling and publishing your own content to your Pages and accounts, adding the first comment you write, running the message automations you turn on, showing you the insights of your posts and accounts in Bridge and, only if you create a Moby Feed widget, displaying your own posts on your website. Legal basis: performance of a contract.",
          "Automated messages (only if the business turns this feature on in Bridge and grants Moby Meta's messaging permissions): we receive the direct messages people send to that Page or Instagram account (text, buttons tapped, attachment type, story replies and mentions), the comments posted on its posts and, for whoever messages or comments, their Page- or Instagram-scoped ID, name and username. We use them only to run the automations the business sets up (public or private reply to a comment, keyword replies, welcome message, replies to mentions), to show the conversations in the Bridge inbox so the team can reply and, only if the person expressly agrees in the conversation, to save the email or phone number they provide as a contact in the business's CRM. We respect Meta's 24-hour messaging window (no promotional messages outside it) and people can stop receiving automated messages by replying STOP or BAJA. For this data the business is the controller and MobyApp acts as its processor. Messages are kept for 180 days at most and deleted earlier if the business disconnects the account, deletes the conversation or a deletion request is received. If the business asks for an \"AI suggested reply\", the recent text of that conversation is sent to our AI provider (OpenAI) only to generate the suggestion and is not used to train models; an AI-generated reply is only sent without review if the business expressly enables it, and the message then says so.",
          "Apart from the messages and comments described for automations, we do not read private messages or followers' data; we do not sell or rent this data; we do not use it for advertising, profiling or to train artificial intelligence models; and we do not share it with third parties other than the hosting and storage providers acting as our data processors. We comply with the Meta Platform Terms and the TikTok Developer Terms of Service.",
          "Retention: access tokens are deleted as soon as you disconnect the account in Bridge or remove Moby's access from Facebook, Instagram or TikTok. Messages and comments from automations are deleted at that moment too. The rest of that account's data (profile, cached posts and insights) is kept while you use Moby Social so you keep your history, and is fully deleted when you choose \"Delete data\" in Bridge, when you send a deletion request from Facebook or when you ask us by email (within 30 days at most), and in any case 30 days after you close your Bridge account.",
          "Deletion: step-by-step instructions at www.mobyapp.eu/en/eliminacion-de-datos (from Bridge, from your Facebook, Instagram or TikTok settings, or by emailing privacy@mobyapp.eu).",
        ],
      },
      {
        heading: "11. Moby products: what data they process and who the controller is",
        paragraphs: [
          "In every product, MobyApp is the controller of the business customer's account data (name, email, company, website, plan, billing and dashboard usage), which it processes to provide the service (performance of a contract) and meet its legal obligations. The data of each business's own customers is processed as follows:",
        ],
        list: [
          "Moby Feed: the widget shows the business's own Instagram and TikTok posts on its website. From visitors to that website we only receive the page address, language and time zone, to count views anonymously; no cookies are set and the IP address is not stored for this purpose. If a visitor clicks Play on a TikTok video, TikTok's official player is loaded, which is subject to TikTok's own policy.",
          "Moby Booking: the business is the controller of the data of customers who book (name, email, phone, notes, appointment and deposit payment) and MobyApp acts as its processor to manage the booking and send confirmations and reminders.",
          "Moby Reviews: the business is the controller of the reviews and of the data of people who write them or receive a review request (name, email, rating, text and optional photo), and MobyApp acts as its processor. Reviews imported from Google are shown with Google's attribution and their authors' photos are loaded from Google's servers.",
          "Moby Catalog: syncs the store's products with Google Merchant Center and Meta Commerce; it does not process end-customer data. MobyApp stores the access tokens for those accounts encrypted.",
          "Moby Boost: the business is the controller of the email or push subscription of people who ask for a stock or price alert (with proof of their consent) and MobyApp acts as its processor. Recommendations are calculated from orders without customer data.",
          "Moby Cart: the business is the controller of abandoned cart data (email or phone, products, amounts and proof of consent or legal basis) and MobyApp acts as its processor to send the reminders. It is deleted after 30 days unless the business sets another period.",
          "Moby Rewards: the business is the controller of its loyalty programme members' data and MobyApp acts as its processor; details at rewards.mobyapp.eu/privacidad.",
          "When MobyApp acts as a processor, it processes the data only on the business's instructions and under the Data processing agreement (www.mobyapp.eu/en/encargo-tratamiento). If you are a customer of one of those businesses, exercise your rights with the business; if you write to us, we will forward your request to it.",
        ],
      },
      {
        heading: "12. Your rights",
        paragraphs: [
          "You can exercise your rights of access, rectification, erasure, objection, restriction of processing and data portability, and withdraw your consent, by writing to privacy@mobyapp.eu. If you believe we have not handled your request properly, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).",
        ],
      },
      {
        heading: "13. Children",
        paragraphs: [
          "Our services are not directed at children under 14 and we do not knowingly collect their data. If we learn that we have received data from a child without parental consent, we will delete it.",
        ],
      },
      {
        heading: "14. Cookies",
        paragraphs: [
          "The website uses necessary technical storage to remember your cookie choice and, only if you accept them, Google Analytics cookies to understand how the site is used. You can accept, reject or change your choice at any time using the \"Cookie settings\" link in the footer. The Moby product websites and dashboards only use technical storage (dashboard session and language preference) and set no analytics or third-party cookies. Details of each cookie and storage item, its purpose and duration, including the widgets, are in our Cookie policy (www.mobyapp.eu/en/cookies).",
        ],
      },
      {
        heading: "15. Changes to this policy",
        paragraphs: [
          "We may update this policy. We will publish the new version on this page with its update date and, if the changes are significant, notify you in the App or by email.",
        ],
      },
      {
        heading: "16. Contact",
        paragraphs: ["For any privacy question: privacy@mobyapp.eu"],
      },
    ],
  },
};
