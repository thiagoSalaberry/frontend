import styled from "styled-components";
import X from "./x.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function XIcon(props:IconProps) {
    return (
        <X className={props.className} width={props.size} height={props.size}/>
    )
};

export { X };