import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

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
  children: PropTypes.element.isRequired,
};

export default Layout;
