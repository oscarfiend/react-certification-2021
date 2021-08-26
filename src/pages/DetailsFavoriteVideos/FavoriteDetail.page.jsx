import React, { useContext } from 'react';
import VideoRelated from '../../components/RelatedVideos';
import VideoDetail from '../../components/VideoDetail';
import VideosContext from '../../context/video/videoContext';
import { MainContainer } from '../Details/VideoDetails.styled';

const FavoriteDetail = () => {
  const videoContext = useContext(VideosContext);
  const { favoriteVideos } = videoContext;
  return (
    <MainContainer data-testid="container-details">
      <VideoDetail />
      <VideoRelated data={favoriteVideos} />
    </MainContainer>
  );
};

export default FavoriteDetail;
