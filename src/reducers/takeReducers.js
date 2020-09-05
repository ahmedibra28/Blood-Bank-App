import {
  GET_TAKES,
  ADD_TAKE,
  DELETE_TAKE,
  UPDATE_TAKE,
} from '../actions/types';

const initialState = {
  takes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TAKES:
      return {
        ...state,
        takes: action.payload,
      };
    case ADD_TAKE:
      return {
        ...state,
        takes: [...state.takes, action.payload],
      };
    case UPDATE_TAKE:
      const takesExisted = state.takes.filter(
        (take) => take.id !== action.payload.id
      );
      return {
        takes: [action.payload, ...takesExisted],
      };

    case DELETE_TAKE:
      return {
        ...state,
        takes: state.takes.filter((take) => take.id !== action.payload),
      };
    default:
      return state;
  }
}
