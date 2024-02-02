import styles from "./cards.module.css";
import { Label, Body } from "@/ui/text";
import { Button, BackButton } from "@/ui/buttons";
interface CardProps {
    title:string;
    desc:string;
    price:number;
    imgUrl:string;
}
export default function SegundaCard(props:CardProps) {
    return (
        <div className={styles["card"]}>
            <div className={styles["img-container"]}>
                <img className={styles["img"]} src={props.imgUrl} alt="product.jpg" />
            </div>
            <div className={styles["info"]}>
                <Body className={styles["product__title"]} size="s" fontWeight="bold">{props.title}</Body>
                <Body className={styles["product__price"]} size="s" fontWeight="bold">${props.price}</Body>
            </div>
        </div>
    )
}