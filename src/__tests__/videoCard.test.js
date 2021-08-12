import { render, screen } from '@testing-library/react';
import React from 'react';

import VideoCard from '../components/VideoCard';
import ThemeState from '../context/theme/themeState';
import VideoState from '../context/video/videoState';

describe('VideoCard component tests', () => {
  const video = {
    url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    title: 'Video Tour | Welcome to Wizeline Guadalajara',
    description:
      'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
    publishedAt: '2014-09-27',
  };
  beforeEach(() => {
    render(
      <VideoState>
        <ThemeState>
          <VideoCard
            image={video.url}
            title={video.title}
            description={video.description}
            createdAt={video.publishedAt}
          />
        </ThemeState>
      </VideoState>
    );
  });

  test('should containt a card container', () => {
    const card = screen.getByTestId(/card_container/i);
    expect(card).toBeInTheDocument();
  });

  test('should containt a header image', () => {
    const cardImage = screen.getByTestId(/img_header/i);
    expect(cardImage.src).toBe(video.url);
  });

  test('should containt a card title', () => {
    const cardTitle = screen.queryByText(video.title);
    expect(cardTitle).toBeInTheDocument();
  });

  test('should containt a card description', () => {
    const cardDescription = screen.queryByText(video.description);
    expect(cardDescription).toBeInTheDocument();
  });

  test('should containt a video creation date', () => {
    const videoCreation = screen.queryByText(video.publishedAt);
    expect(videoCreation).toBeInTheDocument();
  });
});
