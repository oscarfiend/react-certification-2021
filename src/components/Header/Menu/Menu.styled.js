import styled from 'styled-components';

export const HamburgerMenu = styled.div`
  display: block;
  position: relative;
  top: 2px;
  left: 0px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
  height: 100%;

  a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
    padding: 0;
    text-align: center;
    margin-top: 20px;
  }

  a:hover {
    color: white;
  }
`;

export const SpanHamburguer = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #ffffff;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`;

export const Menu = styled.ul`
  position: fixed;
  top: 10px;
  width: 300px;
  margin: -10px 0 0 -50px;
  padding: 50px;
  padding-top: 45px;
  height: 100vh;

  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  li {
    padding: 10px 0;
    font-size: 22px;
  }
`;

export const MenuCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: none;
  overflow: hidden;
  transition: display 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
`;

export const MenuButton = styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  cursor: pointer;
  top: -5px;
  left: -5px;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;

  &:checked ~ ${SpanHamburguer} {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  &:checked ~ ${SpanHamburguer}:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  &:checked ~ ${SpanHamburguer}:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  &:checked ~ ${Menu} {
    transform: none;
  }

  &:checked ~ ${MenuCover} {
    display: block;
  }
`;

export const ContainerHamburguer = styled.div`
  display: 'flex';
  flex-direction: 'column';
`;
