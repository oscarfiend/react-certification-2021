import React from 'react';
import PropTypes from 'prop-types';
import VideoCard from '../VideoCard';
import { ContainerList } from './VideoList.styled';
import Spinner from '../Spinner';

const VideoList = ({ videos, loading = false, error = null }) => {
  if (error) {
    return <h2>Error fetching data, try later</h2>;
  }

  return (
    <ContainerList data-testid="container_videos">
      {loading ? (
        <Spinner />
      ) : (
        Array.isArray(videos) &&
        videos.map((video) =>
          video.snippet ? (
            <div data-testid="list_videos" key={video.etag}>
              <VideoCard
                image={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                video={video}
                description={video.snippet.description}
                createdAt={video.snippet.publishedAt}
                videoId={video.id.videoId || video.etag}
              />
            </div>
          ) : null
        )
      )}
    </ContainerList>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideoList;
