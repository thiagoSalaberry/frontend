import { HeaderComp } from "../header"
import { FooterComp } from "../footer"
import styles from "./layout.module.css"
type LayoutProps = {
    children:any;
    user:any
}
export function LayoutComp(props:LayoutProps) {
    return (
        <div>
            <HeaderComp user={props.user}/>
            <main className={styles["main"]}>{props.children}</main>
            <FooterComp user={props.user}/>
        </div>
    )
}