import { SEARCH_QUERY_UPDATED } from '../actions';
// TODO (bshyong): flesh out shape of service Type object/options
const INITIAL_STATE = {
  searchString: '',
  serviceType: null,
  position: {
    latitude: 38.8976763,
    longitude: -77.03653,
  },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_QUERY_UPDATED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}