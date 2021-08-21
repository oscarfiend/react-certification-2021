import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from '@testing-library/react-hooks';
import axios from '../config/axios';
import VideoList from '../components/VideoList';
import ThemeState from '../context/theme/themeState';
import VideoState from '../context/video/videoState';

import videosMock from '../mocks/youtube-videos-mock.json';

jest.mock('../config/axios');
describe('VideoList component tests', () => {
  beforeEach(async () => {
    axios.mockReturnValue(
      Promise.resolve({
        data: { ...videosMock },
      })
    );
    await act(async () => {
      render(
        <VideoState>
          <ThemeState>
            <VideoList />
          </ThemeState>
        </VideoState>
      );
    });
  });

  test('should containt a list container', () => {
    const list = screen.getByTestId(/container_videos/i);
    expect(list).toBeInTheDocument();
    expect(axios).toHaveBeenCalledTimes(1);
  });

  test('shouldn´t containt a card video list', () => {
    const list = screen.queryAllByTestId(/list_videos/i);
    expect(list.length).toBe(0);
  });

  test('should containt a card video list', async () => {
    const list = screen.findAllByTestId(/list_videos/i);
    expect((await list).length).toBe(videosMock.items.length);
  });
});
