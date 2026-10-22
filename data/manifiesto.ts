export interface Cifra {
  valor: number;
  prefijo?: string;
  sufijo?: string;
  texto: string;
}

export const cifras: Cifra[] = [
  {
    valor: 18,
    prefijo: "+",
    texto: "Años creando piezas de calidad para marcas y empresas de todo el Perú.",
  },
  {
    valor: 2400,
    prefijo: "+",
    texto: "DPI reales en gran formato con tintas ecosolventes.",
  },
  {
    valor: 100,
    prefijo: "+",
    sufijo: "%",
    texto: "De envíos a nivel nacional por agencia.",
  },
];