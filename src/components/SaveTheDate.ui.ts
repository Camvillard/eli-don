import React from "react"
import styled from "styled-components"
import { themeColors } from "../styles/variables"

const { beige, darkGray, darkBlue } = themeColors

export const HomepageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url("https://res.cloudinary.com/camvillard/image/upload/v1580763683/eli-don/marble.jpg");
  background-size: cover;
`

export const ShadowImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 80vw;
  z-index: 800000;
  @media (min-width: 768px) {
    top: -12px;
    width: 90vw;
  }
  @media (min-width: 1024px) {
    top: -122px;
    width: 90vw;
  }
  @media (min-width: 1024px) {
    top: -82px;
    width: 56vw;
  }
  @media (min-width: 1280px) {
    width: 60vw;
  }
`

export const SaveTheDateContainer = styled.div`
  background: ${beige};
  position: relative;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  width: 74vw;
  height: 82vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 66vw;
    height: 76vh;
  }
  @media (min-width: 1024px) and (orientation: portrait) {
    height: 68vh;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    height: 60vh;
  }
  @media (min-width: 1280px) {
    width: 60vw;
    height: 60vh;
  }
  @media (min-width: 1440px) {
    width: 56vw;
  }
`
export const SubtitleContainer = styled.div`
  margin-top: 8px;
  position: relative;
  &:after {
    content: "";
    height: 1px;
    width: 20%;
    background: ${darkGray};
    position: absolute;
    top: 74px;
    left: 8px;
  }
  @media (min-width: 768px) {
    margin-top: 4vh;
    margin-left: 4vw;
    &:after {
      content: "";
      height: 2px;
      width: 12vw;
      background: ${darkGray};
      position: absolute;
      top: 28px;
      left: 88px;
    }
  }
`

export const Subtitle = styled.h3`
  text-align: left;
  font-size: 14px;
  margin: 0.2rem auto 0.2rem 8px;
`

export const DetailsContainer = styled.div`
  @media (min-width: 768px) {
    margin-top: -107px;
  }
`

export const WeddingDay = styled.div`
  width: 100%;
  text-align: center;
  svg {
    height: 28vh;
    width: auto;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) and (orientation: portrait) {
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    position: absolute;
    top: -24px;
    right: 16px;
    text-align: right;
    svg {
      height: auto;
      width: 56%;
      text-align: right;
    }
  }
  @media (min-width: 1280px) {
    top: -32px;
    right: -16px;
    svg {
      width: 62%;
      max-height: 40vh;
    }
  }

  @media (min-width: 1440px) {
    top: -32px;
    svg {
      width: 62%;
      max-height: 36vh;
    }
  }
`

export const Credit = styled.p`
  margin: 0;
  font-size: 8px;
  bottom: 160px;
  transform: rotate(-90deg);
  position: absolute;
  right: 4px;
  transform-origin: bottom right;
  svg {
    margin: 0 2px -2px;
  }
  a {
    text-decoration: none;
    color: ${darkGray};
  }
  @media (min-width: 1024px) {
    bottom: 240px;
    font-size: 10px;
  }
`

export const WeddingDetails = styled.div`
  position: relative;
  width: 70%;
  margin: auto;

  .sept {
    height: auto;
    width: 90%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .deux-mille-vingt {
    position: absolute;
    top: 0;
    right: 14px;
    transform: rotate(-90deg);
    transform-origin: top right;
    width: 28%;
    height: auto;
  }

  @media (min-width: 768px) {
    .deux-mille-vingt {
      top: 4px;
      right: 24px;
    }
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    position: absolute;
    width: 70%;
    margin: auto;
    bottom: 0;
    left: 12px;
    .sept {
      position: relative;
    }
  }

  @media (min-width: 1280px) {
    .sept {
      width: 96%;
    }
    .deux-mille-vingt {
      width: 30%;
      right: 18px;
    }
  }
`

export const WeddingNames = styled.div`
  display: flex;
  // width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-left: 2px;
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 3vh;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    margin-left: calc(100% - 120px);
  }
  @media (min-width: 1024px) {
    margin-left: calc(100% - 132px);
  }
  @media (min-width: 1280px) {
    margin-left: calc(100% - 150px);
  }
`

export const WeddingName = styled.h3`
  font-size: 12px;
  text-align: center;
  margin: 0 auto;
  @media (min-width: 768px) {
    text-align: right;
    margin: 0;
  }
  @media (min-width: 1024px) {
    margin: 0;
    align-items: center;
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
  }
`

export const MoreInfo = styled.p`
  font-size: 12px;
  font-family: Made Black;
  text-align: center;
  margin: 0 auto 4vh;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
    bottom: 4vh;
  }
`
