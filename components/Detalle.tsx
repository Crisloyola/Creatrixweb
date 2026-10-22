"use client";

import { useEffect, useRef, useState } from "react";
import { partirPrecio, whatsappLink } from "@/data/utils";
import Portada from "./Portada";
import styles from "./Detalle.module.css";

// Lo mínimo que necesita la ventana: sirve para productos y para gran formato
export interface ItemDetalle {
    id: string;
    etiqueta: string;
    nombre: string;
    descripcion: string;
    precio?: string;
    imagen?: string;
    tono: number;
}

interface Props {
    item: ItemDetalle | null;
    onCerrar: () => void;
}

const VENTAJAS = ["Full color", "Con tu logo", "Envíos a todo el Perú"];

export default function Detalle({ item, onCerrar }: Props) {
    const dialogo = useRef<HTMLDialogElement>(null);

    // Guarda el último item para que el contenido siga visible mientras la ventana se cierra
    const [mostrado, setMostrado] = useState(item);
    if (item && item !== mostrado) setMostrado(item);

    // Cuando llega un item, abre la ventana
    useEffect(() => {
        const d = dialogo.current;
        if (item && d && !d.open) d.showModal();
    }, [item]);

    const cerrar = () => dialogo.current?.close();
    const precio = mostrado?.precio ? partirPrecio(mostrado.precio) : null;

    return (
        <dialog
            ref={dialogo}
            className={styles.dialogo}
            onClose={onCerrar}
            onClick={(e) => {
                if (e.target === e.currentTarget) cerrar(); // clic en el fondo
            }}
            aria-labelledby="detalle-titulo"
        >
            {mostrado && (
                <div className={styles.modal}>
                    <button className={styles.x} aria-label="Cerrar" onClick={cerrar}>
                        ×
                    </button>

                    <div className={styles.visual}>
                        <Portada
                            nombre={mostrado.nombre}
                            tono={mostrado.tono}
                            imagen={mostrado.imagen}
                            sizes="(max-width: 640px) 100vw, 40vw"
                            clase={styles.imagen}
                        />
                        {precio && (
                            <div className={styles.chipPrecio}>
                                <small>Desde</small>
                                <b>{precio.monto}</b>
                                <span>{precio.nota}</span>
                            </div>
                        )}
                    </div>

                    <div className={styles.texto}>
                        <span className={styles.etiqueta}>{mostrado.etiqueta}</span>
                        <h3 id="detalle-titulo">{mostrado.nombre}</h3>
                        <p>{mostrado.descripcion}</p>

                        <ul className={styles.ventajas}>
                            {VENTAJAS.map((v) => (
                                <li key={v}>{v}</li>
                            ))}
                        </ul>

                        <div className={styles.precio}>
                            <span>Precio referencial</span>
                            <b>{mostrado.precio ?? "Cotiza según medida y cantidad"}</b>
                        </div>

                        <div className={styles.botones}>
                            <a
                                className={`${styles.cotizar} brillo`}
                                href={whatsappLink(`Hola, quiero cotizar: ${mostrado.nombre}`)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Cotizar <span aria-hidden="true">→</span>
                            </a>
                            <button className={styles.cerrar} onClick={cerrar}>
                                Seguir viendo
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </dialog>
    );
}
