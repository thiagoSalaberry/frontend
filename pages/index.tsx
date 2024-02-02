import { StyledInput } from "@/ui/textfields";
import { Button } from "@/ui/buttons";
import { Body, Title, Subtitle } from "@/ui/text";
import { useMe, useFeaturedProducts } from "@/lib/hooks";
import Card from "@/components/cards";
import SegundaCard from "@/components/segundaCard";
import { LayoutComp } from "@/components/layout"
import styles from "./home.module.css";
import { featuredProducts, searchProduct } from "@/lib/api-calls";
import Link from "next/link";
import Router from "next/router";
async function getFeaturedProducts() {
  const data = await featuredProducts();
  return data;
}
export default function HomePage() {
  const user = useMe();
  const featuredProducts = useFeaturedProducts();
  function handleSubmit(e:any) {
    e.preventDefault();
    const query = e.target.query.value;
    Router.push(`/search?q=${query}&offset=0&limit=10`)
  }
  return (
    <LayoutComp user={user ? user : false}>
      <div className={styles["welcome"]}>
        <Title>TEOXYS SHOP</Title>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          <StyledInput type="text" name="query" placeholder="Encontrá tu producto acá..."/>
          <Button>Buscar</Button>
        </form>
      </div>
      <div className={styles["destacados"]}>
        <Subtitle>PRODUCTOS DESTACADOS</Subtitle>
        <div className={styles["cards-container"]}>
          {featuredProducts?.map(prod => {
            return (
              <Link className={styles["link"]} key={prod.productId} href={`/item/${prod.productId}`}>
                <Card title={prod.title} price={prod.unit_price} imgUrl={prod.images} stock={prod.stock} desc={prod.description} rating={prod.rating} reviews={prod.reviews}/>
              </Link>
            )
          })}
        </div>
      </div>
    </LayoutComp>
  )
}