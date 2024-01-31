import styled from "styled-components";
import StarHalfFill from "./star-half-fill.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function StarHalfFillIcon(props:IconProps) {
    return (
        <StarHalfFill className={props.className} width={props.size} height={props.size}/>
    )
};

export { StarHalfFill };