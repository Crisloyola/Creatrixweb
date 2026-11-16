"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./Hero.module.css";

// Una línea del titular. "contorno" pinta solo el borde; "marca" resalta la palabra final
export interface LineaTitulo {
    texto: string;
    contorno?: boolean;
    marca?: string;
}

interface Precio {
    etiqueta: string;
    monto: string;
    nota: string;
    extra?: string; // línea pequeña al pie de la tarjeta flotante
}

interface Boton {
    texto: string;
    href: string;
}

// Cada diapositiva del carrusel: su propio texto, botones y color de la maqueta
export interface Diapositiva {
    id: string;
    chip: string;
    titulo: LineaTitulo[];
    bajada: React.ReactNode;
    primario: Boton;
    secundario: Boton;
    imagen: { src: string; alt: string }; // foto real del trabajo (en /public/img/hero)
    trabajo: { titulo: string; texto: string }; // texto de la etiqueta sobre la foto
    precio?: Precio; // si no se pone, usa el general
    tono: number; // tono de color (0-360) de la diapositiva
}

interface Props {
    diapositivas: Diapositiva[];
    datos: { valor: string; sufijo?: string; texto: string }[];
    precio: Precio;
    check: string;
    intervalo?: number; // milisegundos entre cada pase automático
}

export default function Hero({ diapositivas, datos, precio, check, intervalo = 6000 }: Props) {
    const [actual, setActual] = useState(0);
    const [pausa, setPausa] = useState(false);
    const inicioToque = useRef<number | null>(null);
    const total = diapositivas.length;

    const ir = useCallback((i: number) => setActual((i + total) % total), [total]);
    const siguiente = () => ir(actual + 1);
    const anterior = () => ir(actual - 1);

    // Pase automático; se detiene con el mouse encima o si se pidió menos movimiento
    useEffect(() => {
        if (pausa || total < 2) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const t = setTimeout(() => ir(actual + 1), intervalo);
        return () => clearTimeout(t);
    }, [actual, pausa, total, intervalo, ir]);

    // Deslizar con el dedo en celular
    const tocar = (e: React.PointerEvent) => {
        if (e.pointerType !== "mouse") inicioToque.current = e.clientX;
    };
    const soltar = (e: React.PointerEvent) => {
        if (inicioToque.current === null) return;
        const dx = e.clientX - inicioToque.current;
        inicioToque.current = null;
        if (Math.abs(dx) > 50) (dx < 0 ? siguiente : anterior)();
    };

    return (
        <section
            id="hero"
            className={styles.hero}
            aria-roledescription="carrusel"
            onMouseEnter={() => setPausa(true)}
            onMouseLeave={() => setPausa(false)}
            onFocus={() => setPausa(true)}
            onBlur={() => setPausa(false)}
            onPointerDown={tocar}
            onPointerUp={soltar}
            onPointerCancel={() => (inicioToque.current = null)}
        >
            <div className={styles.pista} style={{ translate: `${-actual * 100}% 0` }}>
                {diapositivas.map((d, n) => {
                    const activa = n === actual;
                    // La primera diapositiva lleva el h1; las demás, h2
                    const Titulo = n === 0 ? "h1" : "h2";
                    const p = d.precio ?? precio;
                    return (
                        <div
                            key={d.id}
                            className={`${styles.diapositiva} ${activa ? styles.activa : ""}`}
                            style={{ "--h": d.tono } as CSSProperties}
                            role="group"
                            aria-roledescription="diapositiva"
                            aria-label={`${n + 1} de ${total}`}
                            aria-hidden={!activa}
                            inert={!activa}
                        >
                            <div className={styles.contenedor}>
                                <div className={styles.texto}>
                                    <span className={styles.chip}>
                                        <i aria-hidden="true" /> {d.chip}
                                    </span>

                                    <Titulo className={styles.titulo}>
                                        {d.titulo.map((l, i) => (
                                            <span key={i} className={l.contorno ? styles.contorno : undefined}>
                                                {l.texto}
                                                {l.marca && (
                                                    <>
                                                        {" "}
                                                        <mark>{l.marca}</mark>
                                                    </>
                                                )}
                                            </span>
                                        ))}
                                    </Titulo>

                                    <p className={styles.bajada}>{d.bajada}</p>

                                    <div className={styles.botones}>
                                        <a className={`${styles.primario} brillo`} href={d.primario.href} data-iman>
                                            {d.primario.texto} <span aria-hidden="true">→</span>
                                        </a>
                                        <a className={styles.secundario} href={d.secundario.href}>
                                            {d.secundario.texto}
                                        </a>
                                    </div>

                                    <ul className={styles.datos}>
                                        {datos.map((x) => (
                                            <li key={x.texto}>
                                                <b>
                                                    {x.valor}
                                                    {x.sufijo && <small>{x.sufijo}</small>}
                                                </b>
                                                <span>{x.texto}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* En celular el precio va en una barra al final, en vez de flotar */}
                                    <div className={styles.precioMovil}>
                                        <small>{p.etiqueta}</small>
                                        <b>{p.monto}</b>
                                        <span>{p.nota}</span>
                                    </div>
                                </div>

                                <div className={styles.visual} aria-hidden="true">
                                    <i className={styles.orbita} />

                                    <div className={styles.escena}>
                                        <Image
                                            src={d.imagen.src}
                                            alt={d.imagen.alt}
                                            fill
                                            sizes="(max-width: 900px) 100vw, 45vw"
                                            className={styles.foto}
                                            loading={n === 0 ? "eager" : "lazy"}
                                            fetchPriority={n === 0 ? "high" : "auto"}
                                        />
                                    </div>

                                    <div className={styles.check}>
                                        <span>✓</span> {check}
                                    </div>

                                    <div className={styles.precio}>
                                        <small>{p.etiqueta}</small>
                                        <b>{p.monto}</b>
                                        <span>{p.nota}</span>
                                        {p.extra && <em>{p.extra}</em>}
                                    </div>

                                    <div className={styles.trabajos}>
                                        <i style={{ backgroundImage: `url("${d.imagen.src}")` }} />
                                        <div>
                                            <b>{d.trabajo.titulo}</b>
                                            <span>{d.trabajo.texto}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {total > 1 && (
                <>
                    <button
                        type="button"
                        className={`${styles.flecha} ${styles.izquierda}`}
                        onClick={anterior}
                        aria-label="Diapositiva anterior"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        className={`${styles.flecha} ${styles.derecha}`}
                        onClick={siguiente}
                        aria-label="Diapositiva siguiente"
                    >
                        ›
                    </button>

                    <div className={styles.puntos}>
                        {diapositivas.map((d, n) => (
                            <button
                                key={d.id}
                                type="button"
                                className={n === actual ? styles.puntoActivo : undefined}
                                onClick={() => ir(n)}
                                aria-label={`Ir a la diapositiva ${n + 1}`}
                                aria-current={n === actual}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
