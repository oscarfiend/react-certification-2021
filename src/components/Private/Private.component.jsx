import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

function Private({ children, ...rest }) {
  const authContext = useContext(AuthContext);
  const { autenticated } = authContext;

  return (
    <Route {...rest} render={() => (autenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
