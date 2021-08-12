import { render, screen} from '@testing-library/react';
import React from 'react';
import VideoList from '../components/VideoList';
import ThemeState from '../context/theme/themeState';
import VideoState from '../context/video/videoState';

describe('VideoList component tests', () => {
  beforeEach(() => {
    render(<VideoState><ThemeState><VideoList/></ThemeState></VideoState>)
  });

  test('should containt a list container', () => {
    const list = screen.getByTestId(/container_videos/i);
    expect(list).toBeInTheDocument();
  });

  
  test('shouldn´t containt a card video list', () => {
    const list = screen.queryAllByTestId(/list_videos/i);
    expect(list.length).toBe(0);
  });
  
  test('should containt a card video list',async () => {
    const list = screen.findAllByTestId(/list_videos/i);
    expect((await list).length).toBe(24)
  });
});