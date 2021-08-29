import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import AuthContext from '../../context/auth/authContext';
// import useAuth from '../../hooks/useAuth';

import './Login.css';
import { Modal, ModalShadow } from './Login.styled';

const LoginPage = ({ setShowLogin, element = 'div', className = 'root-portal' }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const [container] = useState(() => {
    const el = document.createElement(element);
    el.classList.add(className);
    return el;
  });

  const authContext = useContext(AuthContext);
  const { autenticated, signin, authError } = authContext;

  useEffect(() => {
    if (autenticated) setShowLogin(false);
  }, [autenticated, setShowLogin]);

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(email, password);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const key = e.target.name;
    setUser({ ...user, [key]: value });
  };

  return ReactDOM.createPortal(
    <>
      <ModalShadow onClick={() => setShowLogin(false)} />
      <Modal>
        <div className="align">
          <div className="login">
            <header className="login__header">
              <h2>
                <svg className="icon">
                  <use xlinkHref="#icon-lock" />
                </svg>
                Sign In
              </h2>
            </header>

            <form className="login__form" autoComplete="off">
              {authError && <p>Username or password invalid</p>}
              <div>
                <label htmlFor="email">
                  email
                  <input
                    autoComplete="false"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div>
                <label htmlFor="password">
                  Password
                  <input
                    autoComplete="false"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="file">
                <input
                  className="button btn-cancel"
                  type="button"
                  value="Cancel"
                  onClick={() => setShowLogin(false)}
                />
                <input
                  className="button"
                  type="submit"
                  value="Sign In"
                  onClick={(e) => handleSubmit(e)}
                />
              </div>
            </form>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="icons">
            <symbol id="icon-lock" viewBox="0 0 448 512">
              <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
            </symbol>
          </svg>
        </div>
      </Modal>
    </>,
    container
  );
};

export default LoginPage;
