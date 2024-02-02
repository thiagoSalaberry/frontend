import styled from "styled-components";
import { SearchIcon } from "../icons/search";
import { Body } from "../text";
interface InputProps {
    label?:string;
    type: "text" | "email" | "number" | "password";
    id?:string;
    name?:string;
    className?:string;
    placeholder?: string;
    talign?: "left" | "center" | "right";
}
export const StyledInput = styled.input<InputProps>`
    background: var(--fondo);
    border: none;
    box-shadow: -5px -5px 10px 0px rgba(255,255,255,1), 5px 5px 10px 0px rgba(0, 0, 0, 0.15);
    border-radius: 100px;
    padding: 13px 20px;
    width: 100%;
    font-size: 14px;
    text-align: ${props => props.talign};
    font-weight: 500;
    color: var(--black);
    &:focus {
        outline: none;
        box-shadow: -5px -5px 10px 0px rgba(255, 255, 255, 1) inset, 3px 3px 10px 0px rgba(0,0,0,.15) inset;
    }
    &::placeholder {
        /* Chrome, Firefox, Edge, Safari 10.1+ */
        color: #a7a7a7;
    }
`
export function Input(props:InputProps) {
    return (
        <StyledInput type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} talign={props.talign}/>
        )
    }
    
    export function SecondInput(props:InputProps) {
        return (
        <div style={{width: "100%"}}>
            <Body size="s" fontWeight="bold">{props.label}</Body>
            <StyledInput type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}/>
        </div>
    )
}