import { LayoutComp } from "@/components/layout"
import { Title, Body, Label } from "@/ui/text"
import Card from "@/components/cards"
import { useMe, useSearchProducts } from "@/lib/hooks"
import styles from "./search.module.css";
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { SearcherComp } from "@/components/searcher";
import Router from "next/router";
export default function HomePage() {
  const user = useMe();
  const params = useSearchParams();
  const q = params.get("q");
  const offset = params.get("offset");
  const limit = params.get("limit");
  const foundProducts = useSearchProducts(String(q),String(offset),String(limit));
  return (
    <LayoutComp user={user ? user : false}>
      <div className={styles["search"]}>
      <SearcherComp type="text" name="query" placeholder="Encontrá tu producto acá..."/>
        <Body size="s" color="grey">{foundProducts ? `${foundProducts?.results.length} resultados de ${foundProducts?.pagination.total}` : "Buscando..."}</Body>
        <div className={styles["cards-container"]}>
          {foundProducts?.results.map(prod => {
            return (
              <Link className={styles["link"]} key={prod.productId} href={`/item/${prod.productId}`}>
                <Card title={prod.title} price={prod.unit_price} imgUrl={prod.images} stock={prod.stock} desc={prod.description} rating={prod.rating} reviews={prod.reviews}/>
              </Link>
            )
          })}
        </div>
        <Link className={styles["link"]} href={`/search?q=${q}&offset=${parseInt(String(offset)) + 10}&limit=10`}>
          <Body size="m">{"ver más >"}</Body>
        </Link>
      </div>
    </LayoutComp>
  )
}