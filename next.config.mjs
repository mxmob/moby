const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "mobyapp.eu" }, { protocol: "https", hostname: "www.mobyapp.eu" }],
  },
  // Enlaces antiguos de los paneles de producto (/condiciones) y alias habituales de los textos legales
  async redirects() {
    return [
      { source: "/condiciones", destination: "/terminos", permanent: true },
      { source: "/en/condiciones", destination: "/en/terminos", permanent: true },
      { source: "/legal", destination: "/aviso-legal", permanent: true },
      { source: "/en/legal", destination: "/en/aviso-legal", permanent: true },
      { source: "/dpa", destination: "/encargo-tratamiento", permanent: true },
      { source: "/en/dpa", destination: "/en/encargo-tratamiento", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS },
      // Catálogo de productos (fuente única): lo leen las webs de cada producto y Bridge desde otros dominios
      {
        source: "/products.json",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
