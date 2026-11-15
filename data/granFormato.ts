import type { GranFormato } from "./types";

const img = (id: string) => `/img/gran-formato/${id}.webp`;

export const destacado = {
    etiqueta: "2400 DPI reales — Inkjet ecosolvente",
    titulo: "Gigantografías Ultra HD",
    texto:
        "La máxima calidad en impresión de gran formato para Lima y todo el Perú. Frontis de local, carteles, paneles, murales, vinil y banner front desde cualquier tamaño. Tintas ecosolventes resistentes a la intemperie.",
    boton: "Ver gigantografías",
    imagen: img("gigantografias"),
    caracteristicas: [
        "Alta resolución",
        "Normal y blackout",
        "Diseño y tamaño personalizado",
        "Resistente a la intemperie",
    ],
};

export const granFormato: GranFormato[] = [
    {
        id: "roll-up",
        etiqueta: "8 tamaños",
        emoji: "📏",
        nombre: "Roll Screen / Roll Up",
        descripcion:
            "Parantes de 0.60 a 2.40 m, aluminio con maletín incluido.",
        detalle: "Producción de 1 a 4 días hábiles.",
        cta: "Cotizar Roll Screen",
        imagen: img("roll-up"),
        caracteristicas: ["Estructura liviana y portátil", "Armado rápido y sencillo", "Fácil transporte con bolso"],
    },
    {
        id: "parante-fierro",
        etiqueta: "Metal",
        emoji: "🏗️",
        nombre: "Parante de Fierro",
        descripcion:
            "Banner full color de 2 × 1 m sobre estructura de metal, ajustable a diferentes tamaños.",
        detalle: "Armado rápido y sencillo.",
        cta: "Cotizar parante",
        imagen: img("parante-fierro"),
        caracteristicas: ["Medida 2 × 1 m", "Estructura de metal", "Ajustable a diferentes tamaños"],
    },
    {
        id: "caballete",
        etiqueta: "Exterior",
        emoji: "🪧",
        nombre: "Caballete Publicitario",
        descripcion:
            "Banner full color impreso por ambas caras sobre estructura de madera. Ideal para la puerta de tu negocio.",
        detalle: "Ideal para exteriores.",
        cta: "Cotizar caballete",
        imagen: img("caballete"),
        caracteristicas: ["Impresión ambas caras", "Estructura de madera", "Ideal para exteriores"],
    },
    {
        id: "letreros-luminosos",
        etiqueta: "LED",
        emoji: "💡",
        nombre: "Letreros Luminosos",
        descripcion:
            "Cajas de luz con iluminación LED de bajo consumo: alta visibilidad de día y de noche.",
        detalle: "Refuerzan la identidad de tu negocio.",
        cta: "Cotizar letrero",
        imagen: img("letreros-luminosos"),
        caracteristicas: ["Visibles día y noche", "LED de bajo consumo", "Diseño personalizable"],
    },
    {
        id: "vinil",
        etiqueta: "Ext / Int",
        emoji: "🖨️",
        nombre: "Vinil Adhesivo Premium",
        descripcion:
            "Para vidrios, paredes, pisos y superficies. Alta resolución UV para exteriores.",
        detalle: "Uso exterior e interior.",
        cta: "Cotizar vinil",
        imagen: img("vinil"),
        caracteristicas: ["Laminado brillo o mate", "Diseño personalizado", "Troquelados y señalética"],
    },
    {
        id: "banner-lona",
        etiqueta: "Lona",
        emoji: "🏳️",
        nombre: "Banner y Lona Impresa",
        descripcion:
            "Banner front normal o blackout con ojalillos, para frontis, eventos y promociones.",
        detalle: "Cualquier tamaño.",
        cta: "Cotizar banner",
        imagen: img("banner-lona"),
    },
    {
        id: "senaletica-corp",
        etiqueta: "Corporativo",
        emoji: "⚠️",
        nombre: "Señalética Corporativa",
        descripcion:
            "Señalizaciones en vinilo con PVC celtex para oficinas, comercios y hospitales.",
        detalle: "Entrega en 2 a 4 días.",
        cta: "Cotizar señalética",
        imagen: img("senaletica-corp"),
    },
    {
        id: "display-wall",
        etiqueta: "Ferias",
        emoji: "🎪",
        nombre: "Display Wall Curvo / Recto",
        descripcion:
            "Backing portátil para stands en ferias, eventos y congresos. Gran impacto.",
        detalle: "Impresión y armado incluidos.",
        cta: "Cotizar Display Wall",
        imagen: img("display-wall"),
    },
    {
        id: "counter-stand",
        etiqueta: "Módulo PVC",
        emoji: "🧱",
        nombre: "Counter Stand Promocional",
        descripcion:
            "Módulo PVC publicitario para mostradores y ferias, con impresión full color incluida.",
        detalle: "Medidas a consultar.",
        cta: "Cotizar Counter Stand",
        imagen: img("counter-stand"),
    },
    {
        id: "x-banner",
        etiqueta: "Económico",
        emoji: "✖️",
        nombre: "Parante Araña X-Banner",
        descripcion:
            "PVC y aluminio en 0.80 y 1.20 × 2.0 m. Ligero y económico para interiores.",
        detalle: "Ideal para interiores.",
        cta: "Cotizar X-Banner",
        imagen: img("x-banner"),
    },
    {
        id: "roll-premium",
        etiqueta: "Premium",
        emoji: "⭐",
        nombre: "Roll Screen Base Ancha 2 x 1",
        descripcion:
            "Parante de aluminio premium de 2 × 1 m con base ancha y acabado de lujo.",
        detalle: "Modelo Luxury de alta estabilidad.",
        cta: "Cotizar Roll Screen 2×1",
        imagen: img("roll-premium"),
    },
    {
        id: "catalogo",
        etiqueta: "Ver todo",
        emoji: "📚",
        nombre: "Catálogo Completo",
        descripcion:
            "Roll Screen en 8 tamaños, Display Wall, Counter Stand, X-Banner y Roll Up Luxury.",
        detalle: "Pide el catálogo por WhatsApp.",
        cta: "Ver catálogo",
        imagen: img("catalogo"),
    },
];
