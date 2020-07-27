import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  EDIT_ACTIVITY,
  GET_ACTIVITY,
  SORT_ASC,
  SORT_DES,
  RESET_ACTIVITY
} from "../actions/types";

const initialState = {
  activities: [],
  activity: {}
};

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
      return {
        ...state,
        activities: state.activities
          .filter(data => data.key !== action.data.key)
          .concat({ ...action.data })
      };
    case SORT_ASC:
      return {
        ...state,
        activities: [
          ...state.activities.sort((a, b) => {
            const totalTimeA =
              new Date(a.startTime).getTime() + new Date(a.endTime).getTime();
            const totalTimeB =
              new Date(b.startTime).getTime() + new Date(b.endTime).getTime();

            return new Date(b.createdAt) - new Date(a.createdAt);
          })
        ]
      };
    case SORT_DES:
      return {
        ...state,
        activities: [
          ...state.activities.sort((a, b) => {
            const totalTimeA =
              new Date(a.startTime).getTime() + new Date(a.endTime).getTime();
            const totalTimeB =
              new Date(b.startTime).getTime() + new Date(b.endTime).getTime();

            return new Date(a.createdAt) - new Date(b.createdAt);
          })
        ]
      };
    case GET_ACTIVITY: {
      return {
        ...state,
        activity: state.activities.find(
          activityValue => activityValue.key === action.key
        )
      };
    }

    case RESET_ACTIVITY: {
      return {
        ...state,
        activity: {}
      };
    }

    default:
      return { ...state };
  }
};

export default activityReducer;
