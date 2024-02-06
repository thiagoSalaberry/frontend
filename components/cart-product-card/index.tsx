import styles from "./cards.module.css";
import { Label, Body } from "@/ui/text";
import { Button, IconButtons, CartButtons } from "@/ui/buttons";
import { LikeIcon } from "@/ui/icons/like";
import { showStars } from "@/lib/stars";
import { removeFromCart } from "@/lib/api-calls";
import { useSWRConfig } from "swr";
interface CardProps {
    title:string;
    price:number;
    imgUrl:string;
    productId:string;
}
export default function CartProductCard(props:CardProps) {
    const { mutate } = useSWRConfig();
    async function handleDelete(productId:string) {
        await removeFromCart(productId);
        mutate("/me");
    }
    return (
        <div className={styles["card"]}>
            <div className={styles["img-container"]}>
                <img className={styles["img"]} src={props.imgUrl} alt="product.jpg" />
            </div>
            <div className={styles["info"]}>
                <Body size="xs" fontWeight="bold" className={styles["product__title"]} talign="left">{props.title}</Body>
                <div className={styles["buttons-container"]}>
                    <CartButtons onClick={()=>{
                        handleDelete(props.productId);
                    }}>Eliminar</CartButtons>
                    <CartButtons>Guardar</CartButtons>
                </div>
                <Body className={styles["product__price"]} size="m" fontWeight="bold">${props.price?.toLocaleString()}</Body>
            </div>
        </div>
    )
}