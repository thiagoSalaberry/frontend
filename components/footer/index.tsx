import Link from "next/link";
import {Label, Body} from "@/ui/text";
import { TwitterXIcon } from "@/ui/icons/twitter-x";
import { InstragramIcon } from "@/ui/icons/instagram";
import styles from "./footer.module.css";
import Router from "next/router";
type FooterProp = {
    user:any;
};
export function FooterComp(props:FooterProp) {
    function deleteAccessToken() {
        localStorage.removeItem("accessToken");
        window.location.reload();
        Router.push("/")
    };
    const routesContent = (props.user !== false ? 
        <div className={styles["routes"]}>
            <Link className={styles["link"]} href={"/profile"}>
                <Body color="white" size="m">Mi perfil</Body>
            </Link>
            <Link className={styles["link"]} href={"/search"}>
                <Body color="white" size="m">Buscar</Body>
            </Link>
            <Link onClick={deleteAccessToken} className={styles["link"]} href={"/"}>
                <Body color="white" size="m">Cerrar sesión</Body>
            </Link>
        </div>
        :
        <div className={styles["routes"]}>
            <Link className={styles["link"]} href={"/signin"}>
                <Body color="white" size="m">Mi perfil</Body>
            </Link>
            <Link className={styles["link"]} href={"/search"}>
                <Body color="white" size="m">Buscar</Body>
            </Link>
            <Link className={styles["link"]} href={"/signin"}>
                <Body color="white" size="m">Ingresar</Body>
            </Link>
        </div>
        
    )
    return (
        <footer className={styles["footer"]}>
            {routesContent}
            <div className={styles["redes"]}>
                <Label color="white" size="m">Redes</Label>
                <Link className={styles["link"]} href={"https://www.instagram.com/thiagosalaberry/"}>
                    <Body className={styles["redes-link"]} color="white" size="m"><InstragramIcon size="24"/> @thiagosalaberry</Body>
                </Link>
                <Link className={styles["link"]} href={"https://twitter.com/ThiagoSalaberry"}>
                    <Body className={styles["redes-link"]} color="white" size="m"><TwitterXIcon size="24"/> @thiagosalaberry</Body>
                </Link>
            </div>
            <Body color="white" size="m">© 2024 Teoxys</Body>
        </footer>
    )
}