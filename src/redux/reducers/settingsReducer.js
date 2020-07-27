import { SET_DISPLAY_NAME } from "../actions/types";

const initialState = {
  name: "",
  darkMode: false
};

const activityReducer = (state = initialState, action) => {
  if (action.type === SET_DISPLAY_NAME) {
    return {
      ...state,
      name: action.name
    };
  } else {
    return state;
  }
};

export default activityReducer;
