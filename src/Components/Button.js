import React from "react";
import styled, { css, keyframes } from "styled-components";

const btnClickAnim = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  `;

const around = keyframes`
  0% {
    transform: translateY(0rem);
  }

  100% {
    transform: translateY(-1.5rem);
  }
`;

const Button = (props) => {
  if (props.children) {
    return (
      <Container
        variation={props?.variation}
        isClose={props?.isClose}
        padding={props?.padding}
        onClick={props?.clickHandler}
        marginRight={props?.marginRight}
      >
        {props?.children}
      </Container>
    );
  }

  return (
    <Container
      variation={props?.variation}
      isClose={props?.isClose}
      padding={props?.padding}
      onClick={props?.clickHandler}
      marginRight={props?.marginRight}
    >
      {props?.text || "default"}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  display: ${({ display }) => (display ? display : "flex")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  padding: ${({ padding }) => (padding ? padding : "1rem 5rem")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "2rem")};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "2rem")};
  color: ${({ color }) => (color ? color : "#eee")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "1px"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "3px")};
  ${({ variation, isClose }) => css`
    background: ${variation === "outline"
      ? "none"
      : variation === "text"
      ? "none"
      : variation === "disabled"
      ? "none"
      : "var(--secondary-color)"};
    color: ${variation === "outline"
      ? "var(--secondary-color)"
      : variation === "text"
      ? "var(--secondary-color)"
      : variation === "disabled"
      ? "#aaa"
      : "var(--primary-light)"};
    border: 1px solid
      ${variation === "outline"
        ? "var(--secondary-color)"
        : variation === "text"
        ? "none"
        : variation === "disabled"
        ? "none"
        : "var(--secondary-color)"};
    padding: ${variation === "text"
      ? "1rem 2rem"
      : variation === "disabled"
      ? "1rem 2rem"
      : "1rem 5rem"};
    cursor: ${variation === "disabled" && !isClose ? "default" : "pointer"};
    &:hover {
      background: ${variation === "outline"
        ? "var(--secondary-color)"
        : variation === "text" || isClose
        ? "#ccc"
        : variation === "disabled"
        ? "none"
        : "none"};
      color: ${variation === "outline"
        ? "var(--primary-light)"
        : variation === "disabled"
        ? "#aaa"
        : "var(--secondary-color)"};
      animation: ${around} 0.5s ease-in infinite;
      animation-direction: alternate;
    }

    &:active {
      animation: ${variation !== "disabled" && btnClickAnim} 200ms ease-out;
    }
  `}
`;
