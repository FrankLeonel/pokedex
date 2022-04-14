import { createGlobalStyle } from "styled-components";
import { primaryFont } from "themes/typography";

export const GlobalStyles = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.theme.background};
    transition: background-color 1s ease;
    background-blend-mode: lighten;
    background-repeat: no-repeat;
    background-size: 70vw;
    background-position-x: 64vw;
    background-position-y: -20vw;
    background-attachment: fixed;
    font-family: ${primaryFont};
  };

  button {
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    svg: {
      margin: 0 10px 0;
    };
  };
`;
