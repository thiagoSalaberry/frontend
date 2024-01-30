import styles from "./cards.module.css";
import { Label, Body } from "@/ui/text";
import { Button, BackButton } from "@/ui/buttons";
interface CardProps {
    title:string;
    desc:string;
    price:number;
    imgUrl:string;
}
export default function Card(props:CardProps) {
    return (
        <div className={styles["card"]}>
            <div className={styles["img-container"]}>
                <img className={styles["img"]} src={props.imgUrl} alt="product.jpg" />
            </div>
            <div className={styles["info"]}>
                <Label fontWeight="bold" className={styles["product__title"]}>{props.title}</Label>
                <Body className={styles["product__desc"]} size="s">{props.desc}</Body>
                <Body className={styles["product__price"]} size="l" fontWeight="bold">${props.price}</Body>
                <BackButton>Comprar</BackButton>
            </div>
        </div>
    )
}