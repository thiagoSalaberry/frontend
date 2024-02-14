import { LayoutComp } from "@/components/layout"
import { Title, Body } from "@/ui/text"
import { Button } from "@/ui/buttons"
import { Input } from "@/ui/textfields"
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
                address: {
                    street_name: e.target.street_name.value || user?.userData?.street_name,
                    street_number: e.target.street_number.value || user?.userData?.street_number,
                    department: e.target.department.value || user?.userData?.department,
                    city: e.target.city.value || user?.userData?.city,
                    zip_code: e.target.zip_code.value || user?.userData?.zip_code,
                }
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
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Calle</Body>
                <Input type="text" name="street_name" placeholder={user?.userData?.address?.street_name ? user.userData.address.street_name : "Tu calle"}/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Altura</Body>
                <Input type="text" name="street_number" placeholder={user?.userData?.address?.street_number ? user.userData.address.street_number : "La altura de tu casa"}/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Piso y departamento</Body>
                <Input type="text" name="department" placeholder={user?.userData?.address?.department ? user.userData.address.department : "Tu piso y departamento"}/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Ciudad</Body>
                <Input type="text" name="city" placeholder={user?.userData?.address?.city ? user.userData.address.city : "Tu ciudad"}/>
            </div>
            <div className={styles["input-container"]}>
                <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Código postal</Body>
                <Input type="number" name="zip_code" placeholder={user?.userData?.address?.zip_code ? user.userData.address.zip_code : "Tu código postal"}/>
            </div>
            <Button>Cargar datos</Button>
        </form>
    );
  return (
    <LayoutComp user={user ? user : false}>
        <main className={styles["profile-page"]}>
            <Title>Perfil</Title>
            {formContent}
        </main>
    </LayoutComp>
  )
}