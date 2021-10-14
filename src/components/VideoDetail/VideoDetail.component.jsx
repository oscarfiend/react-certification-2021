import React, { useContext } from 'react';
import { useParams } from 'react-router';
import VideoContext from '../../context/video/videoContext';
import Spinner from '../Spinner';
import {
  DescriptionDetails,
  DetailsContainer,
  FrameContainer,
  VideoFrame,
} from './VideoDetail.styled';

const VideoDetail = () => {
  const videoContext = useContext(VideoContext);
  const { videoSelected, loading } = videoContext;
  const { id } = useParams();

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
          </FrameContainer>
          {videoSelected && (
            <div>
              <h3>{videoSelected.title}</h3>
              <DescriptionDetails>
                <p>{videoSelected.description}</p>
              </DescriptionDetails>
            </div>
          )}
        </>
      )}
    </DetailsContainer>
  );
};

export default VideoDetail;
