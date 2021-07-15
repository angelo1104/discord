import styled from "styled-components";
import theme from "../../../theme";
import React from "react";

interface ButtonProps {
  dark?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  outline-width: 0;
  padding: 10px 18px;
  background: ${(props) =>
    props.dark ? theme.colors.notQuiteBlack : theme.colors.white};
  border-radius: 500px;
  font-size: 14px;
  color: ${(props) =>
    props.dark ? theme.colors.white : theme.colors.notQuiteBlack};
  font-family: ${theme.fonts.subtitle};
  font-weight: 500;
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
}

export default function Button({ children, dark = false }: Props): JSX.Element {
  return <StyledButton dark={dark}>{children}</StyledButton>;
}
