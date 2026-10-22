"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, FocusEvent, MouseEvent } from "react";
import { banners } from "@/data/banners";
import styles from "./Hero.module.css";

const DURACION = 5000; // milisegundos que dura cada banner

export default function Hero() {
    const [indice, setIndice] = useState(0);     // banner visible
    const [pausado, setPausado] = useState(false);
    const [ciclo, setCiclo] = useState(0);       // sirve para reiniciar barra y temporizador

    // Cada vez que cambia el banner o se reanuda, arranca una cuenta de 5 s
    useEffect(() => {
        if (pausado) return;
        const temporizador = setTimeout(() => {
            setIndice((i) => (i + 1) % banners.length);
        }, DURACION);
        return () => clearTimeout(temporizador); // limpieza
    }, [indice, pausado, ciclo]);

    function irA(n: number) {
        setIndice((n + banners.length) % banners.length);
        setCiclo((c) => c + 1);
    }

    function reanudar() {
        setPausado(false);
        setCiclo((c) => c + 1);
    }

    // Solo reanuda si el foco salió del carrusel (no al pasar de un botón a otro)
    function alPerderFoco(e: FocusEvent<HTMLElement>) {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) reanudar();
    }

    // La luz sigue al mouse: se guardan en CSS, sin pasar por el estado
    function seguirMouse(e: MouseEvent<HTMLElement>) {
        const caja = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - caja.left;
        const y = e.clientY - caja.top;
        const s = e.currentTarget.style;
        s.setProperty("--mx", `${x}px`);
        s.setProperty("--my", `${y}px`);
    }

    const actual = banners[indice];

    return (
        <section
            id="hero"
            className={styles.hero}
            style={{ "--h": actual.hue } as CSSProperties}
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={reanudar}
            onMouseMove={seguirMouse}
            onFocus={() => setPausado(true)}
            onBlur={alPerderFoco}
            aria-roledescription="carrusel"
            aria-label="Destacados"
        >
            <i className={styles.blob1} />
            <i className={styles.blob2} />

            <div className={styles.contenido}>
                {banners.map((b, i) => {
                    const activo = i === indice;
                    // Según el tipo de destino, TypeScript sabe qué campos existen
                    const href = b.destino.tipo === "seccion" ? b.destino.href : `#producto-${b.destino.id}`;
                    // El primer banner es el título principal de la página (un solo h1)
                    const Titulo = i === 0 ? "h1" : "h2";

                    return (
                        <div
                            key={b.id}
                            className={`${styles.slide} ${activo ? styles.activo : ""}`}
                            aria-hidden={!activo}
                            inert={!activo}
                        >
                            <div className={styles.aparece} style={{ "--n": 0 } as CSSProperties}>
                                <span className="pill">{b.etiqueta}</span>
                            </div>
                            <Titulo className={styles.titulo}>
                                {b.titulo.map((linea, n) => (
                                    <span key={n} className={styles.linea}>
                                        <span style={{ "--n": n } as CSSProperties}>{linea}</span>
                                    </span>
                                ))}
                            </Titulo>
                            <p className={`${styles.texto} ${styles.aparece}`} style={{ "--n": 3 } as CSSProperties}>
                                {b.texto}
                            </p>
                            <div className={styles.aparece} style={{ "--n": 4 } as CSSProperties}>
                                <a className={`${styles.boton} brillo`} href={href} data-iman>
                                    {b.boton}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles.controles}>
                {banners.map((b, i) => (
                    <button
                        key={b.id}
                        className={`${styles.punto} ${i === indice ? styles.puntoActivo : ""}`}
                        aria-label={`Ir al banner ${i + 1}`}
                        aria-current={i === indice ? "true" : undefined}
                        onClick={() => irA(i)}
                    />
                ))}
                <button className={styles.flecha} aria-label="Anterior" onClick={() => irA(indice - 1)}>
                    ‹
                </button>
                <button className={styles.flecha} aria-label="Siguiente" onClick={() => irA(indice + 1)}>
                    ›
                </button>
            </div>

            <div
                key={`${indice}-${ciclo}`}
                className={styles.progreso}
                style={{
                    animationDuration: `${DURACION}ms`,
                    animationPlayState: pausado ? "paused" : "running",
                }}
            />
        </section>
    );
}
