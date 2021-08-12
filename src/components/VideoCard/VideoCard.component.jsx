import React, { useContext } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  VideoDate,
  VideoFooter,
} from './VideoCard.styled';
import play from "../../img/play.png"
import { useHistory } from "react-router-dom"
import VideoContext from '../../context/video/videoContext';
import PropTypes from 'prop-types';
import ThemeContext from '../../context/theme/themeContext';

const VideoCard = (props) => {
  const { image, title, description, createdAt,videoId } = props;
  const videoContext = useContext(VideoContext);
  const { selectVideo } = videoContext;

  const themeContext=useContext(ThemeContext)
  const {theme}=themeContext

  let history = useHistory()
  
  const handleClick=()=>{
    selectVideo({title,description,createdAt})
    history.push(`/video/${videoId}`)
  }

  return (
    <Card data-testid="card_container" onClick={handleClick} theme={theme}>
      <img src={play} alt="play"/>
      <CardHeader src={image} alt="img-header" data-testid="img_header"/>
      <CardBody theme={theme}>
        <CardTitle data-testid="card_title">{title}</CardTitle>
        <span>{description}</span>
        <VideoFooter>
          <VideoDate theme={theme}>
            <h5>Published at:</h5>
            <small>{createdAt}</small>
          </VideoDate>
        </VideoFooter>
      </CardBody>
    </Card>
  );
};

VideoCard.propTypes={
  title:PropTypes.string,
  description:PropTypes.string,
  image:PropTypes.string,
  videoId:PropTypes.string,
  createdAt:PropTypes.string
}

export default VideoCard;
