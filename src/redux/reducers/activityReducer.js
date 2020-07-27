import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  EDIT_ACTIVITY,
  SORT_ASC,
  SORT_DES
} from "../actions/types";

// import the initial state
import initialState from "../initialState";

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    // addition of activity case
    case ADD_ACTIVITY:
      // return a new state value with a new copy of the activities with new activity
      return {
        ...state,
        activities: [action.data, ...state.activities]
      };

    // deletion of activity case
    case DELETE_ACTIVITY:
      // returns a new state with the filtered out activity
      return {
        ...state,
        activities: state.activities.filter(data => data.key !== action.key)
      };

    // editing of activity case
    case EDIT_ACTIVITY:
      // create a new activities array;
      const newArray = [...state.activities];
      // get the index of the activity to be edited
      const letIndex = newArray.findIndex(
        activity => activity.key === action.data.key
      );
      // replace the activity with the new edited activity
      newArray.splice(letIndex, 1, action.data);

      // update the state with the new activities array
      return {
        ...state,
        activities: [...newArray]
      };

    // sorting of activities ascendingly
    case SORT_ASC:
      // return a new activities array thats sorted ascedingly
      return {
        ...state,
        activities: [
          ...state.activities.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        ]
      };

    // sorting of activities ascendingly
    case SORT_DES:
      // return a new activities array thats sorted descendingly
      return {
        ...state,
        activities: [
          ...state.activities.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          )
        ]
      };

    // the default case
    default:
      return { ...state };
  }
};

export default activityReducer;
