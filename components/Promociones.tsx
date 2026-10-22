import type { CSSProperties } from "react";
import { promociones } from "@/data/club";
import styles from "./Club.module.css";

export default function Promociones() {
    return (
        <section id="promociones" className={styles.seccion}>
            <div className={styles.contenedor}>
                <div className={styles.cabecera} data-anim>
                    <span className="chip">Promociones</span>
                    <h2 className="titular">
                        Lo que <mark>se viene</mark>
                    </h2>
                    <p>Suscríbete y te avisamos primero cuando cada promoción esté activa.</p>
                </div>

                <div className={styles.promos}>
                    {promociones.map((p, i) => (
                        <article
                            key={p.id}
                            className={styles.promo}
                            data-anim="escala"
                            style={{ "--i": i } as CSSProperties}
                        >
                            <span className={styles.estado}>{p.estado}</span>
                            <b className={styles.valor}>{p.valor}</b>
                            <h3>{p.titulo}</h3>
                            <p>{p.texto}</p>
                            <a href="#registro">Avisarme →</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
