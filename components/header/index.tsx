import styles from "./header.module.css";
import { CartIcon } from "@/ui/icons/cart";
import { XIcon } from "@/ui/icons/x";
import { Body } from "@/ui/text";
import Link from "next/link";
import logo from "@/public/logo.jpg"
export function HeaderComp() {
    function openMenu() {
        document.getElementById("close-menu")!.classList.remove(styles["off"]);
    };
    function closeMenu() {
        document.getElementById("close-menu")!.classList.add(styles["off"]);
    };
    function deleteAccessToken() {
        localStorage.removeItem("accessToken");
        if(location.pathname == "/") {
            closeMenu();
        };
    };
    const footerContent = /*localStorage.getItem("accessToken")*/ true ? (
        <div className={styles["footer"]}>
            <Body size="s" color="white">thiagopiola99@gmail.com</Body>
            <Link onClick={deleteAccessToken} className={styles["link"]} href={"/"}>
                <Body size="m" color="white">Cerrar sesión</Body>
            </Link>
        </div>
    ) : (
        <div className={styles["footer"]}>
            <Link className={styles["link"]} href={"/signin"}>
                <Body size="m" color="white">Iniciar sesión</Body>
            </Link>
        </div>
    );
    return (
        <header className={styles["header"]}>
            <Link href={"/"}>
                <img src="logo.png" alt="logo.png" />
            </Link>
            <div className={styles["buttons-container"]}>
                <button className={styles["cart"]}><CartIcon size="32"/></button>
                <button onClick={openMenu} className={styles["hamburguer"]}>
                    <div className={styles["bar"]}></div>
                    <div className={styles["bar"]}></div>
                    <div className={styles["bar"]}></div>
                </button>
                <div id="close-menu" className={`${styles["menu"]} ${styles["off"]}`}>
                    <button onClick={closeMenu} className={styles["cruz"]}><XIcon size="48"/></button>
                    <div className={styles["list"]}>
                        <Link onClick={closeMenu} className={styles["link"]} href={"/"}>
                            <Body size={"l"} color="white">Inicio</Body>
                        </Link>
                        <Link className={styles["link"]} href={"/profile"}>
                            <Body size={"l"} color="white">Mi perfil</Body>
                        </Link>
                        <Link className={styles["link"]} href={"/search"}>
                            <Body size={"l"} color="white">Buscar</Body>
                        </Link>
                    </div>
                    {footerContent}
                </div>
            </div>
        </header>
    )
}