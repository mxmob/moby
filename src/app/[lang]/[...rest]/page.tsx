import { notFound } from "next/navigation";

/** Cualquier ruta desconocida dentro de un idioma → 404. */
export default function CatchAll() {
  notFound();
}
