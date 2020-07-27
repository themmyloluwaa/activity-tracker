import { SET_DISPLAY_NAME } from "../actions/types";
import initialState from "../initialState";

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISPLAY_NAME:
      console.log(action.name);
      return {
        ...state,
        name: action.name
      };
    default:
      return { ...state };
  }
};

export default activityReducer;
