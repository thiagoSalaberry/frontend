import styles from "./big-card.module.css";
import { Label, Body, Subtitle } from "@/ui/text";
import { IconButtons } from "@/ui/buttons";
import { LikeIcon } from "@/ui/icons/like";
import { showStars } from "@/lib/stars";
import { Button, BackButton } from "@/ui/buttons";
import { addToCart } from "@/lib/api-calls";
import { useEffect, useState } from "react";
import Router from "next/router";
import { addToBookmarks, removeFromBookmarks } from "@/lib/api-calls";
import { ToastContainer } from "react-toastify";
import { BookmarkFillIcon } from "@/ui/icons/bookmark-fill";
import { notify } from "@/lib/notify";
import { BookmarkIcon } from "@/ui/icons/bookmark";
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
    inCart?: boolean | undefined;
    inBookmarks: boolean;
}
export default function BigCard(props:CardProps) {
    console.log("Esto le llega a la big card: ", props.inBookmarks)
    const [added, setAdded] = useState<boolean>(props.inBookmarks);
    useEffect(()=>{
        setAdded(props.inBookmarks)
    },[props.inBookmarks]);
    async function handleBookmarkClick() {
        if(added) {
            const remove = await removeFromBookmarks(props.productId);
            if(remove) setAdded(false);
        } else {
            const add = await addToBookmarks(props.productId);
            if(add) setAdded(true);
        }
    }
    async function handleClick(action:"buy" | "addToCart",propductId:string) {
        if(!props.user) {
            Router.push("/signin")
        } else if(props.user && action == "addToCart") {
            const added = await addToCart(propductId);
            if(added) return notify("success", "¡El producto se agregó al carrito correctamente!");
        } else if(props.user && action ==  "buy"){
            Router.push(`/checkout/${propductId}`)
        }
    }
    const stars = showStars(props.rating ? props.rating : 0);
    return (
        <div className={styles["card"]}>
            <Subtitle className={styles["product__title"]}>{props.title}</Subtitle>
            <div className={styles["img-container"]}>
                <img className={styles["img"]} src={props.imgUrl} alt="product.jpg" />
            </div>
            <div className={styles["product__price"]}><Body size="l" fontWeight="bold">${props?.price?.toLocaleString()}</Body> <span>{props.user ? <button onClick={handleBookmarkClick} className={styles["icon"]}>{added ? <BookmarkFillIcon size="24"/> : <BookmarkIcon size="24"/>}</button> : null}</span></div>
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