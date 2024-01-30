import { HeaderComp } from "../header"
import { FooterComp } from "../footer"
import styles from "./layout.module.css"
export function LayoutComp({children}:any) {
    return (
        <div>
            <HeaderComp/>
            <main className={styles["main"]}>{children}</main>
            <FooterComp />
        </div>
    )
}