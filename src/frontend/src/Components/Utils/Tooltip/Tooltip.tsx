import React from "react";
import { Tooltip as MaterialTooltip, withStyles } from "@material-ui/core";
import theme from "../../../theme";

interface Props {
  children: any;
  title: string;
  theme?: "light" | "dark";
  type?: "primary" | "error";
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  disableAnimation?: boolean;
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

const FakeTransitionComponent = ({ children }: any) => children;

function Tooltip({
  children,
  title,
  type = "primary",
  theme: defaultTheme = "light",
  open,
  onOpen,
  onClose,
  placement = "top",
  disableAnimation = false,
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
        TransitionComponent={
          disableAnimation ? FakeTransitionComponent : undefined
        }
      >
        {children}
      </StyledTooltip>
    </>
  );
}

export default Tooltip;
