"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { productos } from "@/data/productos";
import { limpiar, tono, whatsappLink } from "@/data/utils";
import Portada from "./Portada";
import Detalle from "./Detalle";
import type { ItemDetalle } from "./Detalle";
import styles from "./Productos.module.css";

// Convierte un producto en lo que necesita la ventana de detalle
function aItem(id: string): ItemDetalle | null {
    const i = productos.findIndex((p) => p.id === id);
    if (i < 0) return null;
    const p = productos[i];
    return {
        id: p.id,
        etiqueta: "Producto",
        nombre: p.nombre,
        descripcion: p.descripcion,
        precio: p.precio,
        imagen: p.imagen,
        tono: tono(i),
    };
}

export default function Productos() {
    const [busqueda, setBusqueda] = useState("");
    const [abierto, setAbierto] = useState<ItemDetalle | null>(null);
    const visibles = useMemo(() => {
        const q = limpiar(busqueda.trim());
        return productos.filter((p) => limpiar(p.nombre).includes(q));
    }, [busqueda]);

    return (
        <section id="productos" className={styles.seccion}>
            <div className={styles.contenedor}>
                <span className="chip" data-anim>Catálogo</span>
                <h2 className={`titular ${styles.titulo}`} data-anim="desenfoque">
                    Encuentra tu <mark>producto</mark>
                </h2>
                <p className={styles.sub} data-anim style={{ "--i": 1 } as CSSProperties}>
                    Busca o toca uno de los más pedidos: verás medidas, materiales y
                    precios al instante.
                </p>

                <label className={styles.buscador} data-anim style={{ "--i": 2 } as CSSProperties}>
                    <span className={styles.oculto}>Buscar producto</span>
                    <input
                        type="search"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        placeholder="Buscar: stickers, roll screen, volantes, tarjetas…"
                    />
                </label>

                {visibles.length > 0 ? (
                    <div className={styles.grilla}>
                        {visibles.map((p, i) => (
                            <button
                                key={p.id}
                                className={styles.tarjeta}
                                data-anim="escala"
                                data-spot
                                style={{ "--i": i % 5 } as CSSProperties}
                                onClick={() => setAbierto(aItem(p.id))}
                            >
                                <Portada
                                    nombre={p.nombre}
                                    tono={tono(productos.indexOf(p))}
                                    imagen={p.imagen}
                                    sizes="(max-width: 640px) 50vw, 20vw"
                                    clase={styles.imagen}
                                />
                                <span className={styles.cuerpo}>
                                    <strong>{p.nombre}</strong>
                                    <span className={styles.precio}>{p.precio}</span>
                                </span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <p className={styles.vacio} data-anim>
                        Sin resultados para «{busqueda}». Escríbenos y lo buscamos por ti.
                    </p>
                )}

                <div className={styles.ayuda} data-anim>
                    ¿No encuentras lo que buscas?
                    <a
                        className={styles.asistente}
                        href={whatsappLink("Hola, no encuentro el producto que busco. Quisiera consultar por ")}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Pregúntale al asistente
                    </a>
                </div>
            </div>

            <Detalle item={abierto} onCerrar={() => setAbierto(null)} />
        </section>
    );
}