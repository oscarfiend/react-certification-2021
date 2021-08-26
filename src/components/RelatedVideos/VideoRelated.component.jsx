import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import ThemeContext from '../../context/theme/themeContext';
import VideoContext from '../../context/video/videoContext';
import { CardRelated, ImageRelated, RelatedContainer } from './VideoRelated.styled';

const VideoRelated = ({ data = [] }) => {
  const videoContext = useContext(VideoContext);
  const { selectVideo } = videoContext;

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const history = useHistory();
  const videos = data && data.items ? data.items : data;

  const handleClick = (video) => {
    selectVideo(video);

    history.push(
      history.location.pathname.includes('video')
        ? `/video/${video.id.videoId}`
        : `/favorites/${video.id.videoId}`
    );
  };

  return (
    <RelatedContainer>
      {videos &&
        videos.map((video) =>
          video.snippet ? (
            <CardRelated
              theme={theme}
              key={video.etag}
              onClick={() => handleClick(video)}
            >
              <ImageRelated src={video.snippet.thumbnails.medium.url} />
              <span>{video.snippet.title}</span>
            </CardRelated>
          ) : null
        )}
    </RelatedContainer>
  );
};

export default VideoRelated;
