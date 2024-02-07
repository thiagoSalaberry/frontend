import styles from "./header.module.css";
import { CartIcon } from "@/ui/icons/cart";
import { PersonIcon } from "@/ui/icons/person";
import { XIcon } from "@/ui/icons/x";
import { Body } from "@/ui/text";
import Link from "next/link";
import { Button, BackButton } from "@/ui/buttons";
import logo from "@/public/logo.jpg";
import Router from "next/router";
type HeaderProp = {
    user:any;
};
export function HeaderComp(props:HeaderProp) {
    function openMenu() {
        document.getElementById("close-menu")!.classList.remove(styles["off"]);
    };
    function closeMenu() {
        document.getElementById("close-menu")!.classList.add(styles["off"]);
    };
    function deleteAccessToken() {
        localStorage.removeItem("accessToken");
        Router.push("/");
    };
    const footerContent = props.user ? (
        <div className={styles["footer"]}>
            <Body size="s" color="black">{props.user.userData?.email}</Body>
            <Link onClick={deleteAccessToken} className={styles["link"]} href={"/"}>
                <Body size="m" fontWeight="bold" color="black">Cerrar sesión</Body>
            </Link>
        </div>
    ) : (
        <div className={styles["footer"]}>
            <Link className={styles["link"]} href={"/signin"}>
                <Body size="m" fontWeight="bold" color="black">Iniciar sesión</Body>
            </Link>
        </div>
    );
    return (
        <header className={styles["header"]}>
            <Link href={"/"}>
                <div className={styles["logo"]}>
                    <div className={styles["logo-h"]}></div>
                    <div className={styles["logo-v"]}></div>
                    <div className={styles["logo-h"]}></div>
                </div>
            </Link>
            <div className={styles["buttons-container"]}>
                <button onClick={()=>Router.push("/cart")} className={styles["cart"]}><CartIcon size="32"/></button>
                <button onClick={openMenu} className={styles["hamburguer"]}>
                    <div className={styles["bar"]}></div>
                    <div className={styles["bar"]}></div>
                    <div className={styles["bar"]}></div>
                </button>
                <div id="close-menu" className={`${styles["menu"]} ${styles["off"]}`}>
                    <div className={styles["menu-header"]}>
                        <Link href={"/"}>
                            <div className={styles["logo"]}>
                                <div className={`${styles["logo-h"]} ${styles["white"]}`}></div>
                                <div className={`${styles["logo-v"]} ${styles["white"]}`}></div>
                                <div className={`${styles["logo-h"]} ${styles["white"]}`}></div>
                            </div>
                        </Link>
                    </div>
                    <button onClick={closeMenu} className={styles["cruz"]}><XIcon size="48"/></button>
                    <div className={styles["clothes-list"]}>
                        <Link onClick={closeMenu} className={styles["link"]} href={"/search?q=buzos&offset=10&limit=10"}>
                            <Body size={"m"} fontWeight="bold" color="black">BUZOS</Body>
                        </Link>
                        <Link onClick={closeMenu} className={styles["link"]} href={"/search?q=camisas&offset=10&limit=10"}>
                            <Body size={"m"} fontWeight="bold" color="black">CAMISAS</Body>
                        </Link>
                        <Link onClick={closeMenu} className={styles["link"]} href={"/search?q=pantalones&offset=10&limit=10"}>
                            <Body size={"m"} fontWeight="bold" color="black">PANTALONES</Body>
                        </Link>
                        <Link onClick={closeMenu} className={styles["link"]} href={"/search?q=vestidos&offset=10&limit=10"}>
                            <Body size={"m"} fontWeight="bold" color="black">VESTIDOS</Body>
                        </Link>
                        <Link onClick={closeMenu} className={styles["link"]} href={"/search?q=zapatillas&offset=10&limit=10"}>
                            <Body size={"m"} fontWeight="bold" color="black">ZAPATILLAS</Body>
                        </Link>
                    </div>
                    <div className={styles["list"]}>
                        <Link onClick={closeMenu} className={styles["link"]} href={"/"}>
                            <Body size={"m"} color="black">Inicio</Body>
                        </Link>
                        <Link className={styles["link"]} href={props.user ? "/profile" : "/signin"}>
                            <Body size={"m"} color="black">Mi perfil</Body>
                        </Link>
                        <Link className={styles["link"]} href={"/search"}>
                            <Body size={"m"} color="black">Buscar</Body>
                        </Link>
                    </div>
                    {footerContent}
                </div>
                <BackButton className={styles["desktop"]}>Ingresar</BackButton>
            </div>
        </header>
    )
}