import React from "react";
import Head from "next/head";
import {
  Body,
  Container,
  DiscordImage,
  HamsterImage,
  Info,
  MegaContainer,
  SubTitle,
  Title,
  Wrapper,
} from "./404.style";
import Hamster from "../../Assets/Images/cat hamster.gif";
import Discord from "../../Assets/Images/grey discord logo.svg";

function PageNotFound() {
  return (
    <MegaContainer>
      <Container>
        <Head>
          <title>Page Not Found | Discord</title>
        </Head>

        <Wrapper>
          <Title>404</Title>
          <SubTitle>WIZARDS BEHIND CURTAINS?</SubTitle>
          <Body>
            That's so 1939. Discord is secretly powered by quantum robot
            hamsters. Technology is wild, isn't it? Anyway, you look lost. Here
            are a few suggested pages.
          </Body>
          <Info>status page</Info>
          <Info>@discord</Info>
          <Info>support</Info>
        </Wrapper>

        <HamsterImage
          src={Hamster}
          alt=""
          width={1200}
          height={750}
          objectFit={"contain"}
        />
      </Container>

      <DiscordImage src={Discord} alt="" />
    </MegaContainer>
  );
}

export default PageNotFound;
