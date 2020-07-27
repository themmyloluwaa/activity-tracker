import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  EDIT_ACTIVITY,
  SORT_ASC,
  SORT_DES
} from "../actions/types";
import initialState from "../initialState";

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [action.data, ...state.activities]
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(data => data.key !== action.key)
      };

    case EDIT_ACTIVITY:
      const newArray = [...state.activities];
      const letIndex = newArray.findIndex(
        activity => activity.key === action.data.key
      );
      newArray.splice(letIndex, 1, action.data);
      return {
        ...state,
        activities: [...newArray]
      };

    case SORT_ASC:
      return {
        ...state,
        activities: [
          ...state.activities.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        ]
      };

    case SORT_DES:
      return {
        ...state,
        activities: [
          ...state.activities.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          )
        ]
      };

    default:
      return { ...state };
  }
};

export default activityReducer;
