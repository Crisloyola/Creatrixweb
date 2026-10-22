import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifiesto from "@/components/Manifiesto";
import Productos from "@/components/Productos";
import GranFormato from "@/components/GranFormato";
// import Portafolio from "@/components/Portafolio"; // en pausa
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Manifiesto />

        <div className="zona-clara">
          <Productos />
          <GranFormato />
        </div>

        {/* <Portafolio /> */}

        <Contacto />
      </main>
      <Footer />
    </>
  );
}