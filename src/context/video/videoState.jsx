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
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  REACT_CHALLENGE_FAVORITES,
} from '../../utils/constants';
import { storage } from '../../utils/storage';

const VideoState = ({ children }) => {
  const { data, loading, error, fetchVideos } = useVideoApi();

  const initialState = {
    queryVideo: 'react',
    loading: false,
    error: null,
    data: [],
    videoSelected: null,
    favoriteVideos: storage.get(REACT_CHALLENGE_FAVORITES) || [],
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
    storage.set(REACT_CHALLENGE_FAVORITES, state.favoriteVideos);
  }, [state.favoriteVideos]);

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

  const addToFavorites = (video) => {
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: video,
    });
  };

  const removeFromFavorites = (etag) => {
    dispatch({
      type: REMOVE_FROM_FAVORITES,
      payload: etag,
    });
  };

  return (
    <VideoContext.Provider
      value={{
        data: state.data,
        error: state.error,
        loading: state.loading,
        videoSelected: state.videoSelected,
        favoriteVideos: state.favoriteVideos,
        getVideos,
        getVideoDetails,
        selectVideo,
        setQueryVideo,
        addToFavorites,
        removeFromFavorites,
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
