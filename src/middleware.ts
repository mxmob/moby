import { NextResponse, type NextRequest } from "next/server";

/**
 * Idiomas por URL: español sin prefijo (/digitalizacion), inglés con prefijo (/en/digitalizacion).
 * Internamente todo vive en app/[lang], así que el español se reescribe a /es/… sin cambiar la URL.
 *
 * www.mobyapp.us sirve la misma web (decisión de negocio); las canónicas, hreflang y el sitemap
 * apuntan siempre a SITE_URL (www.mobyapp.eu), así que no compite como contenido duplicado.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const seg = pathname.split("/")[1];

  if (seg === "en") return NextResponse.next();

  const url = req.nextUrl.clone();
  if (seg === "es") {
    // La imagen OG en español se sirve en /es/opengraph-image (ruta interna de Next)
    if (pathname.startsWith("/es/opengraph-image")) return NextResponse.next();
    // /es/contacto → /contacto (una sola URL por página en español)
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }
  url.pathname = `/es${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Todo menos la API, los ficheros de Next, los iconos y los ficheros con extensión (sitemap.xml, robots.txt, /brand/*.png…)
  matcher: ["/((?!api|_next|icon|apple-icon|manifest|llms\\.txt|.*\\..*).*)"],
};
