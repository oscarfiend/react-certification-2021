import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import ThemeState from '../context/theme/themeState';
import VideoState from '../context/video/videoState';
import Authstate from '../context/auth/authState';

import App from '../components/App';

describe('Routing component tests', () => {
  test('should be at home view', () => {
    const history = createMemoryHistory();
    render(
      <VideoState>
        <ThemeState>
          <Authstate>
            <Router history={history}>
              <App />
            </Router>
          </Authstate>
        </ThemeState>
      </VideoState>
    );
    const title = screen.getByText(/Youtube challenge/i);
    expect(title).toBeInTheDocument();
  });
});
