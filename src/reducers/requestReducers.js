import {
  GET_REQUESTS,
  ADD_REQUEST,
  DELETE_REQUEST,
  UPDATE_REQUEST,
} from '../actions/types';

const initialState = {
  requests: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      };
    case ADD_REQUEST:
      return {
        ...state,
        requests: [...state.requests, action.payload],
      };
    case UPDATE_REQUEST:
      const requestsExisted = state.requests.filter(
        (request) => request.id !== action.payload.id
      );
      return {
        requests: [action.payload, ...requestsExisted],
      };

    case DELETE_REQUEST:
      return {
        ...state,
        requests: state.requests.filter(
          (request) => request.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
