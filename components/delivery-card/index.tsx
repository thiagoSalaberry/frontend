import styles from "./delivery-cards.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Body } from "@/ui/text";
import { useMe } from "@/lib/hooks";
interface DeliveryCardProps {
    delivery: "delivery" | "pickup";
    address?: string;
    department?: string;
    name:string;
}
export default function DeliveryCard(props:DeliveryCardProps) {
    const user = useMe();
    const [open, setOpen] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [initialAddress, setInitialAddress] = useState({
        address: "Tu domicilio",
        department: "1°A",
        city: "Paris"
    });
    const [displayedAddress, setDisplayedAddress] = useState<string>("");
    useEffect(()=>{
        setDisplayedAddress(!user?.userData?.address ? `${initialAddress.address}, ${initialAddress.department} - ${initialAddress.city}` : user?.userData?.address);
    }, []);
    function handleOpenClick() {
        setOpen(true)
        setSubmited(false)
    };
    function handleCloseClick() {
        setOpen(false)
    };
    function handleSubmit(e:any) {
        e.preventDefault
        setDisplayedAddress(`${e.target.address.value}, ${e.target.dpto.value} - ${e.target.city.value}`)
        setSubmited(true);
    };
    return (
        <div className={styles["delivery-card"]}>
            {props.delivery == "delivery" ? (
                <>
                    <input  type="radio" name={props.name} className={styles["radio"]}/>
                    <div className={styles["info"]}>
                        <div className={styles["title"]}>
                            <Body size="m" fontWeight="bold">Envío a domicilio</Body>
                            <span><Body size="m" color="green">¡Gratis!</Body></span>
                        </div>
                        <Body className={styles["address"]}>{displayedAddress}</Body>
                        <div className={styles["divider"]}></div>
                        <button onClick={handleOpenClick} className={styles["button"]}>Editar dirección de envío</button>
                        {(open && !submited) ? <form className={styles["form"]} onSubmit={handleSubmit}>
                            <div className={styles["input-container"]}>
                                <Body size="s">Dirección</Body>
                                <input required type="text" name="address" className={styles["input"]} />
                            </div>
                            <div className={styles["input-container"]}>
                                <Body size="s">Localidad</Body>
                                <input required type="text" name="city" className={styles["input"]} />
                            </div>
                            <div className={styles["input-container"]}>
                                <Body size="s">Departamento</Body>
                                <input required type="text" name="dpto" className={styles["input"]} />
                            </div>
                            <div className={styles["buttons-container"]}>
                                <button className={`${styles["button"]} ${styles["cancel"]}`} onClick={handleCloseClick}>Cancelar</button>
                                <button className={`${styles["button"]} ${styles["submit"]}`} type="submit">Cargar</button>
                            </div>
                        </form> : null}
                    </div>
                </>
            ) : (
                <>
                    <input  type="radio" name={props.name} className={styles["radio"]}/>
                    <div className={styles["info"]}>
                        <div className={styles["title"]}>
                            <Body size="m" fontWeight="bold">Retirar por el local</Body>
                            <span><Body size="m" color="green">¡Gratis!</Body></span>
                        </div>
                    </div>
                </>
            )}
            
        </div>
    )
}