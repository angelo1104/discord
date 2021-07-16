import React from "react";
import Head from "next/head";
import {
  Body,
  Container,
  HamsterImage,
  Info,
  SubTitle,
  Title,
  Wrapper,
} from "./404.style";
import Hamster from "../../Assets/Images/cat hamster.gif";

function PageNotFound() {
  return (
    <Container>
      <Head>
        <title>Page Not Found | Discord</title>
      </Head>

      <Wrapper>
        <Title>404</Title>
        <SubTitle>WIZARDS BEHIND CURTAINS?</SubTitle>
        <Body>
          That's so 1939. Discord is secretly powered by quantum robot hamsters.
          Technology is wild, isn't it? Anyway, you look lost. Here are a few
          suggested pages.
        </Body>
        <Info>status page</Info>
        <Info>@discord</Info>
        <Info>support</Info>
      </Wrapper>

      <HamsterImage src={Hamster} alt="" />
    </Container>
  );
}

export default PageNotFound;
