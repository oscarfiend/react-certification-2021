import React, { useContext, useState } from 'react';
import {
  Avatar,
  Dropdown,
  DropdownContent,
  DropdownOption,
  HeaderContainer,
  HeaderItem,
  HeaderItemRigth,
  LabelToggle,
  Toggle,
} from './Header.styled';
import avatar from '../../img/avatar.png';
import avatarLogin from '../../img/avatar_login.png';
import SearchForm from './Search';
import ThemeContext from '../../context/theme/themeContext';
import SideMenu from './Menu';
import LoginPage from '../../pages/Login';
import AuthContext from '../../context/auth/authContext';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const themeContext = useContext(ThemeContext);
  const { theme, changeTheme } = themeContext;

  const authContext = useContext(AuthContext);
  const { signout, autenticated, user } = authContext;

  return (
    <>
      <HeaderContainer theme={theme}>
        <HeaderItem>
          <SideMenu />
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
          <Dropdown>
            <Avatar
              src={user ? avatarLogin : avatar}
              alt="Avatar"
              data-testid="avatar_login"
            />
            <DropdownContent>
              {autenticated ? (
                <DropdownOption ownOption onClick={signout}>
                  Logout
                </DropdownOption>
              ) : (
                <DropdownOption onClick={() => setShowLogin(true)}>Login</DropdownOption>
              )}
            </DropdownContent>
          </Dropdown>
        </HeaderItemRigth>
      </HeaderContainer>
      {showLogin && <LoginPage setShowLogin={setShowLogin} />}
    </>
  );
};

export default Header;
