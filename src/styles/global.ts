import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 60%;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: ${props => props.theme.colors.background}
  }

  body,
  input,
  textarea,
  button {
    font: 500 1.6rem Poppins;
  }

  .container {
    width: 90vw;
    max-width: 1120px;
  }

  @media(min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;

