import { LayoutComp } from "@/components/layout"
import { Title, Subtitle, Body, Label } from "@/ui/text"
import { Button, BackButton } from "@/ui/buttons"
import Card from "@/components/cards"
import BigCard from "@/components/big-card"
import { Input, SecondInput } from "@/ui/textfields"
import styles from "./item.module.css";
import { useMe, useProduct } from "@/lib/hooks";
import { useParams } from "next/navigation"
export default function HomePage() {
  const user = useMe()
  const params = useParams();
  const product = useProduct(String(params?.productId));
  console.log(product)
  function handleForm(e:any) {
    e.preventDefault();
  };
  return (
    <LayoutComp user={user ? user : false}>
      <div className={styles["item"]}>
        <form onSubmit={handleForm} id="email-form" className={styles["form"]}>
          <div className={styles["input-container"]}>
              <Input type="text" name="q" placeholder="Encontrá tu producto ideal..."/>
          </div>
          <Button>Buscar</Button>
        </form>
        <BigCard title={product?.title} imgUrl={product?.images} price={product?.unit_price} stock={product?.stock} rating={product?.rating} reviews={product?.reviews} desc={product?.description}/>
      </div>
    </LayoutComp>
  )
}