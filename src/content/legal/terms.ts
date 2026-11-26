import type { LegalContent } from "@/components/legal/LegalDocument";
import type { Language } from "@/i18n/translations";
import { LLC, LLC_IDENTITY_EN, LLC_IDENTITY_ES } from "./privacy";

// REVISIÓN LEGAL: texto preparado sin abogado; pendiente de revisión jurídica (sobre todo las secciones 7, 21, 26 y 27).

export const termsOfService: Record<Language, LegalContent> = {
  es: {
    title: "Términos y Condiciones",
    subtitle: "Condiciones de uso del sitio web y de las aplicaciones de MobyApp, y condiciones de contratación de sus servicios.",
    updatedLabel: "Última actualización",
    updated: "26 de noviembre de 2026",
    sections: [
      {
        heading: "1. Objeto y aceptación",
        paragraphs: [
          "Estos Términos y Condiciones regulan el acceso y uso de los sitios web mobyapp.eu y mobyapp.us y de las aplicaciones móviles publicadas por MobyApp (las \"Aplicaciones\"). Al descargar, instalar o usar la web o las Aplicaciones aceptas estos términos. Si no estás de acuerdo, no las utilices.",
          "También regulan la contratación de los servicios de MobyApp: la plataforma de gestión Bridge (bridge.mobyapp.eu), sus planes, módulos adicionales y paquetes, los productos Moby Feed, Moby Booking, Moby Reviews, Moby Catalog, Moby Boost, Moby Cart y Moby Rewards, con sus webs, paneles, widgets y plugins de WordPress, y los servicios gestionados y de alta asociados (los \"Servicios\"), ya se contraten online en www.mobyapp.eu/precios o mediante un partner o distribuidor autorizado. Las secciones 7 a 18 se aplican específicamente a esa contratación, y la sección 26 a los productos Moby.",
        ],
      },
      {
        heading: "2. Prestador",
        paragraphs: [
          `La web, las Aplicaciones y los Servicios los presta ${LLC_IDENTITY_ES} (en adelante, "MobyApp", "nosotros"), que opera la marca MobyApp en España y Europa. Contacto: hello@mobyapp.eu, teléfono ${LLC.phone}.`,
        ],
      },
      {
        heading: "3. Requisitos de uso",
        paragraphs: [
          "Debes tener al menos 14 años, o contar con la autorización de tus padres o tutores, para usar las Aplicaciones. Para contratar los Servicios debes ser mayor de edad y tener capacidad para obligar a la empresa en cuyo nombre contratas. Te comprometes a facilitar información veraz y a mantenerla actualizada.",
        ],
      },
      {
        heading: "4. Cuentas de usuario",
        paragraphs: [
          "Si una Aplicación o un Servicio requiere registro, eres responsable de mantener la confidencialidad de tus credenciales y de toda la actividad realizada con tu cuenta. Avísanos de inmediato en hello@mobyapp.eu si detectas un uso no autorizado. Puedes eliminar tu cuenta en cualquier momento según lo indicado en nuestra Política de Privacidad.",
        ],
      },
      {
        heading: "5. Uso permitido",
        paragraphs: ["Te comprometes a no:"],
        list: [
          "Usar la web, las Aplicaciones o los Servicios con fines ilegales, fraudulentos o que vulneren derechos de terceros.",
          "Intentar acceder sin autorización a sistemas, cuentas o datos de otros usuarios.",
          "Copiar, descompilar, aplicar ingeniería inversa o modificar las Aplicaciones o los Servicios, salvo en lo permitido por la ley.",
          "Introducir virus, código malicioso o realizar acciones que sobrecarguen o dañen el servicio.",
          "Publicar o enviar contenido ofensivo, difamatorio, discriminatorio o que infrinja derechos de propiedad intelectual.",
        ],
      },
      {
        heading: "6. Propiedad intelectual",
        paragraphs: [
          "La web, las Aplicaciones, los Servicios, su diseño, código, marcas, logotipos y contenidos son propiedad de MobyApp o de sus licenciantes. Te concedemos una licencia limitada, no exclusiva, intransferible y revocable para usarlos conforme a estos términos y, en el caso de los Servicios, mientras tu suscripción esté activa. No se te transfiere ningún otro derecho. Los contenidos y datos que tú subas a los Servicios siguen siendo tuyos.",
        ],
      },
      {
        heading: "7. Contratación solo para empresas y profesionales",
        paragraphs: [
          "Los Servicios se dirigen exclusivamente a empresas, autónomos y profesionales que los contratan para su actividad empresarial o profesional. No se ofrecen a consumidores. Al contratar declaras que actúas en nombre de una empresa o como profesional y que los datos fiscales facilitados son correctos.",
          "Por tratarse de una contratación entre empresas, no se aplica el derecho de desistimiento ni el resto de la normativa de protección de consumidores y usuarios. Si contratas siendo consumidor en contra de esta condición, podremos cancelar el contrato.",
        ],
      },
      {
        heading: "8. Proceso de contratación",
        paragraphs: [
          "Eliges el plan, los módulos o el paquete en www.mobyapp.eu/precios, rellenas los datos de la empresa y de la persona responsable, aceptas estos términos y realizas el pago a través de Stripe Checkout. El contrato se perfecciona cuando Stripe confirma el pago o, si hay periodo de prueba, cuando se registra el método de pago. A continuación creamos tu cuenta de Bridge y te enviamos un correo electrónico para que establezcas tu contraseña.",
          "El pago lo gestiona Stripe (Stripe Payments Europe, Ltd. y sus afiliadas), que actúa como procesador de pagos. MobyApp no recibe ni almacena los datos completos de tu tarjeta. Si contratas a través de un partner o distribuidor, se aplican estos términos salvo que hayas firmado unas condiciones particulares con MobyApp.",
        ],
      },
      {
        heading: "9. Precios e impuestos",
        paragraphs: [
          "Los precios vigentes son los que se muestran en www.mobyapp.eu/precios o en la propuesta que recibas en el momento de contratar. Salvo que se indique expresamente lo contrario, se muestran sin IVA ni otros impuestos indirectos, que se añaden en el pago y en la factura según la normativa aplicable. Si en la página o en la propuesta se indica que un precio incluye impuestos, prevalece lo indicado.",
          "Cuando proceda la inversión del sujeto pasivo (por ejemplo, empresas establecidas en otro Estado miembro de la UE con un NIF-IVA válido), la factura se emitirá sin IVA con la mención correspondiente y la empresa cliente será responsable de autoliquidarlo. Eres responsable de facilitar datos fiscales correctos.",
        ],
      },
      {
        heading: "10. Suscripciones, facturación y renovación automática",
        paragraphs: [
          "Los planes y módulos se contratan como suscripción mensual o anual, según se indique, y se facturan por adelantado al inicio de cada periodo mediante el método de pago registrado en Stripe. Recibirás la factura por correo electrónico y podrás consultarla desde «Mi plan» en Bridge.",
          "La suscripción se renueva automáticamente por periodos iguales hasta que la canceles. Los servicios gestionados mensuales se facturan del mismo modo.",
        ],
      },
      {
        heading: "11. Periodos de prueba",
        paragraphs: [
          "Algunos planes o módulos incluyen un periodo de prueba gratuito, indicado en la página de precios. Durante la prueba no se realiza ningún cargo; al terminar, la suscripción pasa automáticamente a ser de pago y se cobra el primer periodo. Si no quieres continuar, cancela antes de que termine la prueba desde «Mi plan» o el portal de cliente de Stripe. Las cuotas de alta, si las hay, pueden cobrarse al contratar aunque exista periodo de prueba, cuando así se indique.",
        ],
      },
      {
        heading: "12. Precios promocionales, paquetes y códigos de partner",
        paragraphs: [
          "Los precios promocionales se aplican durante el número de meses indicado en la oferta; después se aplica automáticamente el precio estándar vigente del plan o módulo, salvo que canceles antes. Las promociones y paquetes pueden tener fecha de validez, requerir un código y no son acumulables entre sí salvo indicación expresa.",
          "Los partners y distribuidores autorizados pueden facilitar códigos promocionales o enlaces que asocian tu cuenta a ese partner. El código puede dar acceso a un paquete o precio especial y permite que el partner te preste soporte comercial; la relación contractual por los Servicios es siempre con MobyApp. Podemos rechazar o anular códigos caducados, usados indebidamente o aplicados por error.",
        ],
      },
      {
        heading: "13. Programa de recomendación",
        paragraphs: [
          "Los clientes con una suscripción activa pueden recomendar MobyApp con su enlace o código personal. Cuando una empresa recomendada contrata un plan de pago y abona su primera factura (superado, en su caso, el periodo de prueba), el cliente que recomienda recibe un crédito equivalente a 1 mes gratis de su plan, que se descuenta de sus próximas facturas.",
          "Los créditos están sujetos al límite anual que se indique en «Mi plan», no tienen valor monetario, no se pueden canjear por dinero ni transferir y caducan si la suscripción se cancela. No se generan créditos por autorrecomendaciones, cuentas duplicadas, empresas del mismo grupo o cualquier uso fraudulento o abusivo; en esos casos podemos anular los créditos concedidos y excluir al cliente del programa.",
        ],
      },
      {
        heading: "14. Cuotas de alta y trabajos de puesta en marcha",
        paragraphs: [
          "Algunos Servicios incluyen una cuota de alta o de proyecto (configuración, migración de datos, diseño, formación, etc.) que se factura una sola vez. Una vez iniciados los trabajos, la cuota de alta no es reembolsable, aunque canceles la suscripción.",
        ],
      },
      {
        heading: "15. Cancelación y reembolsos",
        paragraphs: [
          "Puedes cancelar tu suscripción en cualquier momento desde «Mi plan» en Bridge o desde el portal de cliente de Stripe, o escribiéndonos a hello@mobyapp.eu. La cancelación surte efecto al final del periodo de facturación en curso: hasta entonces mantienes el acceso y no se realizan más cargos.",
          "No se realizan reembolsos por periodos parciales ni por meses no utilizados, salvo cuando lo exija la ley aplicable o en caso de error en el cobro atribuible a MobyApp. Tras la cancelación conservaremos tus datos durante un plazo razonable para que puedas exportarlos y después los eliminaremos según la Política de Privacidad.",
        ],
      },
      {
        heading: "16. Cambios de precio",
        paragraphs: [
          "Podemos modificar los precios de los Servicios. Te avisaremos por correo electrónico con al menos 30 días de antelación; el nuevo precio se aplicará a partir de la siguiente renovación posterior a ese plazo. Si no estás de acuerdo, puedes cancelar antes de que entre en vigor. Los precios promocionales vigentes se respetan durante los meses comprometidos.",
        ],
      },
      {
        heading: "17. Impagos y suspensión del servicio",
        paragraphs: [
          "Si un cobro falla, Stripe volverá a intentarlo y te avisaremos por correo electrónico y en Bridge para que actualices el método de pago. Dispondrás de un periodo de gracia de 7 días naturales desde el aviso. Si transcurrido ese plazo el importe sigue pendiente, podremos suspender el acceso a los Servicios hasta que se regularice el pago y, si el impago persiste, cancelar la suscripción. Las cantidades vencidas siguen siendo exigibles.",
        ],
      },
      {
        heading: "18. Compras en aplicaciones móviles",
        paragraphs: [
          "Si una Aplicación móvil ofrece compras o suscripciones, se gestionan a través del sistema de pagos de Google Play (u otra tienda) y quedan sujetas a sus condiciones. Los precios se muestran antes de confirmar la compra. Esas suscripciones se renuevan automáticamente salvo que las canceles desde tu cuenta de la tienda antes de la fecha de renovación, y sus reembolsos se rigen por las políticas de la tienda correspondiente y por la normativa aplicable.",
        ],
      },
      {
        heading: "19. Servicios de terceros",
        paragraphs: [
          "La web, las Aplicaciones y los Servicios pueden incluir enlaces o integraciones con servicios de terceros (por ejemplo, Google, WhatsApp, Meta, TikTok o Stripe). MobyApp no es responsable de sus contenidos ni de sus políticas, que debes revisar por tu cuenta.",
        ],
      },
      {
        heading: "20. Disponibilidad y cambios del servicio",
        paragraphs: [
          "Trabajamos para que el servicio esté disponible de forma continua, pero no podemos garantizarlo. Podemos actualizar, modificar o interrumpir funciones de la web, de las Aplicaciones o de los Servicios, por ejemplo por mantenimiento, seguridad o mejoras, procurando no reducir de forma sustancial las funciones esenciales del plan contratado durante el periodo ya pagado.",
        ],
      },
      {
        heading: "21. Limitación de responsabilidad",
        paragraphs: [
          "La web y las Aplicaciones se ofrecen \"tal cual\". En la medida permitida por la ley, MobyApp no será responsable de daños indirectos, pérdida de datos o lucro cesante derivados del uso o la imposibilidad de uso del servicio.",
          "En relación con los Servicios contratados, la responsabilidad total de MobyApp frente a la empresa cliente por cualquier causa quedará limitada al importe efectivamente pagado por esta en los 12 meses anteriores al hecho que origine la reclamación. Estas limitaciones no se aplican en caso de dolo o culpa grave ni en los demás supuestos en que la ley no permita limitar la responsabilidad. Nada de lo dispuesto en estos términos limita los derechos que la normativa de protección de consumidores reconoce a los usuarios de la web y de las Aplicaciones que tengan esa condición.",
        ],
      },
      {
        heading: "22. Suspensión y terminación",
        paragraphs: [
          "Podemos suspender o cancelar tu acceso si incumples estos términos, en particular en caso de uso fraudulento o impago. Puedes dejar de usar las Aplicaciones y eliminar tu cuenta en cualquier momento; para los Servicios de pago, la cancelación se rige por la sección 15.",
        ],
      },
      {
        heading: "23. Privacidad",
        paragraphs: [
          "El tratamiento de tus datos personales, incluidos los datos de contratación y facturación, se rige por nuestra Política de Privacidad, disponible en mobyapp.eu/privacidad. Moby App, LLC es el responsable del tratamiento de los datos de tu cuenta. Cuando, al usar Moby Booking, Reviews, Cart, Boost, Rewards o la mensajería de Moby Social, MobyApp trate datos de tus clientes por tu cuenta, lo hará como encargado del tratamiento según el Acuerdo de encargo del tratamiento (www.mobyapp.eu/encargo-tratamiento), que forma parte de estos términos y aceptas con ellos.",
        ],
      },
      {
        heading: "24. Modificaciones",
        paragraphs: [
          "Podemos modificar estos términos. Publicaremos la nueva versión en esta página con su fecha de actualización y, si los cambios afectan de forma relevante a los Servicios contratados, te avisaremos por correo electrónico con antelación. Si sigues usando el servicio después de los cambios, se entenderá que los aceptas.",
        ],
      },
      {
        heading: "25. Ley aplicable y jurisdicción",
        paragraphs: [
          "Estos términos se rigen por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales que correspondan conforme a la ley; si eres consumidor, los de tu domicilio.",
        ],
      },
      {
        heading: "26. Productos Moby (Feed, Booking, Reviews, Catalog, Boost, Cart y Rewards)",
        paragraphs: [
          "Estas condiciones se aplican además de las anteriores cuando creas una cuenta en una de las webs de los productos Moby o instalas sus widgets o plugins:",
        ],
        list: [
          "Plan Gratis: se activa al registrarte, sin tarjeta y sin plazo. Incluye los límites indicados en la página de precios de cada producto (por ejemplo, vistas, avisos o reservas al mes) y puede mostrar el sello «Moby». Podemos cambiar sus límites o retirarlo avisándote con al menos 30 días de antelación. No incluye compromiso de disponibilidad.",
          "Planes de pago: se contratan desde el panel del producto o desde www.mobyapp.eu/precios y se rigen por las secciones 8 a 17 (pago con Stripe, renovación automática mensual o anual, cancelación al final del periodo y sin reembolso de periodos parciales salvo error nuestro o cuando lo exija la ley). Si cancelas un plan de pago vuelves al plan Gratis sin perder tus datos.",
          "Precios «Muy pronto» o «Próximamente»: los planes y precios que una web muestra con esas etiquetas, o como no disponibles, son informativos. No constituyen una oferta vinculante ni se pueden contratar hasta que se activen; al activarse se aplicarán el precio y las condiciones que se muestren en ese momento.",
          "Widgets y plugins: te concedemos una licencia limitada para instalar los scripts y plugins en las webs que controlas mientras tengas cuenta. Eres responsable de la web donde los instalas, de los contenidos que muestras (publicaciones, reseñas, productos) y de informar a tus visitantes de lo que hacen los widgets (la Política de cookies de MobyApp describe qué guarda cada uno).",
          "Tus clientes: en Booking, Reviews, Cart, Boost y Rewards eres el responsable del tratamiento de los datos de tus clientes y debes contar con una base legal (por ejemplo, su consentimiento previo y sin casillas premarcadas para recordatorios de carrito, avisos de stock u ofertas, salvo lo previsto en el art. 21.2 LSSI) e informarles en tu política de privacidad. MobyApp actúa como tu encargado según el Acuerdo de encargo del tratamiento.",
          "Reseñas: no puedes publicar reseñas falsas, comprar u ofrecer incentivos por reseñas positivas ni ocultar las negativas por su nota. Debes informar a tus visitantes de cómo se recogen y verifican (el widget lo hace por ti), conforme a la normativa de consumidores y competencia desleal.",
          "Servicios de terceros: las funciones que dependen de Google, Meta, TikTok, WooCommerce, Stripe u otros quedan sujetas a sus condiciones y a que mantengan sus APIs; no respondemos de sus cambios, rechazos o suspensiones.",
          "Los productos que se ofrecen en prueba o «beta» pueden cambiar o retirarse; te avisaremos con antelación razonable y podrás exportar tus datos.",
        ],
      },
      {
        heading: "27. Contenidos de terceros y avisos de contenido ilícito",
        paragraphs: [
          "Los contenidos que publicas o muestras con los Servicios (publicaciones, reseñas, fichas de producto, mensajes) son tuyos y de tu responsabilidad, y nos concedes una licencia limitada para alojarlos y mostrarlos solo para prestarte el servicio. Cualquier persona puede avisarnos de un contenido que considere ilícito escribiendo a hello@mobyapp.eu con su ubicación y el motivo. Lo revisaremos con diligencia y, si procede, lo retiraremos o limitaremos, informando de los motivos a quien lo publicó y a quien avisó, que podrán responder por el mismo canal (Reglamento (UE) 2022/2065 de servicios digitales). Podremos suspender las cuentas que publiquen contenidos manifiestamente ilícitos de forma reiterada, tras un aviso previo.",
        ],
      },
      {
        heading: "28. Contacto",
        paragraphs: ["Para cualquier consulta sobre estos términos o sobre tu suscripción: hello@mobyapp.eu"],
      },
    ],
  },
  en: {
    title: "Terms and Conditions",
    subtitle: "Terms of use for the MobyApp website and apps, and terms of purchase for its services.",
    updatedLabel: "Last updated",
    updated: "November 26, 2026",
    sections: [
      {
        heading: "1. Purpose and acceptance",
        paragraphs: [
          "These Terms and Conditions govern access to and use of the mobyapp.eu and mobyapp.us websites and the mobile applications published by MobyApp (the \"Apps\"). By downloading, installing or using the website or the Apps you accept these terms. If you do not agree, do not use them.",
          "They also govern the purchase of MobyApp's services: the Bridge management platform (bridge.mobyapp.eu), its plans, add-on modules and packages, the Moby Feed, Moby Booking, Moby Reviews, Moby Catalog, Moby Boost, Moby Cart and Moby Rewards products, with their websites, dashboards, widgets and WordPress plugins, and the related managed and setup services (the \"Services\"), whether purchased online at www.mobyapp.eu/en/precios or through an authorised partner or reseller. Sections 7 to 18 apply specifically to those purchases, and section 26 to the Moby products.",
        ],
      },
      {
        heading: "2. Provider",
        paragraphs: [
          `The website, the Apps and the Services are provided by ${LLC_IDENTITY_EN} ("MobyApp", "we", "us"), which operates the MobyApp brand in Spain and Europe. Contact: hello@mobyapp.eu, phone ${LLC.phone}.`,
        ],
      },
      {
        heading: "3. Eligibility",
        paragraphs: [
          "You must be at least 14 years old, or have permission from your parents or guardians, to use the Apps. To purchase the Services you must be of legal age and authorised to bind the business on whose behalf you sign up. You agree to provide accurate information and keep it up to date.",
        ],
      },
      {
        heading: "4. User accounts",
        paragraphs: [
          "If an App or Service requires registration, you are responsible for keeping your credentials confidential and for all activity under your account. Let us know immediately at hello@mobyapp.eu if you detect unauthorised use. You can delete your account at any time as described in our Privacy Policy.",
        ],
      },
      {
        heading: "5. Acceptable use",
        paragraphs: ["You agree not to:"],
        list: [
          "Use the website, the Apps or the Services for illegal or fraudulent purposes or in ways that infringe third-party rights.",
          "Attempt to gain unauthorised access to systems, accounts or other users' data.",
          "Copy, decompile, reverse engineer or modify the Apps or the Services, except as permitted by law.",
          "Introduce viruses or malicious code, or take actions that overload or damage the service.",
          "Post or send offensive, defamatory or discriminatory content, or content that infringes intellectual property rights.",
        ],
      },
      {
        heading: "6. Intellectual property",
        paragraphs: [
          "The website, the Apps, the Services, their design, code, trademarks, logos and content belong to MobyApp or its licensors. We grant you a limited, non-exclusive, non-transferable and revocable licence to use them in accordance with these terms and, for the Services, while your subscription is active. No other rights are transferred to you. The content and data you upload to the Services remain yours.",
        ],
      },
      {
        heading: "7. Business customers only",
        paragraphs: [
          "The Services are intended exclusively for businesses, self-employed people and professionals who purchase them for their business or professional activity. They are not offered to consumers. By signing up you confirm that you are acting on behalf of a business or as a professional and that the tax details you provide are correct.",
          "As this is a business-to-business contract, the consumer right of withdrawal and other consumer protection rules do not apply. If you sign up as a consumer in breach of this condition, we may cancel the contract.",
        ],
      },
      {
        heading: "8. How the purchase works",
        paragraphs: [
          "You choose the plan, modules or package at www.mobyapp.eu/en/precios, fill in the details of the business and the account owner, accept these terms and pay through Stripe Checkout. The contract is concluded when Stripe confirms the payment or, where there is a free trial, when the payment method is registered. We then create your Bridge account and send you an email to set your password.",
          "Payments are handled by Stripe (Stripe Payments Europe, Ltd. and its affiliates), acting as payment processor. MobyApp never receives or stores your full card details. If you purchase through a partner or reseller, these terms apply unless you have signed specific terms with MobyApp.",
        ],
      },
      {
        heading: "9. Prices and taxes",
        paragraphs: [
          "The applicable prices are those shown at www.mobyapp.eu/en/precios or in the proposal you receive when you sign up. Unless expressly stated otherwise, they are shown excluding VAT and other indirect taxes, which are added at checkout and on the invoice in accordance with applicable law. If the page or proposal states that a price includes taxes, that statement prevails.",
          "Where the reverse charge mechanism applies (for example, businesses established in another EU Member State with a valid VAT number), the invoice will be issued without VAT with the corresponding wording and the customer will be responsible for self-assessing it. You are responsible for providing correct tax details.",
        ],
      },
      {
        heading: "10. Subscriptions, billing and automatic renewal",
        paragraphs: [
          "Plans and modules are purchased as monthly or yearly subscriptions, as indicated, and are billed in advance at the start of each period using the payment method registered with Stripe. You will receive the invoice by email and can view it under «Mi plan» (My plan) in Bridge.",
          "Subscriptions renew automatically for equal periods until you cancel them. Monthly managed services are billed in the same way.",
        ],
      },
      {
        heading: "11. Free trials",
        paragraphs: [
          "Some plans or modules include a free trial, shown on the pricing page. You are not charged during the trial; when it ends, the subscription automatically becomes paid and the first period is charged. If you do not want to continue, cancel before the trial ends from «Mi plan» or the Stripe customer portal. Setup fees, if any, may be charged at sign-up even when there is a trial, where indicated.",
        ],
      },
      {
        heading: "12. Promotional prices, packages and partner codes",
        paragraphs: [
          "Promotional prices apply for the number of months stated in the offer; after that, the then-current standard price of the plan or module applies automatically unless you cancel beforehand. Promotions and packages may have an expiry date, may require a code and cannot be combined unless expressly stated.",
          "Authorised partners and resellers may provide promo codes or links that associate your account with that partner. A code may give access to a special package or price and allows the partner to provide you with sales support; the contract for the Services is always with MobyApp. We may reject or void codes that have expired, been misused or applied in error.",
        ],
      },
      {
        heading: "13. Referral programme",
        paragraphs: [
          "Customers with an active subscription can recommend MobyApp using their personal link or code. When a referred business signs up for a paid plan and pays its first invoice (after any free trial), the referring customer receives a credit equal to 1 free month of their plan, deducted from their next invoices.",
          "Credits are subject to the yearly limit shown under «Mi plan», have no cash value, cannot be exchanged for money or transferred, and expire if the subscription is cancelled. No credits are earned for self-referrals, duplicate accounts, companies in the same group or any fraudulent or abusive use; in those cases we may void credits already granted and exclude the customer from the programme.",
        ],
      },
      {
        heading: "14. Setup fees and onboarding work",
        paragraphs: [
          "Some Services include a one-off setup or project fee (configuration, data migration, design, training, etc.). Once the work has started, the setup fee is non-refundable, even if you cancel the subscription.",
        ],
      },
      {
        heading: "15. Cancellation and refunds",
        paragraphs: [
          "You can cancel your subscription at any time from «Mi plan» in Bridge, from the Stripe customer portal or by writing to hello@mobyapp.eu. Cancellation takes effect at the end of the current billing period: until then you keep access and no further charges are made.",
          "No refunds are given for partial periods or unused months, except where required by applicable law or in the event of a billing error attributable to MobyApp. After cancellation we keep your data for a reasonable period so you can export it, and then delete it in accordance with the Privacy Policy.",
        ],
      },
      {
        heading: "16. Price changes",
        paragraphs: [
          "We may change the prices of the Services. We will notify you by email at least 30 days in advance; the new price will apply from the first renewal after that period. If you do not agree, you can cancel before it takes effect. Current promotional prices are honoured for the committed months.",
        ],
      },
      {
        heading: "17. Failed payments and suspension",
        paragraphs: [
          "If a payment fails, Stripe will retry it and we will notify you by email and in Bridge so you can update your payment method. You will have a grace period of 7 calendar days from the notice. If the amount is still outstanding after that period, we may suspend access to the Services until payment is made and, if non-payment continues, cancel the subscription. Overdue amounts remain payable.",
        ],
      },
      {
        heading: "18. Purchases in mobile apps",
        paragraphs: [
          "If a mobile App offers purchases or subscriptions, they are processed through Google Play's billing system (or another store) and are subject to its terms. Prices are shown before you confirm a purchase. Those subscriptions renew automatically unless you cancel them from your store account before the renewal date, and refunds are governed by the relevant store's policies and applicable law.",
        ],
      },
      {
        heading: "19. Third-party services",
        paragraphs: [
          "The website, the Apps and the Services may include links to or integrations with third-party services (for example, Google, WhatsApp, Meta, TikTok or Stripe). MobyApp is not responsible for their content or policies, which you should review yourself.",
        ],
      },
      {
        heading: "20. Availability and changes to the service",
        paragraphs: [
          "We work to keep the service available at all times, but we cannot guarantee it. We may update, modify or discontinue features of the website, the Apps or the Services, for example for maintenance, security or improvements, while trying not to substantially reduce the essential features of the plan purchased during a period already paid for.",
        ],
      },
      {
        heading: "21. Limitation of liability",
        paragraphs: [
          "The website and the Apps are provided \"as is\". To the extent permitted by law, MobyApp is not liable for indirect damages, data loss or loss of profits arising from the use of, or inability to use, the service.",
          "In relation to the Services purchased, MobyApp's total liability to the business customer for any cause is limited to the amount actually paid by the customer in the 12 months before the event giving rise to the claim. These limitations do not apply in cases of wilful misconduct or gross negligence or in other cases where the law does not allow liability to be limited. Nothing in these terms limits the rights that consumer protection law grants to users of the website and the Apps who are consumers.",
        ],
      },
      {
        heading: "22. Suspension and termination",
        paragraphs: [
          "We may suspend or terminate your access if you breach these terms, in particular in cases of fraudulent use or non-payment. You can stop using the Apps and delete your account at any time; for paid Services, cancellation is governed by section 15.",
        ],
      },
      {
        heading: "23. Privacy",
        paragraphs: [
          "The processing of your personal data, including purchase and billing data, is governed by our Privacy Policy, available at mobyapp.eu/privacidad. Moby App, LLC is the controller of your account data. Where, when you use Moby Booking, Reviews, Cart, Boost, Rewards or Moby Social messaging, MobyApp processes your customers' data on your behalf, it does so as a processor under the Data processing agreement (www.mobyapp.eu/en/encargo-tratamiento), which forms part of these terms and which you accept with them.",
        ],
      },
      {
        heading: "24. Changes",
        paragraphs: [
          "We may change these terms. We will publish the new version on this page with its update date and, if the changes materially affect the Services you have purchased, we will notify you by email in advance. If you keep using the service after the changes, you are deemed to accept them.",
        ],
      },
      {
        heading: "25. Governing law and jurisdiction",
        paragraphs: [
          "These terms are governed by Spanish law. Any dispute will be submitted to the courts that have jurisdiction under the law; if you are a consumer, those of your place of residence.",
        ],
      },
      {
        heading: "26. Moby products (Feed, Booking, Reviews, Catalog, Boost, Cart and Rewards)",
        paragraphs: [
          "These conditions apply in addition to the above when you create an account on one of the Moby product websites or install their widgets or plugins:",
        ],
        list: [
          "Free plan: activated when you sign up, with no card and no term. It includes the limits shown on each product's pricing page (for example, views, alerts or bookings per month) and may show the \"Moby\" credit. We may change its limits or withdraw it with at least 30 days' notice. It carries no availability commitment.",
          "Paid plans: purchased from the product dashboard or at www.mobyapp.eu/en/precios and governed by sections 8 to 17 (payment via Stripe, automatic monthly or yearly renewal, cancellation at the end of the period and no refunds for partial periods except for our error or where the law requires it). If you cancel a paid plan you go back to the Free plan without losing your data.",
          "\"Coming soon\" prices: plans and prices that a website shows with that label, or as not available, are for information only. They are not a binding offer and cannot be purchased until they are activated; when activated, the price and conditions shown at that time will apply.",
          "Widgets and plugins: we grant you a limited licence to install the scripts and plugins on websites you control while you have an account. You are responsible for the website where you install them, for the content you display (posts, reviews, products) and for telling your visitors what the widgets do (MobyApp's Cookie policy describes what each one stores).",
          "Your customers: in Booking, Reviews, Cart, Boost and Rewards you are the controller of your customers' data and must have a legal basis (for example, their prior consent, with no pre-ticked boxes, for cart reminders, stock alerts or offers, except as provided in article 21.2 of the Spanish LSSI) and inform them in your privacy policy. MobyApp acts as your processor under the Data processing agreement.",
          "Reviews: you may not publish fake reviews, buy or offer incentives for positive reviews or hide negative ones because of their rating. You must tell your visitors how reviews are collected and verified (the widget does this for you), in line with consumer and unfair competition law.",
          "Third-party services: features that depend on Google, Meta, TikTok, WooCommerce, Stripe or others are subject to their terms and to their APIs remaining available; we are not liable for their changes, rejections or suspensions.",
          "Products offered on trial or as \"beta\" may change or be withdrawn; we will give you reasonable notice and you will be able to export your data.",
        ],
      },
      {
        heading: "27. Third-party content and notices of illegal content",
        paragraphs: [
          "The content you publish or display with the Services (posts, reviews, product listings, messages) is yours and your responsibility, and you grant us a limited licence to host and display it only to provide the service. Anyone can notify us of content they consider illegal by emailing hello@mobyapp.eu with its location and the reason. We will review it diligently and, where appropriate, remove or restrict it, telling the person who published it and the person who reported it why; both can reply through the same channel (Regulation (EU) 2022/2065, Digital Services Act). We may suspend accounts that repeatedly publish manifestly illegal content, after a prior warning.",
        ],
      },
      {
        heading: "28. Contact",
        paragraphs: ["For any question about these terms or your subscription: hello@mobyapp.eu"],
      },
    ],
  },
};
