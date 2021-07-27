import React from 'react';
import {
  Avatar,
  ContainerHamburguer,
  Form,
  HeaderContainer,
  HeaderItem,
  HeaderItemRigth,
  LabelToggle,
  MenuButton,
  Search,
  SpanHamburguer,
  Toggle,
} from './Header.styled';
import avatar from '../../img/avatar.png';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItem>

        {/* hamburguer menu component */}
        <MenuButton type="checkbox"  data-testid="hamburguerMenu" disabled/>
        <ContainerHamburguer>
          <SpanHamburguer></SpanHamburguer>
          <SpanHamburguer></SpanHamburguer>
          <SpanHamburguer></SpanHamburguer>
        </ContainerHamburguer>

        {/* form to search videos */}
        <Form data-testid="search_form" >
          <Search id="search" placeholder="Search" data-testid="search_field" disabled/>
        </Form>
      </HeaderItem>
      <HeaderItemRigth>
        
        {/* toogle component */}
        <Toggle type="checkbox" id="toggle_checkbox" data-testid="toggle_checkbox" disabled/>
        <label htmlFor="toggle_checkbox"></label>
        <LabelToggle htmlFor="toggle_checkbox">Light Mode</LabelToggle>

        {/* component to login */}
        <Avatar src={avatar} alt="Avatar"  data-testid="avatar_login"/>
      </HeaderItemRigth>
    </HeaderContainer>
  );
};

export default Header;
