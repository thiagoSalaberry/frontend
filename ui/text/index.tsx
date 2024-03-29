import styled from "styled-components";

interface TextProps {
    fontWeight?: "bold" | "normal";
    size?: "xs" | "s" | "m" | "l";
    talign?: "left" | "center" | "right";
  }

export const Title = styled.h1`
    font-weight: 200;
    font-size: 48px;
    margin: 0;
    `
export const Subtitle = styled.h2`
    font-weight: 200;
    font-size: 36px;
    margin: 0;
`
export const Label = styled.label<TextProps>`
    font-size: 24px;
    font-weight: ${props => props.fontWeight || "normal"};
    color: ${props => props.color || "#000"};
    margin: 0;
`
export const Body = styled.label<TextProps>`
    font-weight: ${props => props.fontWeight || "normal"};
    color: ${props => props.color || "#000"};
    margin: 0;
    text-align: ${props => props.talign};
    font-size: ${(props) => {
    switch (props.size) {
      case "xs":
        return "12px";
      case "s":
        return "14px";
      case "m":
        return "18px";
      case "l":
        return "24px";
      default:
        return "14px";
      }
    }};
`