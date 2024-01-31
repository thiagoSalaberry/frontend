import styled from "styled-components";

interface TextProps {
    fontWeight?: "bold" | "normal";
    size?: "s" | "m" | "l";
    textalign?: "l" | "c" | "r"
  }

export const Title = styled.h1`
    font-weight: bold;
    font-size: 2.125rem;
    margin: 0;
    `
export const Subtitle = styled.h2`
    font-weight: bold;
    font-size: 1.875rem;
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
    font-size: ${(props) => {
    switch (props.size) {
      case "s":
        return "18px";
      case "m":
        return "24px";
      case "l":
        return "30px";
      default:
        return "18px";
      }
    }};
    text-align: ${(props) => {
    switch (props.textalign) {
      case "l":
        return "left";
      case "c":
        return "center";
      case "r":
        return "right";
      default:
        return "center";
      }
    }};
`