"use client";

import { useEffect, useRef, useState } from "react";
import { menu, site } from "@/data/site";
import styles from "./Navbar.module.css";

// Secciones que se vigilan para saber dónde está el usuario
const SECCIONES = ["#hero", ...menu.map((m) => m.href), "#contacto"];

export default function Navbar() {
    const [abierto, setAbierto] = useState(false);   // ¿menú móvil abierto?
    const [scrolled, setScrolled] = useState(false); // ¿ya bajamos de la parte superior?
    const [activa, setActiva] = useState("");        // sección visible ahora
    const enlaces = useRef<HTMLElement>(null);
    const indicador = useRef<HTMLSpanElement>(null);

    // Escucha el scroll para compactar la barra
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
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
        SECCIONES.forEach((s) => {
            const el = document.querySelector(s);
            if (el) observador.observe(el);
        });
        return () => observador.disconnect();
    }, []);

    // Mueve la píldora de fondo hasta el enlace activo
    useEffect(() => {
        const mover = () => {
            const ind = indicador.current;
            const a = enlaces.current?.querySelector<HTMLElement>(`a[href="${activa}"]`);
            if (!ind) return;
            if (!a) {
                ind.style.opacity = "0";
                return;
            }
            ind.style.opacity = "1";
            ind.style.width = `${a.offsetWidth}px`;
            ind.style.transform = `translateX(${a.offsetLeft}px)`;
        };
        mover();
        window.addEventListener("resize", mover);
        return () => window.removeEventListener("resize", mover);
    }, [activa]);

    const clases = [
        styles.nav,
        scrolled ? styles.scrolled : "",
        abierto ? styles.open : "",
    ].join(" ");

    return (
        <header className={clases}>
            <div className={styles.bar}>
                <a className={styles.logo} href="#hero">
                    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 2l19 10L3 22l5.5-10z" fill="#1de9b6" />
                    </svg>
                    <span>{site.nombre}</span>
                </a>

                <nav id="menu-principal" ref={enlaces} className={styles.links}>
                    <span ref={indicador} className={styles.indicador} aria-hidden="true" />
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
                </nav>

                <a className={`${styles.cta} brillo`} href="#contacto" data-iman>
                    Escríbenos
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
        </header>
    );
}
