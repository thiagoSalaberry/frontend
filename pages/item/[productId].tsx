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
export default function HomePage() {
  const user = useMe()
  const params = useParams();
  const product = useProduct(String(params?.productId));
  function handleForm(e:any) {
    e.preventDefault();
  };
  return (
    <LayoutComp user={user ? user : false}>
      <div className={styles["item"]}>
        <SearcherComp type="text" name="query" placeholder="Encontrá tu producto acá..."/>
        <BigCard productId={product?.productId} title={product?.title} imgUrl={product?.images} price={product?.unit_price} stock={product?.stock} rating={product?.rating} reviews={product?.reviews} desc={product?.description}/>
      </div>
    </LayoutComp>
  )
}