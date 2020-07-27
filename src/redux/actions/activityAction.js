import { ADD_ACTIVITY, EDIT_ACTIVITY, DELETE_ACTIVITY } from "./types";
import genColors from "../../utils/genColors";

//  activity adding action where key, color and created at is generated
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

// editing actiity action where type and activity is passed.
// activity passed is the activity to be edited
export const editActivity = activity => ({
  type: EDIT_ACTIVITY,
  data: activity
});

// activity deleting action where key represents the activity to be deleted
export const deleteActivity = key => ({
  type: DELETE_ACTIVITY,
  key
});

// sort activity action where type represents if it should be sorted ascendingly or descendingly
export const sortActivity = type => ({
  type
});
