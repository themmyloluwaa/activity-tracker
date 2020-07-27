import {
  ADD_ACTIVITY,
  EDIT_ACTIVITY,
  DELETE_ACTIVITY,
  GET_ACTIVITY
} from "./types";
import genColors from "../../utils/genColors";
export const addActivity = activity => {
  return {
    type: ADD_ACTIVITY,
    data: {
      key: `${new Date().getTime()}-${activity.startDate.getTime()}-${activity.endDate.getMilliseconds()}`,
      ...activity,
      createdAt: new Date(),
      color: genColors()
    }
  };
};

export const editActivity = activity => ({
  type: EDIT_ACTIVITY,
  data: activity
});
export const deleteActivity = key => ({
  type: DELETE_ACTIVITY,
  key
});


export const sortActivity = type => ({
  type
});

