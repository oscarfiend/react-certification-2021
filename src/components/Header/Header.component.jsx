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
        <MenuButton type="checkbox" disabled/>
        <ContainerHamburguer>
          <SpanHamburguer></SpanHamburguer>
          <SpanHamburguer></SpanHamburguer>
          <SpanHamburguer></SpanHamburguer>
        </ContainerHamburguer>
        <Form>
          <Search placeholder="Search" disabled />
        </Form>
      </HeaderItem>
      <HeaderItemRigth>
        <Toggle type="checkbox" id="toggle_checkbox" disabled/>
        <label htmlFor="toggle_checkbox"></label>
        <LabelToggle htmlFor="toggle_checkbox">Light Mode</LabelToggle>
        <Avatar src={avatar} alt="Avatar" />
      </HeaderItemRigth>
    </HeaderContainer>
  );
};

export default Header;
