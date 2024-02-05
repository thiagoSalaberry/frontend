import { LayoutComp } from "@/components/layout"
import { Title, Subtitle, Body, Label } from "@/ui/text"
import { Button, BackButton } from "@/ui/buttons"
import Card from "@/components/cards"
import BigCard from "@/components/big-card"
import { Input, SecondInput } from "@/ui/textfields"
import styles from "./item.module.css";
import { useMe, useProduct } from "@/lib/hooks";
import { useParams } from "next/navigation";
import { SearcherComp } from "@/components/searcher"
export default function CheckoutPage() {
  const user = useMe()
  const params = useParams();
  function handleForm(e:any) {
    e.preventDefault();
  };
  return (
    <LayoutComp user={user ? user : false}>
      {user?.userData?.address ? <Body>Enviar a {user?.userData?.address} {user?.userData?.department}</Body> : ""}
      <Body>Enviar a otra dirección</Body>
      <Body>Retirar en el local</Body>
      <Button>Continuar</Button>
    </LayoutComp>
  )
}