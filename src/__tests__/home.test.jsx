import { render, screen } from '@testing-library/react';
import React from 'react';
import ThemeState from '../context/theme/themeState';
import VideoState from '../context/video/videoState';
import axiosClient from '../config/axios';
import Home from '../pages/Home';
import videosMock from '../mocks/youtube-videos-mock.json';

jest.mock('../config/axios');
describe('Home view tests', () => {
  beforeEach(() => {
    axiosClient.mockReturnValue(
      Promise.resolve({
        data: { ...videosMock },
      })
    );
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

  test('shouldn´t containt a card video list', () => {
    const list = screen.queryAllByTestId(/list_videos/i);
    expect(list.length).toBe(0);
  });
});
