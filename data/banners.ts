import type { Banner } from "./types";

export const banners: Banner[] = [
    {
        id: "marcas",
        etiqueta: "Creatrix",
        titulo: ["Imprimimos", "ideas para", "las marcas"],
        texto:
            "Gigantografías, stickers, volantes y displays con calidad profesional y envíos a todo el Perú. Desde 2008.",
        boton: "Ver productos ↓",
        destino: { tipo: "seccion", href: "#productos" },
        emoji: "🖨️",
        hue: 270,
    },
    {
        id: "gigantografias",
        etiqueta: "Gran formato",
        titulo: ["Gigantografías", "en 2400 DPI", "reales"],
        texto:
            "Frontis, carteles, murales, vinil y banner front con tintas ecosolventes resistentes a la intemperie.",
        boton: "Ver gran formato ↓",
        destino: { tipo: "seccion", href: "#gran-formato" },
        emoji: "🌮",
        hue: 165,
    },
    {
        id: "roll-screen",
        etiqueta: "Displays",
        titulo: ["Roll Screen", "desde", "S/ 110"],
        texto:
            "Parantes de aluminio con maletín incluido, de 0.60 a 2.40 m. Entrega en 1 a 4 días hábiles.",
        boton: "Ver detalle",
        destino: { tipo: "producto", id: "roll-screen" },
        emoji: "📏",
        hue: 285,
    },
    {
        id: "stickers",
        etiqueta: "Impresión a demanda",
        titulo: ["Stickers", "a tu", "medida"],
        texto:
            "Troquelados en vinil blanco, transparente, holográfico o metalizado, desde S/ 49.99 el pliego.",
        boton: "Ver detalle",
        destino: { tipo: "producto", id: "stickers" },
        emoji: "🏷️",
        hue: 255,
    },
    {
        id: "envios",
        etiqueta: "Envíos",
        titulo: ["Envíos", "a todo", "el Perú"],
        texto:
            "Recojo sin costo en Lima Cercado, envío en Lima y despacho a provincias por agencia.",
        boton: "Cotizar ahora ↓",
        destino: { tipo: "seccion", href: "#contacto" },
        emoji: "🚚",
        hue: 300,
    },
];