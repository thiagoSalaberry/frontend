import styles from "./catalogo.module.css";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@/ui/icons/arrow-right";
import { ArrowLeftIcon } from "@/ui/icons/arrow-left";
export function CatalogComp() {
    const tabsBoxRef = useRef<HTMLUListElement>(null);
    const arrowsRef = useRef<HTMLDivElement>(null);
    let isDragging = false
    const dragging = (e:MouseEvent) => {
        if (!isDragging) return;
        if(tabsBoxRef.current){
            tabsBoxRef.current.scrollLeft -= e.movementX;
        }
    }
    const dragStop = () => {
        isDragging = false;
    }
    useEffect(()=>{
        const tabsBox = tabsBoxRef.current;
        if(tabsBox) {
            tabsBox.addEventListener("mousedown", () => isDragging = true)
            tabsBox.addEventListener("mousemove", dragging)
            // tabsBox.addEventListener("touchstart", () => isDragging = true)
            // tabsBox.addEventListener("touchmove", dragging)
            document.addEventListener("mouseup", dragStop)
        };
        const handleTabClick = (e:MouseEvent) => {
            const target = e.target as HTMLLIElement;
            console.log(target.textContent)
        };
        const tabsList = tabsBoxRef.current?.querySelectorAll("li");
        if(tabsList) {
            tabsList.forEach(tab => {
                tab.addEventListener("click", handleTabClick)
            })
        };
        return () => {
            if(tabsBox) {
                tabsBox.removeEventListener("mousemove", dragging)
            };
            if(tabsList) {
                tabsList.forEach(tab => {
                    tab.removeEventListener("click", handleTabClick)
                })
            }
        }
    }, [])
    return (
        <div className={styles["wrapper"]}>
            {/* <div id="left" className={styles["icon"]}>
                <ArrowLeftIcon className={`icon ${styles["i-left"]}`} size="40"/>
            </div> */}
            <ul ref={tabsBoxRef} className={`${styles["tabs-box"]}`}>
                {/* <li id="Coding" className={styles["tab"]}>Coding</li>
                <li id="JavaScript" className={styles["tab"]}>JavaScript</li>
                <li id="TypeScript" className={styles["tab"]}>TypeScript</li>
                <li id="Podcasts" className={styles["tab"]}>Podcasts</li>
                <li id="Databases" className={styles["tab"]}>Databases</li>
                <li id="Web Development" className={styles["tab"]}>Web Development</li>
                <li id="History" className={styles["tab"]}>History</li>
                <li id="Programming" className={styles["tab"]}>Programming</li>
                <li id="Gadgets" className={styles["tab"]}>Gadgets</li>
                <li id="" className={styles["tab"]}>Algorithms</li>
                <li id="" className={styles["tab"]}>Comedy</li>
                <li id="" className={styles["tab"]}>Gaming</li>
                <li id="" className={styles["tab"]}>Share Market</li>
                <li id="" className={styles["tab"]}>Smartphones</li>
                <li id="" className={styles["tab"]}>Data Structures</li> */}
                <li id="camisas" className={styles["tab"]}>CAMISAS</li>
                <li id="buzos" className={styles["tab"]}>BUZOS</li>
                <li id="vestidos" className={styles["tab"]}>VESTIDOS</li>
                <li id="pantalones" className={styles["tab"]}>PANTALONES</li>
                <li id="zapatillas" className={styles["tab"]}>ZAPATILLAS</li>
            </ul>
            {/* <div id="right" className={styles["icon"]}>
                <ArrowRightIcon className={`icon ${styles["i-right"]}`} size="40"/>
            </div> */}
        </div>
    )
}

