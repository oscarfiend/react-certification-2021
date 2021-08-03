import React from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
