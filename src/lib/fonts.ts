import { Inter, Space_Grotesk } from "next/font/google";

/*
 * Fuentes servidas desde el propio dominio (next/font las descarga al compilar):
 * el navegador del visitante no contacta con Google Fonts, así que no hay transferencia de IP.
 */
export const fontSans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
export const fontDisplay = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
export const fontVariables = `${fontSans.variable} ${fontDisplay.variable}`;
