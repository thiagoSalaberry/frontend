import styles from "./big-card.module.css";
import { Label, Body, Subtitle } from "@/ui/text";
import { IconButtons } from "@/ui/buttons";
import { LikeIcon } from "@/ui/icons/like";
import { showStars } from "@/lib/stars";
import { Button, BackButton } from "@/ui/buttons";
import { addToCart } from "@/lib/api-calls";
import Router from "next/router";
import { ToastContainer } from "react-toastify";
import { notify } from "@/lib/notify";
interface CardProps {
    user:boolean
    title:string;
    desc?:string;
    price:number;
    imgUrl:string;
    rating?:number;
    reviews?:number;
    stock?: "true" | "false";
    productId:string;
}
export default function BigCard(props:CardProps) {
    async function handleClick(action:"buy" | "addToCart",propductId:string) {
        if(!props.user) {
            Router.push("/signin")
        } else if(props.user && action == "addToCart") {
            const added = await addToCart(propductId);
            if(added) return notify("¡El producto se agregó al carrito correctamente!");
        } else if(props.user && action ==  "buy"){
            console.log("Comprar")
        }
    }
    const stars = showStars(props.rating!);
    return (
        <div className={styles["card"]}>
            <Subtitle className={styles["product__title"]}>{props.title}</Subtitle>
            <div className={styles["img-container"]}>
                <img className={styles["img"]} src={props.imgUrl} alt="product.jpg" />
            </div>
            <Body className={styles["product__price"]} size="l" fontWeight="bold">${props?.price?.toLocaleString()}</Body>
            <Body className={styles["product__stock"]} size="s" fontWeight="normal" color="grey">{props.stock == "true" ? "Stock disponible" : "No hay stock"}</Body>
            <div className={styles["rate"]}>
                <div className={styles["stars"]}>
                    {stars}
                </div>
                <Body color="grey">({props.reviews})</Body>
            </div>
            <div className={styles["buttons-container"]}>
                <Button onClick={()=>handleClick("buy", props.productId)}>Comprar</Button>
                <BackButton onClick={()=>handleClick("addToCart", props.productId)}>Agregar al carrito</BackButton>
            </div>
            <Body size="s">{props.desc}</Body>
            <ToastContainer/>
        </div>
    )
}