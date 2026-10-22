// Planes, beneficios y promociones del club de clientes.
// OJO: precios, porcentajes y promociones son de EJEMPLO. Cámbialos por los reales.

export interface Plan {
    id: string;
    nombre: string;
    precio: string;      // texto tal cual se muestra
    periodo: string;
    resumen: string;
    beneficios: string[];
    destacado?: boolean; // el plan recomendado se pinta en negro
}

export const planes: Plan[] = [
    {
        id: "basico",
        nombre: "Básico",
        precio: "Gratis",
        periodo: "para siempre",
        resumen: "Para quien compra de vez en cuando y quiere acumular puntos.",
        beneficios: [
            "1 punto por cada S/ 10 de compra",
            "Acceso a promociones del club",
            "Historial de pedidos en tu cuenta",
        ],
    },
    {
        id: "pro",
        nombre: "Pro",
        precio: "S/ 29",
        periodo: "al mes",
        resumen: "Para negocios que imprimen todos los meses.",
        beneficios: [
            "5% de cashback en cada pedido",
            "Doble de puntos en todas tus compras",
            "Envío gratis en Lima desde S/ 150",
            "Prioridad en la cola de producción",
        ],
        destacado: true,
    },
    {
        id: "empresa",
        nombre: "Empresa",
        precio: "S/ 79",
        periodo: "al mes",
        resumen: "Para áreas de marketing y agencias con volumen alto.",
        beneficios: [
            "10% de cashback en cada pedido",
            "Triple de puntos y regalos trimestrales",
            "Envío gratis a todo el Perú",
            "Asesor de cuenta dedicado",
        ],
    },
];

export interface Beneficio {
    id: string;
    icono: string;
    titulo: string;
    texto: string;
}

export const beneficios: Beneficio[] = [
    {
        id: "cashback",
        icono: "S/",
        titulo: "Cashback",
        texto: "Te devolvemos un porcentaje de cada compra como saldo en tu cuenta para tu próximo pedido.",
    },
    {
        id: "regalos",
        icono: "🎁",
        titulo: "Regalos",
        texto: "Merchandising de cortesía en fechas especiales y al alcanzar metas de compra.",
    },
    {
        id: "puntos",
        icono: "★",
        titulo: "Canje de puntos",
        texto: "Suma puntos en cada pedido y cámbialos por productos, envíos o descuentos.",
    },
];

export const pasosClub = [
    "Crea tu cuenta y elige un plan.",
    "Haz tus pedidos como siempre.",
    "Acumula cashback y puntos automáticamente.",
    "Canjéalos cuando quieras desde tu cuenta.",
];

export interface Promocion {
    id: string;
    valor: string;   // lo que se ve grande: "-20%", "2x1"…
    titulo: string;
    texto: string;
    estado: string;  // "Próximamente", "Solo este mes"…
}

export const promociones: Promocion[] = [
    {
        id: "stickers-2x1",
        valor: "2x1",
        titulo: "Stickers troquelados",
        texto: "Lleva dos pliegos y paga uno en vinil blanco o transparente.",
        estado: "Próximamente",
    },
    {
        id: "roll-screen",
        valor: "-20%",
        titulo: "Roll Screen",
        texto: "Descuento en parantes de 0.80 y 1.00 m con maletín incluido.",
        estado: "Próximamente",
    },
    {
        id: "tazas",
        valor: "-15%",
        titulo: "Tazas publicitarias",
        texto: "En pedidos desde 50 unidades con caja individual.",
        estado: "Próximamente",
    },
];
