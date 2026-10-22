import { site } from "./site";

export function whatsappLink(mensaje: string): string {
    return `https://api.whatsapp.com/send?phone=${site.whatsapp}&text=${encodeURIComponent(mensaje)}`;
}

// Tonos de la marca para los fondos: púrpura, índigo y magenta suave
export const TONOS = [268, 250, 288];
export const tono = (i: number) => TONOS[i % TONOS.length];

// Separa "Desde S/ 11.90 + IGV c/u" en el monto ("S/ 11.90") y el resto ("+ IGV c/u")
export function partirPrecio(precio: string) {
    const m = precio.match(/S\/\s?[\d.,]+/);
    if (!m) return { monto: precio, nota: "" };
    const nota = precio.slice((m.index ?? 0) + m[0].length).trim();
    return { monto: m[0], nota };
}

// Quita mayúsculas y tildes: "senaletica" encuentra "Señalética"
export const limpiar = (texto: string) =>
    texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");