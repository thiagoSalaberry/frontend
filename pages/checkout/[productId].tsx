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
import { useState } from "react";
import DeliveryCard from "@/components/delivery-card"
type CheckoutPageProps = {
  address:boolean;
}
export default function CheckoutPage() {
  const user = useMe();
  const [address, setAddress] = useState<boolean>(user?.userData?.address);
  const params = useParams();
  function handleForm(e:any) {
    e.preventDefault();
  };
  const delivery = (
    <div className={styles["delivery-card"]}>
        <Body className={styles["delivery"]} size="m">Enviar a domicilio</Body>
        <Body className={styles["delivery-price"]} size="m">¡Gratis!</Body>
        {!address ? (
          <form className={styles["address-form"]}>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Dirección</Body>
                <Input type="text" name="address"/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Localidad</Body>
                <Input type="text" name="city"/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Código postal</Body>
                <Input type="number" name="zip-code"/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Piso y departamento</Body>
                <Input type="text" name="department"/>
            </div>
          </form>
        ) : <Body>{user.userData.address} - {user.userData.department}</Body>}
        <Body className={styles["edit-delivery"]}>Editar o elegir otro domicilio</Body>
    </div>
  )
  return (
    <LayoutComp user={user ? user : false}>
      <div className={styles["checkout-page"]}>
        <Label>Elegí la forma de entrega</Label>
        {/* {delivery} */}
        <DeliveryCard delivery="delivery" address={user?.userData?.address} department={user?.userData?.department}></DeliveryCard>
        <DeliveryCard delivery="pickup"></DeliveryCard>
      </div>
    </LayoutComp>
  )
}