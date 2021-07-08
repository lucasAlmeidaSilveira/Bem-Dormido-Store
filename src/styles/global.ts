import { createGlobalStyle } from 'styled-components';
import curvasImg from '../assets/curvas.svg'

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: linear-gradient(106.98deg, #007bb4 37.6%, #00a3ff 99.59%);
    --blue: #007bb4;
    --green: #2CC8A7;
    --yellow: #f3cc30;
    --red: #AA0000;
    --red-40: rgba(170, 0, 0, 0.4);
    --white: #f5fcff;
    --gray-20: rgba(196, 196, 196, 0.2);
    --gray-50: #D8E3E7;
    --gray-90: #526475;
    --black: #061B2E;    
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body{
    background: no-repeat url(${curvasImg}), var(--bg) fixed;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  body, input, textarea, button{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 700;
  }

  html {
    font-size: 62.5%; /* 10px */
  }

  button{
    cursor: pointer;
  }

  img{
    image-rendering: pixelated;
  }

  [disabled]{
    opacity: .6;
    cursor: not-allowed;
  }

  .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
`;
