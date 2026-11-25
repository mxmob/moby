import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MobyApp",
    short_name: "MobyApp",
    description: "Sistemas tecnológicos para negocios: digitalización, optimización, automatización, desarrollo e impresión 3D.",
    start_url: "/",
    display: "standalone",
    background_color: "#050510",
    theme_color: "#050510",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/brand/moby-icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brand/moby-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/brand/moby-icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
