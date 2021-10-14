import { CHANGE_MODE } from '../../utils/constants';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case CHANGE_MODE:
      return { ...state, theme: payload };
    default:
      return state;
  }
};
