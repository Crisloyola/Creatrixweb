import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Planes from "@/components/Planes";
import Productos from "@/components/Productos";
import GranFormato from "@/components/GranFormato";
import Promociones from "@/components/Promociones";
import Beneficios from "@/components/Beneficios";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main>
      <Hero
        chip="Impresión full color · Lima, Perú"
        titulo={[
          { texto: "Impresión" },
          { texto: "publicitaria" },
          { texto: "personalizada", contorno: true },
          { texto: "con tu", marca: "marca" },
        ]}
        bajada={
          <>
            Gigantografías, stickers, volantes y displays con calidad profesional. Ideales para{" "}
            <b>empresas, eventos, campañas, ferias y puntos de venta</b>. Desde 2008, con envíos a
            todo el Perú.
          </>
        }
        primario={{ texto: "Ver planes", href: "#planes" }}
        secundario={{ texto: "Ver productos", href: "#productos" }}
        datos={[
          { valor: "2400", sufijo: "dpi", texto: "Resolución real" },
          { valor: "Full", sufijo: "color", texto: "Tintas ecosolventes" },
          { valor: "1-4", sufijo: "días", texto: "Producción" },
          { valor: "Perú", texto: "Envíos a todo el país" },
        ]}
        precio={{ etiqueta: "Stickers desde", monto: "S/ 49.99", nota: "el pliego + IGV" }}
        check="Envíos a todo el Perú"
      />
      <Marquee />

      {/* Mismo orden que el menú: productos → promociones → planes */}
      <div className="zona-clara">
        <Productos />
        <GranFormato />
      </div>

      <Promociones />
      <Planes />
      <Beneficios />
      <Contacto />
    </main>
  );
}
