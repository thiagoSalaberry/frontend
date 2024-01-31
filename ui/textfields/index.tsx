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
    box-shadow: -1px -1px 3px 1px rgba(255, 255, 255, .9), 2px 2px 7px 0px rgba(44, 45, 46, 0.5);
    border-radius: 100px;
    padding: 10px 20px;
    width: 100%;
    font-size: 18px;
    text-align: ${props => props.talign};
    font-weight: 500;
    color: var(--black);
    &:focus {
        outline: none;
        box-shadow: -1px -1px 3px 1px rgba(255, 255, 255, .9), 4px 4px 7px 0px rgba(44, 45, 46, 0.5);
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