import React from "react";
import styled from "styled-components";

interface Props {
  dimensions?: number;
  color?: string;
}

function Loader({ dimensions = 10, color = "#7289da" }: Props) {
  const spin = `${translate(dimensions)}px`;

  const Frame = styled.div<StyledProps>`
    max-width: fit-content;

    .image {
      vertical-align: bottom;
    }

    .image.image-loading {
      -ms-flex-align: center;
      -ms-flex-pack: center;
      -webkit-box-align: center;
      -webkit-box-pack: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.05);
      background-size: 100% 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: center;
    }

    .image {
      -moz-user-select: text;
      -ms-user-select: text;
      -webkit-user-select: text;
      display: inline-block;
      position: relative;
      user-select: text;
    }

    .spinner-wandering-cubes .spinner-item {
      -webkit-animation: spinner-wandering-cubes 1.8s infinite ease-in-out;
      animation: spinner-wandering-cubes 1.8s infinite ease-in-out;
      background-color: black;
      height: 10px;
      left: 0;
      position: absolute;
      top: 0;
      width: 10px;
    }
    .spinner-wandering-cubes .spinner-item:last-child {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }

    .spinner-wandering-cubes .spinner-item {
      -webkit-animation: spinner-wandering-cubes 1.8s infinite ease-in-out;
      animation: spinner-wandering-cubes 1.8s infinite ease-in-out;
      background-color: ${(props) => props.color};
      height: ${(props) => props.dimensions}px;
      left: 0;
      position: absolute;
      top: 0;
      width: ${(props) => props.dimensions}px;
    }
    @keyframes spinner-wandering-cubes {
      25% {
        -webkit-transform: translateX(${spin}) rotate(-90deg) scale(0.5);
        transform: translateX(${spin}) rotate(-90deg) scale(0.5);
      }
      50% {
        -webkit-transform: translateX(${spin}) translateY(${spin})
          rotate(-180deg);
        transform: translateX(${spin}) translateY(${spin}) rotate(-180deg);
      }
      75% {
        -webkit-transform: translateX(0) translateY(${spin}) rotate(-270deg)
          scale(0.5);
        transform: translateX(0) translateY(${spin}) rotate(-270deg) scale(0.5);
      }
      to {
        -webkit-transform: rotate(-1turn);
        transform: rotate(-1turn);
      }
    }
  `;

  return (
    <Frame dimensions={dimensions} color={color}>
      <span className="image image-loading">
        <span className="spinner">
          <span className="spinner-inner spinner-wandering-cubes">
            <span className="spinner-item"></span>
            <span className="spinner-item"></span>
          </span>
        </span>
      </span>
    </Frame>
  );
}

interface StyledProps {
  dimensions: number;
  color: string;
}

const translate = (dimension: number) => {
  return 2.2 * dimension;
};

export default Loader;
