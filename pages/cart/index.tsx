import { LayoutComp } from "@/components/layout"
import { Body, Label } from "@/ui/text"
import { Button } from "@/ui/buttons"
import styles from "./cart.module.css";
import { useMe } from "@/lib/hooks";
import Router from "next/router"
import CartProductCard from "@/components/cart-product-card"
import {ProductProps} from "@/lib/types";
import { containsDuplicate } from "@/lib/repeatedProducts";
import { useEffect, useState } from "react";
export default function CartPage() {
  const user = useMe();
  const userCart:ProductProps[] = user?.userData?.cart;
  const [duplicated, setDuplicated] = useState([]);
  useEffect(()=>{
    if(userCart){
      setDuplicated(containsDuplicate(userCart));
    }
  }, [userCart])
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
            <Body size="m">Productos ({userCart?.length})</Body>
            <Body size="m">${(userCart?.map(prod => prod.unit_price).reduce((acc, cv) => acc + cv, 0))?.toLocaleString()}</Body>
        </div>
        <div className={styles["cart-total-products"]}>
            <Body size="m">Envío</Body>
            <Body size="m" color="green">Gratis</Body>
        </div>
        <div className={styles["cart-total-products"]}>
            <Body size="l" fontWeight="bold">Total</Body>
            <Body size="l" fontWeight="bold">${(userCart?.map(prod => prod.unit_price).reduce((acc, cv) => acc + cv, 0))?.toLocaleString()}</Body>
        </div>
        <Button onClick={()=>{}}>Continuar Compra</Button>
    </div>
  );
  return (
    <LayoutComp user={user ? user : false}>
        <main className={styles["cart-page"]}>
          {duplicated?.length == 0 ? emptyCart : (
            <div className={styles["cart-products-container"]}>
              <Label style={{textAlign: "center"}}>Tu carrito de compras</Label>
              {duplicated?.map(prod => {
                const {productId, productImg, productTitle, productUnitPrice, quantity} = prod;
                return <CartProductCard key={productId} page="cart" productId={productId} imgUrl={productImg} title={productTitle} price={productUnitPrice} quantity={quantity}/>
              })}
            </div>
          )}
        </main>
        {duplicated?.length !== 0 ? total : null}
    </LayoutComp>
  )
}