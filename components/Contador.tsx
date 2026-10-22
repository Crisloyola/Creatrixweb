"use client";

import { useEffect, useState } from "react";
import { useEnVista } from "@/hooks/useEnVista";

interface Props {
    valor: number;
    prefijo?: string;
    sufijo?: string;
    duracion?: number;
}

export default function Contador({ valor, prefijo = "", sufijo = "", duracion = 1600 }: Props) {
    const { ref, visto } = useEnVista<HTMLElement>(0.4);
    const [n, setN] = useState(0);

    useEffect(() => {
        if (!visto) return;

        // Quien prefiere menos movimiento ve el número final de inmediato
        const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const total = reducido ? 0 : duracion;

        let id = 0;
        const inicio = performance.now();

        const paso = (ahora: number) => {
            const t = total === 0 ? 1 : Math.min((ahora - inicio) / total, 1);
            const suave = 1 - Math.pow(1 - t, 3); // empieza rápido y frena al final
            setN(Math.round(valor * suave));
            if (t < 1) id = requestAnimationFrame(paso);
        };

        id = requestAnimationFrame(paso);
        return () => cancelAnimationFrame(id); // limpieza
    }, [visto, valor, duracion]);

    return (
        <b ref={ref}>
            {prefijo}
            {n}
            {sufijo}
        </b>
    );
}