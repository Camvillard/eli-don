import React from "react"
import styled from "styled-components"
import { themeColors } from "../styles/variables"

const { beige, darkGray } = themeColors

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
`

export const SaveTheDateContainer = styled.div`
  background: ${beige};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  width: 74vw;
  height: 82vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 66vw;
    height: 76vh;
  }
  @media (min-width: 1024px) {
    height: 60vh;
  }
  @media (min-width: 1280px) {
    width: 60vw;
    height: 64vh;
  }
  @media (min-width: 1440px) {
    width: 56vw;
    height: 32vw;
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
  @media (min-width: 1024px) {
    font-size: 440px;
    // position: absolute;
    top: -26vh;
    right: 0;
  }
  @media (min-width: 1280px) {
    font-size: 520px;
    top: -26vh;
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
  @media (min-width: 1024px) {
  }
`

// export const WeddingMonth = styled.div`
//   // margin: 0 auto;
//   position: relative;
//   text-align: center;
//   display: inline;
//   width: 70%;
//   & > svg {
//     height: auto;
//     width: 96%;
//     top: 0;
//     left: 0;
//   }
//   @media (min-width: 768px) {
//     margin: 0;
//     @media (min-width: 1024px) {
//     }
//   }
// `

export const WeddingNames = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-left: 2px;
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    // bottom: 4vh;
    // right: 3vw;
    margin-bottom: 3vh;
  }
  @media (min-width: 1024px) {
    width: auto;
    flex-direction: column;
    align-items: center;
    bottom: 4vh;
    right: 4vw;
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
  }
`

export const MoreInfo = styled.p`
  font-size: 12px;
  font-family: Made Black;
  // position: fixed;
  // bottom: 8px;
  // width: 80%;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 16px;
    bottom: 4vh;
  }
`

// export const WeddingMonth = styled.h2`
//   margin: 0 auto;
//   // margin-top: -56px;
//   // margin-left: 33px;
//   text-transform: uppercase;
//   font-size: 64px;
//   position: relative;
//   top: -40px;
//   left: -12px;
//   text-align: center;
//   display: inline;
//   // &:after {
//   //   content: "2020";
//   //   color: ${darkGray};
//   //   position: absolute;
//   //   top: 12px;
//   //   font-size: 22px;
//   //   right: 0;
//   //   transform: rotate(-90deg);
//   //   transform-origin: top right;
//   // }
//   @media (min-width: 768px) {
//     margin: 0;
//     text-transform: uppercase;
//     font-size: 140px;
//     // &:after {
//     //   top: 25px;
//     //   font-size: 46px;
//     // }
//     @media (min-width: 1024px) {
//       font-size: 170px;
//       bottom: -34px;
//       // &:after {
//       //   top: 34px;
//       //   font-size: 54px;
//       //   right: 4px;
//       // }
//     }
//   }
// `
