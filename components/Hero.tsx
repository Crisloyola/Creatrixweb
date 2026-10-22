import styles from "./Hero.module.css";

// Una línea del titular. "contorno" pinta solo el borde; "marca" resalta la palabra final
export interface LineaTitulo {
    texto: string;
    contorno?: boolean;
    marca?: string;
}

interface Boton {
    texto: string;
    href: string;
}

interface Props {
    chip: string;
    titulo: LineaTitulo[];
    bajada: React.ReactNode;
    primario: Boton;
    secundario: Boton;
    datos: { valor: string; sufijo?: string; texto: string }[];
    precio: { etiqueta: string; monto: string; nota: string };
    check: string;
}

// Escena de la portada principal: roll screen, afiche, sticker y volantes
function EscenaImprenta() {
    return (
        <>
            <div className={styles.rollScreen}>
                <span>Tu marca</span>
                <small>aquí</small>
            </div>
            <div className={styles.afiche}>
                <b>Gran</b>
                <b>formato</b>
                <small>2400 dpi</small>
            </div>
            <div className={styles.sticker}>
                <span>★</span>
            </div>
            <div className={styles.volante}>
                <i />
                <i />
                <i />
            </div>
        </>
    );
}

export default function Hero({ chip, titulo, bajada, primario, secundario, datos, precio, check }: Props) {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.contenedor}>
                <div className={styles.texto}>
                    <span className={styles.chip}>
                        <i aria-hidden="true" /> {chip}
                    </span>

                    <h1 className={styles.titulo}>
                        {titulo.map((l, i) => (
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
                    </h1>

                    <p className={styles.bajada}>{bajada}</p>

                    <div className={styles.botones}>
                        <a className={`${styles.primario} brillo`} href={primario.href} data-iman>
                            {primario.texto} <span aria-hidden="true">→</span>
                        </a>
                        <a className={styles.secundario} href={secundario.href}>
                            {secundario.texto}
                        </a>
                    </div>

                    <ul className={styles.datos}>
                        {datos.map((d) => (
                            <li key={d.texto}>
                                <b>
                                    {d.valor}
                                    {d.sufijo && <small>{d.sufijo}</small>}
                                </b>
                                <span>{d.texto}</span>
                            </li>
                        ))}
                    </ul>

                    {/* En celular el precio va en una barra al final, en vez de flotar */}
                    <div className={styles.precioMovil}>
                        <small>{precio.etiqueta}</small>
                        <b>{precio.monto}</b>
                        <span>{precio.nota}</span>
                    </div>
                </div>

                <div className={styles.visual} aria-hidden="true">
                    <i className={styles.orbita} />

                    {/* Maqueta hecha con CSS; se puede cambiar por una foto real */}
                    <div className={styles.escena}>
                        <EscenaImprenta />
                    </div>

                    <div className={styles.check}>
                        <span>✓</span> {check}
                    </div>

                    <div className={styles.precio}>
                        <small>{precio.etiqueta}</small>
                        <b>{precio.monto}</b>
                        <span>{precio.nota}</span>
                        <em>Mejor precio por volumen</em>
                    </div>

                    <div className={styles.trabajos}>
                        <i />
                        <div>
                            <b>Trabajos reales</b>
                            <span>Pedidos impresos para empresas</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
