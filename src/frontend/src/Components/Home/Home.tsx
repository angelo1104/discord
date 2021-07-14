import React from "react";
import Header from "./Header";
import { HomeContainer, HomePrimary } from "./Home.style";

function Home() {
  return (
    <HomeContainer>
      <HomePrimary>
        <Header />
      </HomePrimary>
    </HomeContainer>
  );
}

export default Home;
