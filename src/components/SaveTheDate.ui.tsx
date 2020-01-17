import React from "react";
import styled from "styled-components";
import { themeColors } from "../styles/variables";

const { beige, darkGray } = themeColors


export const SaveTheDateContainer = styled.div`
  background: ${beige};
  width: 65vw;
  height: 76vh;
  margin: auto;
  position: relative;
  overflow: hidden;
`
export const SubtitleContainer = styled.div`
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
`

export const Subtitle = styled.h3``

export const WeddingDay = styled.h2`
  position: absolute;
  top: -16vh;
  right: 0;
  font-size: 72vh;
  margin: 0;
`

export const WeddingMonth = styled.h2`
  margin: 0;
  position: absolute;
  bottom: -6vh;
  left: 0;
  text-transform: uppercase;
  font-size: 28vh;
`

export const WeddingYear = styled.h2`
  position: absolute;
  right: 182px;
  bottom: 6vh;
  transform: rotate(-90deg);
  margin: 0;
  font-size: 9vh;
`

export const WeddingNames = styled.div`
  position: absolute;
  right: 3vw;
  bottom: 4vh;
  text-align: center;
`

export const WeddingName = styled.h3``
