import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';
import {
  HamburgerMenu,
  Menu,
  MenuButton,
  MenuCover,
  SpanHamburguer,
} from './Menu.styled';

const SideMenu = () => {
  const authContext = useContext(AuthContext);
  const { autenticated } = authContext;
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
        {autenticated && (
          <Link to="/favorites" onClick={hidenMenu}>
            <li>Favorites</li>
          </Link>
        )}
      </Menu>
    </HamburgerMenu>
  );
};

export default SideMenu;
