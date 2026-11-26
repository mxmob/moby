import type { LegalContent } from "@/components/legal/LegalDocument";
import type { Language } from "@/i18n/translations";
import { LLC, LLC_IDENTITY_EN, LLC_IDENTITY_ES } from "./privacy";

/*
 * Aviso legal (art. 10 LSSI-CE). Común a mobyapp.eu y a las webs de producto (*.mobyapp.eu), que lo enlazan desde su pie.
 * REVISIÓN LEGAL: texto preparado sin abogado; pendiente de revisión jurídica (en particular, representante en la UE
 * del art. 27 RGPD y si procede punto de contacto DSA). Los [PENDIENTE: …] son datos que debe aportar el dueño.
 */
export const legalNotice: Record<Language, LegalContent> = {
  es: {
    title: "Aviso legal",
    subtitle: "Identificación del titular de las webs de MobyApp y de sus productos, y condiciones de uso de los sitios.",
    updatedLabel: "Última actualización",
    updated: "26 de noviembre de 2026",
    sections: [
      {
        heading: "1. Titular de los sitios web",
        paragraphs: [
          `En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de que los sitios web mobyapp.eu y mobyapp.us y las webs, paneles y widgets de sus productos (Moby Feed en feeds.mobyapp.eu, Moby Booking en booking.mobyapp.eu, Moby Reviews en reviews.mobyapp.eu, Moby Catalog en catalog.mobyapp.eu, Moby Boost en boost.mobyapp.eu, Moby Cart en cart.mobyapp.eu, Moby Rewards en rewards.mobyapp.eu y Bridge en bridge.mobyapp.eu) son titularidad de ${LLC_IDENTITY_ES}.`,
        ],
        list: [
          `Razón social: ${LLC.legalName}. Nombre comercial: ${LLC.tradeName} / MobyApp.`,
          `Forma jurídica: sociedad de responsabilidad limitada (LLC) del Estado de ${LLC.state} (EE. UU.).`,
          `Número de identificación fiscal (EIN): ${LLC.ein}.`,
          `Domicilio: ${LLC.address}.`,
          `Registro: Division of Corporations del Estado de ${LLC.state}, File Number [PENDIENTE: número de registro de Delaware].`,
          `Contacto: hello@mobyapp.eu · ${LLC.phone}. Privacidad: privacy@mobyapp.eu.`,
        ],
      },
      {
        heading: "2. Objeto",
        paragraphs: [
          "Estos sitios informan sobre los servicios y productos de MobyApp, permiten registrarse en ellos y dan acceso a los paneles de los negocios clientes. La contratación se rige por los Términos y condiciones, y el tratamiento de datos por la Política de privacidad y, cuando MobyApp trata datos por cuenta de un negocio, por el Acuerdo de encargo del tratamiento.",
        ],
      },
      {
        heading: "3. Condiciones de uso",
        paragraphs: [
          "El acceso a los sitios es libre y gratuito. Quien los usa se compromete a hacerlo de forma lícita, sin dañar los sitios ni los sistemas que los soportan, sin intentar acceder a áreas restringidas ni a datos de terceros y sin introducir datos falsos o de otras personas en los formularios.",
        ],
      },
      {
        heading: "4. Propiedad intelectual e industrial",
        paragraphs: [
          "Los contenidos, el diseño, el software y las marcas de los sitios pertenecen a MobyApp o a sus licenciantes. No se permite su reproducción, distribución o transformación sin autorización, salvo para uso personal y privado. Las marcas de terceros (Google, Meta, Instagram, TikTok, WordPress, WooCommerce, Stripe…) pertenecen a sus titulares y su mención no implica patrocinio.",
        ],
      },
      {
        heading: "5. Contenidos de terceros y avisos de contenido ilícito",
        paragraphs: [
          "Algunos productos muestran contenidos que no son de MobyApp: publicaciones de redes sociales que un negocio decide mostrar en su web (Moby Feed), reseñas escritas por sus clientes (Moby Reviews) o fichas de producto (Moby Catalog). Cada negocio es responsable de esos contenidos. Si crees que alguno es ilícito o infringe tus derechos, escríbenos a hello@mobyapp.eu indicando la dirección donde aparece, el motivo y tus datos de contacto: lo revisaremos con diligencia, te responderemos y, si procede, lo retiraremos e informaremos al negocio de los motivos (Reglamento (UE) 2022/2065 de servicios digitales). Esta dirección es también el punto de contacto para autoridades y usuarios; atendemos en español e inglés.",
        ],
      },
      {
        heading: "6. Responsabilidad",
        paragraphs: [
          "MobyApp procura que la información de los sitios sea correcta y esté actualizada, pero no garantiza la ausencia de errores o interrupciones. Los enlaces a sitios de terceros se ofrecen solo como referencia y MobyApp no responde de su contenido.",
        ],
      },
      {
        heading: "7. Protección de datos y cookies",
        paragraphs: [
          "El tratamiento de datos personales se explica en la Política de privacidad (www.mobyapp.eu/privacidad), el uso de cookies y almacenamiento del navegador en la Política de cookies (www.mobyapp.eu/cookies) y el tratamiento por cuenta de los negocios clientes en el Acuerdo de encargo del tratamiento (www.mobyapp.eu/encargo-tratamiento).",
        ],
      },
      {
        heading: "8. Legislación aplicable",
        paragraphs: [
          "Este aviso se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a la ley; si quien reclama es consumidor, los de su domicilio.",
        ],
      },
    ],
  },
  en: {
    title: "Legal notice",
    subtitle: "Who operates the MobyApp websites and products, and the terms for using the sites.",
    updatedLabel: "Last updated",
    updated: "November 26, 2026",
    sections: [
      {
        heading: "1. Website owner",
        paragraphs: [
          `Pursuant to article 10 of Spanish Law 34/2002 on information society services and e-commerce (LSSI-CE), the mobyapp.eu and mobyapp.us websites and the websites, dashboards and widgets of their products (Moby Feed at feeds.mobyapp.eu, Moby Booking at booking.mobyapp.eu, Moby Reviews at reviews.mobyapp.eu, Moby Catalog at catalog.mobyapp.eu, Moby Boost at boost.mobyapp.eu, Moby Cart at cart.mobyapp.eu, Moby Rewards at rewards.mobyapp.eu and Bridge at bridge.mobyapp.eu) are owned by ${LLC_IDENTITY_EN}.`,
        ],
        list: [
          `Legal name: ${LLC.legalName}. Trade name: ${LLC.tradeName} / MobyApp.`,
          `Legal form: limited liability company (LLC) of the State of ${LLC.state} (USA).`,
          `Tax ID (EIN): ${LLC.ein}.`,
          `Address: ${LLC.address}.`,
          `Registry: ${LLC.state} Division of Corporations, File Number [PENDING: Delaware file number].`,
          `Contact: hello@mobyapp.eu · ${LLC.phone}. Privacy: privacy@mobyapp.eu.`,
        ],
      },
      {
        heading: "2. Purpose",
        paragraphs: [
          "These sites provide information about MobyApp's services and products, let you sign up for them and give business customers access to their dashboards. Purchases are governed by the Terms and conditions, and data processing by the Privacy policy and, where MobyApp processes data on behalf of a business, by the Data processing agreement.",
        ],
      },
      {
        heading: "3. Terms of use",
        paragraphs: [
          "Access to the sites is free. Users agree to use them lawfully, not to damage the sites or the systems behind them, not to try to access restricted areas or third-party data and not to enter false data or other people's data in forms.",
        ],
      },
      {
        heading: "4. Intellectual and industrial property",
        paragraphs: [
          "The content, design, software and trademarks of the sites belong to MobyApp or its licensors. They may not be reproduced, distributed or transformed without permission, except for personal and private use. Third-party trademarks (Google, Meta, Instagram, TikTok, WordPress, WooCommerce, Stripe…) belong to their owners and their mention does not imply endorsement.",
        ],
      },
      {
        heading: "5. Third-party content and notices of illegal content",
        paragraphs: [
          "Some products display content that is not MobyApp's: social media posts a business chooses to show on its website (Moby Feed), reviews written by its customers (Moby Reviews) or product listings (Moby Catalog). Each business is responsible for that content. If you believe any of it is illegal or infringes your rights, email hello@mobyapp.eu with the address where it appears, the reason and your contact details: we will review it diligently, reply to you and, where appropriate, remove it and tell the business why (Regulation (EU) 2022/2065, Digital Services Act). This address is also the point of contact for authorities and users; we answer in Spanish and English.",
        ],
      },
      {
        heading: "6. Liability",
        paragraphs: [
          "MobyApp tries to keep the information on the sites accurate and up to date, but does not guarantee that it is free from errors or interruptions. Links to third-party sites are provided for reference only and MobyApp is not responsible for their content.",
        ],
      },
      {
        heading: "7. Data protection and cookies",
        paragraphs: [
          "Personal data processing is explained in the Privacy policy (www.mobyapp.eu/en/privacidad), the use of cookies and browser storage in the Cookie policy (www.mobyapp.eu/en/cookies) and processing on behalf of business customers in the Data processing agreement (www.mobyapp.eu/en/encargo-tratamiento).",
        ],
      },
      {
        heading: "8. Governing law",
        paragraphs: [
          "This notice is governed by Spanish law. Any dispute will be submitted to the courts that have jurisdiction under the law; if the claimant is a consumer, those of their place of residence.",
        ],
      },
    ],
  },
};
