import styled from "styled-components";
import theme from "../../../theme";
import React from "react";
import Loader from "../Loader/Loader";

interface ButtonProps {
  colorTheme: {
    color: string;
    background: string;
    hoverColor: string;
    hoverBackground: string;
  };
  large: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  outline-width: 0;
  padding: ${(props) => (props.large ? "15px 25px" : "10px 14px")};
  background: ${(props) => props.colorTheme.background};
  border-radius: 500px;
  font-size: ${(props) => (props.large ? "20px" : "14px")};
  color: ${(props) => props.colorTheme.color};
  font-family: ${theme.fonts.subtitle};
  font-weight: ${(props) => (props.large ? 400 : 500)};
  transition-property: background-color, color, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;

  :hover {
    color: ${(props) => props.colorTheme.hoverColor};
    background-color: ${(props) => props.colorTheme.hoverBackground};
    box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
  }
`;

type ButtonType = "dark" | "light" | "primary";

interface Props {
  children: any;
  buttonType?: ButtonType;
  large?: boolean;
  styles?: React.CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}

const LoadingContainer = styled.div`
  position: absolute;
  left: 36%;
  top: 30%;
`;

interface ChildrenContainerProps {
  visible: boolean;
}

const ChildrenContainer = styled.div<ChildrenContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

export default function Button({
  children,
  large = false,
  buttonType = "light",
  styles,
  type,
  onClick,
  loading = false,
}: Props): JSX.Element {
  const colorTheme = {
    dark: {
      background: theme.colors.notQuiteBlack,
      color: theme.colors.white,
      hoverColor: theme.colors.white,
      hoverBackground: theme.colors.hoverBlack,
    },
    light: {
      background: theme.colors.white,
      color: theme.colors.notQuiteBlack,
      hoverColor: theme.colors.brand,
      hoverBackground: theme.colors.white,
    },
    primary: {
      background: theme.colors.brand,
      color: theme.colors.white,
      hoverColor: theme.colors.white,
      hoverBackground: theme.colors.hoverBrand,
    },
  };

  return (
    <StyledButton
      large={large}
      colorTheme={colorTheme[buttonType]}
      style={styles}
      onClick={onClick}
      type={type}
    >
      <ChildrenContainer visible={!loading}>{children}</ChildrenContainer>
      {loading && (
        <LoadingContainer>
          <Loader dimensions={5} color={theme.colors.white} />
        </LoadingContainer>
      )}
    </StyledButton>
  );
}
