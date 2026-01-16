import type { Metadata, Viewport } from "next";
import { Navbar, Footer } from "@/components/shared";
import "./globals.css";

export const metadata: Metadata = {
  title: "MobyApp | Sistemas tecnológicos para negocios reales",
  description:
    "Digitalización, optimización, automatización, desarrollo y fabricación 3D integrados en un solo ecosistema. Hacemos crecer tu negocio.",
  keywords: [
    "digitalización",
    "automatización",
    "desarrollo software",
    "impresión 3D",
    "optimización",
    "SaaS",
    "tecnología empresarial",
  ],
  authors: [{ name: "MobyApp" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: "https://mobyapp.eu",
    siteName: "MobyApp",
    title: "MobyApp | Sistemas tecnológicos para negocios reales",
    description:
      "Digitalización, optimización, automatización, desarrollo y fabricación 3D integrados en un solo ecosistema.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MobyApp | Sistemas tecnológicos para negocios reales",
    description:
      "Digitalización, optimización, automatización, desarrollo y fabricación 3D integrados en un solo ecosistema.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050510",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased bg-[#050510] text-white min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
