import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  height: 100vh;
  background: ${theme.colors.offWhite};
  overflow-y: hidden;
  display: flex;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 9rem;
  font-weight: 900;
  font-family: ${theme.fonts.display};
  color: ${theme.colors.notQuiteBlack};
  position: relative;

  ::before {
    position: absolute;
    content: "404";
    top: 0;
    width: 100%;
    height: 100%;
    background: #f6f6f7;
    left: 2px;
    text-shadow: -2px 0
      hsl(236, calc(var(--saturation-factor, 1) * 83.3%), 92.9%);
    clip: rect(24px, 550px, 90px, 0);
    animation: glitch-anim-before 4s linear infinite alternate-reverse;
  }

  ::after {
    position: absolute;
    content: "404";
    top: 0;
    width: 100%;
    height: 100%;
    background: #f6f6f7;
    left: -2px;
    text-shadow: -2px 0
      rgba(hsl(235, calc(var(--saturation-factor, 1) * 85.6%), 64.7%), 0.3);
    clip: rect(85px, 550px, 140px, 0);
    animation: glitch-anim-after 4s linear infinite alternate-reverse;
  }

  @keyframes glitch-anim-before {
    10.52631579% {
      clip: rect(65px, 9999px, 200px, 0);
    }
    15.78947368% {
      clip: rect(8px, 9999px, 200px, 0);
    }
    21.05263158% {
      clip: rect(51px, 9999px, 159px, 0);
    }
    26.31578947% {
      clip: rect(6px, 9999px, 82px, 0);
    }
    31.57894737% {
      clip: rect(1px, 9999px, 106px, 0);
    }
    36.84210526% {
      clip: rect(17px, 9999px, 69px, 0);
    }
    42.10526316% {
      clip: rect(65px, 9999px, 144px, 0);
    }
    47.36842105% {
      clip: rect(1px, 9999px, 91px, 0);
    }
    52.63157895% {
      clip: rect(18px, 9999px, 209px, 0);
    }
    57.89473684% {
      clip: rect(14px, 9999px, 175px, 0);
    }
    63.15789474% {
      clip: rect(61px, 9999px, 107px, 0);
    }
    68.42105263% {
      clip: rect(73px, 9999px, 178px, 0);
    }
    73.68421053% {
      clip: rect(53px, 9999px, 207px, 0);
    }
    78.94736842% {
      clip: rect(33px, 9999px, 199px, 0);
    }
    84.21052632% {
      clip: rect(73px, 9999px, 144px, 0);
    }
    89.47368421% {
      clip: rect(79px, 9999px, 163px, 0);
    }
    94.73684211% {
      clip: rect(1px, 9999px, 76px, 0);
    }
    to {
      clip: rect(64px, 9999px, 117px, 0);
    }
  }

  @keyframes glitch-anim-after {
    0% {
      clip: rect(3px, 9999px, 86px, 0);
    }
    6.66666667% {
      clip: rect(27px, 9999px, 128px, 0);
    }
    13.33333333% {
      clip: rect(35px, 9999px, 71px, 0);
    }
    20% {
      clip: rect(10px, 9999px, 134px, 0);
    }
    26.66666667% {
      clip: rect(23px, 9999px, 145px, 0);
    }
    33.33333333% {
      clip: rect(40px, 9999px, 80px, 0);
    }
    40% {
      clip: rect(33px, 9999px, 153px, 0);
    }
    46.66666667% {
      clip: rect(50px, 9999px, 84px, 0);
    }
    53.33333333% {
      clip: rect(57px, 9999px, 188px, 0);
    }
    60% {
      clip: rect(79px, 9999px, 65px, 0);
    }
    66.66666667% {
      clip: rect(21px, 9999px, 168px, 0);
    }
    73.33333333% {
      clip: rect(62px, 9999px, 119px, 0);
    }
    80% {
      clip: rect(4px, 9999px, 126px, 0);
    }
    86.66666667% {
      clip: rect(10px, 9999px, 133px, 0);
    }
    93.33333333% {
      clip: rect(51px, 9999px, 196px, 0);
    }
    to {
      clip: rect(77px, 9999px, 73px, 0);
    }
  }
`;

export const SubTitle = styled.h3`
  text-transform: uppercase;
  color: ${theme.colors.darkGrey};
  font-family: ${theme.fonts.subtitle};
  font-size: 1.6rem;
  font-weight: 800;
`;

export const Body = styled.p`
  color: ${theme.colors.grey404};
  font-family: ${theme.fonts.body};
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 50px;
`;

export const Info = styled.p`
  color: ${theme.colors.grey404};
  font-family: ${theme.fonts.body};
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: -10px;
`;

export const Wrapper = styled.div`
  max-height: fit-content;
  padding: 80px 50px;
`;

export const HamsterImage = styled.img`
  width: 900px;
  margin: 30px 50px;
  height: 540px;
`;
