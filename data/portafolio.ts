import type { Categoria, Proyecto } from "./types";

export const categorias: ("Todos" | Categoria)[] = [
    "Todos",
    "Branding",
    "Gigantografías",
    "Redes",
    "Packaging",
    "Señalética",
];

export const proyectos: Proyecto[] = [
    { id: "p1", categoria: "Branding", titulo: "Identidad de marca completa", emoji: "🎨", tamano: "ancho" },
    { id: "p2", categoria: "Gigantografías", titulo: "Frontis para restaurante", emoji: "🌮", tamano: "alto" },
    { id: "p3", categoria: "Redes", titulo: "Campaña para redes sociales", emoji: "📱" },
    { id: "p4", categoria: "Packaging", titulo: "Etiquetas y empaques", emoji: "🏷️" },
    { id: "p5", categoria: "Señalética", titulo: "Señalética corporativa", emoji: "⚠️", tamano: "ancho" },
    { id: "p6", categoria: "Gigantografías", titulo: "Stand para feria", emoji: "🎪" },
    { id: "p7", categoria: "Branding", titulo: "Papelería corporativa", emoji: "📄" },
    { id: "p8", categoria: "Redes", titulo: "Piezas para Instagram", emoji: "✨", tamano: "ancho" },
];