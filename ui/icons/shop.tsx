import styled from "styled-components";
import Shop from "./shop.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function ShopIcon(props:IconProps) {
    return (
        <Shop className={props.className} width={props.size} height={props.size}/>
    )
};

export { Shop };