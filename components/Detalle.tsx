"use client";

import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "@/data/utils";
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

    return (
        <dialog
            ref={dialogo}
            className={styles.dialogo}
            onClose={onCerrar}
            onClick={(e) => {
                if (e.target === e.currentTarget) cerrar(); // clic en el fondo
            }}
        >
            {mostrado && (
                <div className={styles.modal}>
                    <Portada
                        nombre={mostrado.nombre}
                        tono={mostrado.tono}
                        imagen={mostrado.imagen}
                        sizes="40vw"
                        clase={styles.imagen}
                    />
                    <div className={styles.texto}>
                        <span className="pill">{mostrado.etiqueta}</span>
                        <h3>{mostrado.nombre}</h3>
                        <p>{mostrado.descripcion}</p>
                        <div className={styles.precio}>
                            {mostrado.precio ?? "Cotiza según medida y cantidad"}
                        </div>
                        <div className={styles.botones}>
                            <a
                                className={`${styles.cotizar} brillo`}
                                href={whatsappLink(`Hola, quiero cotizar: ${mostrado.nombre}`)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Cotizar por WhatsApp
                            </a>
                            <button className={styles.cerrar} onClick={cerrar}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </dialog>
    );
}