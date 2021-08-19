import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.component';
import ThemeState from './context/theme/themeState';
import VideoState from './context/video/videoState';

import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <VideoState>
      <ThemeState>
        <App />
      </ThemeState>
    </VideoState>
  </React.StrictMode>,
  document.getElementById('root')
);
