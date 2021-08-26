import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.component';
import AuthState from './context/auth/authState';
import ThemeState from './context/theme/themeState';
import VideoState from './context/video/videoState';

import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <VideoState>
      <ThemeState>
        <AuthState>
          <App />
        </AuthState>
      </ThemeState>
    </VideoState>
  </React.StrictMode>,
  document.getElementById('root')
);
