import styles from "./cards.module.css";
import { Label, Body } from "@/ui/text";
import { IconButtons } from "@/ui/buttons";
import { LikeIcon } from "@/ui/icons/like";
import { BookmarkIcon } from "@/ui/icons/bookmark";
import { BookmarkFillIcon } from "@/ui/icons/bookmark-fill";
import { showStars } from "@/lib/stars";
import { notify } from "@/lib/notify";
import { addToBookmarks, removeFromBookmarks } from "@/lib/api-calls";
import { ToastContainer } from "react-toastify";
import Router from "next/router";
import { useState } from "react";
interface CardProps {
    productId:string;
    title:string;
    desc?:string;
    unit_price:number;
    imgUrl:string;
    rating?:number;
    reviews?:number;
    stock?: "true" | "false"
    user:boolean;
    inCart?: boolean | undefined;
    inBookmarks: boolean;
}
export default function Card(props:CardProps) {
    const [added, setAdded] = useState<boolean>(props.inBookmarks);
    async function handleClick() {
        if(added) {
            const remove = await removeFromBookmarks(props.productId);
            if(remove) setAdded(false);
        } else {
            const add = await addToBookmarks(props.productId);
            if(add) setAdded(true);
        }
    }
    const stars = showStars(props.rating!);
    return (
        <div className={styles["card"]}>
            <div className={styles["img-container"]} onClick={()=>Router.push(`/item/${props.productId}`)}>
                <img className={styles["img"]} src={props.imgUrl} alt="product.jpg" />
            </div>
            <div className={styles["info"]}>
                <Body onClick={()=>Router.push(`/item/${props.productId}`)} fontWeight="bold" size="s" className={styles["product__title"]}>{props.title}</Body>
                <Body className={styles["product__price"]} size="m" fontWeight="bold">${props.unit_price.toLocaleString()}</Body>
                <div className={styles["rate"]}>
                    <Body color="grey">{props.rating}</Body>
                    <div className={styles["stars"]}>
                        {stars}
                    </div>
                    <Body color="grey">({props.reviews})</Body>
                </div>
                {props.user ? <button onClick={handleClick} className={styles["icon"]}>{added ? <BookmarkFillIcon size="18"/> : <BookmarkIcon size="18"/>}</button> : null}
            </div>
        </div>
    )
}