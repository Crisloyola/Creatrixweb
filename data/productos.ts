import type { Producto } from "./types";

const img = (id: string) => `/img/productos/${id}.webp`;
const imgGF = (id: string) => `/img/gran-formato/${id}.webp`; // fotos compartidas con Gran formato

export const productos: Producto[] = [
    {
        id: "gigantografias",
        nombre: "Gigantografías",
        emoji: "🖨️",
        descripcion:
            "Impresión de gran formato en alta resolución, normal y blackout, para frontis, carteles, paneles y promociones. Tintas ecosolventes resistentes a la intemperie.",
        imagen: imgGF("gigantografias"),
        caracteristicas: [
            "Alta resolución",
            "Normal y blackout",
            "Diseño y tamaño personalizado",
            "Resistente a la intemperie",
        ],
    },
    {
        id: "stickers",
        nombre: "Stickers y etiquetas",
        emoji: "🏷️",
        precio: "Desde S/ 49.99 + IGV el pliego",
        descripcion:
            "Stickers y etiquetas para productos, packaging y marcas en vinil blanco, transparente, holográfico o metalizado (por pliego) o couché adhesivo. Impresión ecosolvente a 2400 dpi con semi-corte a tu medida.",
        imagen: img("stickers"),
        caracteristicas: [
            "Laminado brillo o mate",
            "Resistente al agua",
            "Troquelados circulares",
            "Couché adhesivo: opción económica",
        ],
    },
    {
        id: "vinil-transparente",
        nombre: "Vinil transparente",
        emoji: "🫙",
        descripcion:
            "Impresión ecosolvente sobre vinil transparente, sin base blanca: el resultado es translúcido. Perfecto en vidrios, frascos y envases donde el sticker debe integrarse. Por pliego a 2400 dpi con semi-corte.",
        imagen: img("vinil-transparente"),
        caracteristicas: [
            "Ideal para vidrio y envases",
            "Mejor con diseños oscuros",
            "Semi-corte (kiss cut)",
        ],
    },
    {
        id: "tarjetas",
        nombre: "Tarjetas personales",
        emoji: "💳",
        descripcion:
            "Couché 350 g, impresión offset full color ambas caras y plastificado mate con corte recto. También en cartulinas especiales: hilo, opalina, anice y kraft.",
        imagen: img("tarjetas"),
        caracteristicas: ["1000 unidades", "Medida 9 × 5.5 cm", "Full color ambas caras", "Acabado brillo o mate"],
    },
    {
        id: "volantes",
        nombre: "Volantes y flyers",
        emoji: "📄",
        precio: "Desde S/ 74.99 + IGV el millar",
        descripcion:
            "Offset full color por ambas caras en couché 115 g o 150 g. Medidas A6 (10.5 × 14.8 cm), A5 (14.8 × 21 cm), 1/3 de A4 (9.9 × 21 cm) y A4 (21 × 29.7 cm).",
        imagen: img("volantes"),
        caracteristicas: ["1000 unidades", "Acabado brillo", "Diseño personalizado", "Ideales para promociones y eventos"],
    },
    {
        id: "roll-screen",
        nombre: "Roll Screen",
        emoji: "📏",
        precio: "Desde S/ 110.00 + IGV",
        descripcion:
            "El formato 1 × 2 m es el más pedido en Lima para ferias, congresos y activaciones de marca. Estructura liviana de aluminio con bolso de transporte.",
        imagen: img("roll-screen"),
        caracteristicas: ["Banner full color", "Medida 2 × 1 m", "Armado rápido y sencillo", "Incluye bolso"],
    },
    {
        id: "parante-fierro",
        nombre: "Parante de fierro",
        emoji: "🏗️",
        descripcion:
            "Banner full color de 2 × 1 m sobre estructura de metal, de armado rápido y ajustable a diferentes tamaños.",
        imagen: imgGF("parante-fierro"),
        caracteristicas: ["Medida 2 × 1 m", "Estructura de metal", "Ajustable a diferentes tamaños"],
    },
    {
        id: "caballete",
        nombre: "Caballete publicitario",
        emoji: "🪧",
        descripcion:
            "Banner full color impreso por ambas caras sobre estructura de madera. Ideal para la puerta de tu negocio.",
        imagen: imgGF("caballete"),
        caracteristicas: ["Impresión ambas caras", "Estructura de madera", "Ideal para exteriores"],
    },
    {
        id: "letreros-luminosos",
        nombre: "Letreros luminosos",
        emoji: "💡",
        descripcion:
            "Cajas de luz con iluminación LED de bajo consumo: alta visibilidad de día y de noche y un atractivo visual permanente para tu negocio.",
        imagen: imgGF("letreros-luminosos"),
        caracteristicas: ["Visibles día y noche", "LED de bajo consumo", "Diseño personalizable", "Refuerza tu marca"],
    },
    {
        id: "imantados",
        nombre: "Imantados vehiculares",
        emoji: "🚗",
        precio: "Desde S/ 64.99 + IGV el par",
        descripcion:
            "Vinil magnético de 0.8 mm full color para autos, camionetas, vans y flotas: se coloca y se retira sin dañar la carrocería. Solo se adhiere sobre acero o hierro.",
        imagen: img("imantados"),
        caracteristicas: ["38 × 27, 60 × 40 y 60 × 80 cm (por par)", "A medida hasta 60 cm × 2.40 m", "Removible", "Ideal para flotas"],
    },
    {
        id: "tarjetas-imantadas",
        nombre: "Tarjetas imantadas",
        emoji: "🧲",
        descripcion:
            "Tarjetas magnéticas full color que se adhieren a refrigeradoras y superficies metálicas: tu publicidad siempre a la vista.",
        imagen: img("tarjetas-imantadas"),
        caracteristicas: ["100 unidades", "Medida 10 × 5 cm", "Acabado brillo", "Full color"],
    },
    {
        id: "senaletica",
        nombre: "Señalética",
        emoji: "⚠️",
        precio: "Desde S/ 260.00 + IGV la plancha",
        descripcion:
            "Señales de seguridad en vinil full color laminado sobre PVC 3 mm o Celtex 5 mm para oficinas, comercios y hospitales.",
        imagen: img("senaletica"),
    },
    {
        id: "corte-vinil",
        nombre: "Corte de vinil",
        emoji: "✂️",
        descripcion:
            "Letras, nombres y logos en vinil de corte para vidrios, vehículos, globos y decoración. Listos para transferir.",
        imagen: img("corte-vinil"),
    },
    {
        id: "hojas-membretadas",
        nombre: "Hojas membretadas",
        emoji: "📃",
        descripcion:
            "Hojas A4 en offset a todo color para cartas, cotizaciones y documentos de tu empresa. Papel bond 75 g, 90 g, 120 g o marfileño 80 g. Desde 1,000 unidades.",
        imagen: img("hojas-membretadas"),
        caracteristicas: ["Bond 75 g: práctico y económico", "Bond 90 g: el equilibrio ideal", "Marfileño 80 g: cálido y elegante", "Bond 120 g: más presencia"],
    },
    {
        id: "tazas",
        nombre: "Tazas publicitarias",
        emoji: "☕",
        precio: "Desde S/ 11.90 + IGV c/u",
        descripcion:
            "Taza blanca 11 oz de cerámica AAA sublimada a full color con tu logo, eslogan o foto. Cada una va en su caja individual, lista para regalar.",
        imagen: img("tazas"),
        caracteristicas: ["Cerámica AAA 11 oz", "Sublimación full color", "Caja individual blanca"],
    },
    {
        id: "figuras-foam",
        nombre: "Figuras en foam",
        emoji: "🧸",
        descripcion:
            "Vinil adhesivo sobre base de foam cortado a la forma de tu diseño. Ideales para decoración de fiestas, eventos y cheques de premiación.",
        imagen: img("figuras-foam"),
        caracteristicas: ["Formas personalizadas", "Ideales para decoración", "Cheques de premiación"],
    },
];
