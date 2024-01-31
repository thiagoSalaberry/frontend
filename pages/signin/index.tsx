import { LayoutComp } from "@/components/layout"
import { Title, Body, Label } from "@/ui/text"
import { Button, BackButton } from "@/ui/buttons"
import { Input, SecondInput } from "@/ui/textfields"
import styles from "./signin.module.css"
export default function HomePage() {
    function handleForm(e:any) {
        e.preventDefault();
    }
    const formContent = true ? (
        <form onSubmit={handleForm} id="email-form" className={styles["form"]}>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">E-Mail</Body>
                <Input type="email" name="email"/>
                {/* <SecondInput label="E-Mail" type="email"></SecondInput> */}
            </div>
            <Button>Continuar</Button>
        </form>
    ) : (
        <form onSubmit={handleForm} id="email-form" className={styles["form"]}>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Código</Body>
                <Input type="number" name="code" talign="center"/>
            </div>
            <Body size="s" color="grey" fontWeight="normal">Te envíamos un código a tu mail</Body>
            <Button>Ingresar</Button>
        </form>
    );
  return (
    <LayoutComp>
        <div className={styles["signin"]}>
            <Title>Ingresar</Title>
            {formContent}
        </div>
    </LayoutComp>
  )
}