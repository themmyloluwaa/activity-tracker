import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  EDIT_ACTIVITY,
  GET_ACTIVITY
} from "../actions/types";

const initialState = {
  activities: [
    
  ]
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: state.activities.concat({ ...action.data })
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(data => data.key !== action.key)
      };
    case EDIT_ACTIVITY:
      return {
        ...state,
        activities: state.activities
          .filter(data => data.key !== action.data.key)
          .concat({ ...action.data })
      };
    
    default:
      return { ...state };
  }
};

export default activityReducer;
