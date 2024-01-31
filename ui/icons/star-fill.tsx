import styled from "styled-components";
import StarFill from "./star-fill.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function StarFillIcon(props:IconProps) {
    return (
        <StarFill className={props.className} width={props.size} height={props.size}/>
    )
};

export { StarFill };