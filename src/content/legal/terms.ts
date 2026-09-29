import type { LegalContent } from "@/components/legal/LegalDocument";
import type { Language } from "@/i18n/translations";

export const termsOfService: Record<Language, LegalContent> = {
  es: {
    title: "Términos y Condiciones",
    subtitle: "Condiciones de uso del sitio web y de las aplicaciones móviles de MobyApp.",
    updatedLabel: "Última actualización",
    updated: "29 de septiembre de 2026",
    sections: [
      {
        heading: "1. Objeto y aceptación",
        paragraphs: [
          "Estos Términos y Condiciones regulan el acceso y uso de los sitios web mobyapp.eu y mobyapp.us y de las aplicaciones móviles publicadas por MobyApp (las \"Aplicaciones\"). Al descargar, instalar o usar la web o las Aplicaciones aceptas estos términos. Si no estás de acuerdo, no las utilices.",
        ],
      },
      {
        heading: "2. Requisitos de uso",
        paragraphs: [
          "Debes tener al menos 14 años, o contar con la autorización de tus padres o tutores, para usar las Aplicaciones. Te comprometes a facilitar información veraz y a mantenerla actualizada.",
        ],
      },
      {
        heading: "3. Cuentas de usuario",
        paragraphs: [
          "Si una Aplicación requiere registro, eres responsable de mantener la confidencialidad de tus credenciales y de toda la actividad realizada con tu cuenta. Avísanos de inmediato en hello@mobyapp.us si detectas un uso no autorizado. Puedes eliminar tu cuenta en cualquier momento según lo indicado en nuestra Política de Privacidad.",
        ],
      },
      {
        heading: "4. Uso permitido",
        paragraphs: ["Te comprometes a no:"],
        list: [
          "Usar la web o las Aplicaciones con fines ilegales, fraudulentos o que vulneren derechos de terceros.",
          "Intentar acceder sin autorización a sistemas, cuentas o datos de otros usuarios.",
          "Copiar, descompilar, aplicar ingeniería inversa o modificar las Aplicaciones, salvo en lo permitido por la ley.",
          "Introducir virus, código malicioso o realizar acciones que sobrecarguen o dañen el servicio.",
          "Publicar o enviar contenido ofensivo, difamatorio, discriminatorio o que infrinja derechos de propiedad intelectual.",
        ],
      },
      {
        heading: "5. Propiedad intelectual",
        paragraphs: [
          "La web, las Aplicaciones, su diseño, código, marcas, logotipos y contenidos son propiedad de MobyApp o de sus licenciantes. Te concedemos una licencia personal, limitada, no exclusiva, intransferible y revocable para usar las Aplicaciones en tus dispositivos conforme a estos términos. No se te transfiere ningún otro derecho.",
        ],
      },
      {
        heading: "6. Compras y suscripciones",
        paragraphs: [
          "Si una Aplicación ofrece compras o suscripciones, se gestionan a través del sistema de pagos de Google Play (u otra tienda) y quedan sujetas a sus condiciones. Los precios se muestran antes de confirmar la compra. Las suscripciones se renuevan automáticamente salvo que las canceles desde tu cuenta de la tienda antes de la fecha de renovación. Los reembolsos se rigen por las políticas de la tienda correspondiente y por la normativa de consumo aplicable.",
        ],
      },
      {
        heading: "7. Servicios de terceros",
        paragraphs: [
          "La web y las Aplicaciones pueden incluir enlaces o integraciones con servicios de terceros (por ejemplo, Google o WhatsApp). MobyApp no es responsable de sus contenidos ni de sus políticas, que debes revisar por tu cuenta.",
        ],
      },
      {
        heading: "8. Disponibilidad y cambios del servicio",
        paragraphs: [
          "Trabajamos para que el servicio esté disponible de forma continua, pero no podemos garantizarlo. Podemos actualizar, modificar o interrumpir funciones de la web o de las Aplicaciones, por ejemplo por mantenimiento, seguridad o mejoras.",
        ],
      },
      {
        heading: "9. Limitación de responsabilidad",
        paragraphs: [
          "La web y las Aplicaciones se ofrecen \"tal cual\". En la medida permitida por la ley, MobyApp no será responsable de daños indirectos, pérdida de datos o lucro cesante derivados del uso o la imposibilidad de uso del servicio. Nada de lo dispuesto en estos términos limita los derechos que te reconoce la normativa de protección de consumidores.",
        ],
      },
      {
        heading: "10. Suspensión y terminación",
        paragraphs: [
          "Podemos suspender o cancelar tu acceso si incumples estos términos. Puedes dejar de usar las Aplicaciones y eliminar tu cuenta en cualquier momento.",
        ],
      },
      {
        heading: "11. Privacidad",
        paragraphs: [
          "El tratamiento de tus datos personales se rige por nuestra Política de Privacidad, disponible en mobyapp.eu/privacidad.",
        ],
      },
      {
        heading: "12. Modificaciones",
        paragraphs: [
          "Podemos modificar estos términos. Publicaremos la nueva versión en esta página con su fecha de actualización. Si sigues usando el servicio después de los cambios, se entenderá que los aceptas.",
        ],
      },
      {
        heading: "13. Ley aplicable y jurisdicción",
        paragraphs: [
          "Estos términos se rigen por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales que correspondan conforme a la ley; si eres consumidor, los de tu domicilio.",
        ],
      },
      {
        heading: "14. Contacto",
        paragraphs: ["Para cualquier consulta sobre estos términos: hello@mobyapp.us"],
      },
    ],
  },
  en: {
    title: "Terms and Conditions",
    subtitle: "Terms of use for the MobyApp website and mobile apps.",
    updatedLabel: "Last updated",
    updated: "September 29, 2026",
    sections: [
      {
        heading: "1. Purpose and acceptance",
        paragraphs: [
          "These Terms and Conditions govern access to and use of the mobyapp.eu and mobyapp.us websites and the mobile applications published by MobyApp (the \"Apps\"). By downloading, installing or using the website or the Apps you accept these terms. If you do not agree, do not use them.",
        ],
      },
      {
        heading: "2. Eligibility",
        paragraphs: [
          "You must be at least 14 years old, or have permission from your parents or guardians, to use the Apps. You agree to provide accurate information and keep it up to date.",
        ],
      },
      {
        heading: "3. User accounts",
        paragraphs: [
          "If an App requires registration, you are responsible for keeping your credentials confidential and for all activity under your account. Let us know immediately at hello@mobyapp.us if you detect unauthorised use. You can delete your account at any time as described in our Privacy Policy.",
        ],
      },
      {
        heading: "4. Acceptable use",
        paragraphs: ["You agree not to:"],
        list: [
          "Use the website or the Apps for illegal or fraudulent purposes or in ways that infringe third-party rights.",
          "Attempt to gain unauthorised access to systems, accounts or other users' data.",
          "Copy, decompile, reverse engineer or modify the Apps, except as permitted by law.",
          "Introduce viruses or malicious code, or take actions that overload or damage the service.",
          "Post or send offensive, defamatory or discriminatory content, or content that infringes intellectual property rights.",
        ],
      },
      {
        heading: "5. Intellectual property",
        paragraphs: [
          "The website, the Apps, their design, code, trademarks, logos and content belong to MobyApp or its licensors. We grant you a personal, limited, non-exclusive, non-transferable and revocable licence to use the Apps on your devices in accordance with these terms. No other rights are transferred to you.",
        ],
      },
      {
        heading: "6. Purchases and subscriptions",
        paragraphs: [
          "If an App offers purchases or subscriptions, they are processed through Google Play's billing system (or another store) and are subject to its terms. Prices are shown before you confirm a purchase. Subscriptions renew automatically unless you cancel them from your store account before the renewal date. Refunds are governed by the relevant store's policies and applicable consumer law.",
        ],
      },
      {
        heading: "7. Third-party services",
        paragraphs: [
          "The website and the Apps may include links to or integrations with third-party services (for example, Google or WhatsApp). MobyApp is not responsible for their content or policies, which you should review yourself.",
        ],
      },
      {
        heading: "8. Availability and changes to the service",
        paragraphs: [
          "We work to keep the service available at all times, but we cannot guarantee it. We may update, modify or discontinue features of the website or the Apps, for example for maintenance, security or improvements.",
        ],
      },
      {
        heading: "9. Limitation of liability",
        paragraphs: [
          "The website and the Apps are provided \"as is\". To the extent permitted by law, MobyApp is not liable for indirect damages, data loss or loss of profits arising from the use of, or inability to use, the service. Nothing in these terms limits your rights under consumer protection law.",
        ],
      },
      {
        heading: "10. Suspension and termination",
        paragraphs: [
          "We may suspend or terminate your access if you breach these terms. You can stop using the Apps and delete your account at any time.",
        ],
      },
      {
        heading: "11. Privacy",
        paragraphs: [
          "The processing of your personal data is governed by our Privacy Policy, available at mobyapp.eu/privacidad.",
        ],
      },
      {
        heading: "12. Changes",
        paragraphs: [
          "We may change these terms. We will publish the new version on this page with its update date. If you keep using the service after the changes, you are deemed to accept them.",
        ],
      },
      {
        heading: "13. Governing law and jurisdiction",
        paragraphs: [
          "These terms are governed by Spanish law. Any dispute will be submitted to the courts that have jurisdiction under the law; if you are a consumer, those of your place of residence.",
        ],
      },
      {
        heading: "14. Contact",
        paragraphs: ["For any question about these terms: hello@mobyapp.us"],
      },
    ],
  },
};
