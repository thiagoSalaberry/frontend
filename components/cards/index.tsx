import styles from "./cards.module.css";
import { Label, Body } from "@/ui/text";
import { IconButtons } from "@/ui/buttons";
import { StarIcon } from "@/ui/icons/star";
import { StarHalfFillIcon } from "@/ui/icons/star-half-fill";
import { StarFillIcon } from "@/ui/icons/star-fill";
import { LikeIcon } from "@/ui/icons/like";
interface CardProps {
    title:string;
    desc?:string;
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
                <Body fontWeight="bold" size="s" textAlign="l" className={styles["product__title"]}>{props.title}</Body>
                <Body className={styles["product__price"]} size="m" fontWeight="bold">${props.price.toLocaleString()}</Body>
                <div className={styles["rate"]}>
                    <div className={styles["stars"]}>
                        <StarFillIcon size="14" />
                        <StarFillIcon size="14" />
                        <StarFillIcon size="14" />
                        <StarHalfFillIcon size="14" />
                        <StarIcon size="14" />
                    </div>
                    <Body color="grey">(7895)</Body>
                </div>
                <div className={styles["buttons-container"]}>
                    <IconButtons><LikeIcon size="20"/></IconButtons>
                </div>
            </div>
        </div>
    )
}