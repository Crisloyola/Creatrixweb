import { site } from "./site";

export function whatsappLink(mensaje: string): string {
    return `https://api.whatsapp.com/send?phone=${site.whatsapp}&text=${encodeURIComponent(mensaje)}`;
}

// Tonos de la marca para los fondos: violeta, menta, magenta
export const TONOS = [270, 165, 295];
export const tono = (i: number) => TONOS[i % TONOS.length];

// Quita mayúsculas y tildes: "senaletica" encuentra "Señalética"
export const limpiar = (texto: string) =>
    texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");