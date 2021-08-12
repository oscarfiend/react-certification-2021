import { render, screen } from '@testing-library/react';
import React from 'react';

import VideoList from '../components/VideoList';
import VideoContext from '../context/videoContext';

describe('VideoList component tests', () => {
  test('should containt a list container', () => {
    render(
      <VideoContext>
        <VideoList />
      </VideoContext>
    );
    const list = screen.getByTestId(/container_videos/i);
    expect(list).toBeInTheDocument();
  });

  test('should containt a card video list', async () => {
    render(
      <VideoContext>
        <VideoList />
      </VideoContext>
    );
    const list = screen.findAllByTestId(/list_videos/i);
    expect((await list).length).toBe(24);
  });

  test('shouldn´t containt a card video list', () => {
    render(
      <VideoContext>
        <VideoList />
      </VideoContext>
    );
    const list = screen.queryAllByTestId(/list_videos/i);
    expect(list.length).toBe(0);
  });
});
