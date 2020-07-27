import { SET_DISPLAY_NAME } from "../actions/types";
import initialState from "../initialState";

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    // set the display name

    case SET_DISPLAY_NAME:
      // return the state with the updated value
      return {
        ...state,
        name: action.name
      };

    // return the default state
    default:
      return { ...state };
  }
};

export default activityReducer;
