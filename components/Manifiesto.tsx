import { Fragment } from "react";
import type { CSSProperties } from "react";
import Contador from "./Contador";
import { cifras } from "@/data/manifiesto";
import styles from "./Manifiesto.module.css";

// Un trozo de frase y, si lleva color, su clase
type Trozo = [texto: string, clase?: string];

const frase1: Trozo[] = [
    ["Creadores de"],
    ["piezas", styles.menta],
    ["que"],
    ["se ven", styles.contorno],
    ["y se sienten."],
];

const frase2: Trozo[] = [["Unimos marcas"], ["con personas.", styles.contorno]];

// Separa la frase en palabras para que aparezcan una tras otra
function Frase({ trozos, clase = "" }: { trozos: Trozo[]; clase?: string }) {
    const palabras = trozos.flatMap(([texto, color]) =>
        texto.split(" ").map((p) => ({ p, color }))
    );

    return (
        <h2 className={`${styles.grande} ${clase}`} data-anim="palabras">
            {palabras.map(({ p, color }, i) => (
                <Fragment key={i}>
                    <span
                        className={`palabra ${color ?? ""}`}
                        style={{ "--i": i } as CSSProperties}
                    >
                        {p}
                    </span>{" "}
                </Fragment>
            ))}
        </h2>
    );
}

export default function Manifiesto() {
    return (
        <section id="manifiesto" className={styles.seccion}>
            <div className={styles.contenedor}>
                <span className={styles.etiqueta} data-anim="izquierda">
                    Una agencia con oficio
                </span>

                <Frase trozos={frase1} />
                <Frase trozos={frase2} clase={styles.segunda} />

                <div className={styles.cifras}>
                    {cifras.map((c, i) => (
                        <div
                            key={c.texto}
                            className={styles.tarjeta}
                            data-anim="escala"
                            data-spot
                            style={{ "--i": i } as CSSProperties}
                        >
                            <Contador valor={c.valor} prefijo={c.prefijo} sufijo={c.sufijo} />
                            <span>{c.texto}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
