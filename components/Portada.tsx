import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./Portada.module.css";

interface Props {
    nombre: string;
    tono: number;
    imagen?: string;
    sizes?: string;
    clase?: string; // el componente que lo usa decide el tamaño
}

export default function Portada({ nombre, tono, imagen, sizes = "25vw", clase = "" }: Props) {
    return (
        <span
            className={`${styles.portada} ${clase}`}
            style={{ "--h": tono } as CSSProperties}
        >
            {imagen ? (
                <Image src={imagen} alt={nombre} fill sizes={sizes} />
            ) : (
                <span className={styles.inicial}>{nombre.charAt(0)}</span>
            )}
        </span>
    );
}