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
  background: ${theme.colors.white};
  min-height: 95vh;
  align-items: center;
  padding: 20px 50px;
`;

export const InformationFirstMain = styled.div`
  display: flex;
  align-items: center;
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

export const HomeInformationSecond = styled.section`
  display: flex;
  background: ${theme.colors.offWhite};
  min-height: 95vh;
  align-items: center;
  padding: 20px 50px;
`;

export const HomeInformationSecondText = styled.div`
  display: flex;
  flex-direction: column;
  margin: -30px 100px 0 50px;
  max-width: 400px;
`;

export const ReliableTech = styled.section`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.offWhite};
  align-items: center;
  padding: 30px;

  img {
    width: 90%;
  }
`;

export const ReliableTitle = styled.h2`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.notQuiteBlack};
  font-weight: 900;
  font-size: 2.3rem;
  text-transform: uppercase;
  max-width: 70%;
  text-align: center;
`;

export const ReliableSubtitle = styled.h4`
  font-family: ${theme.fonts.display};
  color: ${theme.colors.notQuiteBlack};
  font-weight: 400;
  font-size: 1.22rem;
  line-height: 1.7;
  max-width: 70%;
  text-align: center;
`;

export const ReliableEnd = styled.h4`
  font-family: ${theme.fonts.subtitle};
  font-size: 2.2rem;
  font-weight: 900;
  margin-top: 100px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    max-width: 500px;
    margin-bottom: 40px;
  }

  img {
    margin-bottom: -20px;
    width: 600px;
  }

  .button-text {
    margin-top: -3px;
    margin-left: 10px;
  }
`;

export const ReliableTechMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
