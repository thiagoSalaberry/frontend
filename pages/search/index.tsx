import { LayoutComp } from "@/components/layout"
import { Body, Subtitle } from "@/ui/text"
import Card from "@/components/cards"
import { useMe, useSearchProducts } from "@/lib/hooks"
import styles from "./search.module.css";
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { SearcherComp } from "@/components/searcher";
type ProductProps = {
  productId: string;
  title: string;
  description: string;
  unit_price: number;
  stock: "true" | "false";
  category: string;
  images: string;
  rating: number;
  reviews: number;
};
export default function SearchPage() {
  const user = useMe();
  const params = useSearchParams();
  const q = params.get("q");
  const offset = params.get("offset");
  const limit = params.get("limit");
  const foundProducts = useSearchProducts(q ? String(q): "",offset ? String(offset) : "0", limit ? String(limit) : "0");
  const bookmarkedProducts = user?.userData?.bookmarks;
  function isBookmarked(productId:string):boolean {
    return bookmarkedProducts?.some((bookmarksProd:ProductProps) => bookmarksProd.productId == productId)
  }
  const resultsLength = foundProducts?.results.length || 0;
  const results = (q || offset || limit) && foundProducts && resultsLength > 0 ? (
        <Body size="s" color="grey">{resultsLength} resultados de {foundProducts?.pagination.total}</Body>
      ) : (q || offset || limit) && !foundProducts ? (
        <Body size="s" color="grey">Buscando...</Body>
      ) : (q || offset || limit) && foundProducts?.searchedProduct != "Todos los productos" && resultsLength == 0 ? (
        <Body size="s" color="grey">{`El producto ${q} no existe`}</Body>  
      ) : null;
  const nextPage = (q || offset || limit) && resultsLength !== 0 ? (
        <Link className={styles["link"]} href={`/search?q=${q}&offset=${parseInt(String(offset)) + 10}&limit=10`}>
          <Body size="m" className={styles["ver-mas"]}>{"ver más >"}</Body>
        </Link>
      ) : null;
  return (
    <LayoutComp user={user ? user : false}>
      <div className={styles["search-page"]}>
        <Subtitle>BUSCADOR</Subtitle>
      <SearcherComp type="text" name="query" placeholder="Encontrá tu producto acá..."/>
      {results}
        <div className={styles["cards-container"]}>
          {foundProducts?.results?.map(prod => {
            return (
              <Card inBookmarks={isBookmarked(prod.productId)} key={prod.productId} user={user} productId={prod.productId} title={prod.title} unit_price={prod.unit_price} imgUrl={prod.images} stock={prod.stock} desc={prod.description} rating={prod.rating} reviews={prod.reviews}/>
            )
          })}
        </div>
        {nextPage}
      </div>
    </LayoutComp>
  )
}