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
  InformationFirstMain,
  ForeHomeImage,
  BackHomeImage,
  HomePrimaryText,
  InformationFirst,
  InformationText,
  InformationTitle,
  InformationContent,
  HomeInformationSecond,
  HomeInformationSecondText,
  ReliableTech,
  ReliableTitle,
  ReliableSubtitle,
  ReliableEnd,
} from "./Home.style";
import Button from "../Utils/Button/Button";
import { GetAppOutlined } from "@material-ui/icons";
import getOS from "../../Utils/getOS";
import Background from "../../Assets/Images/BackgroundHome.svg";
import ForeHome from "../../Assets/Images/ForeHome.svg";
import BackHome from "../../Assets/Images/BackHome.svg";
import InformationFirstImage from "../../Assets/Images/HomeInformationFirst.svg";
import InformationSecondMain from "../../Assets/Images/HomeInformationSecond.svg";
import InformationThirdMain from "../../Assets/Images/HomeInformationThird.svg";
import ReliableTechMain from "../../Assets/Images/HomeREliableTech.svg";
import Stars from "../../Assets/Images/stars.svg";
import Footer from "../Utils/Footer/Footer";
import FadeOnScroll from "../Utils/FadeOnScroll/FadeOnScroll";

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
              <Button large buttonType={"dark"}>
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
        <FadeOnScroll>
          <InformationFirstMain>
            <img src={InformationFirstImage} alt={""} />
            <InformationText>
              <InformationTitle>
                Create an invite-only place where you belong
              </InformationTitle>
              <InformationContent>
                Discord servers are organized into topic-based channels where
                you can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </InformationContent>
            </InformationText>
          </InformationFirstMain>
        </FadeOnScroll>
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
      <InformationFirst>
        <img src={InformationThirdMain} alt={""} />
        <InformationText>
          <InformationTitle>From few to a fandom</InformationTitle>
          <InformationContent>
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </InformationContent>
        </InformationText>
      </InformationFirst>
      <ReliableTech>
        <ReliableTitle>RELIABLE TECH FOR STAYING CLOSE</ReliableTitle>
        <ReliableSubtitle>
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </ReliableSubtitle>
        <img src={ReliableTechMain} alt="" />

        <ReliableEnd>
          <img src={Stars} alt="" />
          <span className={"text"}>Ready to start your journey?</span>

          <Button large buttonType={"primary"}>
            <GetAppOutlined />
            <span className={"button-text"}>Download for {getOS()}</span>
          </Button>
        </ReliableEnd>
      </ReliableTech>

      <Footer />
    </HomeContainer>
  );
}

export default Home;
