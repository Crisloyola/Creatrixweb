import { cintaTexto } from "@/data/site";
import styles from "./Marquee.module.css";

// El texto se repite 4 veces: al moverse la mitad, vuelve a empezar sin saltos
function Pista({ reversa = false }: { reversa?: boolean }) {
    return (
        <div className={`${styles.pista} ${reversa ? styles.reversa : ""}`}>
            {Array.from({ length: 4 }, (_, i) => (
                <span key={i} className={styles.item}>
                    {cintaTexto}
                    <b className={styles.estrella}>✦</b>
                </span>
            ))}
        </div>
    );
}

export default function Marquee() {
    return (
        <div className={styles.zona} aria-hidden="true">
            <div className={`${styles.cinta} ${styles.atras}`}>
                <Pista reversa />
            </div>
            <div className={styles.cinta}>
                <Pista />
            </div>
        </div>
    );
}
