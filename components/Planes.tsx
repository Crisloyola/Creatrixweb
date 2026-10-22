import type { CSSProperties } from "react";
import { planes } from "@/data/club";
import styles from "./Club.module.css";

export default function Planes() {
    return (
        <section id="planes" className={styles.seccion}>
            <div className={styles.contenedor}>
                <div className={styles.cabecera} data-anim>
                    <span className="chip">Planes e inscripciones</span>
                    <h2 className="titular">
                        Imprime más, <mark>paga menos</mark>
                    </h2>
                    <p>Elige un plan, suscríbete y empieza a ganar cashback y puntos en cada pedido.</p>
                </div>

                <div className={styles.planes}>
                    {planes.map((p, i) => (
                        <article
                            key={p.id}
                            className={`${styles.plan} ${p.destacado ? styles.planDestacado : ""}`}
                            data-anim="escala"
                            style={{ "--i": i } as CSSProperties}
                        >
                            {p.destacado && <span className={styles.recomendado}>Recomendado</span>}
                            <h3>{p.nombre}</h3>
                            <p className={styles.resumen}>{p.resumen}</p>
                            <div className={styles.monto}>
                                <b>{p.precio}</b>
                                <span>{p.periodo}</span>
                            </div>
                            <ul>
                                {p.beneficios.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                            <a className={`${styles.botonPlan} brillo`} href={`#registro-${p.id}`}>
                                Inscribirme
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
