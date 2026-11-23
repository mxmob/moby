import type { StaticImageData } from "next/image";
import homeHero from "../../public/images/home-hero.webp";
import sectorBarberias from "../../public/images/sector-barberias.webp";
import sectorEstetica from "../../public/images/sector-estetica.webp";
import sectorInmobiliarias from "../../public/images/sector-inmobiliarias.webp";
import sectorRestaurantes from "../../public/images/sector-restaurantes.webp";
import automatizacion from "../../public/images/automatizacion.webp";
import desarrollo from "../../public/images/desarrollo.webp";
import digitalizacion from "../../public/images/digitalizacion.webp";
import optimizacion from "../../public/images/optimizacion.webp";
import auditoriaGoogle from "../../public/images/auditoria-google.webp";
import impresion3d from "../../public/images/impresion-3d.webp";
import comoTrabajamos from "../../public/images/como-trabajamos.webp";

/*
 * Imágenes de ambiente (escenas ilustrativas generadas con IA). Solo uso editorial/decorativo:
 * no representan clientes, testimonios, casos de éxito ni productos reales.
 * Importación estática → ancho/alto conocidos (sin saltos de maquetación) y placeholder blur automático.
 */

export type SceneLang = "es" | "en" | "ca";

type Scene = { src: StaticImageData; alt: Record<SceneLang, string> };

export const SCENES = {
  homeHero: {
    src: homeHero,
    alt: {
      es: "Dueña de una cafetería consultando en su portátil el panel de su negocio",
      en: "Café owner checking her business dashboard on a laptop",
      ca: "Propietària d’una cafeteria consultant al portàtil el tauler del seu negoci",
    },
  },
  sectorBarberias: {
    src: sectorBarberias,
    alt: {
      es: "Barbero cortando el pelo a un cliente con la agenda de citas abierta en una tableta",
      en: "Barber cutting a client’s hair with the appointment calendar open on a tablet",
      ca: "Barber tallant els cabells a un client amb l’agenda de cites oberta en una tauleta",
    },
  },
  sectorEstetica: {
    src: sectorEstetica,
    alt: {
      es: "Recepción luminosa de un centro de estética con la agenda en una tableta y una clienta esperando",
      en: "Bright beauty salon reception with the booking calendar on a tablet and a client waiting",
      ca: "Recepció lluminosa d’un centre d’estètica amb l’agenda en una tauleta i una clienta esperant",
    },
  },
  sectorInmobiliarias: {
    src: sectorInmobiliarias,
    alt: {
      es: "Agente inmobiliaria enseñando fotos de una vivienda en una tableta a una pareja",
      en: "Real estate agent showing a couple property photos on a tablet",
      ca: "Agent immobiliària ensenyant fotos d’un habitatge en una tauleta a una parella",
    },
  },
  sectorRestaurantes: {
    src: sectorRestaurantes,
    alt: {
      es: "Camarero atendiendo un restaurante lleno mientras un cliente escanea el código QR de la carta",
      en: "Waiter serving a busy restaurant while a guest scans the menu QR code",
      ca: "Cambrer atenent un restaurant ple mentre un client escaneja el codi QR de la carta",
    },
  },
  automatizacion: {
    src: automatizacion,
    alt: {
      es: "Tendero revisando en el móvil los avisos automáticos de su tienda de barrio",
      en: "Shopkeeper checking automatic notifications for his neighbourhood shop on his phone",
      ca: "Botiguer revisant al mòbil els avisos automàtics de la seva botiga de barri",
    },
  },
  desarrollo: {
    src: desarrollo,
    alt: {
      es: "Equipo de desarrollo revisando el diseño de una aplicación en una pantalla grande",
      en: "Development team reviewing an app design on a large screen",
      ca: "Equip de desenvolupament revisant el disseny d’una aplicació en una pantalla gran",
    },
  },
  digitalizacion: {
    src: digitalizacion,
    alt: {
      es: "Panadero cobrando a un cliente con un terminal de venta digital",
      en: "Baker taking a customer’s payment on a digital point-of-sale terminal",
      ca: "Forner cobrant a un client amb un terminal de venda digital",
    },
  },
  optimizacion: {
    src: optimizacion,
    alt: {
      es: "Dos profesionales señalando un gráfico de crecimiento en una pantalla",
      en: "Two professionals pointing at a growth chart on a screen",
      ca: "Dos professionals assenyalant un gràfic de creixement en una pantalla",
    },
  },
  auditoriaGoogle: {
    src: auditoriaGoogle,
    alt: {
      es: "Dueña de un restaurante mirando su ficha de Google Maps en el móvil frente a su local",
      en: "Restaurant owner looking at her Google Maps listing on her phone outside her premises",
      ca: "Propietària d’un restaurant mirant la seva fitxa de Google Maps al mòbil davant del local",
    },
  },
  impresion3d: {
    src: impresion3d,
    alt: {
      es: "Taller de impresión 3D con impresoras, bobinas de filamento de colores y piezas impresas",
      en: "3D printing workshop with printers, colourful filament spools and printed parts",
      ca: "Taller d’impressió 3D amb impressores, bobines de filament de colors i peces impreses",
    },
  },
  comoTrabajamos: {
    src: comoTrabajamos,
    alt: {
      es: "Reunión de trabajo con el dueño de un negocio alrededor de una mesa con portátil y bocetos",
      en: "Working session with a business owner around a table with a laptop and sketches",
      ca: "Reunió de treball amb el propietari d’un negoci al voltant d’una taula amb portàtil i esbossos",
    },
  },
} satisfies Record<string, Scene>;

export type SceneKey = keyof typeof SCENES;
