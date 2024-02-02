import { LayoutComp } from "@/components/layout"
import { Title, Body, Label } from "@/ui/text"
import { Button, BackButton } from "@/ui/buttons"
import Card from "@/components/cards"
import { Input, SecondInput } from "@/ui/textfields"
import { useMe, useSearchProducts } from "@/lib/hooks"
import styles from "./search.module.css";
import Link from "next/link"
import { useSearchParams } from "next/navigation"
export default function HomePage() {
  const user = useMe();
  const params = useSearchParams();
  const q = params.get("q");
  const foundProducts = useSearchProducts(String(q));
  console.log(foundProducts)
  function handleForm(e:any) {
    e.preventDefault();
  };
  return (
    <LayoutComp user={user ? user : false}>
      <div className={styles["search"]}>
        <form onSubmit={handleForm} id="email-form" className={styles["form"]}>
          <div className={styles["input-container"]}>
              <Input type="text" name="q" placeholder="Encontrá tu producto ideal..."/>
          </div>
          <Button>Buscar</Button>
        </form>
        <Body size="s" color="grey">5 resultados de 1000</Body>
        <div className={styles["cards-container"]}>
          {foundProducts?.map(prod => {
            return (
              <Link className={styles["link"]} key={prod.productId} href={`/item/${prod.productId}`}>
                <Card title={prod.title} price={prod.unit_price} imgUrl={prod.images} stock={prod.stock} desc={prod.description} rating={prod.rating} reviews={prod.reviews}/>
              </Link>
            )
          })}
        </div>
        <Body size="m" color="grey">ver más</Body>
      </div>
    </LayoutComp>
  )
}