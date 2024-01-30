import styles from "./header.module.css";
export function HeaderComp() {
    return (
        <header className={styles["header"]}>
            <h2 className={styles["logo"]}>TEOXYS SHOP</h2>
            <button className={styles["cart"]}>carrito</button>
            <button className={styles["hamburguer"]}>
                <div className={styles["bar"]}></div>
                <div className={styles["bar"]}></div>
                <div className={styles["bar"]}></div>
            </button>
        </header>
    )
}