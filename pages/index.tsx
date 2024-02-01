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
        <Card title="Camisa de manga corta a rayas" price={25000} imgUrl="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1706818346/q2e11tyrf7vxzte7acmr.jpg" desc="Camisa cómoda con diseño a rayas para un estilo casual y fresco." rating={4.3} reviews={153}/>
        <Card title="Camisa estampada de flores" price={21000} imgUrl="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1706818358/vetp9wf7id1qkmumkdez.jpg" desc="Camisa con estampado floral, perfecta para un look primaveral y colorido." rating={4.5} reviews={208}/>
        <Card title="Camisa básica" price={18000} imgUrl="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1706818370/bxrn4gxchqqyeuxhcdqd.jpg" desc="Camisa cómoda con diseño a rayas para un estilo casual y fresco." rating={4} reviews={511}/>
        <Card title="Camisa sin mangas" price={29000} imgUrl="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1706818381/dkvx7mfu67kfpqhrxx3k.jpg" desc="Camisa cómoda con diseño a rayas para un estilo casual y fresco." rating={4.4} reviews={123}/>
        <Card title="Camisa oversize unisex" price={27000} imgUrl="https://res.cloudinary.com/ddoaqw2yz/image/upload/v1706818394/yexzj2afwrcxeo8dcucg.jpg" desc="Camisa cómoda con diseño a rayas para un estilo casual y fresco." rating={4.7} reviews={178}/>
      </div>
    </LayoutComp>
  )
}