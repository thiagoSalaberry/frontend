import { LayoutComp } from "@/components/layout"
import { Title, Subtitle, Body, Label } from "@/ui/text"
import { Button, BackButton } from "@/ui/buttons"
import Card from "@/components/cards"
import BigCard from "@/components/big-card"
import { Input, SecondInput } from "@/ui/textfields"
import styles from "./checkout.module.css";
import { useMe, useProduct } from "@/lib/hooks";
import { useParams } from "next/navigation";
import { SearcherComp } from "@/components/searcher"
import { generateNewOrder } from "@/lib/api-calls"
import { useState } from "react";
import DeliveryCard from "@/components/delivery-card"
type CheckoutPageProps = {
  address:boolean;
}
export default function CheckoutPage() {
  const user = useMe();
  const params = useParams();
  async function handleClick() {
    const productId = String(params.productId);
    const {street_name, street_number, department, city, zip_code} = user.userData.address;
    const shipping_info = {
      street_name,
      street_number,
      zip_code
    };
    const newOrder = await generateNewOrder(productId, shipping_info);
    if(newOrder) {
      console.log("Este sería el link",newOrder)
    }
  };
  return (
    <LayoutComp user={user ? user : false}>
      <div className={styles["checkout-page"]}>
        <Label>Elegí la forma de entrega</Label>
        <DeliveryCard name="option" delivery="delivery" address={user?.userData?.address} department={user?.userData?.department}/>
        <DeliveryCard name="option" delivery="pickup"/>
        <Button onClick={handleClick}>Continuar</Button>
      </div>
    </LayoutComp>
  )
}