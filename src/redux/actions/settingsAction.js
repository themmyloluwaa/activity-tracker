import { SET_DISPLAY_NAME } from "./types";

// set display name action where name represents the name to be set
export const setName = name => {
  return {
    type: SET_DISPLAY_NAME,
    name
  };
};
