import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  @font-face {
      font-family: QuadraSans-Regular;
      src: url('/Quadra-Regular.woff')
      format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: QuadraSans-Bold;
      src: url('/Quadra-Bold.woff')
      format('woff');
      font-weight: normal;
      font-style: normal;
  }
  html{
      font-size: 1vw;
  }
  body{
    padding: 0;
    margin: 0;
    font-family: "QuadraSans-Regular", sans-serif;
    text-rendering: optimizeLegibility;
  }
  a {
    color: ${theme.color.primary};
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }

  @media only screen and (max-width: 768px) {
    html,body {
      font-size: 3vw;
    }
  }

  @media only screen and (max-width: 576px) {
    html,body {
      font-size: 4vw;
    }
  }
`;

export default GlobalStyle;
