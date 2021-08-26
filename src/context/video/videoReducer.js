import {
  UPDATE_VIDEOS,
  UPDATE_LOADING,
  UPDATE_ERROR,
  SELECT_VIDEO,
  UPDATE_QUERY_VIDEO,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from '../../utils/constants';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_VIDEOS:
      return { ...state, data: payload };
    case UPDATE_LOADING:
      return { ...state, loading: payload };
    case UPDATE_ERROR:
      return { ...state, error: payload };
    case SELECT_VIDEO:
      return { ...state, videoSelected: payload };
    case UPDATE_QUERY_VIDEO:
      return { ...state, queryVideo: payload };
    case ADD_TO_FAVORITES:
      return { ...state, favoriteVideos: [...state.favoriteVideos, payload] };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter(
          (video) => video.id.videoId !== payload
        ),
      };
    default:
      return state;
  }
};
