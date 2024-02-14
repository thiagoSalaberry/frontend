import styled from "styled-components";
import ClipboardCheck from "./clipboard-check.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function ClipboardCheckIcon(props:IconProps) {
    return (
        <ClipboardCheck className={props.className} width={props.size} height={props.size}/>
    )
};

export { ClipboardCheck };