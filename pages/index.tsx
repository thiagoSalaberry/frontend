import { StyledInput } from "@/ui/textfields";
import { Button } from "@/ui/buttons";
import { Body } from "@/ui/text";
import Card from "@/components/cards";
import SegundaCard from "@/components/segundaCard";
import { LayoutComp } from "@/components/layout"
import styles from "./home.module.css";
export default function HomePage() {
  return (
    <LayoutComp>
      <div className={styles["welcome"]}>
        <h1>TEOXYS SHOP</h1>
        <StyledInput type="text" placeholder="Encontrá tu producto acá..."/>
        <Button>Buscar</Button>
      </div>
      <div className={styles["destacados"]}>
        <h2>PRODUCTOS DESTACADOS</h2>
        <Card title="Termo Stanley" price={15000} imgUrl="termo-stanley.png" desc="" rating={4.5} reviews={1589}/>
        <Card title="Termo Stanley" price={9500} imgUrl="termo-stanley.png" desc="" rating={3.1} reviews={589}/>
      </div>
    </LayoutComp>
  )
}