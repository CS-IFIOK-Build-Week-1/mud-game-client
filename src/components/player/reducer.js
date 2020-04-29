import * as types from './action-types';

const initialState = {
  position: [0, 0],
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case types.MOVE_PLAYER:
      return {
        position: action.payload
      };
    default:
      return state;
  }
};