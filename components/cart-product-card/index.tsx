import styles from "./cards.module.css";
import { Label, Body } from "@/ui/text";
import { Button, IconButtons, CartButtons } from "@/ui/buttons";
import { LikeIcon } from "@/ui/icons/like";
import { showStars } from "@/lib/stars";
import { addToCart, removeFromCart, addToBookmarks, removeFromBookmarks } from "@/lib/api-calls";
import { useSWRConfig } from "swr";
import { ToastContainer } from "react-toastify";
import { notify } from "@/lib/notify";
interface CardProps {
    title:string;
    price:number;
    imgUrl:string;
    productId:string;
    page: "cart" | "bookmarks";
}
export default function CartProductCard(props:CardProps) {
    const { mutate } = useSWRConfig();
    async function handleDelete(productId:string) {
        if(props.page == "cart") {
            await removeFromCart(productId);
            mutate("/me");
        }
        if(props.page == "bookmarks") {
            await removeFromBookmarks(productId);
            mutate("/me");
        }
    }
    async function handleAdd(productId:string) {
        if(props.page == "cart") {
            const added = await addToBookmarks(productId);
            if(added) return notify("¡El producto se guardó correctamente!")
        }
        if(props.page == "bookmarks") {
            const added = await addToCart(productId);
            if(added) return notify("¡El producto se agregó al carrito correctamente!")
        }
    }
    return (
        <div className={styles["card"]}>
            <div className={styles["img-container"]}>
                <img className={styles["img"]} src={props.imgUrl} alt="product.jpg" />
            </div>
            <div className={styles["info"]}>
                <Body size="xs" fontWeight="bold" className={styles["product__title"]} talign="left">{props.title}</Body>
                <div className={styles["buttons-container"]}>
                    <CartButtons onClick={()=>{handleDelete(props.productId)}}>Eliminar</CartButtons>
                    <CartButtons onClick={()=>handleAdd(props.productId)}>{props.page == "cart" ? "Guardar" : "Agregar al carrito"}</CartButtons>
                </div>
                <Body className={styles["product__price"]} size="m" fontWeight="bold">${props.price?.toLocaleString()}</Body>
            </div>
            <ToastContainer/>
        </div>
    )
}