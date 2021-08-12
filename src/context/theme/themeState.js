import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './themeContext';
import ThemeReducer from './themeReducer';
import { CHANGE_MODE } from '../../utils/constants';

const theme = {
  light: {
    backgroundColor: '#f9f9f9',
    bodyGlobalColor: 'black',
    titleHomeColor: 'black',
    titleShadow:
      '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5), 3px -2px 1px rgba(14,30,20,0.46);text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5), 3px -2px 6px rgba(14,30,20,0.4)',
    headerBackgroundColor: '#e93d44',
    cardBackground: '#ffffff',
    cardShadow: '0px 4px 40px rgba(0, 0, 0, 0.3)',
    descriptionColor: '#545d7a',
    backgroundCardRelated: '#dbd9d9',
  },
  dark: {
    backgroundColor: '#303030',
    bodyGlobalColor: 'white',
    titleHomeColor: 'white',
    titleShadow:
      '-1px -1px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(255,255,255,.5), 3px -2px 1px rgba(230,241,234,0.46);text-shadow: -1px -1px 1px rgba(0,0,0,.1), 1px 1px 1px rgba(255,255,255,.5), 3px -2px 6px rgba(230,241,234,0.4)',
    headerBackgroundColor: '#72161a',
    cardBackground: '#515151',
    cardShadow: '0px 4px 10px rgba(255, 255, 255, 0.2)',
    descriptionColor: '#d6d6d9',
    backgroundCardRelated: '#515151',
  },
};

const ThemeState = ({ children }) => {
  const initialState = {
    theme: theme.light,
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const changeTheme = () => {
    const newTheme = state.theme === theme.light ? theme.dark : theme.light;
    dispatch({
      type: CHANGE_MODE,
      payload: newTheme,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeState.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeState;
