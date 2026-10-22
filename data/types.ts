export interface Producto {
    id: string;
    nombre: string;
    emoji: string;
    precio: string;
    descripcion: string;
    imagen?: string; // ruta de la foto, por ejemplo "/productos/stickers.jpg"
}

export interface GranFormato {
    id: string;
    etiqueta: string;
    nombre: string;
    emoji: string;
    descripcion: string;
    detalle: string;
    cta: string;
    imagen?: string;
}

//lleva el boton del banner a una seccion establecida
export type DestinoBanner =
    | { tipo: "seccion"; href: string }
    | { tipo: "producto"; id: string };


export interface Banner {
    id: string;
    etiqueta: string;
    titulo: [string, string, string]; // las 3 lineas del titular
    texto: string;
    boton: string;
    destino: DestinoBanner;
    emoji: string;
    hue: number;  // tono de color
}

export type Categoria =
    | "Branding"
    | "Gigantografías"
    | "Redes"
    | "Packaging"
    | "Señalética";

export interface Proyecto {
    id: string;
    categoria: Categoria;
    titulo: string;
    emoji: string;
    tamano?: "ancho" | "alto"; // el "?" significa que es opcional
}
