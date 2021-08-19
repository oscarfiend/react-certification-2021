import {
  UPDATE_VIDEOS,
  UPDATE_LOADING,
  UPDATE_ERROR,
  SELECT_VIDEO,
  UPDATE_QUERY_VIDEO,
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
    default:
      return state;
  }
};
