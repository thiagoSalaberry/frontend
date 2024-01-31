import { LayoutComp } from "@/components/layout"
import { Title, Body, Label } from "@/ui/text"
import { Button, BackButton } from "@/ui/buttons"
import { Input, SecondInput } from "@/ui/textfields"
import styles from "./profile.module.css"
export default function HomePage() {
    function handleForm(e:any) {
        e.preventDefault();
    }
    const formContent = (
        <form onSubmit={handleForm} id="email-form" className={styles["form"]}>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Nombre</Body>
                <Input type="text" name="name" placeholder="Tu nombre"/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Apellido</Body>
                <Input type="text" name="last_name" placeholder="Tu apellido"/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Celular</Body>
                <Input type="number" name="phone" placeholder="Tu número de celular"/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Dirección</Body>
                <Input type="text" name="address" placeholder="Tu dirección y altura"/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Piso y departamento</Body>
                <Input type="text" name="floor" placeholder="Tu piso y departamento"/>
            </div>
            <Button>Cargar datos</Button>
        </form>
    );
  return (
    <LayoutComp>
        <div className={styles["profile"]}>
            <Title>Perfil</Title>
            {formContent}
        </div>
    </LayoutComp>
  )
}