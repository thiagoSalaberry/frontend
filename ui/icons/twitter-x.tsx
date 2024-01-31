import styled from "styled-components";
import TwitterX from "./twitter-x.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function TwitterXIcon(props:IconProps) {
    return (
        <TwitterX className={props.className} width={props.size} height={props.size}/>
    )
};

export { TwitterX };