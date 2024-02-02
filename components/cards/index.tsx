import styles from "./cards.module.css";
import { Label, Body } from "@/ui/text";
import { IconButtons } from "@/ui/buttons";
import { LikeIcon } from "@/ui/icons/like";
import { showStars } from "@/lib/stars";
interface CardProps {
    title:string;
    desc?:string;
    price:number;
    imgUrl:string;
    rating?:number;
    reviews?:number;
    stock?: "true" | "false"
}
export default function Card(props:CardProps) {
    const stars = showStars(props.rating!);
    return (
        <div className={styles["card"]}>
            <div className={styles["img-container"]}>
                <img className={styles["img"]} src={props.imgUrl} alt="product.jpg" />
            </div>
            <div className={styles["info"]}>
                <Body fontWeight="bold" size="s" className={styles["product__title"]} talign="left">{props.title}</Body>
                <Body className={styles["product__price"]} size="m" fontWeight="bold">${props.price.toLocaleString()}</Body>
                <div className={styles["rate"]}>
                    <Body color="grey">{props.rating}</Body>
                    <div className={styles["stars"]}>
                        {stars}
                    </div>
                    <Body color="grey">({props.reviews})</Body>
                    <IconButtons onClick={()=>console.log("Boton de fav")}><LikeIcon size="14"/></IconButtons>
                </div>
            </div>
        </div>
    )
}