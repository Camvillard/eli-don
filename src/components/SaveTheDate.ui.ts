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
`
export const SubtitleContainer = styled.div`
  &:after {
    content: "";
    height: 1px;
    width: 20%;
    background: ${darkGray};
    position: absolute;
    top: 82px;
    left: 2vw;
  }
  @media (min-width: 768px) {
    position: absolute;
    top: 8vh;
    left: 3vw;
    &:after {
      content: "";
      height: 2px;
      width: 12vw;
      background: ${darkGray};
      position: absolute;
      top: 48%;
      left: 90%;
    }
  }
`

export const Subtitle = styled.h3`
  text-align: left;
  font-size: 1rem;
  margin: 0.2rem auto 0.2rem 2vw;
`

export const WeddingDay = styled.h2`
  font-size: 38vh;
  text-align: center;
  margin: 20px 0 0 0;
  @media (min-width: 768px) {
    font-size: 42vh;
  }
  @media (min-width: 1024px) {
    font-size: 42vh;
    position: absolute;
    top: -16vh;
    right: 0;
  }
  @media (min-width: 1280px) {
    font-size: 42vh;
  }
`

export const WeddingDetails = styled.div`
  @media (min-width: 768px) {
    bottom: 0;
    left: 0;
    height: 50%;
    position: absolute;
    width: 72%;
    display: flex;
  }
`

export const WeddingMonth = styled.h2`
  margin: 0 auto;
  margin-top: -56px;
  text-transform: uppercase;
  font-size: 14vh;
  position: relative;
  text-align: center;
  @media (min-width: 768px) {
    margin: 0;
    position: absolute;
    left: 0;
    bottom: -6vh;
    text-transform: uppercase;
    font-size: 28vh;
    &:after {
      content: "2020";
      color: ${darkGray};
      position: absolute;
      top: 5vh;
      font-size: 9vh;
      right: 0;
      transform: rotate(-90deg);
      transform-origin: top right;
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
  bottom: 1vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 768px) {
    bottom: 4vh;
    right: 3vw;
    text-align: center;
  }
`

export const WeddingName = styled.h3`
  font-size: 0.8rem;
  text-align: center;
  margin: 0 auto;
  @media (min-width: 768px) {
    text-align: center;
  }
`
