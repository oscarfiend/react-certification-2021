import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import VideoRelated from '../../components/RelatedVideos';
import VideoDetail from '../../components/VideoDetail';
import VideoContext from '../../context/video/videoContext';
import { MainContainer } from './VideoDetails.styled';

const VideoDetails = () => {
  const videoContext = useContext(VideoContext);
  const { getVideoDetails, data } = videoContext;

  const { id } = useParams();

  useEffect(() => {
    getVideoDetails(id);
  }, [id, getVideoDetails]);

  return (
    <MainContainer data-testid="container-details">
      <VideoDetail />
      <VideoRelated data={data} />
    </MainContainer>
  );
};

export default VideoDetails;
