import styled from "styled-components";
import ArrowLeft from "./arrow-left.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function ArrowLeftIcon(props:IconProps) {
    return (
        <ArrowLeft className={props.className} width={props.size} height={props.size}/>
    )
};

export { ArrowLeft };