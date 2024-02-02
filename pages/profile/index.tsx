import { LayoutComp } from "@/components/layout"
import { Title, Body, Label } from "@/ui/text"
import { Button, BackButton } from "@/ui/buttons"
import { Input, SecondInput } from "@/ui/textfields"
import { useMe } from "@/lib/hooks"
import styles from "./profile.module.css"
export default function HomePage() {
    function handleForm(e:any) {
        e.preventDefault();
    };
    const user = useMe();
    const formContent = (
        <form onSubmit={handleForm} id="email-form" className={styles["form"]}>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Nombre</Body>
                <Input type="text" name="name" placeholder={user?.userData?.name ? user.userData.name : "Tu nombre"}/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Apellido</Body>
                <Input type="text" name="last_name" placeholder={user?.userData?.last_name ? user.userData.last_name : "Tu apellido"}/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Celular</Body>
                <Input type="number" name="phone" placeholder={user?.userData?.phone ? user.userData.phone : "Tu celular"}/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Dirección</Body>
                <Input type="text" name="address" placeholder={user?.userData?.address ? user.userData.address : "Tu dirección"}/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Piso y departamento</Body>
                <Input type="text" name="floor" placeholder={user?.userData?.department ? user.userData.department : "Tu piso y departamento"}/>
            </div>
            <Button>Cargar datos</Button>
        </form>
    );
  return (
    <LayoutComp user={user ? user : false}>
        <div className={styles["profile"]}>
            <Title>Perfil</Title>
            {formContent}
        </div>
    </LayoutComp>
  )
}