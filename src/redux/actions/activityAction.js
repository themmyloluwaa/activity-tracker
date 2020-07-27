import {
  ADD_ACTIVITY,
  EDIT_ACTIVITY,
  DELETE_ACTIVITY,
  GET_ACTIVITY
} from "./types";
export const addActivity = activity => {
  return {
    type: ADD_ACTIVITY,
    data: {
      key: `${new Date().getTime()}`,
      ...activity
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

export const getActivity = key => ({
  type: GET_ACTIVITY,
  key
});
