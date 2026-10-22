import type { CSSProperties } from "react";
import { beneficios, pasosClub } from "@/data/club";
import styles from "./Club.module.css";

export default function Beneficios() {
    return (
        <section id="beneficios" className={styles.seccion}>
            <div className={`${styles.contenedor} ${styles.bloqueOscuro}`}>
                <div className={styles.cabecera} data-anim>
                    <span className="chip">Otros beneficios</span>
                    <h2 className="titular">
                        Cashback, regalos y <mark>puntos</mark>
                    </h2>
                    <p>Cada pedido te devuelve algo. Así funciona el club de clientes.</p>
                </div>

                <div className={styles.beneficios}>
                    {beneficios.map((b, i) => (
                        <article
                            key={b.id}
                            className={styles.beneficio}
                            data-anim="escala"
                            data-spot
                            style={{ "--i": i } as CSSProperties}
                        >
                            <span className={styles.icono} aria-hidden="true">{b.icono}</span>
                            <h3>{b.titulo}</h3>
                            <p>{b.texto}</p>
                        </article>
                    ))}
                </div>

                <ol className={styles.pasos}>
                    {pasosClub.map((p, i) => (
                        <li key={p} data-anim style={{ "--i": i } as CSSProperties}>
                            <b>{String(i + 1).padStart(2, "0")}</b>
                            <span>{p}</span>
                        </li>
                    ))}
                </ol>

                <a className={`${styles.botonClub} brillo`} href="#registro" data-iman>
                    Quiero unirme al club →
                </a>
            </div>
        </section>
    );
}
