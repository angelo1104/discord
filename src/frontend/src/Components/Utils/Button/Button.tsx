import styled from "styled-components";
import theme from "../../../theme";

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  outline-width: 0;
  padding: 10px 18px;
  background: ${theme.colors.white};
  border-radius: 500px;
  font-size: 14px;
  color: ${theme.colors.notQuiteBlack};
  font-family: ${theme.fonts.subtitle};
  transition-property: background-color, color, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;

  :hover {
    color: ${theme.colors.brand};
    box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
  }
`;

export default function Button(): JSX.Element {
  return <StyledButton>Open Discord</StyledButton>;
}
