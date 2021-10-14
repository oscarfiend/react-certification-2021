import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import ThemeState from '../context/theme/themeState';
import VideoState from '../context/video/videoState';
import VideoDetails from '../pages/Details';

describe('Details view tests', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    const videoId = 'lWQ69WX7-hA';
    history.push(`/video/${videoId}`);
    render(
      <Router history={history}>
        <VideoState>
          <ThemeState>
            <VideoDetails />
          </ThemeState>
        </VideoState>
      </Router>
    );
  });

  test('should containt a main container', () => {
    const container = screen.getByTestId(/container-details/i);
    expect(container).toBeInTheDocument();
  });

  test('should containt a video description', () => {
    waitFor(() =>
      expect(
        screen.findByText(/una librería para crear interfaces web/i)
      ).toBeInTheDocument()
    );
  });

  test('should containt a video title', () => {
    waitFor(() => expect(screen.findByText(/Qué es React/i)).toBeInTheDocument());
  });

  test('should containt a video iframe', () => {
    waitFor(() => expect(screen.findByRole(/iframe/i)).toBeInTheDocument());
  });
});
