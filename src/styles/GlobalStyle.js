import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    text-decoration: none;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Noto Sans KR', sans-serif ;
  }
  ul, li, dl, dt, dd{
    list-style: none;
  }
  
  a, button, input {
    outline: none;
    cursor: pointer;
  }
`;
