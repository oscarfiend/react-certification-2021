import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.component';
import VideoContext from './context/videoContext';

import './global.css';


ReactDOM.render(
  <React.StrictMode>
    <VideoContext>
      <App />
    </VideoContext>
  </React.StrictMode>,
  document.getElementById('root')
);
