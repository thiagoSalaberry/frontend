import { StyledInput } from "@/ui/textfields";
import { Button } from "@/ui/buttons";
import { Body, Title, Subtitle } from "@/ui/text";
import { useMe, useFeaturedProducts } from "@/lib/hooks";
import Card from "@/components/cards";
import SegundaCard from "@/components/segundaCard";
import { LayoutComp } from "@/components/layout"
import styles from "./home.module.css";
import { featuredProducts } from "@/lib/sendCode";
import Link from "next/link";
async function getFeaturedProducts() {
  const data = await featuredProducts();
  return data;
}
export default function HomePage() {
  const user = useMe();
  const featuredProducts = useFeaturedProducts();
  return (
    <LayoutComp>
      <div className={styles["welcome"]}>
        <Title>TEOXYS SHOP</Title>
        <StyledInput type="text" placeholder="Encontrá tu producto acá..."/>
        <Button>Buscar</Button>
      </div>
      <div className={styles["destacados"]}>
        <Subtitle>PRODUCTOS DESTACADOS</Subtitle>
        {featuredProducts?.map(prod => {
          return (
            <Link className={styles["link"]} key={prod.productId} href={`/item/${prod.productId}`}>
              <Card title={prod.title} price={prod.unit_price} imgUrl={prod.images} stock={prod.stock} desc={prod.description} rating={prod.rating} reviews={prod.reviews}/>
            </Link>
          )
        })}
      </div>
    </LayoutComp>
  )
}