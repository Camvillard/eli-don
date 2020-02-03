import React from "react"
import styled from "styled-components"
import { themeColors } from "../styles/variables"

const { beige, darkGray } = themeColors

export const HomepageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SaveTheDateContainer = styled.div`
  background: ${beige};
  width: 74vw;
  height: 82vh;
  margin: auto;
  position: relative;
  overflow: hidden;
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
    position: absolute;
    top: 4vh;
    left: 3vw;
    &:after {
      content: "";
      height: 2px;
      width: 12vw;
      background: ${darkGray};
      position: absolute;
      top: 24px;
      left: 90%;
    }
  }
`

export const Subtitle = styled.h3`
  text-align: left;
  font-size: 14px;
  margin: 0.2rem auto 0.2rem 8px;
`

export const WeddingDay = styled.h2`
  font-size: 242px;
  text-align: center;
  margin: 56px 0 0 0;
  @media (min-width: 768px) {
    font-size: 420px;
    margin-top: 100px;
  }
  @media (min-width: 1024px) {
    font-size: 440px;
    position: absolute;
    top: -26vh;
    right: 0;
  }
  @media (min-width: 1280px) {
    font-size: 520px;
    top: -26vh;
  }
`

export const WeddingDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    margin-top: -100px;
    position: absolute;
    bottom: 0;
  }
`

export const WeddingMonth = styled.h2`
  margin: 0 auto;
  margin-top: -56px;
  margin-left: 33px;
  text-transform: uppercase;
  font-size: 78px;
  position: relative;
  text-align: center;
  display: inline;
  &:after {
    content: "2020";
    color: ${darkGray};
    position: absolute;
    top: 14px;
    font-size: 28px;
    right: 0;
    transform: rotate(-90deg);
    transform-origin: top right;
  }
  @media (min-width: 768px) {
    margin: 0;
    text-transform: uppercase;
    font-size: 140px;
    &:after {
      top: 25px;
      font-size: 46px;
    }
    @media (min-width: 1024px) {
      font-size: 170px;
      bottom: -34px;
      &:after {
        top: 34px;
        font-size: 54px;
        right: 4px;
      }
    }
  }
`

export const WeddingYear = styled.h4`
  text-align: right;
  margin: 0 auto;
  margin-right: 44px;
  margin-top: -12px;
  font-size: 1.4rem;
  @media (min-width: 768px) {
    display: none;
  }
`

export const WeddingNames = styled.div`
  position: absolute;
  right: 0;
  bottom: 8px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    bottom: 4vh;
    right: 3vw;
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
