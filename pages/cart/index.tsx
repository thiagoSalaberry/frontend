import { LayoutComp } from "@/components/layout"
import { Title, Subtitle, Body, Label } from "@/ui/text"
import { Button, BackButton } from "@/ui/buttons"
import Card from "@/components/cards"
import BigCard from "@/components/big-card"
import { Input, SecondInput } from "@/ui/textfields"
import styles from "./cart.module.css";
import { useMe, useProduct } from "@/lib/hooks";
import { useParams } from "next/navigation";
import Router from "next/router"
import CartProductCard from "@/components/cart-product-card"
import { useState } from "react"
export default function CartPage() {
  const [switcher, setSwitcher] = useState(false);
  const user = useMe();
  const product1 =  useProduct("501");
  const product2 =  useProduct("301");
  const product3 =  useProduct("403");
  const cartProducts = [1,1,1];
  function handleForm(e:any) {
    e.preventDefault();
  };
  console.log({switcher})
  const emptyCart = (
    <div className={styles["empty-cart"]}>
        <img className={styles["img"]} src="shopping-bags2.png" alt="shopping-bag.png" />
        <Body size="m">!Empezá un carrito de compras!</Body>
        <Button onClick={()=>Router.push("/search?q=&offset=0&limit=10")}>Descubrir productos</Button>
    </div>
  )
  const total = (
    <div className={styles["cart-total"]}>
        <div className={styles["cart-total-products"]}>
            <Body size="m">Productos ({cartProducts.length})</Body>
            <Body size="m">${(product1?.unit_price + product2?.unit_price + product3?.unit_price).toLocaleString()}</Body>
        </div>
        <div className={styles["cart-total-products"]}>
            <Body size="m">Envío</Body>
            <Body size="m" color="green">Gratis</Body>
        </div>
        <div className={styles["cart-total-products"]}>
            <Body size="l" fontWeight="bold">Total</Body>
            <Body size="l" fontWeight="bold">${(product1?.unit_price + product2?.unit_price + product3?.unit_price).toLocaleString()}</Body>
        </div>
        <Button onClick={()=>{}}>Continuar Compra</Button>
    </div>
  );
  return (
    <LayoutComp user={user ? user : false}>
        <button onClick={()=>{
          setSwitcher(!switcher)
        }}>Vacio</button>
        <div className={styles["cart-page"]}>
            {/*cartProducts.length == 0*/ !switcher ? emptyCart : (
                <div className={styles["cart-products-container"]}>
                    <CartProductCard imgUrl={product1?.images} price={product1?.unit_price} title={product1?.title}/>
                    <CartProductCard imgUrl={product2?.images} price={product2?.unit_price} title={product2?.title}/>
                    <CartProductCard imgUrl={product3?.images} price={product3?.unit_price} title={product3?.title}/>
                </div>
            )}
        </div>
        {switcher ? total : null}
    </LayoutComp>
  )
}