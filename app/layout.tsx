import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Newsreader } from "next/font/google";
import Animaciones from "@/components/Animaciones";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-bricolage",
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
  themeColor: "#0a0a09",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${inter.variable} ${newsreader.variable}`}
    >
      <body>
        {/* Barra fina arriba que se llena al hacer scroll (solo CSS) */}
        <div className="progreso-scroll" aria-hidden="true" />
        {children}
        <Animaciones />
      </body>
    </html>
  );
}
