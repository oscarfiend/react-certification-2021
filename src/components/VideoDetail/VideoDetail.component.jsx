import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import VideoContext from '../../context/video/videoContext';
import { existVideo } from '../../utils/fn';
import Spinner from '../Spinner';
import {
  AddFavoriteButton,
  DescriptionDetails,
  DetailsContainer,
  FrameContainer,
  VideoFrame,
} from './VideoDetail.styled';

const VideoDetail = () => {
  const videoContext = useContext(VideoContext);
  const {
    videoSelected,
    loading,
    addToFavorites,
    favoriteVideos,
    removeFromFavorites,
  } = videoContext;
  const [isFavoriteVideo, setIsFavoriteVideo] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (videoSelected) {
      setIsFavoriteVideo(existVideo(videoSelected.etag, favoriteVideos));
    }
  }, [favoriteVideos, videoSelected]);

  return (
    <DetailsContainer>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <FrameContainer>
            <VideoFrame
              width="560"
              height="349"
              allowFullScreen
              frameBorder="0"
              src={`https://www.youtube.com/embed/${id}?controls=0&autoplay=1`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
            {videoSelected &&
              (isFavoriteVideo ? (
                <AddFavoriteButton
                  type="button"
                  onClick={() => removeFromFavorites(videoSelected.etag)}
                >
                  Remove from favorites
                </AddFavoriteButton>
              ) : (
                <AddFavoriteButton
                  type="button"
                  onClick={() => addToFavorites(videoSelected)}
                >
                  Add to favorites
                </AddFavoriteButton>
              ))}
          </FrameContainer>
          {videoSelected && (
            <div>
              <h3>{videoSelected.snippet.title}</h3>
              <DescriptionDetails>
                <p>{videoSelected.snippet.description}</p>
              </DescriptionDetails>
            </div>
          )}
        </>
      )}
    </DetailsContainer>
  );
};

export default VideoDetail;
