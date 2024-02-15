import { LayoutComp } from "@/components/layout"
import { Body, Label } from "@/ui/text"
import { Button } from "@/ui/buttons"
import styles from "./favs.module.css";
import { useMe } from "@/lib/hooks";
import Router from "next/router";
import { LikeIcon } from "@/ui/icons/like";
import CartProductCard from "@/components/cart-product-card"
import {ProductProps} from "@/lib/types";
export default function CartPage() {
  const user = useMe();
  const userBookmarks:ProductProps[] = user?.userData?.bookmarks;
  const emptyCart = (
    <div className={styles["empty-cart"]}>
        <img className={styles["img"]} src="marcador.png" alt="shopping-bag.png" />
        <Body talign="center" size="m">¡Guardá productos acá para comprarlos más adelante!</Body>
        <Button onClick={()=>Router.push("/search?q=&offset=0&limit=10")}>Descubrir productos</Button>
    </div>
  )
  const total = (
    <div className={styles["cart-total"]}>
        <div className={styles["cart-total-products"]}>
            <Body size="m">Productos ({userBookmarks?.length})</Body>
            <Body size="m">${(userBookmarks?.map(prod => prod.unit_price).reduce((acc, cv) => acc + cv, 0))?.toLocaleString()}</Body>
        </div>
        <div className={styles["cart-total-products"]}>
            <Body size="m">Envío</Body>
            <Body size="m" color="green">Gratis</Body>
        </div>
        <div className={styles["cart-total-products"]}>
            <Body size="l" fontWeight="bold">Total</Body>
            <Body size="l" fontWeight="bold">${(userBookmarks?.map(prod => prod.unit_price).reduce((acc, cv) => acc + cv, 0))?.toLocaleString()}</Body>
        </div>
        <Button onClick={()=>{}}>Continuar Compra</Button>
    </div>
  );
  return (
    <LayoutComp user={user ? user : false}>
        <main className={styles["cart-page"]}>
          {userBookmarks?.length == 0 ? emptyCart : (
            <div className={styles["cart-products-container"]}>
              <Label style={{textAlign: "center"}}>Productos guardados</Label>
              {userBookmarks?.map(prod => {
                return <CartProductCard  key={prod.productId} page="bookmarks" productId={prod.productId} imgUrl={prod.images} title={prod.title} price={prod.unit_price}/>
              })}
            </div>
          )}
        </main>
    </LayoutComp>
  )
}