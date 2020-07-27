import { SET_DISPLAY_NAME } from "./types";
export const setName = name => {
  return {
    type: SET_DISPLAY_NAME,
    name
  };
};
