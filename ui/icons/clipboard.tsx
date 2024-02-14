import styled from "styled-components";
import Clipboard from "./clipboard.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function ClipboardIcon(props:IconProps) {
    return (
        <Clipboard className={props.className} width={props.size} height={props.size}/>
    )
};

export { Clipboard };