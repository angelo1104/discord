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
  InformationFirst,
  InformationText,
  InformationTitle,
  InformationContent,
  HomeInformationSecond,
  HomeInformationSecondText,
} from "./Home.style";
import Button from "../Utils/Button/Button";
import { GetAppOutlined } from "@material-ui/icons";
import getOS from "../../Utils/getOS";
import Background from "../../Assets/Images/BackgroundHome.svg";
import ForeHome from "../../Assets/Images/ForeHome.svg";
import BackHome from "../../Assets/Images/BackHome.svg";
import InformationFirstMain from "../../Assets/Images/HomeInformationFirst.svg";
import InformationSecondMain from "../../Assets/Images/HomeInformationSecond.svg";

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
      <InformationFirst>
        <img src={InformationFirstMain} alt={""} />
        <InformationText>
          <InformationTitle>
            Create an invite-only place where you belong
          </InformationTitle>
          <InformationContent>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </InformationContent>
        </InformationText>
      </InformationFirst>
      <HomeInformationSecond>
        <HomeInformationSecondText>
          <InformationTitle>Where hanging out is easy</InformationTitle>
          <InformationContent>
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </InformationContent>
        </HomeInformationSecondText>
        <img src={InformationSecondMain} alt="" />
      </HomeInformationSecond>
    </HomeContainer>
  );
}

export default Home;
