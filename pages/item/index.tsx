import { LayoutComp } from "@/components/layout"
import { Title, Subtitle, Body, Label } from "@/ui/text"
import { Button, BackButton } from "@/ui/buttons"
import Card from "@/components/cards"
import BigCard from "@/components/big-card"
import { Input, SecondInput } from "@/ui/textfields"
import styles from "./item.module.css"
export default function HomePage() {
  function handleForm(e:any) {
    e.preventDefault();
  };
  return (
    <LayoutComp>
      <div className={styles["item"]}>
        <form onSubmit={handleForm} id="email-form" className={styles["form"]}>
          <div className={styles["input-container"]}>
              <Input type="text" name="q" placeholder="Encontrá tu producto ideal..."/>
          </div>
          <Button>Buscar</Button>
        </form>
        <BigCard title="Termo Stanley de 1lt" imgUrl="termo-stanley.png" price={15000} rating={3.6} reviews={1589} desc="Con este termo sabes todo el tiempo que te va a durar el agua vos que tomas mate hasta para ir al super pedazo de fantasma"/>
      </div>
    </LayoutComp>
  )
}