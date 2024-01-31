import { LayoutComp } from "@/components/layout"
import { Title, Body, Label } from "@/ui/text"
import { Button, BackButton } from "@/ui/buttons"
import Card from "@/components/cards"
import { Input, SecondInput } from "@/ui/textfields"
import styles from "./search.module.css"
export default function HomePage() {
  function handleForm(e:any) {
    e.preventDefault();
  };
  return (
    <LayoutComp>
      <div className={styles["search"]}>
        <form onSubmit={handleForm} id="email-form" className={styles["form"]}>
          <div className={styles["input-container"]}>
              <Input type="text" name="q" placeholder="Encontrá tu producto ideal..."/>
          </div>
          <Button>Buscar</Button>
        </form>
        <Body size="s" color="grey">5 resultados de 1000</Body>
        <div className={styles["results"]}>
          <Card title="Termo Stanley" price={15000} imgUrl="termo-stanley.png" desc="" rating={4.5} reviews={1589}/>
          <Card title="Zapatillas de running Nike" price={130000} imgUrl="shoes.png" desc="" rating={3.9} reviews={589}/>
          <Card title="Perfume para las wachas" price={68000} imgUrl="test-product-1.jpg" desc="" rating={4.3} reviews={156}/>
          <Card title="Red label de Jhonny Walker" price={125000} imgUrl="test-product-2.jpg" desc="" rating={4.7} reviews={1023}/>
          <Card title="Perfume medio pelo" price={25000} imgUrl="test-product-3.jpg" desc="" rating={2.1} reviews={657}/>
        </div>
        <Body size="m" color="grey">ver más</Body>
      </div>
    </LayoutComp>
  )
}