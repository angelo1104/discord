import styled from "styled-components";
import theme from "../../../theme";

const ContentLink = styled.a`
  color: ${theme.colors.white};
  cursor: pointer;
  font: ${theme.fonts.body};
  font-weight: 500;
  font-size: 1rem;

  :hover {
    text-decoration: underline ${theme.colors.white};
  }
`;

export default ContentLink;
