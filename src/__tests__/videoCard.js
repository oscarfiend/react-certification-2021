import { render, screen } from '@testing-library/react';
import React from 'react';

import VideoCard from '../components/VideoCard';

describe('VideoCard component tests', () => {
  const video = {
    url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    title: 'Video Tour | Welcome to Wizeline Guadalajara',
    description:
      'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
    publishedAt: '2014-09-27',
  };

  test('should containt a card container', () => {
    render(
      <VideoCard
        image={video.url}
        title={video.title}
        description={video.description}
        createdAt={video.publishedAt}
      />
    );
    const card = screen.getByTestId(/card_container/i);
    expect(card).toBeInTheDocument();
  });
  
  test('should containt a header image', () => {
    render(
      <VideoCard
        image={video.url}
        title={video.title}
        description={video.description}
        createdAt={video.publishedAt}
      />
    );
    const cardImage = screen.getByTestId(/img_header/i);
    expect(cardImage.src).toBe(video.url);
  });

  test('should containt a card title', () => {
    render(
      <VideoCard
        image={video.url}
        title={video.title}
        description={video.description}
        createdAt={video.publishedAt}
      />
    );
    const cardTitle = screen.queryByText(video.title);
    expect(cardTitle).toBeInTheDocument();
  });

  test('should containt a card description', () => {
    render(
      <VideoCard
        image={video.url}
        title={video.title}
        description={video.description}
        createdAt={video.publishedAt}
      />
    );
    const cardDescription = screen.queryByText(video.description);
    expect(cardDescription).toBeInTheDocument();
  });

  test('should containt a video creation date', () => {
    render(
      <VideoCard
        image={video.url}
        title={video.title}
        description={video.description}
        createdAt={video.publishedAt}
      />
    );
    const videoCreation = screen.queryByText(video.publishedAt);
    expect(videoCreation).toBeInTheDocument();
  });
});
