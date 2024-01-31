import styles from "./big-card.module.css";
import { Label, Body, Subtitle } from "@/ui/text";
import { IconButtons } from "@/ui/buttons";
import { LikeIcon } from "@/ui/icons/like";
import { showStars } from "@/lib/stars";
import { Button, BackButton } from "@/ui/buttons";
interface CardProps {
    title:string;
    desc?:string;
    price:number;
    imgUrl:string;
    rating?:number;
    reviews?:number;
}
export default function BigCard(props:CardProps) {
    const stars = showStars(props.rating!);
    return (
        <div className={styles["card"]}>
            <Subtitle className={styles["product__title"]}>{props.title}</Subtitle>
            <div className={styles["img-container"]}>
                <img className={styles["img"]} src={props.imgUrl} alt="product.jpg" />
            </div>
            <Body className={styles["product__price"]} size="l" fontWeight="bold">${props.price.toLocaleString()}</Body>
            <Body className={styles["product__stock"]} size="s" fontWeight="normal" color="grey">Stock disponible: 7</Body>
            <div className={styles["rate"]}>
                <div className={styles["stars"]}>
                    {stars}
                </div>
                <Body color="grey">({props.reviews})</Body>
            </div>
            <div className={styles["buttons-container"]}>
                <Button >Comprar</Button>
                <BackButton>Agregar al carrito</BackButton>
            </div>
            <Body size="s">{props.desc}</Body>
        </div>
    )
}