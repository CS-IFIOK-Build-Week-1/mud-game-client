import * as types from "./action-types";

const initialState = {
  uuid:'',
  name: "",
  title: "LOADING",
  description: "LOADING",
  players: [],
  error_msg: "",
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_ROOM":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default playerReducer;
