import React, { useCallback, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import useVideoApi from '../../hooks/useVideoApi';
import VideoContext from './videoContext';
import VideoReducer from './videoReducer';
import {
  UPDATE_VIDEOS,
  UPDATE_LOADING,
  UPDATE_ERROR,
  SELECT_VIDEO,
  UPDATE_QUERY_VIDEO,
} from '../../utils/constants';

const VideoState = ({ children }) => {
  const { data, loading, error, fetchVideos } = useVideoApi();

  const initialState = {
    queryVideo: 'react',
    loading: false,
    error: null,
    data: [],
    videoSelected: null,
  };

  const [state, dispatch] = useReducer(VideoReducer, initialState);

  const getVideos = useCallback(() => {
    const params = { q: state.queryVideo };
    fetchVideos({ params });
  }, [state.queryVideo, fetchVideos]);

  const updateLoading = (newLoading) => {
    dispatch({
      type: UPDATE_LOADING,
      payload: newLoading,
    });
  };

  const updateError = (newError) => {
    dispatch({
      type: UPDATE_ERROR,
      payload: newError,
    });
  };

  useEffect(() => {
    getVideos();
  }, [state.queryVideo, getVideos]);

  useEffect(() => {
    const updateListVideos = () => {
      dispatch({
        type: UPDATE_VIDEOS,
        payload: data,
      });
    };
    if (state.loading !== loading) {
      updateLoading(loading);
    }
    if (state.error !== error) {
      updateError(error);
    }
    if (data !== state.data) {
      updateListVideos();
    }
  }, [error, loading, data, state.data, state.error, state.loading]);

  const getVideoDetails = useCallback(
    (videoID) => {
      const params = { relatedToVideoId: videoID, type: 'video' };
      fetchVideos({ params });
    },
    [fetchVideos]
  );

  const selectVideo = (videoDetails) => {
    dispatch({
      type: SELECT_VIDEO,
      payload: videoDetails,
    });
  };

  const setQueryVideo = (query) => {
    dispatch({
      type: UPDATE_QUERY_VIDEO,
      payload: query,
    });
  };

  return (
    <VideoContext.Provider
      value={{
        data: state.data,
        error: state.error,
        loading: state.loading,
        videoSelected: state.videoSelected,
        getVideos,
        getVideoDetails,
        selectVideo,
        setQueryVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

VideoState.propTypes = {
  children: PropTypes.element.isRequired,
};

export default VideoState;
