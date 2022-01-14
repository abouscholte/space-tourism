import { createGlobalStyle } from 'styled-components';
import Background from '../assets/home/background-home-desktop.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0B0D17;
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
    color: #fff;
    font-family: 'Barlow', sans-serif;
    min-height: 100vh;
    height: 100vh;
    margin: 0;
  }
`;

export default GlobalStyle;
