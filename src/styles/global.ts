import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: #0d2c5b;
    -webkit-font-smoothing: antialiased;

    background-color: #fff;
  }

  body, input, button, select, textarea {
    font-family: 'Montserrat', serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
