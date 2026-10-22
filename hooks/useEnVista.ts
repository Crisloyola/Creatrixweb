"use client";

import { useEffect, useRef, useState } from "react";

export function useEnVista<T extends HTMLElement>(umbral = 0.2) {
    const ref = useRef<T>(null);
    const [visto, setVisto] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observador = new IntersectionObserver(
            ([entrada]) => {
                if (entrada.isIntersecting) {
                    setVisto(true);
                    observador.disconnect(); // solo la primera vez
                }
            },
            { threshold: umbral } // qué porción debe verse (0.2 = 20%)
        );

        observador.observe(el);
        return () => observador.disconnect(); // limpieza
    }, [umbral]);

    return { ref, visto };
}