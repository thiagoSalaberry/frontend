import styles from "./header.module.css";
import { CartIcon } from "@/ui/icons/cart";
import { XIcon } from "@/ui/icons/x";
import { Body } from "@/ui/text";
import Link from "next/link";
import { PersonIcon } from "@/ui/icons/person";
import { BackButton } from "@/ui/buttons";
import { BookmarkIcon } from "@/ui/icons/bookmark";
import Router from "next/router";
import { useState } from "react";
type HeaderProp = {
    user:any;
    menuState:false
};
export function HeaderComp(props:HeaderProp) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const footerContent = props.user ? (
        <div className={styles["footer"]}>
            <Body size="s" color="black">{props.user.userData?.email}</Body>
            <Link className={styles["link"]} href={"/logout"}>
                <Body size="m" fontWeight="bold" color="black" className={styles["pointer"]}>Cerrar sesión</Body>
            </Link>
        </div>
    ) : (
        <div className={styles["footer"]}>
            <Link onClick={()=>{
                if(location.pathname == "/signin") {
                    toggleMenu();
                }
            }} className={styles["link"]} href={"/signin"}>
                <Body size="m" fontWeight="bold" color="black" className={styles["pointer"]}>Iniciar sesión</Body>
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
            <nav className={styles["catalog"]}>
                <Link className={styles["link"]} href={"/search?q=buzos&offset=10&limit=10"}>
                    <Body size={"m"} fontWeight="bold" color="black" className={styles["pointer"]}>BUZOS</Body>
                </Link>
                <Link className={styles["link"]} href={"/search?q=camisas&offset=10&limit=10"}>
                    <Body size={"m"} fontWeight="bold" color="black" className={styles["pointer"]}>CAMISAS</Body>
                </Link>
                <Link className={styles["link"]} href={"/search?q=pantalones&offset=10&limit=10"}>
                    <Body size={"m"} fontWeight="bold" color="black" className={styles["pointer"]}>PANTALONES</Body>
                </Link>
                <Link className={styles["link"]} href={"/search?q=vestidos&offset=10&limit=10"}>
                    <Body size={"m"} fontWeight="bold" color="black" className={styles["pointer"]}>VESTIDOS</Body>
                </Link>
                <Link className={styles["link"]} href={"/search?q=zapatillas&offset=10&limit=10"}>
                    <Body size={"m"} fontWeight="bold" color="black" className={styles["pointer"]}>ZAPATILLAS</Body>
                </Link>
            </nav>
            <div className={styles["buttons-container"]}>
                <button onClick={()=>{
                    if(props.user) {
                        Router.push("/profile")
                    } else {
                        Router.push("/signin")
                    }
                }} className={styles["person"]}><PersonIcon size="32"/></button>
                <button onClick={()=>{
                    if(props.user) {
                        Router.push("/bookmarks")
                    } else {
                        Router.push("/signin")
                    }
                }} className={styles["bookmarks"]}><BookmarkIcon size="28"/></button>
                <button onClick={()=>{
                    if(props.user) {
                        Router.push("/cart")
                    } else {
                        Router.push("/signin")
                    }
                }} className={styles["cart"]}><CartIcon size="32"/></button>
                <button onClick={toggleMenu} className={styles["hamburguer"]}>
                    <div className={styles["bar"]}></div>
                    <div className={styles["bar"]}></div>
                    <div className={styles["bar"]}></div>
                </button>
                <button className={styles["log-in-out"]} onClick={()=>{
                    if(props.user.userData?.email) {
                        Router.push("/logout")
                    } else {
                        Router.push("/signin")
                    }
                }}>{props.user.userData?.email ? "Cerrar sesión" : "Iniciar sesión"}</button>
                <div className={`${styles["menu"]} ${menuOpen ? "" : styles["off"]}`}>
                    <div className={styles["menu-header"]}>
                        <Link onClick={toggleMenu} href={"/"}>
                            <div className={styles["logo"]}>
                                <div className={`${styles["logo-h"]} ${styles["white"]}`}></div>
                                <div className={`${styles["logo-v"]} ${styles["white"]}`}></div>
                                <div className={`${styles["logo-h"]} ${styles["white"]}`}></div>
                            </div>
                        </Link>
                    </div>
                    <button onClick={toggleMenu} className={styles["cruz"]}><XIcon size="48"/></button>
                    <div className={styles["clothes-list"]}>
                        <Link onClick={()=>{
                            if(location.pathname.includes("/search")) {
                                toggleMenu();
                            }
                        }} className={styles["link"]} href={"/search?q=buzos&offset=10&limit=10"}>
                            <Body size={"m"} fontWeight="bold" color="black" className={styles["pointer"]}>BUZOS</Body>
                        </Link>
                        <Link onClick={()=>{
                            if(location.pathname.includes("/search")) {
                                toggleMenu();
                            }
                        }} className={styles["link"]} href={"/search?q=camisas&offset=10&limit=10"}>
                            <Body size={"m"} fontWeight="bold" color="black" className={styles["pointer"]}>CAMISAS</Body>
                        </Link>
                        <Link onClick={()=>{
                            if(location.pathname.includes("/search")) {
                                toggleMenu();
                            }
                        }} className={styles["link"]} href={"/search?q=pantalones&offset=10&limit=10"}>
                            <Body size={"m"} fontWeight="bold" color="black" className={styles["pointer"]}>PANTALONES</Body>
                        </Link>
                        <Link onClick={()=>{
                            if(location.pathname.includes("/search")) {
                                toggleMenu();
                            }
                        }} className={styles["link"]} href={"/search?q=vestidos&offset=10&limit=10"}>
                            <Body size={"m"} fontWeight="bold" color="black" className={styles["pointer"]}>VESTIDOS</Body>
                        </Link>
                        <Link onClick={()=>{
                            if(location.pathname.includes("/search")) {
                                toggleMenu();
                            }
                        }} className={styles["link"]} href={"/search?q=zapatillas&offset=10&limit=10"}>
                            <Body size={"m"} fontWeight="bold" color="black" className={styles["pointer"]}>ZAPATILLAS</Body>
                        </Link>
                    </div>
                    <div className={styles["list"]}>
                        <Link onClick={()=>{
                            if(location.pathname == "/") {
                                toggleMenu();
                            }
                        }} className={styles["link"]} href={"/"}>
                            <Body size={"m"} color="black" className={styles["pointer"]}>Inicio</Body>
                        </Link>
                        <Link onClick={()=>{
                            if(location.pathname == "/profile" || location.pathname == "/signin") {
                                toggleMenu();
                            }
                        }} className={styles["link"]} href={props.user ? "/profile" : "/signin"}>
                            <Body size={"m"} color="black" className={styles["pointer"]}>Mi perfil</Body>
                        </Link>
                        <Link onClick={()=>{
                            if(location.pathname == "/bookmarks" || location.pathname == "/signin") {
                                toggleMenu();
                            }
                        }} className={styles["link"]} href={props.user ? "/bookmarks" : "/signin"}>
                            <Body size={"m"} color="black" className={styles["pointer"]}>Guardados</Body>
                        </Link>
                        <Link onClick={()=>{
                            if(location.pathname == "/search") {
                                toggleMenu();
                            }
                        }} className={styles["link"]} href={"/search"}>
                            <Body size={"m"} color="black" className={styles["pointer"]}>Buscar</Body>
                        </Link>
                    </div>
                    {footerContent}
                </div>
            </div>
        </header>
    )
}