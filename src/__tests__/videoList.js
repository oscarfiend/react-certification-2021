import { render, screen } from '@testing-library/react';
import React from 'react';

import VideoList from '../components/VideoList';
import items from '../mocks/youtube-videos-mock.json'

describe('VideoList component tests', () => {
  test('should containt a list container', () => {
    render(<VideoList videos={items.items}/>);
    const list = screen.getByTestId(/container_videos/i);
    expect(list).toBeInTheDocument();
  });

  test('should containt a card video list', () => {
    render(<VideoList videos={items.items}/>);
    const list = screen.getAllByTestId(/list_videos/i);
    expect(list.length).toBe(25);
  });

  test('shouldn´t containt a card video list', () => {
    render(<VideoList videos={[]}/>);
    const list = screen.queryAllByTestId(/list_videos/i);
    expect(list.length).toBe(0);
  });

});