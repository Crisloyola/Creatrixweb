"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { planes } from "@/data/club";
import styles from "./Acceso.module.css";

interface Datos {
    nombre: string;
    telefono: string;
    email: string;
    plan: string;
    acepto: boolean;
}

type Errores = Partial<Record<keyof Datos, string>>;

const inicial: Datos = { nombre: "", telefono: "", email: "", plan: "basico", acepto: false };

function validar(d: Datos): Errores {
    const e: Errores = {};
    if (d.nombre.trim().length < 2) e.nombre = "Escribe tu nombre.";
    if (d.telefono.replace(/\D/g, "").length < 7) e.telefono = "Escribe un número válido.";
    if (!/^\S+@\S+\.\S+$/.test(d.email.trim())) e.email = "Escribe un correo válido.";
    if (!d.acepto) e.acepto = "Debes aceptar para continuar.";
    return e;
}

// Se abre con los enlaces #suscribirse o #suscribirse-<plan> desde cualquier página
export default function Acceso() {
    const dialogo = useRef<HTMLDialogElement>(null);
    const [datos, setDatos] = useState<Datos>(inicial);
    const [errores, setErrores] = useState<Errores>({});
    const [listo, setListo] = useState(false);

    useEffect(() => {
        const desdeHash = () => {
            const h = window.location.hash;
            if (!h.startsWith("#suscribirse")) return;
            const plan = h.replace(/^#suscribirse-?/, "");
            if (planes.some((p) => p.id === plan)) setDatos((d) => ({ ...d, plan }));
            setErrores({});
            setListo(false);
            const d = dialogo.current;
            if (d && !d.open) d.showModal();
        };
        desdeHash(); // por si la página se abrió ya con #suscribirse
        window.addEventListener("hashchange", desdeHash);
        return () => window.removeEventListener("hashchange", desdeHash);
    }, []);

    // Al cerrar, quita el #suscribirse de la dirección para poder volver a abrirlo
    function alCerrar() {
        if (window.location.hash.startsWith("#suscribirse")) {
            history.replaceState(null, "", window.location.pathname + window.location.search);
        }
    }

    function cambiar(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value, type } = e.target;
        const valor = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
        setDatos((prev) => ({ ...prev, [name]: valor }));
        setErrores((prev) => ({ ...prev, [name]: undefined }));
    }

    function enviar(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const errs = validar(datos);
        setErrores(errs);
        const campos = Object.keys(errs);
        if (campos.length > 0) {
            document.getElementById(`acceso-${campos[0]}`)?.focus();
            return;
        }
        setListo(true);
    }

    return (
        <dialog
            ref={dialogo}
            className={styles.dialogo}
            onClose={alCerrar}
            onClick={(e) => {
                if (e.target === e.currentTarget) dialogo.current?.close(); // clic en el fondo
            }}
            aria-labelledby="acceso-titulo"
        >
            <div className={styles.caja}>
                <button className={styles.cerrar} aria-label="Cerrar" onClick={() => dialogo.current?.close()}>
                    ×
                </button>

                <h2 id="acceso-titulo" className={styles.titulo}>Únete al club</h2>
                <p className={styles.sub}>Suscríbete y empieza a sumar cashback, puntos y regalos.</p>

                {listo ? (
                    <p className={styles.listo} role="status">
                        ¡Gracias! Recibimos tu suscripción. Te contactaremos pronto.
                    </p>
                ) : (
                    <form className={styles.formulario} onSubmit={enviar} noValidate>
                        <Campo id="nombre" etiqueta="Nombre y apellido" error={errores.nombre}>
                            <input id="acceso-nombre" name="nombre" autoComplete="name"
                                value={datos.nombre} onChange={cambiar} aria-invalid={!!errores.nombre} />
                        </Campo>
                        <Campo id="telefono" etiqueta="Celular" error={errores.telefono}>
                            <input id="acceso-telefono" name="telefono" type="tel" autoComplete="tel"
                                value={datos.telefono} onChange={cambiar} aria-invalid={!!errores.telefono} />
                        </Campo>

                        <Campo id="email" etiqueta="Correo" error={errores.email}>
                            <input id="acceso-email" name="email" type="email" autoComplete="email"
                                value={datos.email} onChange={cambiar} aria-invalid={!!errores.email} />
                        </Campo>

                        <Campo id="plan" etiqueta="Plan">
                            <select id="acceso-plan" name="plan" value={datos.plan} onChange={cambiar}>
                                {planes.map((p) => (
                                    <option key={p.id} value={p.id}>
                                        {p.nombre} · {p.precio} {p.precio !== "Gratis" ? p.periodo : ""}
                                    </option>
                                ))}
                            </select>
                        </Campo>

                        <label className={styles.acepto}>
                            <input id="acceso-acepto" name="acepto" type="checkbox"
                                checked={datos.acepto} onChange={cambiar} aria-invalid={!!errores.acepto} />
                            <span>Acepto los términos y la política de privacidad.</span>
                        </label>
                        {errores.acepto && <span className={styles.error} role="alert">{errores.acepto}</span>}

                        <button className={`${styles.enviar} brillo`} type="submit">
                            Suscribirme
                        </button>
                    </form>
                )}
            </div>
        </dialog>
    );
}

function Campo({ id, etiqueta, error, children }: {
    id: string;
    etiqueta: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={styles.campo}>
            <label htmlFor={`acceso-${id}`}>{etiqueta}</label>
            {children}
            {error && <span className={styles.error} role="alert">{error}</span>}
        </div>
    );
}
