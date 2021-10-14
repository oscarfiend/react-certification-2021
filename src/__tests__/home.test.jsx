import { render, screen } from '@testing-library/react';
import React from 'react';
import ThemeState from '../context/theme/themeState';
import VideoState from '../context/video/videoState';

import Home from '../pages/Home';

describe('Home view tests', () => {
  beforeEach(() => {
    render(
      <VideoState>
        <ThemeState>
          <Home />
        </ThemeState>
      </VideoState>
    );
  });

  test('should containt specific title', () => {
    const title = screen.getByText(/Youtube challenge/i);
    expect(title).toBeInTheDocument();
  });
});
