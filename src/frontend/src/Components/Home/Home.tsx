import React from "react";
import Header from "./Header";
import {
  HeaderPrimaryContent,
  HomeContainer,
  HomePrimary,
  HomeTitle,
} from "./Home.style";

function Home() {
  return (
    <HomeContainer>
      <HomePrimary>
        <Header />
        <HeaderPrimaryContent>
          <HomeTitle>Imagine a place...</HomeTitle>
        </HeaderPrimaryContent>
      </HomePrimary>
    </HomeContainer>
  );
}

export default Home;
