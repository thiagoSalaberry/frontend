import styles from "./searcher.module.css";
import { StyledInput } from "@/ui/textfields";
import { Button } from "@/ui/buttons";
import Router from "next/router";
type InputProps = {
    type: "text" | "number" | "email" | "password";
    name: string;
    placeholder?: string;
}
export function SearcherComp(props:InputProps) {
    function handleSubmit(e:any) {
        e.preventDefault();
        const query = e.target.query.value;
        Router.push(`/search?q=${query}&offset=0&limit=10`)
      }
    return (
        <form onSubmit={handleSubmit} className={styles["form"]}>
            <StyledInput type={props.type} name={props.name} placeholder={props.placeholder}/>
            <Button>Buscar</Button>
        </form>
    )
}