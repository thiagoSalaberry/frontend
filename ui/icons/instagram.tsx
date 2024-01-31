import styled from "styled-components";
import Instragram from "./instagram.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function InstragramIcon(props:IconProps) {
    return (
        <Instragram className={props.className} width={props.size} height={props.size}/>
    )
};

export { Instragram };