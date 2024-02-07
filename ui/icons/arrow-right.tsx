import styled from "styled-components";
import ArrowRight from "./arrow-right.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function ArrowRightIcon(props:IconProps) {
    return (
        <ArrowRight className={props.className} width={props.size} height={props.size}/>
    )
};

export { ArrowRight };