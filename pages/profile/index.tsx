import { LayoutComp } from "@/components/layout"
import { Title, Body, Label } from "@/ui/text"
import { Button, BackButton } from "@/ui/buttons"
import { Input, SecondInput } from "@/ui/textfields"
import { useMe } from "@/lib/hooks"
import styles from "./profile.module.css"
import { updateUserData } from "@/lib/api-calls"
import Router from "next/router"
export default function ProfilePage() {
    const user = useMe();
    async function handleForm(e:any) {
        e.preventDefault();
        await updateUserData({
            dataToUpdate: {
                name: e.target.name.value || user?.userData?.name,
                last_name: e.target.last_name.value || user?.userData?.last_name,
                phone: e.target.phone.value || user?.userData?.phone,
                address: e.target.address.value || user?.userData?.address,
                department: e.target.department.value || user?.userData?.department
            }
        });
        Router.reload();
    };
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
                <Input type="text" name="department" placeholder={user?.userData?.department ? user.userData.department : "Tu piso y departamento"}/>
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