import React from 'react';
import VideoCard from '../VideoCard';
import { ContainerList } from './VideoList.styled';

const VideoList = (props) => {
  const { videos } = props;
  return (
    <ContainerList data-testid="container_videos">
      {Array.isArray(videos) &&
        videos.map((video) => (
          <div data-testid="list_videos" key={video.etag}>
            <VideoCard            
              image={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
              description={video.snippet.description}
              createdAt={video.snippet.publishedAt}
              />
          </div>
        ))}
    </ContainerList>
  );
};

export default VideoList;
