import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import ThemeContext from '../../context/theme/themeContext';
import VideoContext from '../../context/video/videoContext';
import { CardRelated, ImageRelated, RelatedContainer } from './VideoRelated.styled';

const VideoRelated = () => {
  const videoContext = useContext(VideoContext);
  const { data, selectVideo } = videoContext;

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
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
      {data && data.items &&
        data.items.map((video) => (
          <CardRelated theme={theme} key={video.etag} onClick={() => handleClick(video)}>
            <ImageRelated src={video.snippet?.thumbnails?.medium?.url} />
            <span>{video.snippet?.title}</span>
          </CardRelated>
        ))}
    </RelatedContainer>
  );
};

export default VideoRelated;
