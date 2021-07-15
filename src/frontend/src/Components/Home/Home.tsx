import React from "react";
import Header from "./Header";
import {
  HomePrimaryContent,
  HomeContainer,
  HomePrimary,
  HomePrimaryAbout,
  HomePrimaryButtons,
  HomeTitle,
  HomePrimaryBg,
  ImageContainer,
  ForeHomeImage,
  BackHomeImage,
  HomePrimaryText,
} from "./Home.style";
import Button from "../Utils/Button/Button";
import { GetAppOutlined } from "@material-ui/icons";
import getOS from "../../Utils/getOS";
import Background from "../../Assets/Images/BackgroundHome.svg";
import ForeHome from "../../Assets/Images/ForeHome.svg";
import BackHome from "../../Assets/Images/BackHome.svg";

function Home() {
  return (
    <HomeContainer>
      <HomePrimary>
        <Header />
        <HomePrimaryContent>
          <HomePrimaryText>
            <HomeTitle>Imagine a place...</HomeTitle>
            <HomePrimaryAbout>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </HomePrimaryAbout>
            <HomePrimaryButtons>
              <Button large>
                <GetAppOutlined />
                <span className={"text"}>Download for {getOS()}</span>
              </Button>
              <Button large dark>
                Open discord in your browser
              </Button>
            </HomePrimaryButtons>
          </HomePrimaryText>
        </HomePrimaryContent>
        <ImageContainer>
          <HomePrimaryBg src={Background} alt={""} />
          <ForeHomeImage src={ForeHome} alt={""} />
          <BackHomeImage src={BackHome} alt={""} />
        </ImageContainer>
      </HomePrimary>
    </HomeContainer>
  );
}

export default Home;
