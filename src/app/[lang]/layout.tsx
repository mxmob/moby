import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Navbar, Footer } from "@/components/shared";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { Analytics } from "@/components/consent/Analytics";
import MobyAnalytics from "@/components/consent/MobyAnalytics";
import { RefCapture } from "@/components/pricing/RefCapture";
import { JsonLd } from "@/components/seo/JsonLd";
import { I18nProvider } from "@/i18n/I18nProvider";
import { isLocale, languageAlternates, LOCALES, OG_LOCALE } from "@/i18n/config";
import { SEO } from "@/i18n/seo";
import type { Language } from "@/i18n/translations";
import { organizationLd, ogImagePath, websiteLd } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { fontVariables } from "@/lib/fonts";
import "../globals.css";

// Next 15: params es una Promise
type Params = { params: Promise<{ lang: string }> };

// Solo existen /es (servido sin prefijo por el middleware) y /en
export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const home = SEO.home[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: home.title, template: "%s | MobyApp" },
    description: home.description,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: languageAlternates(lang, "/"),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: [{ url: ogImagePath(lang), width: 1200, height: 630, alt: home.title }],
    },
    twitter: { card: "summary_large_image", title: home.title, description: home.description, images: [ogImagePath(lang)] },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
      other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : undefined,
    },
    formatDetection: { telephone: false },
    category: "technology",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050510",
};

export default async function RootLayout({ children, params }: { children: React.ReactNode } & Params) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`dark ${fontVariables}`}>
      <body className="antialiased bg-[#050510] text-white min-h-screen">
        <JsonLd nodes={[organizationLd(lang), websiteLd(lang)]} />
        <I18nProvider lang={lang}>
          <Navbar />
          {children}
          <Footer />
          <CookieBanner />
          <MobyAnalytics />
          <RefCapture />
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  );
}
