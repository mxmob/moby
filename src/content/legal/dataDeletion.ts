import type { LegalContent } from "@/components/legal/LegalDocument";
import type { Language } from "@/i18n/translations";

// Instrucciones de eliminación de datos (URL que se declara en Meta y TikTok como
// "Data deletion instructions URL"). Mantener coherente con la sección 10 de privacy.ts.
export const dataDeletion: Record<Language, LegalContent> = {
  es: {
    title: "Eliminación de datos",
    subtitle: "Cómo eliminar los datos de Facebook, Instagram y TikTok que Moby Social guarda cuando conectas tus cuentas en Bridge.",
    updatedLabel: "Última actualización",
    updated: "23 de noviembre de 2026",
    sections: [
      {
        heading: "Qué datos guardamos",
        paragraphs: [
          "Cuando conectas una Página de Facebook, una cuenta profesional de Instagram o una cuenta de TikTok en Bridge (Moby Social), guardamos los tokens de acceso (cifrados), el perfil de la cuenta (nombre, usuario, foto, seguidores), tus publicaciones y sus estadísticas. El detalle completo está en la sección 10 de nuestra política de privacidad (www.mobyapp.eu/privacidad). El responsable del tratamiento es Moby App, LLC.",
        ],
      },
      {
        heading: "Opción 1 · Desde Bridge (inmediato)",
        list: [
          "Entra en bridge.mobyapp.eu con tu usuario.",
          "Ve a Redes sociales → Cuentas.",
          "Pulsa el icono de desconectar de la cuenta. Los tokens de acceso se borran al momento y Moby deja de acceder a la cuenta.",
          "Para borrar también el perfil, las métricas y las publicaciones en caché, pulsa «Eliminar datos de @cuenta» en el aviso de cuentas desconectadas. Se borra todo al instante.",
        ],
      },
      {
        heading: "Opción 2 · Desde Facebook o Instagram",
        list: [
          "Facebook: Configuración y privacidad → Configuración → Integraciones comerciales (o «Apps y sitios web») → selecciona Moby → Eliminar. Marca la opción para eliminar también las publicaciones o datos si aparece.",
          "Instagram: Configuración → Seguridad → Apps y sitios web → Moby → Eliminar.",
          "Al retirar el acceso, Meta nos avisa automáticamente y desconectamos tus cuentas (se borran los tokens). Si además envías la solicitud de eliminación de datos desde Facebook, borramos todas las cuentas conectadas con tu usuario de Facebook y sus datos, y te mostramos un código de confirmación con un enlace para consultar el estado de la solicitud.",
        ],
      },
      {
        heading: "Opción 3 · Desde TikTok",
        list: [
          "En la app de TikTok: Perfil → menú ☰ → Ajustes y privacidad → Seguridad y permisos → Apps y servicios → Moby → Eliminar acceso.",
          "TikTok revoca el acceso de inmediato. Para borrar también los datos guardados en Moby, usa la opción 1 o escríbenos (opción 4).",
        ],
      },
      {
        heading: "Opción 4 · Por correo electrónico",
        paragraphs: [
          "Escribe a privacy@mobyapp.eu con el asunto «Eliminar datos de redes sociales» desde el correo de tu usuario de Bridge, indicando el nombre de tu empresa y las cuentas (por ejemplo, @tuempresa en Instagram). Eliminaremos los datos en un plazo máximo de 30 días y te lo confirmaremos por correo.",
        ],
      },
      {
        heading: "Qué se conserva",
        paragraphs: [
          "Las publicaciones que tú creaste en Moby (texto e imágenes que subiste) se conservan en tu cuenta de Bridge hasta que las borres o cierres tu cuenta, porque son contenido tuyo, no datos obtenidos de la red. Solo conservamos, bloqueada, la información que la ley nos obliga a mantener (por ejemplo, facturación). No vendemos ni compartimos estos datos con terceros.",
        ],
      },
      {
        heading: "Contacto",
        paragraphs: ["Para cualquier duda sobre la eliminación de tus datos: privacy@mobyapp.eu"],
      },
    ],
  },
  en: {
    title: "Data deletion",
    subtitle: "How to delete the Facebook, Instagram and TikTok data that Moby Social stores when you connect your accounts in Bridge.",
    updatedLabel: "Last updated",
    updated: "November 23, 2026",
    sections: [
      {
        heading: "What data we store",
        paragraphs: [
          "When you connect a Facebook Page, an Instagram professional account or a TikTok account in Bridge (Moby Social), we store the access tokens (encrypted), the account profile (name, username, picture, followers), your posts and their insights. Full details are in section 10 of our privacy policy (www.mobyapp.eu/en/privacidad). The data controller is Moby App, LLC.",
        ],
      },
      {
        heading: "Option 1 · From Bridge (immediate)",
        list: [
          "Sign in at bridge.mobyapp.eu.",
          "Go to Social media (Redes sociales) → Accounts (Cuentas).",
          "Click the disconnect icon next to the account. Access tokens are deleted immediately and Moby stops accessing the account.",
          "To also delete the profile, insights and cached posts, click \"Delete data of @account\" (Eliminar datos) in the disconnected accounts notice. Everything is deleted immediately.",
        ],
      },
      {
        heading: "Option 2 · From Facebook or Instagram",
        list: [
          "Facebook: Settings & privacy → Settings → Business integrations (or \"Apps and websites\") → select Moby → Remove. Tick the option to also delete posts or data if shown.",
          "Instagram: Settings → Security → Apps and websites → Moby → Remove.",
          "When you remove access, Meta notifies us automatically and we disconnect your accounts (tokens are deleted). If you also send the data deletion request from Facebook, we delete every account connected with your Facebook user and its data, and show you a confirmation code with a link to check the status of the request.",
        ],
      },
      {
        heading: "Option 3 · From TikTok",
        list: [
          "In the TikTok app: Profile → ☰ menu → Settings and privacy → Security and permissions → Apps and services → Moby → Remove access.",
          "TikTok revokes access immediately. To also delete the data stored in Moby, use option 1 or email us (option 4).",
        ],
      },
      {
        heading: "Option 4 · By email",
        paragraphs: [
          "Email privacy@mobyapp.eu with the subject \"Delete social media data\" from your Bridge user's email address, stating your company name and the accounts (for example, @yourcompany on Instagram). We will delete the data within 30 days at most and confirm by email.",
        ],
      },
      {
        heading: "What we keep",
        paragraphs: [
          "Posts you created in Moby (text and images you uploaded) stay in your Bridge account until you delete them or close your account, because they are your own content, not data obtained from the platform. We only keep, in restricted form, information we are legally required to retain (for example, billing records). We never sell or share this data with third parties.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["For any question about deleting your data: privacy@mobyapp.eu"],
      },
    ],
  },
};
