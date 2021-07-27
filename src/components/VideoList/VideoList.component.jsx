import React from 'react';
import VideoCard from '../VideoCard';
import { ContainerList } from './VideoList.styled';

const VideoList = (props) => {
  const { videos } = props;
  return (
    <ContainerList>
      {Array.isArray(videos) &&
        videos.map((video) => (
          <VideoCard
            key={video.etag}
            image={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            description={video.snippet.description}
            createdAt={video.snippet.publishedAt}
          />
        ))}
    </ContainerList>
  );
};

export default VideoList;
