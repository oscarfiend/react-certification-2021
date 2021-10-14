import React, { useContext } from 'react';
import {
  Avatar,
  ContainerHamburguer,
  HeaderContainer,
  HeaderItem,
  HeaderItemRigth,
  LabelToggle,
  MenuButton,
  SpanHamburguer,
  Toggle,
} from './Header.styled';
import avatar from '../../img/avatar.png';
import SearchForm from './Search';
import ThemeContext from '../../context/theme/themeContext';

const Header = () => {
  const themeContext = useContext(ThemeContext);
  const { theme, changeTheme } = themeContext;

  return (
    <HeaderContainer theme={theme}>
      <HeaderItem>
        {/* hamburguer menu component */}
        <MenuButton type="checkbox" data-testid="hamburguerMenu" disabled />
        <ContainerHamburguer>
          <SpanHamburguer />
          <SpanHamburguer />
          <SpanHamburguer />
        </ContainerHamburguer>

        <SearchForm />
      </HeaderItem>
      <HeaderItemRigth>
        {/* toogle component */}
        <Toggle
          type="checkbox"
          id="toggle_checkbox"
          data-testid="toggle_checkbox"
          onClick={changeTheme}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="toggle_checkbox" />
        <LabelToggle htmlFor="toggle_checkbox">
          {theme.mode === 'dark' ? 'Dark ' : 'Light '}Mode{' '}
        </LabelToggle>

        {/* component to login */}
        <Avatar src={avatar} alt="Avatar" data-testid="avatar_login" />
      </HeaderItemRigth>
    </HeaderContainer>
  );
};

export default Header;
