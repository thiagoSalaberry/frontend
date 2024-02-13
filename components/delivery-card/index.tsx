import styles from "./delivery-cards.module.css";
import React, { useEffect, useRef, useState } from "react";
interface DeliveryCardProps {
    delivery: "delivery" | "pickup";
    address?: string;
    department?: string;
}
export default function DeliveryCard(props:DeliveryCardProps) {
    const [open, setOpen] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [initialAddress, setInitialAddress] = useState({
        address: "Tu domicilio",
        department: "1°A",
        city: "Paris"
    })
    function handleOpenClick() {
        setOpen(true)
        setSubmited(false)
    };
    function handleCloseClick() {
        setOpen(false)
    };
    function handleSubmit(e:any) {
        e.preventDefault
        setInitialAddress({address: e.target.address.value, department: e.target.dpto.value, city: e.target.city.value})
        setSubmited(true);
    };
    console.log(open)
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["accordian"]}>
                <div className={styles["item"]}>
                    <div className={styles["title"]}>
                        <h3>Envío a domicilio</h3>
                        <span>¡Gratis!</span>
                    </div>
                    <p className={styles["address"]}>{initialAddress.address}, {initialAddress.department} - {initialAddress.city}</p>
                    <button onClick={handleOpenClick} className={styles["button"]}>Editar dirección de envío</button>
                    {(open && !submited) ? <form onSubmit={handleSubmit}>
                        <div className={styles["input-container"]}>
                            <label htmlFor="address">Dirección</label>
                            <input required type="text" name="address" id="" />
                        </div>
                        <div className={styles["input-container"]}>
                            <label htmlFor="city">Localidad</label>
                            <input required type="text" name="city" id="" />
                        </div>
                        <div className={styles["input-container"]}>
                            <label htmlFor="dpto">Departamento</label>
                            <input required type="text" name="dpto" id="" />
                        </div>
                        <button className={`${styles["button"]} ${styles["submit"]}`} type="submit">Cargar</button>
                        <button className={`${styles["button"]} ${styles["cancel"]}`} onClick={handleCloseClick}>Cancelar</button>
                    </form> : null}
                </div>
            </div>
        </div>
    )
}