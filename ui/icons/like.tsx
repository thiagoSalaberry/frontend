import styled from "styled-components";
import Like from "./like.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function LikeIcon(props:IconProps) {
    return (
        <Like className={props.className} width={props.size} height={props.size}/>
    )
};

export { Like };