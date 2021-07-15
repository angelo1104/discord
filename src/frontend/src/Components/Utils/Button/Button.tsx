import styled from "styled-components";
import theme from "../../../theme";
import React from "react";

interface ButtonProps {
  dark?: boolean;
  large?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  outline-width: 0;
  padding: ${(props) => (props.large ? "15px 25px" : "10px 14px")};
  background: ${(props) =>
    props.dark ? theme.colors.notQuiteBlack : theme.colors.white};
  border-radius: 500px;
  font-size: ${(props) => (props.large ? "20px" : "14px")};
  color: ${(props) =>
    props.dark ? theme.colors.white : theme.colors.notQuiteBlack};
  font-family: ${theme.fonts.subtitle};
  font-weight: ${(props) => (props.large ? 400 : 500)};
  transition-property: background-color, color, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;

  :hover {
    color: ${(props) => (props.dark ? theme.colors.white : theme.colors.brand)};
    background-color: ${(props) => props.dark && theme.colors.hoverBlack};
    box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
  }
`;

interface Props {
  children: any;
  dark?: boolean;
  large?: boolean;
}

export default function Button({
  children,
  dark = false,
  large,
}: Props): JSX.Element {
  return (
    <StyledButton dark={dark} large={large}>
      {children}
    </StyledButton>
  );
}
