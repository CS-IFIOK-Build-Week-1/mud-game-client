import * as types from './action-types';

const initialState = {
  tiles: [],
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TILES:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};