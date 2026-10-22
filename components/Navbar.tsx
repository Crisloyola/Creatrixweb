"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import styles from "./Navbar.module.css";

// Todo está en una sola página: cada enlace baja a su sección
const menu = [
    { texto: "Inicio", href: "#hero" },
    { texto: "Productos", href: "#productos" },
    { texto: "Promociones", href: "#promociones" },
    { texto: "Planes", href: "#planes" },
];

export default function Navbar() {
    const [abierto, setAbierto] = useState(false);   // ¿menú móvil abierto?
    const [scrolled, setScrolled] = useState(false); // ¿ya bajamos de la parte superior?
    const [activa, setActiva] = useState("#hero");   // sección visible ahora

    // Escucha el scroll para marcar la sombra de la barra
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll(); // revisa el estado inicial
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll); // limpieza
    }, []);

    // Cierra el menú con la tecla Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setAbierto(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Marca la sección que cruza la mitad de la pantalla
    useEffect(() => {
        const observador = new IntersectionObserver(
            (entradas) => {
                for (const e of entradas) {
                    if (e.isIntersecting) setActiva(`#${e.target.id}`);
                }
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        menu.forEach((m) => {
            const el = document.querySelector(m.href);
            if (el) observador.observe(el);
        });
        return () => observador.disconnect();
    }, []);

    const clases = [
        styles.nav,
        scrolled ? styles.scrolled : "",
        abierto ? styles.open : "",
    ].join(" ");

    return (
        <header className={clases}>
            <div className={styles.bar}>
                <a className={styles.logo} href="#hero" onClick={() => setAbierto(false)}>
                    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 2l19 10L3 22l5.5-10z" fill="#7c3aed" />
                    </svg>
                    <span>{site.nombre}</span>
                </a>

                <nav id="menu-principal" className={styles.links}>
                    {menu.map((item, i) => (
                        <a
                            key={item.href}
                            href={item.href}
                            style={{ "--i": i } as React.CSSProperties}
                            aria-current={activa === item.href ? "location" : undefined}
                            onClick={() => setAbierto(false)}
                        >
                            {item.texto}
                        </a>
                    ))}

                    {/* En celular el acceso también va dentro del menú */}
                    <a className={styles.soloMovil} href="#login" onClick={() => setAbierto(false)}>
                        Iniciar sesión
                    </a>
                </nav>

                <div className={styles.acciones}>
                    <a className={styles.login} href="#login">
                        Iniciar sesión
                    </a>
                    <a className={`${styles.cta} brillo`} href="#registro" data-iman>
                        Suscribirse
                    </a>

                    <button
                        className={styles.burger}
                        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={abierto}
                        aria-controls="menu-principal"
                        onClick={() => setAbierto((a) => !a)}
                    >
                        <span className={styles.lineas} aria-hidden="true" />
                    </button>
                </div>
            </div>
        </header>
    );
}
