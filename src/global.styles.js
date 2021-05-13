import styled,{ createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'New Tegomin', serif;
    background-color: #dfe4ea;
  }
`;

export const AppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;