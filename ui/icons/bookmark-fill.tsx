import styled from "styled-components";
import BookmarkFill from "./bookmar-fill.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function BookmarkFillIcon(props:IconProps) {
    return (
        <BookmarkFill className={props.className} width={props.size} height={props.size}/>
    )
};

export { BookmarkFill };