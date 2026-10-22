import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Bricolage_Grotesque, Inter, Newsreader } from "next/font/google";
import Animaciones from "@/components/Animaciones";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Acceso from "@/components/Acceso";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-bricolage",
});

// Letra alta y condensada para los titulares grandes
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Creatrix | Diseño & Publicidad en Lima",
  description:
    "Diseño, publicidad e impresión: gigantografías, stickers, volantes y más con envíos a todo el Perú.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${bebas.variable} ${inter.variable} ${newsreader.variable}`}
    >
      <body>
        {/* Barra fina arriba que se llena al hacer scroll (solo CSS) */}
        <div className="progreso-scroll" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
        {/* Ventana de Iniciar sesión / Suscribirse, disponible en todas las páginas */}
        <Acceso />
        <Animaciones />
      </body>
    </html>
  );
}
