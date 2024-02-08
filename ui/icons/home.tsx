import styled from "styled-components";
import Home from "./home.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function HomeIcon(props:IconProps) {
    return (
        <Home className={props.className} width={props.size} height={props.size}/>
    )
};

export { Home };