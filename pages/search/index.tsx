import { LayoutComp } from "@/components/layout"
import { Body, Subtitle } from "@/ui/text"
import Card from "@/components/cards"
import { useMe, useSearchProducts } from "@/lib/hooks"
import styles from "./search.module.css";
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { SearcherComp } from "@/components/searcher";
export default function HomePage() {
  const user = useMe();
  const params = useSearchParams();
  const q = params.get("q");
  const offset = params.get("offset");
  const limit = params.get("limit");
  const foundProducts = useSearchProducts(q ? String(q): "",offset ? String(offset) : "0", limit ? String(limit) : "0");
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
          <Body size="m">{"ver más >"}</Body>
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
              <Link className={styles["link"]} key={prod.productId} href={`/item/${prod.productId}`}>
                <Card title={prod.title} price={prod.unit_price} imgUrl={prod.images} stock={prod.stock} desc={prod.description} rating={prod.rating} reviews={prod.reviews}/>
              </Link>
            )
          })}
        </div>
        {nextPage}
      </div>
    </LayoutComp>
  )
}