import React from "react";
import styled from "styled-components";
import theme from "../../../theme";
import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import DiscordHomeLogo from "../../../Assets/Images/DiscordHomeLogo";
import Button from "../Button/Button";

const MegaContainer = styled.footer`
  background: ${theme.colors.notQuiteBlack};
  color: ${theme.colors.white};
  padding: 40px 30px;
`;

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const ImagineAPlace = styled.h5`
  color: ${theme.colors.brand};
  font-family: ${theme.fonts.title};
  font-size: 1.7rem;
  text-transform: uppercase;
  max-width: 250px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    margin: 0 10px;
    font-size: 28px !important;
  }
`;

const ColumnTitle = styled.p`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.brand};
  margin-bottom: 10px;
`;

const ColumnItem = styled.a`
  font-family: ${theme.fonts.body};
  margin-bottom: 15px;
  cursor: pointer;
  color: ${theme.colors.white};

  :hover {
    text-decoration: underline white;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${theme.colors.brand};
  margin: 40px auto;
`;

const End = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Footer(): JSX.Element {
  return (
    <MegaContainer>
      <Container>
        <Column>
          <ImagineAPlace>imagine a place</ImagineAPlace>
          <SocialIcons>
            <Twitter />
            <Instagram />
            <Facebook />
            <YouTube />
          </SocialIcons>
        </Column>
        <Column>
          <ColumnTitle>Product</ColumnTitle>
          <ColumnItem>Download</ColumnItem>
          <ColumnItem>Nitro</ColumnItem>
          <ColumnItem>Status</ColumnItem>
        </Column>
        <Column>
          <ColumnTitle>Company</ColumnTitle>
          <ColumnItem>About</ColumnItem>
          <ColumnItem>Jobs</ColumnItem>
          <ColumnItem>Branding</ColumnItem>
          <ColumnItem>Newsroom</ColumnItem>
        </Column>
        <Column>
          <ColumnTitle>Resources</ColumnTitle>
          <ColumnItem>College</ColumnItem>
          <ColumnItem>Support</ColumnItem>
          <ColumnItem>Safety</ColumnItem>
          <ColumnItem>Blog</ColumnItem>
          <ColumnItem>Feedback</ColumnItem>
          <ColumnItem>Developers</ColumnItem>
          <ColumnItem>StreamKit</ColumnItem>
        </Column>
        <Column>
          <ColumnTitle>Policies</ColumnTitle>
          <ColumnItem>Terms</ColumnItem>
          <ColumnItem>Privacy</ColumnItem>
          <ColumnItem>Guidelines</ColumnItem>
          <ColumnItem>Acknowledgements</ColumnItem>
          <ColumnItem>Licenses</ColumnItem>
          <ColumnItem>Moderation</ColumnItem>
        </Column>
      </Container>
      <Divider />
      <End>
        <DiscordHomeLogo />
        <Button buttonType={"primary"}>Open Discord</Button>
      </End>
    </MegaContainer>
  );
}

export default Footer;
