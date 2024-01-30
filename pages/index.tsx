import { StyledInput } from "@/ui/textfields";
import { Button } from "@/ui/buttons";
import { Body } from "@/ui/text";
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
        <div className={styles["card"]}>
          <div className={styles["img-container"]}>
            <img className={styles["img"]} src="termo-stanley.png" alt="" />
          </div>
          <div className={styles["info"]}>
            <Body size="m" color="white">Termo Stanley</Body>
            <Body size="m" color="white">$15.000</Body>
          </div>
        </div>
        <div className={styles["card"]}>
          <div className={styles["img-container"]}>
            <img className={styles["img"]} src="termo-stanley.png" alt="" />
          </div>
          <div className={styles["info"]}>
            <Body size="m" color="white">Termo Stanley</Body>
            <Body size="m" color="white">$15.000</Body>
          </div>
        </div>
      </div>
    </LayoutComp>
  )
}