import { Button, BackButton } from "@/ui/buttons";
import { Title, Subtitle, Label, Body } from "@/ui/text";
import { StyledInput } from "@/ui/textfields";
import { SearchIcon } from "@/ui/icons/search";
import { PersonIcon } from "@/ui/icons/person";
import Card from "@/components/cards";
import { LayoutComp } from "@/components/layout";
import { CatalogComp } from "@/components/catalogo";
import styles from "./ui.module.css"
import { ToastifyComp } from "@/components/toast";
export default function UI() {
    return (
        <LayoutComp user={false}>
            <section className={styles["ui-page"]}>
                {/* <div className={styles["display"]}>
                    <Label fontWeight="normal">Botones</Label>
                    <div className={styles["container"]}>
                        <Button>Botón</Button>
                        <BackButton>Botón</BackButton>
                        <BackButton><SearchIcon size="30px"/></BackButton>
                    </div>
                </div>
                <div className={styles["display"]}>
                    <Label fontWeight="normal">Textos</Label>
                    <div className={styles["container"]}>
                        <Title>Título</Title>
                        <Subtitle>Título</Subtitle>
                        <Label>Label</Label>
                        <Label fontWeight="bold">Label</Label>
                        <Body fontWeight="normal">Este es el body</Body>
                        <Body fontWeight="bold" size="l">Este es el body</Body>
                    </div>
                </div>
                <div className={styles["display"]}>
                    <Label fontWeight="normal">Inputs</Label>
                    <div className={styles["container"]}>
                        <StyledInput type="text" placeholder={`Buscá tu producto acá...`}/>
                    </div>
                </div>
                <div className={styles["display"]}>
                    <Label fontWeight="normal">Íconos</Label>
                    <div className={styles["container"]}>
                        <SearchIcon size="30px"/> 
                        <PersonIcon size="30"/>
                    </div>
                </div>
                <div className={styles["display"]}>
                    <Label fontWeight="normal">Product Cards</Label>
                    <div className={styles["container"]}>
                        <Card title="Mate" desc="Ideal para unos mates bien amargos." imgUrl="https://estiloaustral.com/wp-content/uploads/2023/03/0002s_0008_MATE0049-MATE-IMPERIAL-DOBLE-VIROLA-1.png.webp" rating={4} price={100}/>
                        <Card title="Mouse" desc="Ideal para unos buenos headshots." imgUrl="https://resource.logitech.com/content/dam/gaming/en/products/pro-gaming-mouse/plasma-hero-carbon-gallery-4.png" price={500}/>
                    </div>
                </div> */}
                {/* <ToastifyComp/> */}
            </section>
        </LayoutComp>
    )
}