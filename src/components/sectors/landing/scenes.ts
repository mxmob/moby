import type { SectorKey } from "@/content/sectors";
import type { SceneKey } from "@/lib/scenes";

/** Imagen de ambiente de cada landing de sector (hero y tarjeta del índice /sectores) */
export const SECTOR_LANDING_SCENE: Record<SectorKey, SceneKey> = {
  barberias: "sectorBarberias",
  estetica: "sectorEstetica",
  restaurantes: "sectorRestaurantes",
  inmobiliarias: "sectorInmobiliarias",
};
