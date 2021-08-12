import React, { useContext } from 'react';
import VideoCard from '../VideoCard';
import { ContainerList } from './VideoList.styled';
import VideoContext from '../../context/video/videoContext';
import Spinner from '../Spinner';

const VideoList = () => {
  const videoContext = useContext(VideoContext);
  const { data, loading, error } = videoContext;
  const videos = data?.items;

  if (error) {
    return <h2>Error fetching data, try later</h2>;
  }

  return (
    <ContainerList data-testid="container_videos">
      {loading ? (
        <Spinner />
      ) : (
        Array.isArray(videos) &&
        videos.map((video) => (
          <div data-testid="list_videos" key={video.etag}>
            <VideoCard
              image={video.snippet?.thumbnails?.medium.url}
              title={video.snippet?.title}
              description={video.snippet?.description}
              createdAt={video.snippet?.publishedAt}
              videoId={video.id.videoId}
            />
          </div>
        ))
      )}
    </ContainerList>
  );
};

export default VideoList;
