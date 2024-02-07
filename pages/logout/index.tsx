import { LayoutComp } from "@/components/layout"
import { Title, Body } from "@/ui/text"
import { Button } from "@/ui/buttons"
import { Input } from "@/ui/textfields"
import { useMe } from "@/lib/hooks"
import styles from "./profile.module.css"
import { updateUserData } from "@/lib/api-calls"
import Router from "next/router"
import { useEffect } from "react"
export default function LogOutPage() {
    useEffect(()=>{
        let seconds = 1;
        const inteval = setInterval(()=>{
            if(seconds <= 0){
                clearInterval(inteval);
                localStorage.removeItem("accessToken");
                window.location.reload();
                Router.push("/")
            }else{
                seconds--
            }
        }, 1000);
    }, [])
  return (
    <main className={styles["logout-page"]}>
        <div className={styles["logo"]}>
                <div className={styles["logo-h"]}></div>
                <div className={styles["logo-v"]}></div>
                <div className={styles["logo-h"]}></div>
            </div>
        <Body size="l">saliendo...</Body>
    </main>
  )
}