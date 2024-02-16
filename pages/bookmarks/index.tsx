import { LayoutComp } from "@/components/layout"
import { Body, Label } from "@/ui/text"
import { Button } from "@/ui/buttons"
import styles from "./favs.module.css";
import { useMe } from "@/lib/hooks";
import Router from "next/router";
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