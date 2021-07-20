import React from "react";
import styled from "styled-components";
import {
  makeStyles,
  Tooltip as MaterialTooltip,
  withStyles,
} from "@material-ui/core";
import theme from "../../../theme";
import { motion } from "framer-motion";

interface Props {
  children: any;
  title: string;
  theme?: "light" | "dark";
  type?: "primary" | "error";
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
}

interface Theme {
  color: string;
  background: string;
  shadow?: string;
}

interface ColorTheme {
  light: Theme;
  dark: Theme;
}

function Tooltip({
  children,
  title,
  type = "primary",
  theme: defaultTheme = "light",
  open,
  onOpen,
  onClose,
  placement = "top",
}: Props): JSX.Element {
  const colorTheme = {
    primary: {
      light: {
        color: theme.colors.notQuiteBlack,
        background: theme.colors.white,
      },
      dark: {
        color: theme.colors.white,
        background: theme.colors.notQuiteBlack,
        shadow: "",
      },
    },
    error: {
      light: {
        color: theme.colors.errorRed,
        background: theme.colors.white,
      },
      dark: {
        color: theme.colors.errorRed,
        background: theme.colors.notQuiteBlack,
        shadow: "",
      },
    },
  };

  const theTheme: Theme = colorTheme[type][defaultTheme];

  const StyledTooltip = withStyles(() => ({
    tooltip: {
      background: theTheme.background,
      color: theTheme.color,
      fontFamily: theme.fonts.display,
      fontSize: 13,
      fontWeight: 400,
      textAlign: "center",
      padding: "8px",
      boxShadow: theTheme.shadow,
    },
    arrow: {
      color: theTheme.background,
      boxShadow: theTheme.shadow,
    },
  }))(MaterialTooltip);

  return (
    <>
      <StyledTooltip
        arrow
        title={title}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        placement={placement}
      >
        {children}
      </StyledTooltip>
    </>
  );
}

export default Tooltip;
