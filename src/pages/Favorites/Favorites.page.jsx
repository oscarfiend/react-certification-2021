import React, { useContext } from 'react';
import VideosContext from '../../context/video/videoContext';
import VideoList from '../../components/VideoList/VideoList.component';
import { Title } from './Favorites.styled';

const Favorites = () => {
  const videoContext = useContext(VideosContext);
  const { favoriteVideos } = videoContext;
  return (
    <div>
      {favoriteVideos.length > 0 ? (
        <Title>Favorite videos</Title>
      ) : (
        <Title>You don&apos;t have favorite videos</Title>
      )}
      <VideoList videos={favoriteVideos} />
    </div>
  );
};

export default Favorites;
