import styles from "./delivery-cards.module.css";
import { Label, Body } from "@/ui/text";
import { IconButtons } from "@/ui/buttons";
import { LikeIcon } from "@/ui/icons/like";
import { showStars } from "@/lib/stars";
import { notify } from "@/lib/notify";
import { addToBookmarks } from "@/lib/api-calls";
import { ToastContainer } from "react-toastify";
import { ShopIcon } from "@/ui/icons/shop";
import { HomeIcon } from "@/ui/icons/home";
import Router from "next/router";
import { Input } from "@/ui/textfields";
import React, { useEffect, useRef, useState } from "react";
interface DeliveryCardProps {
    delivery: "delivery" | "pickup";
    address?: string;
    department?: string;
}
export default function DeliveryCard(props:DeliveryCardProps) {
    const [chosen, setChosen] = useState<DeliveryCardProps["delivery"]>("delivery");
    const [showForm, setShowForm] = useState<boolean>(false);
    const [newAddress, setNewAddress] = useState<string>("");
    const [formData, setFormData] = useState({
        address: "",
        department: "",
        city: "",
        zipcode: ""
    });
    const radioRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        if(props.delivery === "delivery" && radioRef.current) {
            radioRef.current.checked = true;
        }
    }, [props.delivery]);
    const handleEditClick = () => {
        setShowForm(true);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
        console.log("Formulario enviado:", formData);
        // Luego puedes resetear el estado del formulario y cerrarlo
        setFormData({
            address: e.target.address.value,
            department: e.target.department.value,
            city: e.target.city.value,
            zipcode: e.target.zipcode.value
        });
        setNewAddress(formData.address + formData.department);
        setFormData({
            address: "",
            department: "",
            city: "",
            zipcode: ""
        });
        setShowForm(false);
    };
    return (
        <div className={styles[`${props.delivery}-card`]}>
            <input ref={radioRef} type="radio" name="delivery" id={props.delivery} className={styles["radio"]} value={props.delivery} onChange={handleInputChange}/>
            <Body size="m" fontWeight="bold">{props.delivery == "delivery" ? "Enviar a domicilio" : "Retirar en el local"}</Body>
            <Body size="m" color="green">¡Gratis!</Body>
            {props.address && (
                <>
                    <Body className={styles["address"]}>{newAddress ? newAddress : `${props.address} - ${props.department}`}</Body>
                    <div className={styles["divider"]}></div>
                    <Body className={styles["change-delivery"]} color="#1e47a7" onClick={handleEditClick}>Editar o elegir otro domicilio</Body>
                </>
            )}
            {/* {showForm && (
                <form onSubmit={handleSubmit} className={styles["form"]}>
                    <div className={styles["input-container"]}>
                        <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Dirección</Body>
                        <Input type="text" name="address"/>
                    </div>
                    <div className={styles["input-container"]}>
                        <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Localidad</Body>
                        <Input type="text" name="city"/>
                    </div>
                    <div className={styles["input-container"]}>
                        <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Código postal</Body>
                        <Input type="number" name="zip-code"/>
                    </div>
                    <div className={styles["input-container"]}>
                        <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Piso y departamento</Body>
                        <Input type="text" name="department"/>
                    </div>
                    <button type="submit">Guardar</button>
                    <button type="submit" onClick={()=>setShowForm(false)}>Cancelar</button>
                </form>
            )} */}
        </div>
    )
}
/*
<form className={styles["address-form"]}>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Dirección</Body>
                <Input type="text" name="address"/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Localidad</Body>
                <Input type="text" name="city"/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Código postal</Body>
                <Input type="number" name="zip-code"/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Piso y departamento</Body>
                <Input type="text" name="department"/>
            </div>
          </form>
*/