import type { LegalContent } from "@/components/legal/LegalDocument";
import type { Language } from "@/i18n/translations";
import { LLC_IDENTITY_EN, LLC_IDENTITY_ES } from "./privacy";

/*
 * Acuerdo de encargo del tratamiento (art. 28 RGPD) para los productos en los que el negocio cliente es el responsable
 * y MobyApp el encargado: Moby Booking, Reviews, Cart, Boost y Rewards (y la mensajería de Moby Social). Forma parte de
 * los Términos (sección «Productos Moby»). Moby Rewards tiene además su propio texto en rewards.mobyapp.eu/encargo-tratamiento.
 * REVISIÓN LEGAL: texto preparado sin abogado; pendiente de revisión jurídica (en particular, transferencias a EE. UU.
 * por ser MobyApp una LLC estadounidense, cláusulas contractuales tipo módulo 2/3 y representante del art. 27 RGPD).
 * Si cambia la lista de subencargados, actualiza SUBPROCESSORS_* y la fecha.
 */
const SUBPROCESSORS_ES = [
  "Salesforce, Inc. (Heroku): alojamiento de la aplicación y de la base de datos. Región de la Unión Europea (Irlanda).",
  "Microsoft Ireland Operations Ltd. (Azure Blob Storage): almacenamiento de archivos (fotos de reseñas, imágenes del feed, adjuntos). UE.",
  "Vercel Inc.: servidor de las webs, paneles y scripts de los widgets; trata direcciones IP y registros técnicos. Red global; garantías: Marco de Privacidad de Datos UE-EE. UU. y Cláusulas Contractuales Tipo.",
  "Proveedor de envío de email transaccional (confirmaciones, recordatorios, avisos): Hostinger (servicio de correo de Hostinger; ubicación de los servidores: [PENDIENTE: confirmar región]).",
  "OpenAI Ireland Ltd. / OpenAI, L.L.C.: solo cuando el negocio usa una función de IA (respuesta sugerida a una reseña, textos de los emails de Moby Cart). Recibe el texto necesario para esa petición y no lo usa para entrenar modelos. Garantías: Cláusulas Contractuales Tipo.",
  "Stripe Payments Europe, Ltd.: solo si el negocio cobra señales o pagos de reservas con su propia cuenta de Stripe conectada (el negocio es parte del contrato con Stripe).",
  "Google Ireland Ltd. / Google LLC: solo si el negocio lo activa (importación de reseñas de Google Business Profile, tarjetas en Google Wallet, sincronización con Google Calendar).",
  "Telegram FZ-LLC: solo si el negocio activa los avisos por Telegram (reciben el aviso que el propio negocio pide, p. ej. «nueva reserva de Ana a las 10:00»).",
];
const SUBPROCESSORS_EN = [
  "Salesforce, Inc. (Heroku): application and database hosting. European Union region (Ireland).",
  "Microsoft Ireland Operations Ltd. (Azure Blob Storage): file storage (review photos, feed images, attachments). EU.",
  "Vercel Inc.: hosting of the websites, dashboards and widget scripts; processes IP addresses and technical logs. Global network; safeguards: EU-US Data Privacy Framework and Standard Contractual Clauses.",
  "Transactional email provider (confirmations, reminders, notifications): Hostinger (Hostinger email service; server location: [PENDING: confirm region]).",
  "OpenAI Ireland Ltd. / OpenAI, L.L.C.: only when the business uses an AI feature (suggested reply to a review, Moby Cart email copy). It receives the text needed for that request and does not use it to train models. Safeguards: Standard Contractual Clauses.",
  "Stripe Payments Europe, Ltd.: only if the business takes booking deposits or payments with its own connected Stripe account (the business is party to the contract with Stripe).",
  "Google Ireland Ltd. / Google LLC: only if the business enables it (Google Business Profile review import, Google Wallet cards, Google Calendar sync).",
  "Telegram FZ-LLC: only if the business enables Telegram notifications (they receive the notification the business asks for, e.g. \"new booking from Ana at 10:00\").",
];

