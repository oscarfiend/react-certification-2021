import React from 'react';
import Header from '../Header';
import { Content } from './Layout.styled';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}

export default Layout;
