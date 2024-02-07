import { Title, Subtitle } from "@/ui/text";
import { useMe, useFeaturedProducts } from "@/lib/hooks";
import Card from "@/components/cards";
import { LayoutComp } from "@/components/layout"
import styles from "./home.module.css";
import Link from "next/link";
import { SearcherComp } from "@/components/searcher";
export default function HomePage() {
  const user = useMe();
  const featuredProducts = useFeaturedProducts();
  return (
    <LayoutComp user={user ? user : false}>
      <main className={styles["home-page"]}>
        <div className={styles["welcome"]}>
          <Title>TEOXYS SHOP</Title>
          <SearcherComp type="text" name="query" placeholder="Encontrá tu producto acá..."/>
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
      </main>
    </LayoutComp>
  )
}