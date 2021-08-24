import React from 'react';
import ReactDOM from 'react-dom';

import './Login.css';
import { Modal, ModalShadow } from './Login.styled';

const LoginPage = ({ setShowLogin }) => {
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
              <div>
                <label htmlFor="username">
                  Username
                  <input autoComplete="false" type="text" id="username" name="username" />
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
                  />
                </label>
              </div>

              <div className="file">
                <input
                  className="button btn-cancel"
                  type="submit"
                  value="Cancel"
                  onClick={() => setShowLogin(false)}
                />
                <input className="button" type="submit" value="Sign In" />
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
    document.getElementById('modal')
  );
};

export default LoginPage;
