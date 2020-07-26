import { ADD_ACTIVITY, EDIT_ACTIVITY, DELETE_ACTIVITY } from "./types";
import { v4 as uuidv4 } from "uuid";

export const addActivity = activity => ({
  type: ADD_ACTIVITY,
  data: {
    key: `${uuidv4()}-${new Date().getTime()}`,
    ...activity
  }
});

export const editActivity = activity => ({
  type: EDIT_ACTIVITY,
  data: activity
});
export const deleteActivity = key => ({
  type: DELETE_ACTIVITY,
  key
});
