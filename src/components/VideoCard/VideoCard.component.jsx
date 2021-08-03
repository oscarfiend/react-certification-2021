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
import { VideosContext } from '../../context/videoContext';
import PropTypes from 'prop-types';

const VideoCard = (props) => {
  const { image, title, description, createdAt,videoId } = props;
  const videoContext = useContext(VideosContext);
  const { selectVideo } = videoContext;
  let history = useHistory()
  
  const handleClick=()=>{
    selectVideo({title,description,createdAt})
    history.push(`/video/${videoId}`)
  }

  return (
    <Card data-testid="card_container" onClick={handleClick}>
      <img src={play} alt="play"/>
      <CardHeader src={image} alt="img-header" data-testid="img_header"/>
      <CardBody>
        <CardTitle data-testid="card_title">{title}</CardTitle>
        <span>{description}</span>
        <VideoFooter>
          <VideoDate>
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
  videoId:PropTypes.string
}

export default VideoCard;
