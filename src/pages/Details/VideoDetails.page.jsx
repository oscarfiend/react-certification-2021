import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import VideoRelated from '../../components/RelatedVideos';
import VideoDetail from '../../components/VideoDetail';
import { VideosContext } from '../../context/videoContext';
import {
  MainContainer
} from './VideoDetails.styled';

const VideoDetails = () => {
  const videoContext = useContext(VideosContext);
  const { getVideoDetails } = videoContext;

  const { id } = useParams();

  useEffect(() => {
    getVideoDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <MainContainer>
      <VideoDetail/>
      <VideoRelated/>
    </MainContainer>
  );
};

export default VideoDetails;
