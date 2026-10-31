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
        diapositivas={[
          {
            id: "publicitaria",
            chip: "Impresión full color · Lima, Perú",
            titulo: [
              { texto: "Impresión" },
              { texto: "publicitaria" },
              { texto: "personalizada", contorno: true },
              { texto: "con tu", marca: "marca" },
            ],
            bajada: (
              <>
                Gigantografías, stickers, volantes y displays con calidad profesional. Ideales para{" "}
                <b>empresas, eventos, campañas, ferias y puntos de venta</b>. Desde 2008, con envíos a
                todo el Perú.
              </>
            ),
            primario: { texto: "Ver planes", href: "#planes" },
            secundario: { texto: "Ver productos", href: "#productos" },
            afiche: ["Gran", "formato"],
            tono: 262,
          },
          {
            id: "gigantografias",
            chip: "Gran formato · 2400 DPI",
            titulo: [
              { texto: "Gigantografías" },
              { texto: "en 2400 dpi", contorno: true },
              { texto: "que se", marca: "ven" },
            ],
            bajada: (
              <>
                Frontis, carteles, murales, vinil y banner front con <b>tintas ecosolventes</b>{" "}
                resistentes a la intemperie.
              </>
            ),
            primario: { texto: "Ver gran formato", href: "#gran-formato" },
            secundario: { texto: "Cotizar", href: "#contacto" },
            afiche: ["Frontis", "y murales"],
            tono: 165,
          },
          {
            id: "stickers",
            chip: "Impresión a demanda",
            titulo: [
              { texto: "Stickers" },
              { texto: "troquelados", contorno: true },
              { texto: "a tu", marca: "medida" },
            ],
            bajada: (
              <>
                En vinil blanco, transparente, holográfico o metalizado, <b>desde S/ 49.99 el pliego</b>.
              </>
            ),
            primario: { texto: "Ver productos", href: "#productos" },
            secundario: { texto: "Ver promociones", href: "#promociones" },
            afiche: ["Stickers", "a medida"],
            tono: 330,
          },
          {
            id: "envios",
            chip: "Envíos · Todo el Perú",
            titulo: [
              { texto: "Imprime en Lima," },
              { texto: "recibe en", contorno: true },
              { texto: "todo el", marca: "Perú" },
            ],
            bajada: (
              <>
                Recojo sin costo en Lima Cercado, envío en Lima y <b>despacho a provincias por agencia</b>.
              </>
            ),
            primario: { texto: "Cotizar ahora", href: "#contacto" },
            secundario: { texto: "Ver planes", href: "#planes" },
            afiche: ["Envíos", "nacionales"],
            tono: 28,
          },
        ]}
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
