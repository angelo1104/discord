import React, { useState } from "react";
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
  ReliableTechMain,
} from "./Home.style";
import Button from "../Utils/Button/Button";
import { GetAppOutlined } from "@material-ui/icons";
import getOS from "../../Utils/getOS";
import Background from "../../Assets/Images/BackgroundHome.svg";
import ForeHome from "../../Assets/Images/ForeHome.svg";
import BackHome from "../../Assets/Images/BackHome.svg";
import InformationFirstImage from "../../Assets/Images/HomeInformationFirst.svg";
import InformationSecondImage from "../../Assets/Images/HomeInformationSecond.svg";
import InformationThirdImage from "../../Assets/Images/HomeInformationThird.svg";
import ReliableTechImage from "../../Assets/Images/HomeREliableTech.svg";
import Stars from "../../Assets/Images/stars.svg";
import Footer from "../Utils/Footer/Footer";
import FadeOnScroll from "../Utils/FadeOnScroll/FadeOnScroll";
import Username from "./Username";
import Loader from "../Utils/Loader/Loader";

function Home() {
  const [showUsername, setShowUsername] = useState<boolean>(false);

  return (
    <HomeContainer>
      <HomePrimary>
        <Header />
        <HomePrimaryContent>
          <HomePrimaryText>
            <HomeTitle>Imagine a place...</HomeTitle>
            <Loader dimensions={5} color={"red"} />
            <HomePrimaryAbout>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </HomePrimaryAbout>
            {showUsername ? (
              <Username />
            ) : (
              <HomePrimaryButtons>
                <Button large>
                  <GetAppOutlined />
                  <span className={"text"}>Download for {getOS()}</span>
                </Button>
                <Button
                  large
                  buttonType={"dark"}
                  onClick={() => setShowUsername(true)}
                >
                  Open discord in your browser
                </Button>
              </HomePrimaryButtons>
            )}
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
        <FadeOnScroll>
          <InformationFirstMain>
            <HomeInformationSecondText>
              <InformationTitle>Where hanging out is easy</InformationTitle>
              <InformationContent>
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </InformationContent>
            </HomeInformationSecondText>
            <img src={InformationSecondImage} alt="" />
          </InformationFirstMain>
        </FadeOnScroll>
      </HomeInformationSecond>
      <InformationFirst>
        <FadeOnScroll>
          <InformationFirstMain>
            <img src={InformationThirdImage} alt={""} />
            <InformationText>
              <InformationTitle>From few to a fandom</InformationTitle>
              <InformationContent>
                Get any community running with moderation tools and custom
                member access. Give members special powers, set up private
                channels, and more.
              </InformationContent>
            </InformationText>
          </InformationFirstMain>
        </FadeOnScroll>
      </InformationFirst>
      <ReliableTech>
        <FadeOnScroll>
          <ReliableTechMain>
            <ReliableTitle>RELIABLE TECH FOR STAYING CLOSE</ReliableTitle>
            <ReliableSubtitle>
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </ReliableSubtitle>
            <img src={ReliableTechImage} alt="" />
          </ReliableTechMain>
        </FadeOnScroll>

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
