import styled, { createGlobalStyle } from "styled-components"
import  "../styles/fonts.css"
import { themeColors } from "../styles/variables"

const { beige, darkGray } = themeColors

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');

  body {
    font-family: Made Regular;
    margin: 0;
  }

  h1, h2 {
    color: ${darkGray};
    font-family: Made Black;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    color: ${darkGray};
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 6px;
  }
`
