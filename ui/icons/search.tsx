import styled from "styled-components";
import Search from "./search.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function SearchIcon(props:IconProps) {
    return (
        <Search className={props.className} width={props.size} height={props.size}/>
    )
};

export { Search };