import styled from "styled-components";
import Star from "./star.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function StarIcon(props:IconProps) {
    return (
        <Star className={props.className} width={props.size} height={props.size}/>
    )
};

export { Star };