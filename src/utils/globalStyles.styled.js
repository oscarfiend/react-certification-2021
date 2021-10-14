import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.bodyGlobalColor}
  }
`;

export default GlobalStyle;
