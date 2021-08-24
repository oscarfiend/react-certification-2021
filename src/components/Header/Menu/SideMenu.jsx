import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  HamburgerMenu,
  Menu,
  MenuButton,
  MenuCover,
  SpanHamburguer,
} from './Menu.styled';

const SideMenu = () => {
  const ref = useRef(null);

  const hidenMenu = () => {
    ref.current.checked = false;
  };

  return (
    <HamburgerMenu>
      <MenuButton ref={ref} type="checkbox" data-testid="hamburguerMenu" />
      <MenuCover onClick={hidenMenu} />
      <SpanHamburguer />
      <SpanHamburguer />
      <SpanHamburguer />

      <Menu>
        <Link to="/" onClick={hidenMenu}>
          <li>Home</li>
        </Link>
        <Link to="/" onClick={hidenMenu}>
          <li>Home</li>
        </Link>
      </Menu>
    </HamburgerMenu>
  );
};

export default SideMenu;
