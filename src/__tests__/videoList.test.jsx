import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import axios from '../config/axios';
import VideoList from '../components/VideoList';
import ThemeState from '../context/theme/themeState';
import VideoState from '../context/video/videoState';
import Authstate from '../context/auth/authState';

import videosMock from '../mocks/youtube-videos-mock.json';

jest.mock('../config/axios');
describe('VideoList component tests', () => {
  beforeEach(async () => {
    axios.mockReturnValue(
      Promise.resolve({
        data: { ...videosMock },
      })
    );
    act(() => {
      render(
        <VideoState>
          <ThemeState>
            <Authstate>
              <VideoList videos={videosMock.items} />
            </Authstate>
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

  test('should containt a card video list', () => {
    const list = screen.findAllByTestId(/list_videos/i);
    waitFor(() => expect(list.length).toBe(videosMock.items.length));
  });
});
