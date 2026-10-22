import { site } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.pie}>
            <span>
                © {new Date().getFullYear()} {site.nombre} · {site.eslogan} · {site.ciudad}
            </span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
        </footer>
    );
}