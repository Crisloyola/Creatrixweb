"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { destacado, granFormato } from "@/data/granFormato";
import { tono } from "@/data/utils";
import Portada from "./Portada";
import Contador from "./Contador";
import Detalle from "./Detalle";
import type { ItemDetalle } from "./Detalle";
import styles from "./GranFormato.module.css";

// El destacado también se puede abrir en la ventana de detalle
const ultra: ItemDetalle = {
    id: "ultra-hd",
    etiqueta: "Gran formato",
    nombre: destacado.titulo,
    descripcion: destacado.texto,
    tono: 270,
};

export default function GranFormato() {
    const [abierto, setAbierto] = useState<ItemDetalle | null>(null);

    function abrir(i: number) {
        const g = granFormato[i];
        setAbierto({
            id: g.id,
            etiqueta: g.etiqueta,
            nombre: g.nombre,
            descripcion: `${g.descripcion} ${g.detalle}`,
            imagen: g.imagen,
            tono: tono(i),
        });
    }

    return (
        <section id="gran-formato" className={styles.seccion}>
            <div className={styles.contenedor}>
                <div className={styles.cabecera} data-anim>
                    <div>
                        <span className="chip">Gran formato</span>
                        <h2 className={`titular ${styles.titulo}`}>
                            Gigantografías y <mark>gran formato</mark>
                        </h2>
                        <p>
                            2400 DPI reales — vinil adhesivo, banner front, señalética y
                            displays publicitarios
                        </p>
                    </div>
                    <button className={styles.enlace} data-iman onClick={() => setAbierto(ultra)}>
                        VER GIGANTOGRAFÍAS →
                    </button>
                </div>

                <div className={styles.destacado} data-anim="escala">
                    <div className={styles.panel}>
                        <i className={styles.halo} aria-hidden="true" />
                        <Contador valor={2400} duracion={2000} />
                        <span>DPI reales</span>
                    </div>
                    <div className={styles.destacadoTexto}>
                        <span className="pill">{destacado.etiqueta}</span>
                        <h3>{destacado.titulo}</h3>
                        <p>{destacado.texto}</p>
                        <button className={`${styles.boton} brillo`} data-iman onClick={() => setAbierto(ultra)}>
                            {destacado.boton} →
                        </button>
                    </div>
                </div>

                <div className={styles.grilla}>
                    {granFormato.map((g, i) => (
                        <button
                            key={g.id}
                            className={styles.tarjeta}
                            data-anim
                            data-spot
                            style={{ "--i": i % 4 } as CSSProperties}
                            onClick={() => abrir(i)}
                        >
                            <span className={`pill ${styles.etiqueta}`}>{g.etiqueta}</span>
                            <Portada
                                nombre={g.nombre}
                                tono={tono(i)}
                                imagen={g.imagen}
                                sizes="(max-width: 640px) 90vw, 25vw"
                                clase={styles.imagen}
                            />
                            <h3>{g.nombre}</h3>
                            <p>{g.descripcion}</p>
                            <span className={styles.cta}>
                                {g.cta} <i aria-hidden="true">→</i>
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <Detalle item={abierto} onCerrar={() => setAbierto(null)} />
        </section>
    );
}