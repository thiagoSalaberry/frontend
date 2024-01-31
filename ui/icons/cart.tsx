import styled from "styled-components";
import Cart from "./cart.svg";

interface IconProps {
    size?: string;
    className?:string;
}

export function CartIcon(props:IconProps) {
    return (
        <Cart className={props.className} width={props.size} height={props.size}/>
    )
};

export { Cart };