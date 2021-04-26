import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --secondary-color: hsl(106, 57%, 33%, 1);
    --primary-color: hsl(106, 57%, 33%, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    font-family: "Open Sans", Roboto, Segoe UI, Geneva, Verdana, sans-serif;
  }

  a button textarea input li {
    outline: none;
    border: none;
    list-style: none;
    text-decoration: none;
  }
`;

export default GlobalStyle;
