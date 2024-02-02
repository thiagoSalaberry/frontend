import styled from "styled-components";

interface TextProps {
    fontWeight?: "bold" | "normal";
    size?: "s" | "m" | "l";
    talign?: "left" | "center" | "right";
  }

export const Title = styled.h1`
    font-weight: 200;
    font-size: 64px;
    margin: 0;
    `
export const Subtitle = styled.h2`
    font-weight: 200;
    font-size: 44px;
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
      case "s":
        return "14px";
      case "m":
        return "24px";
      case "l":
        return "30px";
      default:
        return "18px";
      }
    }};
`