import styles from "./cards.module.css";
import { Label, Body } from "@/ui/text";
import { IconButtons } from "@/ui/buttons";
import { LikeIcon } from "@/ui/icons/like";
import { showStars } from "@/lib/stars";
import { notify } from "@/lib/notify";
import { addToBookmarks } from "@/lib/api-calls";
import { ToastContainer } from "react-toastify";
import Router from "next/router";
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
}
export default function Card(props:CardProps) {
    async function handleClick() {
        const added = await addToBookmarks(props.productId);
        if(added) return notify("¡El producto se guardó correctamente!");
    }
    const stars = showStars(props.rating!);
    return (
        <div className={styles["card"]}>
            <div className={styles["img-container"]} onClick={()=>Router.push(`/item/${props.productId}`)}>
                <img className={styles["img"]} src={props.imgUrl} alt="product.jpg" />
            </div>
            <div className={styles["info"]}>
                <Body onClick={()=>Router.push(`/item/${props.productId}`)} fontWeight="bold" size="s" className={styles["product__title"]} talign="left">{props.title}</Body>
                <Body className={styles["product__price"]} size="m" fontWeight="bold">${props.unit_price.toLocaleString()}</Body>
                <div className={styles["rate"]}>
                    <Body color="grey">{props.rating}</Body>
                    <div className={styles["stars"]}>
                        {stars}
                    </div>
                    <Body color="grey">({props.reviews})</Body>
                </div>
                {props.user ? <IconButtons onClick={handleClick} style={{alignSelf: "end"}}><LikeIcon size="14"/></IconButtons> : null}
            </div>
            <ToastContainer/>
        </div>
    )
}