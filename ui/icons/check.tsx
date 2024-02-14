import styled from "styled-components";
import Check from "./check.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function CheckIcon(props:IconProps) {
    return (
        <Check className={props.className} width={props.size} height={props.size}/>
    )
};

export { Check };