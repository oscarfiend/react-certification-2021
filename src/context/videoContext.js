import React, { createContext, useEffect, useState } from 'react';
import useVideoApi from '../hooks/useVideoApi';

export const VideosContext = createContext(null);

const VideoContext = ({ children }) => {
  const { data, loading, error, fetchVideos } = useVideoApi();
  const [videoSelected, setVideoSelected] = useState(null);
  const [queryVideo, setQueryVideo] = useState('react');

  useEffect(() => {
    getVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryVideo]);

  const getVideos = () => {
    const params = { q: queryVideo };
    fetchVideos({ params });
  };

  const getVideoDetails = (videoID) => {
    const params = { relatedToVideoId: videoID, type: 'video' };
    fetchVideos({ params });
  };

  const selectVideo = (videoDetails) => {
    setVideoSelected(videoDetails);
  };

  return (
    <VideosContext.Provider
      value={{
        data,
        error,
        loading,
        videoSelected,
        getVideos,
        getVideoDetails,
        selectVideo,
        setQueryVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export default VideoContext;
