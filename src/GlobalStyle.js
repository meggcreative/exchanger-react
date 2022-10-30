import { createGlobalStyle } from "styled-components";
import cash from "./cash.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*,
::after,
::before {
  box-sizing: inherit;
}
body {
  font-family: "Source Sans Pro", sans-serif;
  background-image: url("${cash}");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}

`;
