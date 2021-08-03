import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { VideosContext } from '../../context/videoContext';
import { CardRelated, ImageRelated, RelatedContainer } from './VideoRelated.styled';

const VideoRelated = () => {
    const videoContext = useContext(VideosContext);
    const { data, selectVideo } = videoContext;
    let history = useHistory();

  const handleClick = (video) => {
    selectVideo({
      title: video.snippet.title,
      description: video.snippet.description,
      createdAt: video.snippet.createdAt,
    });
    history.push(`/video/${video.id.videoId}`);
  };

  return (
    <RelatedContainer>
      {data &&
        data.items.map((video) => (
          <CardRelated key={video.etag} onClick={() => handleClick(video)}>
            <ImageRelated src={video.snippet?.thumbnails?.medium?.url} />
            <span>{video.snippet?.title}</span>
          </CardRelated>
        ))}
    </RelatedContainer>
  );
};

export default VideoRelated;