export const dataProcessingAgreement: Record<Language, LegalContent> = {
  es: {
    title: "Acuerdo de encargo del tratamiento",
    subtitle: "Contrato del artículo 28 del RGPD entre el negocio que usa Moby Booking, Reviews, Cart, Boost o Rewards y MobyApp.",
    updatedLabel: "Última actualización",
    updated: "26 de noviembre de 2026",
    sections: [
      {
        heading: "1. Partes y aceptación",
        paragraphs: [
          "Este acuerdo se celebra entre la empresa o profesional que crea una cuenta en Moby Booking, Moby Reviews, Moby Cart, Moby Boost o Moby Rewards, o que activa la mensajería automática de Moby Social en Bridge (el «Responsable»), y " +
            LLC_IDENTITY_ES +
            " («MobyApp» o el «Encargado»). Forma parte de los Términos y condiciones de MobyApp y se acepta al aceptarlos al registrarse o contratar. Si hay contradicción, en materia de protección de datos prevalece este acuerdo.",
        ],
      },
      {
        heading: "2. Objeto, duración y naturaleza del tratamiento",
        paragraphs: [
          "MobyApp trata datos personales por cuenta del Responsable solo para prestar el servicio contratado, durante su vigencia. El tratamiento consiste en recoger, registrar, almacenar, consultar, enviar comunicaciones, mostrar y suprimir los datos, según el producto:",
        ],
        list: [
          "Moby Booking: datos de los clientes que reservan (nombre, email, teléfono, notas, servicio, profesional, fecha y hora, estado del pago de la señal) y de los profesionales del equipo. Finalidad: gestionar las reservas y enviar confirmaciones, recordatorios y enlaces de cambio o cancelación.",
          "Moby Reviews: datos de quien deja una reseña (nombre, email si llega desde una petición, valoración, texto, foto opcional y fecha) y de los clientes a los que se pide opinión. Finalidad: pedir, recoger, moderar y mostrar reseñas.",
          "Moby Cart: datos del cliente de la tienda que deja un carrito (email o teléfono, nombre si lo da, productos e importes, prueba del consentimiento o de la base legal). Finalidad: enviar los recordatorios configurados por el Responsable. Se purgan a los 30 días salvo que el Responsable configure otro plazo.",
          "Moby Boost: email o suscripción push de quien pide un aviso de stock o de precio, con la prueba de su consentimiento; datos de pedidos sin datos personales para las recomendaciones (y el email del pedido solo si el Responsable activa el email posterior a la compra). Finalidad: enviar los avisos solicitados y calcular recomendaciones.",
          "Moby Rewards: datos de los socios del programa de fidelización (nombre, teléfono, email opcional, saldo, movimientos, nivel y consentimiento de ofertas). Finalidad: gestionar el programa. Ver también rewards.mobyapp.eu/encargo-tratamiento.",
          "Moby Social (mensajería automática): mensajes y comentarios recibidos en las cuentas conectadas y los identificadores de quien escribe, según la Política de privacidad.",
        ],
      },
      {
        heading: "3. Categorías de interesados",
        paragraphs: [
          "Clientes, potenciales clientes, usuarios de la web del Responsable y personal del Responsable. No se tratan categorías especiales de datos; el Responsable no debe introducirlas en campos libres (notas, reseñas).",
        ],
      },
      {
        heading: "4. Obligaciones del Encargado",
        list: [
          "Tratar los datos solo siguiendo las instrucciones documentadas del Responsable, que son este acuerdo, la configuración que hace en el panel y las solicitudes que envía por escrito. Si una instrucción infringe la normativa, MobyApp lo comunicará de inmediato.",
          "No usar los datos para fines propios, no venderlos ni cederlos, y no usarlos para entrenar modelos de inteligencia artificial.",
          "Garantizar que las personas autorizadas a tratarlos se han comprometido a la confidencialidad.",
          "Aplicar las medidas de seguridad del artículo 32 RGPD: cifrado en tránsito (TLS), cifrado de credenciales y tokens, control de acceso por cuenta y por rol, aislamiento por organización, copias de seguridad, registros de acceso y actualización de software.",
          "Ayudar al Responsable a atender los derechos de los interesados y, en lo que corresponda, en las evaluaciones de impacto y consultas previas. Si un interesado se dirige a MobyApp, se trasladará la solicitud al Responsable sin dilación.",
          "Notificar al Responsable, sin dilación indebida y a más tardar en 48 horas desde que tenga conocimiento, cualquier violación de seguridad que afecte a sus datos, con la información disponible para que pueda notificarla a la autoridad y a los interesados.",
          "Poner a disposición del Responsable la información necesaria para demostrar el cumplimiento y permitir auditorías razonables, con preaviso de 30 días, a su costa y sin acceso a datos de otros clientes.",
          "Al terminar el servicio, suprimir los datos o devolverlos al Responsable a su elección (el panel permite exportarlos), en un plazo máximo de 30 días, salvo obligación legal de conservarlos.",
        ],
      },
      {
        heading: "5. Subencargados",
        paragraphs: [
          "El Responsable autoriza de forma general a MobyApp a recurrir a los siguientes subencargados, que quedan sujetos a obligaciones equivalentes a las de este acuerdo. MobyApp avisará por email o en el panel con al menos 15 días de antelación antes de añadir o sustituir alguno; el Responsable podrá oponerse por motivos razonables y, si no se llega a una solución, cancelar el servicio afectado sin penalización.",
        ],
        list: SUBPROCESSORS_ES,
      },
      {
        heading: "6. Transferencias internacionales",
        paragraphs: [
          "Los datos se alojan en la Unión Europea. MobyApp es una sociedad estadounidense y algunos subencargados pertenecen a grupos con sede en EE. UU., por lo que puede haber accesos desde fuera del EEE. En esos casos se aplican las garantías del capítulo V del RGPD: decisión de adecuación (Marco de Privacidad de Datos UE-EE. UU.) cuando el destinatario esté certificado y, en su defecto, Cláusulas Contractuales Tipo de la Comisión Europea, que se entienden incorporadas a este acuerdo.",
        ],
      },
      {
        heading: "7. Obligaciones del Responsable",
        list: [
          "Contar con una base legal para cada tratamiento (por ejemplo, el consentimiento previo, sin casillas premarcadas, para los recordatorios de carrito, los avisos de stock o las ofertas del programa de fidelización, salvo el supuesto del art. 21.2 LSSI).",
          "Informar a sus clientes en su propia política de privacidad de que usa MobyApp como encargado (los plugins de WordPress proponen un texto en Ajustes → Privacidad).",
          "Declarar en su política de cookies lo que guardan los widgets que instala en su web, según la Política de cookies de MobyApp, y gestionar el consentimiento cuando sea necesario.",
          "No publicar reseñas falsas ni ocultar las negativas, y no introducir datos que no sean necesarios.",
        ],
      },
      {
        heading: "8. Responsabilidad y ley aplicable",
        paragraphs: [
          "Cada parte responde de sus incumplimientos conforme al artículo 82 RGPD. En lo demás se aplican la limitación de responsabilidad, la ley aplicable y la jurisdicción de los Términos y condiciones.",
        ],
      },
    ],
  },
  en: {
    title: "Data processing agreement",
    subtitle: "Article 28 GDPR agreement between the business that uses Moby Booking, Reviews, Cart, Boost or Rewards and MobyApp.",
    updatedLabel: "Last updated",
    updated: "November 26, 2026",
    sections: [
      {
        heading: "1. Parties and acceptance",
        paragraphs: [
          "This agreement is entered into between the company or professional that creates an account in Moby Booking, Moby Reviews, Moby Cart, Moby Boost or Moby Rewards, or turns on Moby Social automated messaging in Bridge (the \"Controller\"), and " +
            LLC_IDENTITY_EN +
            " (\"MobyApp\" or the \"Processor\"). It forms part of MobyApp's Terms and conditions and is accepted by accepting them when signing up or purchasing. In case of conflict, this agreement prevails on data protection matters.",
        ],
      },
      {
        heading: "2. Subject matter, duration and nature of processing",
        paragraphs: [
          "MobyApp processes personal data on behalf of the Controller only to provide the service purchased, for as long as it is in force. Processing consists of collecting, recording, storing, consulting, sending communications, displaying and erasing data, depending on the product:",
        ],
        list: [
          "Moby Booking: data of customers who book (name, email, phone, notes, service, staff member, date and time, deposit payment status) and of team members. Purpose: managing bookings and sending confirmations, reminders and change or cancellation links.",
          "Moby Reviews: data of reviewers (name, email if the review comes from a request, rating, text, optional photo and date) and of customers asked for a review. Purpose: requesting, collecting, moderating and displaying reviews.",
          "Moby Cart: data of store customers who abandon a cart (email or phone, name if given, products and amounts, proof of consent or legal basis). Purpose: sending the reminders configured by the Controller. Purged after 30 days unless the Controller sets another period.",
          "Moby Boost: email or push subscription of people who ask for a stock or price alert, with proof of consent; order data without personal data for recommendations (and the order email only if the Controller turns on the post-purchase email). Purpose: sending the requested alerts and calculating recommendations.",
          "Moby Rewards: data of loyalty programme members (name, phone, optional email, balance, transactions, tier and marketing consent). Purpose: running the programme. See also rewards.mobyapp.eu/encargo-tratamiento.",
          "Moby Social (automated messaging): messages and comments received on connected accounts and the IDs of the people who send them, as described in the Privacy policy.",
        ],
      },
      {
        heading: "3. Categories of data subjects",
        paragraphs: [
          "Customers, prospective customers, users of the Controller's website and the Controller's staff. No special categories of data are processed; the Controller must not enter them in free-text fields (notes, reviews).",
        ],
      },
      {
        heading: "4. Processor obligations",
        list: [
          "Process the data only on the Controller's documented instructions, which are this agreement, the settings made in the dashboard and written requests. If an instruction infringes data protection law, MobyApp will say so immediately.",
          "Not use the data for its own purposes, not sell or disclose it, and not use it to train artificial intelligence models.",
          "Ensure that people authorised to process the data have committed to confidentiality.",
          "Apply the security measures of article 32 GDPR: encryption in transit (TLS), encryption of credentials and tokens, account- and role-based access control, per-organisation isolation, backups, access logs and software updates.",
          "Assist the Controller in responding to data subject requests and, where relevant, with impact assessments and prior consultations. If a data subject contacts MobyApp, the request will be forwarded to the Controller without delay.",
          "Notify the Controller without undue delay, and at the latest within 48 hours of becoming aware of it, of any personal data breach affecting its data, with the information available so it can notify the authority and data subjects.",
          "Make available to the Controller the information needed to demonstrate compliance and allow reasonable audits, with 30 days' notice, at the Controller's expense and without access to other customers' data.",
          "When the service ends, delete the data or return it to the Controller at its choice (the dashboard allows exporting it) within 30 days at most, unless the law requires it to be kept.",
        ],
      },
      {
        heading: "5. Sub-processors",
        paragraphs: [
          "The Controller gives MobyApp general authorisation to use the following sub-processors, which are bound by obligations equivalent to those in this agreement. MobyApp will give at least 15 days' notice by email or in the dashboard before adding or replacing one; the Controller may object on reasonable grounds and, if no solution is found, cancel the affected service without penalty.",
        ],
        list: SUBPROCESSORS_EN,
      },
      {
        heading: "6. International transfers",
        paragraphs: [
          "Data is hosted in the European Union. MobyApp is a US company and some sub-processors belong to US-based groups, so data may be accessed from outside the EEA. In those cases the safeguards of Chapter V GDPR apply: an adequacy decision (EU-US Data Privacy Framework) where the recipient is certified and, otherwise, the European Commission's Standard Contractual Clauses, which are deemed incorporated into this agreement.",
        ],
      },
      {
        heading: "7. Controller obligations",
        list: [
          "Have a legal basis for each processing operation (for example, prior consent, with no pre-ticked boxes, for cart reminders, stock alerts or loyalty programme offers, except in the case of article 21.2 of the Spanish LSSI).",
          "Tell its customers in its own privacy policy that it uses MobyApp as a processor (the WordPress plugins suggest a text under Settings → Privacy).",
          "Declare in its cookie policy what the widgets it installs on its website store, as described in MobyApp's Cookie policy, and manage consent where required.",
          "Not publish fake reviews or hide negative ones, and not enter data that is not needed.",
        ],
      },
      {
        heading: "8. Liability and governing law",
        paragraphs: [
          "Each party is liable for its own breaches under article 82 GDPR. Otherwise, the limitation of liability, governing law and jurisdiction of the Terms and conditions apply.",
        ],
      },
    ],
  },
};
