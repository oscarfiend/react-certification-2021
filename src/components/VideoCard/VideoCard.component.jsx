import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  VideoDate,
  VideoFooter,
} from './VideoCard.styled';
import play from "../../img/play.png"

const VideoCard = (props) => {
  const { image, title, description, createdAt } = props;
  return (
    <Card>
      <img src={play} alt="play" />
      <CardHeader src={image} alt="rover" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
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

export default VideoCard;
