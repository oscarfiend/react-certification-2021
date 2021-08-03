import styled from 'styled-components';

export const Search = styled.input`
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 100%;
  background: #ededed url('https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png')
    no-repeat 9px center;
  border: solid 1px #ccc;
  padding: 5px 5px 5px 32px;
  width: 185px;
  border-radius: 6px;
  margin-left: 10px;
  transition: all 0.5s;

  &:hover,
  :focus {
    width: 250px;
    background-color: #fff;
    border-color: #66cc75;
    box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  }

  @media (max-width: 600px) {
    width: 100%;
    &:hover,
    :focus {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  @media (max-width: 600px) {
    width: 100%;
  }
`;
