/**
 * Marca MobyApp: cachalote de perfil en una línea continua (degradado cian → violeta).
 * Fuente de verdad de la geometría: scripts/brand/whale.py (genera también public/brand/*).
 * Si cambias un trazado aquí, cámbialo allí y regenera los ficheros.
 */

export const BRAND_CYAN = "#22d3ee";
export const BRAND_VIOLET = "#8b5cf6";
export const BRAND_NAVY = "#050510";

/** Caja de la ballena con margen para el brillo (x, y, ancho, alto) en el lienzo de 512. */
export const WHALE_VIEWBOX = "111 161 290 191";
export const WHALE_ASPECT = 290 / 191;

/** Contorno, mandíbula y línea interior del pedúnculo, en este orden. */
export const WHALE_PATHS = [
  "M330 214 C334 232 322 244 300 245 C270 246 250 236 225 235 L152 234 C138 234 129 243 129 257 L129 280 C129 293 138 302 152 302 L198 302 C206 302 210 296 218 295 C230 294 240 306 254 318 C264 326 276 332 286 335 C290 336 292 332 289 329 C280 317 270 306 256 300 C290 300 330 280 345 245 C350 230 352 218 356 212 C368 204 378 196 383 178 C372 182 352 186 341 199 C334 188 316 180 300 177 C304 194 318 206 330 214 Z",
  "M146 306 Q150 316 164 316 L204 316 Q212 316 220 309",
  "M337 232 C328 260 304 284 274 294",
] as const;

/** Degradado diagonal de la ballena: abajo-izquierda cian, arriba-derecha violeta. */
export const WHALE_GRADIENT = { x1: 140, y1: 330, x2: 380, y2: 180 } as const;

/** SVG autónomo de la ballena (para imágenes OG generadas en el servidor). */
export function whaleSvg({ stroke = 7, glow = true }: { stroke?: number; glow?: boolean } = {}): string {
  const g = WHALE_GRADIENT;
  const paths = WHALE_PATHS.map((d) => `<path d="${d}"/>`).join("");
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${WHALE_VIEWBOX}">` +
    `<defs><linearGradient id="g" x1="${g.x1}" y1="${g.y1}" x2="${g.x2}" y2="${g.y2}" gradientUnits="userSpaceOnUse">` +
    `<stop offset="0" stop-color="${BRAND_CYAN}"/><stop offset="1" stop-color="${BRAND_VIOLET}"/></linearGradient>` +
    `<filter id="b" x="-25%" y="-35%" width="150%" height="170%"><feGaussianBlur stdDeviation="6"/></filter></defs>` +
    `<g fill="none" stroke="url(#g)" stroke-linecap="round" stroke-linejoin="round">` +
    (glow ? `<g filter="url(#b)" opacity=".55" stroke-width="${stroke * 2}">${paths}</g>` : "") +
    `<g stroke-width="${stroke}">${paths}</g></g></svg>`
  );
}

/** La ballena como data URI (base64) para <img> en ImageResponse. */
export function whaleDataUri(opts?: { stroke?: number; glow?: boolean }): string {
  return `data:image/svg+xml;base64,${btoa(whaleSvg(opts))}`;
}
