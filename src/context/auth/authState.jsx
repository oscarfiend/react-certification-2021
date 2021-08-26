import React from 'react';
import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import AuthContext from './authContext';

const AuthState = ({ children }) => {
  const { user, autenticated, signin, signout, authError } = useAuth();

  return (
    <AuthContext.Provider value={{ user, authError, autenticated, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthState;
