import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  VideoDate,
  VideoFooter,
} from './VideoCard.styled';
import play from '../../img/play.png';
import add from '../../img/heart-regular.svg';
import remove from '../../img/heart-solid.svg';
import VideoContext from '../../context/video/videoContext';
import ThemeContext from '../../context/theme/themeContext';
import { existVideo } from '../../utils/fn';
import AuthContext from '../../context/auth/authContext';

const VideoCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { image, title, description, createdAt, videoId, video } = props;
  const authContext = useContext(AuthContext);
  const { autenticated } = authContext;
  const videoContext = useContext(VideoContext);
  const {
    selectVideo,
    addToFavorites,
    favoriteVideos,
    removeFromFavorites,
  } = videoContext;

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  const history = useHistory();

  useEffect(() => {
    setIsFavorite(existVideo(video.etag, favoriteVideos));
  }, [favoriteVideos, video.etag]);

  const handleClick = () => {
    selectVideo(video);
    history.push(
      history.location.pathname !== '/' ? `favorites/${videoId}` : `/video/${videoId}`
    );
  };

  return (
    <Card data-testid="card_container" theme={theme}>
      <img src={play} alt="play" onClick={handleClick} aria-hidden="true" />
      <CardHeader src={image} alt="img-header" data-testid="img_header" />
      <CardBody theme={theme}>
        <CardTitle data-testid="card_title">{title}</CardTitle>
        <span>{description}</span>
        <VideoFooter>
          <VideoDate theme={theme}>
            <h5>Published at:</h5>
            <small>{createdAt}</small>
          </VideoDate>
          {autenticated && (
            <>
              {isFavorite ? (
                <Button
                  src={remove}
                  primary
                  type="button"
                  onClick={() => removeFromFavorites(video.etag)}
                  alt="add"
                  aria-hidden="true"
                />
              ) : (
                <Button
                  src={add}
                  type="button"
                  onClick={() => addToFavorites(video)}
                  alt="remove"
                  aria-hidden="true"
                />
              )}
            </>
          )}
        </VideoFooter>
      </CardBody>
    </Card>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default VideoCard;
