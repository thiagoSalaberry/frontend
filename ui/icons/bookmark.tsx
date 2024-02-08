import styled from "styled-components";
import Bookmark from "./bookmar.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function BookmarkIcon(props:IconProps) {
    return (
        <Bookmark className={props.className} width={props.size} height={props.size}/>
    )
};

export { Bookmark };