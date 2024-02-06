import styles from "./cards.module.css";
import { Label, Body } from "@/ui/text";
import { Button, IconButtons, CartButtons } from "@/ui/buttons";
import { LikeIcon } from "@/ui/icons/like";
import { showStars } from "@/lib/stars";
interface CardProps {
    title:string;
    price:number;
    imgUrl:string;
}
export default function CartProductCard(props:CardProps) {
    return (
        <div className={styles["card"]}>
            <div className={styles["img-container"]}>
                <img className={styles["img"]} src={props.imgUrl} alt="product.jpg" />
            </div>
            <div className={styles["info"]}>
                <Body fontWeight="bold" size="s" className={styles["product__title"]} talign="left">{props.title}</Body>
                <div className={styles["buttons-container"]}>
                    <CartButtons>Eliminar</CartButtons>
                    <CartButtons>Guardar</CartButtons>
                </div>
                <Body className={styles["product__price"]} size="l" fontWeight="bold">${props.price?.toLocaleString()}</Body>
            </div>
        </div>
    )
}