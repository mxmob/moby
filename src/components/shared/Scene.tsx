import Image from "next/image";
import { SCENES, type SceneKey, type SceneLang } from "@/lib/scenes";

/**
 * Imagen de ambiente recortada (object-cover) dentro de una caja con proporción fija: sin CLS.
 * La proporción y el redondeo van en `className` (p. ej. "aspect-[16/9] rounded-3xl").
 */
export function Scene({
  scene,
  lang,
  sizes,
  priority = false,
  className = "",
  imgClassName = "",
  shade = true,
}: {
  scene: SceneKey;
  lang: SceneLang;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  /** Degradado inferior para fundirla con el fondo oscuro */
  shade?: boolean;
}) {
  const s = SCENES[scene];
  return (
    <div className={`relative overflow-hidden bg-white/[0.03] ${className}`}>
      <Image
        src={s.src}
        alt={s.alt[lang] ?? s.alt.es}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className={`object-cover ${imgClassName}`}
      />
      {shade && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050510]/60 via-transparent to-transparent" aria-hidden="true" />
      )}
    </div>
  );
}
