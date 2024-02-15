import { LayoutComp } from "@/components/layout"
import { Body, Label } from "@/ui/text"
import { Button } from "@/ui/buttons"
import styles from "./checkout.module.css";
import { useMe, useOrder } from "@/lib/hooks";
import { useParams } from "next/navigation";
import { generateNewOrder } from "@/lib/api-calls"
import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import { CheckIcon } from "@/ui/icons/check"
import { ClipboardCheckIcon } from "@/ui/icons/clipboard-check"
import { ClipboardIcon } from "@/ui/icons/clipboard"
import Router from "next/router";
import DeliveryCard from "@/components/delivery-card"
export default function CheckoutPage() {
  const user = useMe();
  const params = useParams();
  const [displayContent, setDisplayContent] = useState<"shipping" | "testData">("shipping");
  const [paid, setPaid] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [copied, setCopied] = useState<{btnId:string, copied:boolean}>({btnId:"0", copied:false});
  const order = useOrder(orderId);
  const paymentStatus = order?.order?.data?.status;
  useEffect(()=>{
    if(paymentStatus === "paid"){
      setPaid(true);
    }
  }, [paymentStatus]);
  async function handleClick() {
    const productId = String(params.productId);
    const shipping_info = {
      street_name: user?.userData?.address?.street_name,
      street_number: user?.userData?.address?.street_number,
      zip_code: user?.userData?.address?.zip_code
    };
    const newOrder = await generateNewOrder(productId, shipping_info);
    if(newOrder) {
      setLink(newOrder.link);
      setOrderId(newOrder.orderId);
      setDisplayContent("testData");
    }
  };
  const testData = {
    nickname: "TESTUSER1637390845",
    password: "LPfXP6gsyH",
    cardNumber: "4509 9535 6623 3704",
    ownerName: "apro",
    expiryDate: "11/25",
    cvvCode: "123",
    dni: "12345678"
  };
  function handleCopy(option:string, button:string) {
    copy(option);
    setCopied({btnId:button, copied:true});
    setTimeout(() => setCopied({btnId:"0", copied:false}), 1000);
  }
  return (
    <LayoutComp user={user ? user : false}>
      <div className={styles["checkout-page"]}>
        {displayContent == "shipping" ? (
          <>
            <Label>Elegí la forma de entrega</Label>
            <DeliveryCard name="option" delivery="delivery" address={user?.userData?.address} department={user?.userData?.department}/>
            <DeliveryCard name="option" delivery="pickup"/>
            <Button onClick={handleClick}>Continuar</Button>
          </>
        ) :  displayContent == "testData" && !paid ? (
          <div className={styles["test-data-card"]}>
            <Label>Utilizá los siguiente datos para realizar el pago</Label>
            <Body>Son de prueba, así que ningún dinero real será utilizado</Body>
            <div className={styles["test-data"]}>
                <Body className={styles["row-name"]}>Nombre de usuario</Body><Body className={styles["row-value"]}>{testData.nickname}<span><button id="1" className={styles["clip-btn"]} onClick={()=>handleCopy(testData.nickname, "1")}>{copied.copied && copied.btnId == "1" ? <ClipboardCheckIcon size="12"/> : <ClipboardIcon size="12"/>}</button></span></Body>
                <Body className={styles["row-name"]}>Contraseña</Body><Body className={styles["row-value"]}>{testData.password}<span><button id="2" className={styles["clip-btn"]} onClick={()=>handleCopy(testData.password, "2")}>{copied.copied && copied.btnId == "2" ? <ClipboardCheckIcon size="12"/> : <ClipboardIcon size="12"/>}</button></span></Body>
                <Body className={styles["row-name"]}>Tarjeta de crédito</Body><Body className={styles["row-value"]}>{testData.cardNumber}<span><button id="3" className={styles["clip-btn"]} onClick={()=>handleCopy(testData.cardNumber, "3")}>{copied.copied && copied.btnId == "3" ? <ClipboardCheckIcon size="12"/> : <ClipboardIcon size="12"/>}</button></span></Body>
                <Body className={styles["row-name"]}>Nombre del titular</Body><Body className={styles["row-value"]}>{testData.ownerName}<span><button id="4" className={styles["clip-btn"]} onClick={()=>handleCopy(testData.ownerName, "4")}>{copied.copied && copied.btnId == "4" ? <ClipboardCheckIcon size="12"/> : <ClipboardIcon size="12"/>}</button></span></Body>
                <Body className={styles["row-name"]}>Fecha de caducidad</Body><Body className={styles["row-value"]}>{testData.expiryDate}<span><button id="5" className={styles["clip-btn"]} onClick={()=>handleCopy(testData.expiryDate, "5")}>{copied.copied && copied.btnId == "5" ? <ClipboardCheckIcon size="12"/> : <ClipboardIcon size="12"/>}</button></span></Body>
                <Body className={styles["row-name"]}>Código de seguridad</Body><Body className={styles["row-value"]}>{testData.cvvCode}<span><button id="6" className={styles["clip-btn"]} onClick={()=>handleCopy(testData.cvvCode, "6")}>{copied.copied && copied.btnId == "6" ? <ClipboardCheckIcon size="12"/> : <ClipboardIcon size="12"/>}</button></span></Body>
                <Body className={styles["row-name"]}>DNI</Body><Body className={styles["row-value"]}>{testData.dni}<span><button id="7" className={styles["clip-btn"]} onClick={()=>handleCopy(testData.dni, "7")}>{copied.copied && copied.btnId == "7" ? <ClipboardCheckIcon size="12"/> : <ClipboardIcon size="12"/>}</button></span></Body>
            </div>
            <Body>Abrí el siguiente link en una nueva ventana de incógnito</Body>
            <div className={styles["link-card"]}>
              <Body className={styles["payment-link"]}>Link de pago<span><button id="8" className={styles["clip-btn"]} onClick={()=>handleCopy(link, "8")}>{copied.copied && copied.btnId == "8" ? <ClipboardCheckIcon size="12"/> : <ClipboardIcon size="12"/>}</button></span></Body>
              <div className={styles["link-container"]}>
                <Body color="#1e47a7" className={styles["link"]}>{link}</Body>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles["success-card"]}>
            <CheckIcon size="90" className={styles["success-icon"]}/>
            <Body color="#5cc95c" size="l" className={styles["success-msg"]}>¡El pago se realizó correctamente!</Body>
            <Button onClick={()=>Router.push("/")}>Volver al inicio</Button>
          </div>
        )}
      </div>
    </LayoutComp>
  )
}