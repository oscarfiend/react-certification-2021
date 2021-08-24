import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.bodyGlobalColor}
  }
  
  a {
  display: block;
  margin-top: 3rem;
  padding: 1rem 3rem;
  background-color: #f0575d;
  transition: color 0.3s ease-out, background-color 0.3s ease-out,
    box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;
}

a:hover {
  background-color: #e93d44;
}
`;

export default GlobalStyle;
