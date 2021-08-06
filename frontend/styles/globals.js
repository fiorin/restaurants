import { createGlobalStyle } from "styled-components";
import theme from '../config/theme'

const { colors } = theme;
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${colors.text};
  }
  html, body {
    min-height: 100vh;
    background-color:${colors.background};
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;