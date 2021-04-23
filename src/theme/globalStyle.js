import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  box-sizing:border-box;
  body {
    margin:0;
    font-size: 16px;
  }
  a{
    text-decoration: none;
    &:active,&:visited{
      color: unset;
    }
  }
`;

export default GlobalStyle;
