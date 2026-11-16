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
            imagen: {
              src: "/img/hero/banners-publicitarios.png",
              alt: "Roll screens, banners y lonas publicitarias impresas para distintas marcas",
            },
            trabajo: { titulo: "Banners y roll screens", texto: "Displays listos para tu punto de venta" },
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
            imagen: {
              src: "/img/hero/gigantografias.webp",
              alt: "Impresora de gran formato imprimiendo gigantografías y afiches full color",
            },
            trabajo: { titulo: "Gigantografías", texto: "Impresión ecosolvente en 2400 dpi" },
            precio: { etiqueta: "Producción", monto: "1-4 días", nota: "según tamaño y cantidad", extra: "Tintas ecosolventes" },
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
            imagen: {
              src: "/img/hero/stickers.png",
              alt: "Stickers circulares impresos en vinil blanco, transparente y negro",
            },
            trabajo: { titulo: "Stickers troquelados", texto: "Vinil blanco, transparente y más" },
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
            imagen: {
              src: "/img/hero/volantes.jpg",
              alt: "Volantes publicitarios impresos a full color",
            },
            trabajo: { titulo: "Volantes y papelería", texto: "Enviados a Lima y provincias" },
            precio: { etiqueta: "Despacho", monto: "Todo el Perú", nota: "por agencia a provincias", extra: "Recojo gratis en Lima Cercado" },
            tono: 28,
          },
        ]}
        datos={[
          { valor: "2400", sufijo: "dpi", texto: "Resolución real" },
          { valor: "Full", sufijo: "color", texto: "Tintas ecosolventes" },
          { valor: "1-4", sufijo: "días", texto: "Producción" },
          { valor: "Perú", texto: "Envíos a todo el país" },
        ]}
        precio={{ etiqueta: "Stickers desde", monto: "S/ 49.99", nota: "el pliego + IGV", extra: "Mejor precio por volumen" }}
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
