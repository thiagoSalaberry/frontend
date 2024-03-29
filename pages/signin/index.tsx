import { LayoutComp } from "@/components/layout"
import CircularProgress from '@mui/material/CircularProgress';
import { Title, Body } from "@/ui/text"
import { Button } from "@/ui/buttons"
import { Input } from "@/ui/textfields"
import styles from "./signin.module.css";
import Router from "next/router";
import { sendCode, getToken, useToken } from "@/lib/api-calls";
import { useState } from "react";
export default function SigninPage() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    async function getCode(e:any) {
        e.preventDefault();
        setLoading(true);
        const email = e.target.email.value;
        const result = await sendCode(email);
        if(result) {
            setLoading(false);
            setEmail(email);
        };
    };
    async function submitCode(e:any) {
        e.preventDefault();
        setLoading(true);
        const code = e.target.code.value;
        const {token} = await getToken(email, code);
        if(!token) {
            setLoading(false);
            setError(true)
        }
        if(token) {
            setLoading(false);
            setCode(code);
            localStorage.setItem("accessToken", token);
            const user = await useToken(token);
            if(user) {
                Router.back();
            }
        }
    };
    const loadingCard = (
        <div className={styles["loading-card"]}>
            <CircularProgress color="inherit" size={40}/>
        </div>
    )
    const formContent = !email ? (
        <form onSubmit={getCode} id="email-form" className={`${styles["form"]}`}>
            <>
                <div className={`${styles["input-container"]} ${loading ? styles["loading"] : ""}`}>
                    <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">E-Mail</Body>
                    <Input type="email" name="email"/>
                </div>
                <Button className={loading ? styles["loading"] : ""}>Continuar</Button>
                {loading ? loadingCard : null}
            </>
        </form>
    ) : (
        <form onSubmit={submitCode} id="email-form" className={styles["form"]}>
            <>
                <div className={`${styles["input-container"]} ${loading ? styles["loading"] : ""}`}>
                    <Body style={{marginLeft: 20}} size="s" color="black" fontWeight="bold">Código</Body>
                    <Input type="number" name="code" talign="center"/>
                </div>
                {!error ? <Body size="s" color="grey" fontWeight="normal" className={loading ? styles["loading"] : ""}>Te enviamos un código a tu E-Mail</Body> : <Body size="s" color="#e44545" fontWeight="normal" className={loading ? styles["loading"] : ""}>El código es incorrecto</Body>}
                <Button className={loading ? styles["loading"] : ""}>Ingresar</Button>
                {loading ? loadingCard : null}
            </>
        </form>
    );
  return (
    <LayoutComp user={false}>
        <div className={styles["signin-page"]}>
            <Title>Ingresar</Title>
            {formContent}
        </div>
    </LayoutComp>
  )
}