import styled from "styled-components";
import theme from "../../theme";

export const HomeContainer = styled.div``;

export const HomePrimary = styled.section`
  min-height: 95vh;
  background-color: ${theme.colors.brand};
`;

export const HeaderPrimaryContent = styled.div`
  margin-top: 50px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeTitle = styled.h1`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
`;
