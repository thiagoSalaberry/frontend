import { Button, BackButton } from "@/ui/buttons";
import { Title, Subtitle, Label, Body } from "@/ui/text";
import { StyledInput } from "@/ui/textfields";
import { SearchIcon } from "@/ui/icons/search";
import { PersonIcon } from "@/ui/icons/person";
import Card from "@/components/cards";
import { LayoutComp } from "@/components/layout";
import styles from "./ui.module.css"
import { ToastifyComp } from "@/components/toast";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

export default function UI() {
    const [loading, setLoading] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<"disabled" | "">("");
    const realizarTarea = async () => {
        return new Promise<void>((resolve) => {
            setTimeout(()=>{
                console.log("La tarea se completó");
                resolve();
            }, 2000);
        })
    }
    const handleClick = async () => {
        if(loading) return;
        setLoading(true);
        setDisabled("disabled");
        try {
            await realizarTarea();
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }
    return (
        <LayoutComp user={false}>
            <section className={styles["ui-page"]}>
                <div className={styles["container"]}>
                    <button className={styles["nuevo"]}>Nuevo</button>
                    <button className={!loading ? `${styles["nuevo"]}` : `${styles[disabled]}`} onClick={handleClick} disabled={loading}>
                        {loading ? <CircularProgress color="inherit" size={20}/> : "Click acá"}
                    </button>
                    <button className={!loading ? `${styles["nuevo"]} ${styles["negro"]}` : `${styles[disabled]} ${styles["negro"]}`} onClick={handleClick} disabled={loading}>
                        {loading ? <CircularProgress color="inherit" size={20}/> : "Click acá"}
                    </button>
                </div>
            </section>
        </LayoutComp>
    )
}