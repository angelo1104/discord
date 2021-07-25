import React from "react";
import DiscordHomeLogo from "../../Assets/Images/DiscordHomeLogo";
import theme from "../../theme";
import styled from "styled-components";
import ContentLink from "../Utils/ContentLink/ContentLink";
import Button from "../Utils/Button/Button";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 85%;
  margin: auto;
  justify-content: space-between;
  padding: 15px 20px;
  position: relative;
  z-index: 3;
`;

const LinksBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <DiscordHomeLogo fill={theme.colors.white} />
      <LinksBox>
        <ContentLink>Download</ContentLink>
        <ContentLink>Nitro</ContentLink>
        <ContentLink>Safety</ContentLink>
        <ContentLink>Support</ContentLink>
      </LinksBox>
      <Button>Open discord</Button>
    </HeaderContainer>
  );
}

export default Header;
