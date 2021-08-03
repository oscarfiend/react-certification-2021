import React from 'react';
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

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItem>
        {/* hamburguer menu component */}
        <MenuButton type="checkbox" data-testid="hamburguerMenu" disabled />
        <ContainerHamburguer>
          <SpanHamburguer></SpanHamburguer>
          <SpanHamburguer></SpanHamburguer>
          <SpanHamburguer></SpanHamburguer>
        </ContainerHamburguer>

        <SearchForm />
      </HeaderItem>
      <HeaderItemRigth>
        {/* toogle component */}
        <Toggle type="checkbox" id="toggle_checkbox" data-testid="toggle_checkbox" />
        <label htmlFor="toggle_checkbox"></label>
        <LabelToggle htmlFor="toggle_checkbox">Light Mode</LabelToggle>

        {/* component to login */}
        <Avatar src={avatar} alt="Avatar" data-testid="avatar_login" />
      </HeaderItemRigth>
    </HeaderContainer>
  );
};

export default Header;
