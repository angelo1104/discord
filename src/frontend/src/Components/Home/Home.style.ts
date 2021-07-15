import styled from "styled-components";
import theme from "../../theme";

export const HomeContainer = styled.div``;

export const HomePrimary = styled.section`
  min-height: 97vh;
  background-color: ${theme.colors.brand};
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const HomePrimaryContent = styled.div`
  margin-top: 80px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  position: relative;
`;

export const HomeTitle = styled.h1`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 3.2rem;
  letter-spacing: -2px !important;
  text-align: center;
  margin: 30px 0 20px;
  max-width: fit-content;
`;

export const HomePrimaryAbout = styled.h3`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.white};
  line-height: 1.7;
  text-align: center;
  font-weight: 400;
  font-size: 19px;
  max-width: 750px;
`;

export const HomePrimaryButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  .text {
    margin-top: -3px;
    margin-left: 10px;
  }

  button {
    margin: auto 10px;
  }
`;

export const HomePrimaryBg = styled.img`
  top: -40%;
`;

export const HomePrimaryText = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ForeHomeImage = styled.img`
  position: absolute;
  bottom: 0;
  left: -25%;
`;

export const BackHomeImage = styled.img`
  position: absolute;
  bottom: 0;
  right: -20%;
`;

export const InformationFirst = styled.section`
  display: flex;
  background: ${theme.colors.white};
  min-height: 95vh;
  align-items: center;
  padding: 20px 50px;
`;

export const InformationText = styled.div`
  display: flex;
  flex-direction: column;
  margin: -30px 0 0 150px;
  max-width: 330px;
`;

export const InformationTitle = styled.h4`
  font-size: 3rem;
  color: ${theme.colors.darkNotBlack};
  font-weight: 800;
  line-height: 1.25;
  font-family: ${theme.fonts.subtitle};
  white-space: break-spaces;
  margin-bottom: 20px;
`;

export const InformationContent = styled.p`
  font-size: 19px;
  font-family: ${theme.fonts.display};
  color: ${theme.colors.notQuiteBlack};
  line-height: 1.7;
  margin-bottom: 0;
`;
