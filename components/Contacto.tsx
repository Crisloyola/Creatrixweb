"use client";

import { useState } from "react";
import type { ChangeEvent, CSSProperties, FormEvent, ReactNode } from "react";
import { site } from "@/data/site";
import { whatsappLink } from "@/data/utils";
import styles from "./Contacto.module.css";

interface Datos {
    nombre: string;
    telefono: string;
    email: string;
    mensaje: string;
    acepto: boolean;
}

// Un error por campo, y solo para los que fallan
type Errores = Partial<Record<keyof Datos, string>>;

const inicial: Datos = { nombre: "", telefono: "", email: "", mensaje: "", acepto: false };

function validar(d: Datos): Errores {
    const e: Errores = {};
    if (d.nombre.trim().length < 2) e.nombre = "Escribe tu nombre.";
    if (d.telefono.replace(/\D/g, "").length < 7) e.telefono = "Escribe un número de contacto válido.";
    if (d.email.trim() && !/^\S+@\S+\.\S+$/.test(d.email.trim())) e.email = "Revisa el correo.";
    if (d.mensaje.trim().length < 10) e.mensaje = "Cuéntanos un poco más (mínimo 10 letras).";
    if (!d.acepto) e.acepto = "Debes aceptar para continuar.";
    return e;
}

interface CampoProps {
    id: string;
    etiqueta: string;
    error?: string;
    orden: number; // para que los campos aparezcan uno tras otro
    children: ReactNode;
}

function Campo({ id, etiqueta, error, orden, children }: CampoProps) {
    return (
        <div className={styles.campo} data-anim style={{ "--i": orden } as CSSProperties}>
            <label htmlFor={`campo-${id}`}>{etiqueta}</label>
            {children}
            {error && (
                <span id={`error-${id}`} className={styles.error} role="alert">
                    {error}
                </span>
            )}
        </div>
    );
}

export default function Contacto() {
    const [datos, setDatos] = useState<Datos>(inicial);
    const [errores, setErrores] = useState<Errores>({});
    const [enviado, setEnviado] = useState(false);

    // Un solo manejador para todos los campos: usa el atributo "name"
    function cambiar(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setDatos((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
        setErrores((prev) => ({ ...prev, [name]: undefined })); // borra el error al corregir
        setEnviado(false);
    }

    function enviar(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const errs = validar(datos);
        setErrores(errs);

        const campos = Object.keys(errs);
        if (campos.length > 0) {
            document.getElementById(`campo-${campos[0]}`)?.focus(); // lleva al primer error
            return;
        }

        const texto = [
            `Hola, soy ${datos.nombre.trim()}.`,
            `Teléfono: ${datos.telefono.trim()}`,
            datos.email.trim() ? `Correo: ${datos.email.trim()}` : "",
            `Quiero cotizar: ${datos.mensaje.trim()}`,
        ]
            .filter(Boolean)
            .join("\n");

        window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
        setEnviado(true);
        setDatos(inicial);
    }

    return (
        <section id="contacto" className={styles.seccion}>
            <div className={styles.contenedor}>
                <div data-anim="izquierda">
                    <span className={styles.etiqueta}>Contacto</span>
                    <h2 className={styles.titulo}>Cotiza tu pedido</h2>
                    <p className={styles.sub}>
                        Cuéntanos qué necesitas y te respondemos por WhatsApp con medidas,
                        materiales y precio.
                    </p>

                    <ul className={styles.datos}>
                        <li>
                            <small>WhatsApp</small>
                            <a
                                href={whatsappLink("Hola, quisiera información.")}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Escríbenos ahora
                            </a>
                        </li>
                        <li>
                            <small>Correo</small>
                            <a href={`mailto:${site.email}`}>{site.email}</a>
                        </li>
                        <li>
                            <small>Ubicación</small>
                            <span>{site.ciudad}</span>
                        </li>
                        <li>
                            <small>Horario</small>
                            <span>Lunes a sábado</span>
                        </li>
                    </ul>
                </div>

                <form className={styles.formulario} onSubmit={enviar} noValidate>
                    <Campo id="nombre" orden={0} etiqueta="Nombre y apellido" error={errores.nombre}>
                        <input
                            id="campo-nombre"
                            name="nombre"
                            autoComplete="name"
                            value={datos.nombre}
                            onChange={cambiar}
                            aria-invalid={!!errores.nombre}
                            aria-describedby={errores.nombre ? "error-nombre" : undefined}
                        />
                    </Campo>

                    <Campo id="telefono" orden={1} etiqueta="Número de contacto" error={errores.telefono}>
                        <input
                            id="campo-telefono"
                            name="telefono"
                            type="tel"
                            autoComplete="tel"
                            value={datos.telefono}
                            onChange={cambiar}
                            aria-invalid={!!errores.telefono}
                            aria-describedby={errores.telefono ? "error-telefono" : undefined}
                        />
                    </Campo>

                    <Campo id="email" orden={2} etiqueta="Correo (opcional)" error={errores.email}>
                        <input
                            id="campo-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={datos.email}
                            onChange={cambiar}
                            aria-invalid={!!errores.email}
                            aria-describedby={errores.email ? "error-email" : undefined}
                        />
                    </Campo>

                    <Campo id="mensaje" orden={3} etiqueta="¿Qué necesitas imprimir?" error={errores.mensaje}>
                        <textarea
                            id="campo-mensaje"
                            name="mensaje"
                            rows={3}
                            value={datos.mensaje}
                            onChange={cambiar}
                            aria-invalid={!!errores.mensaje}
                            aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
                        />
                    </Campo>

                    <div className={styles.campo} data-anim style={{ "--i": 4 } as CSSProperties}>
                        <label className={styles.acepto}>
                            <input
                                id="campo-acepto"
                                name="acepto"
                                type="checkbox"
                                checked={datos.acepto}
                                onChange={cambiar}
                                aria-invalid={!!errores.acepto}
                                aria-describedby={errores.acepto ? "error-acepto" : undefined}
                            />
                            <span>
                                Acepto la política de privacidad y autorizo el tratamiento de mis
                                datos para responder mi consulta.
                            </span>
                        </label>
                        {errores.acepto && (
                            <span id="error-acepto" className={styles.error} role="alert">
                                {errores.acepto}
                            </span>
                        )}
                    </div>

                    <button
                        className={`${styles.enviar} brillo`}
                        type="submit"
                        data-anim
                        data-iman
                        style={{ "--i": 5 } as CSSProperties}
                    >
                        Enviar por WhatsApp
                    </button>

                    {enviado && (
                        <p className={styles.exito} role="status">
                            Abrimos WhatsApp con tu mensaje. Si no se abrió, permite las
                            ventanas emergentes o escríbenos directamente.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}