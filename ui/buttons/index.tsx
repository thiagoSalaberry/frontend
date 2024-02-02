import styled from "styled-components";
export const Button = styled.button`
    background: var(--black);
    padding: 10px 0;
    width: 100%;
    border: none;
    color: white;
    font-weight: 400;
    font-size: 20px;
    border-radius: 30px;
    box-shadow: -5px -5px 10px 0px rgba(255,255,255,1), 5px 5px 10px 0px rgba(0, 0, 0, 0.25);
    &:active {
        box-shadow: -2px -2px 10px 0px rgba(255, 255, 255, .2) inset, 3px 3px 10px 0px rgba(0,0,0,1) inset;
        transform: scale(0.98) translateY(-1px);
    }
    `

export const BackButton = styled(Button)`
    background: var(--grey-flat);
    color: var(--black);
    outline: none;
    font-weight: normal;
    box-shadow: -1px -1px 3px 1px rgba(255, 255, 255, .9), 2px 2px 7px 0px rgba(44, 45, 46, 0.5);
    &:active {
        box-shadow: 2px 2px 7px 0px rgba(44, 45, 46, 0.5) inset, -1px -1px 3px 1px rgba(255, 255, 255, .9) inset;
    }
`

export const IconButtons = styled(Button)`
    font-size: 0;
    padding: 10px;
`