import Link from "next/link";
import {Label, Body} from "@/ui/text";
import styles from "./footer.module.css";
export function FooterComp() {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["routes"]}>
                <Link className={styles["link"]} href={"/login"}>
                    <Body color="white" size="m">Ingresar</Body>
                </Link>
                <Link className={styles["link"]} href={"/profile"}>
                    <Body color="white" size="m">Mi perfil</Body>
                </Link>
                <Link className={styles["link"]} href={"/search"}>
                    <Body color="white" size="m">Buscar</Body>
                </Link>
                <Link className={styles["link"]} href={"/"}>
                    <Body color="white" size="m">Cerrar sesión</Body>
                </Link>
            </div>
            <div className={styles["redes"]}>
                <Label color="white" size="m">Redes</Label>
                <Link className={styles["link"]} href={"https://www.instagram.com/thiagosalaberry/"}>
                    <Body color="white" size="m">@thiagosalaberry</Body>
                </Link>
                <Link className={styles["link"]} href={"https://twitter.com/ThiagoSalaberry"}>
                    <Body color="white" size="m">@thiagosalaberry</Body>
                </Link>
            </div>
            <Body color="white" size="m">© 2024 Teoxys</Body>
        </footer>
    )
}