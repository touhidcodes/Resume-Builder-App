import { SET_EDUCATION } from "../ActionCreators/ActionCreators";
import { UPDATE_EDUCATION } from "../ActionCreators/ActionCreators";

// Sends educational information Data to redux state
export const setEducation = (education) => {
  return {
    type: SET_EDUCATION,
    payload: education,
  };
};

// Update educational information Data which Exist
export const updateEducation = (education) => {
  return {
    type: UPDATE_EDUCATION,
    payload: education,
  };
};
