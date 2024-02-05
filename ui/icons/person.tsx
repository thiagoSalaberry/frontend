import styled from "styled-components";
import Person from "./person.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function PersonIcon(props:IconProps) {
    return (
        <Person className={props.className} width={props.size} height={props.size}/>
    )
};

export { Person };