"use client";

import { useEffect } from "react";

// Un solo componente controla los efectos de toda la página:
//  - [data-anim]  aparece al entrar en pantalla (se le añade data-visto)
//  - [data-spot]  luz que sigue al mouse dentro de la tarjeta (--mx / --my)
//  - [data-iman]  botón "magnético" que se acerca un poco al cursor
// Los estilos de cada efecto están en globals.css
export default function Animaciones() {
    useEffect(() => {
        const observador = new IntersectionObserver(
            (entradas) => {
                for (const e of entradas) {
                    if (e.isIntersecting) {
                        e.target.setAttribute("data-visto", "");
                        observador.unobserve(e.target); // solo la primera vez
                    }
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
        );

        const vigilar = () =>
            document
                .querySelectorAll("[data-anim]:not([data-visto])")
                .forEach((el) => observador.observe(el));
        vigilar();

        // Los elementos que aparecen después (por ejemplo, al buscar) también se vigilan
        const mutaciones = new MutationObserver(vigilar);
        mutaciones.observe(document.body, { childList: true, subtree: true });

        // Efectos de mouse: solo en computadoras y si no se pidió menos movimiento
        const conMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let iman: HTMLElement | null = null;

        const soltarIman = () => {
            if (iman) iman.style.translate = "";
            iman = null;
        };

        const mover = (e: PointerEvent) => {
            const objetivo = e.target as Element;

            const spot = objetivo.closest<HTMLElement>("[data-spot]");
            if (spot) {
                const c = spot.getBoundingClientRect();
                spot.style.setProperty("--mx", `${e.clientX - c.left}px`);
                spot.style.setProperty("--my", `${e.clientY - c.top}px`);
            }

            const nuevo = reducido ? null : objetivo.closest<HTMLElement>("[data-iman]");
            if (nuevo !== iman) soltarIman();
            iman = nuevo;
            if (iman) {
                const c = iman.getBoundingClientRect();
                const x = (e.clientX - (c.left + c.width / 2)) * 0.3;
                const y = (e.clientY - (c.top + c.height / 2)) * 0.4;
                iman.style.translate = `${x}px ${y}px`;
            }
        };

        if (conMouse) {
            document.addEventListener("pointermove", mover, { passive: true });
            document.documentElement.addEventListener("pointerleave", soltarIman);
        }

        return () => {
            observador.disconnect();
            mutaciones.disconnect();
            document.removeEventListener("pointermove", mover);
            document.documentElement.removeEventListener("pointerleave", soltarIman);
        };
    }, []);

    return null;
}
