import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #e93d44;
  color: white;
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1100;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  position: relative;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HeaderItemRigth = styled(HeaderItem)`
  justify-content: space-between;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const MenuButton = styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  cursor: pointer;
  top: 7px;
  left: 15px;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;
`;

export const SpanHamburguer = styled.span`
  display: block;
  width: 25px;
  height: 2.5px;
  margin-bottom: 4px;
  position: relative;
  background: #ffffff;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`;

export const ContainerHamburguer = styled.div`
  display: 'flex';
  flex-direction: 'column';
`;

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
  }
`;

export const Form = styled.form`
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Toggle = styled.input`
  display: none;

  + label {
    position: relative;
    top: 18px;
    right: 0;
    left: 0;
    display: block;
    width: 70px;
    height: 35px;
    margin: 0 auto;
    transform: translateY(-50%);
    cursor: pointer;
    &:before {
      top: 4px;
      left: 4px;
      width: 27px;
      height: 27px;
      border: 3px solid white;
    }

    &:after {
      top: 0;
      right: 0;
      width: 70px;
      height: 35px;
      border: 3px solid #143240;
    }
    &:before,
    :after {
      content: '';
      position: absolute;
      border-radius: 50px;
      box-sizing: border-box;
      transition: 0.5s ease top, 0.5s ease left, 0.5s ease right, 0.5s ease width,
        0.5s ease height, 0.5s ease border-color;
    }
  }

  &:checked + label:before {
    top: 0;
    left: 0;
    width: 70px;
    height: 35px;
    border-color: #143240;
  }

  &:checked + label:after {
    top: 4px;
    right: 4px;
    width: 27px;
    height: 27px;
    border-color: white;
  }
`;

export const LabelToggle = styled.label`
  cursor: pointer;
  margin-left: 15px;
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
`;
