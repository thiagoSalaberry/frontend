import styles from "./home.module.css";
import { Title, Subtitle, Body } from "@/ui/text";
import { useMe, useFeaturedProducts } from "@/lib/hooks";
import Card from "@/components/cards";
import { LayoutComp } from "@/components/layout";
import { ProductProps } from "@/lib/types";
import { SearcherComp } from "@/components/searcher";
export default function HomePage() {
  const user = useMe();
  const featuredProducts = useFeaturedProducts();
  const bookmarkedProducts = user?.userData?.bookmarks;
  function isBookmarked(productId:string):boolean {
    return bookmarkedProducts?.some((bookmarksProd:ProductProps) => bookmarksProd.productId == productId);
  }
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
            {featuredProducts?.map((prod:ProductProps) => {
              return (
                <Card inBookmarks={isBookmarked(prod.productId)} inCart={false} key={prod.productId} productId={prod.productId} user={user} title={prod.title} unit_price={prod.unit_price} imgUrl={prod.images} rating={prod.rating} reviews={prod.reviews}/>
              )
            })}
          </div>
        </div>
      </main>
    </LayoutComp>
  )
}