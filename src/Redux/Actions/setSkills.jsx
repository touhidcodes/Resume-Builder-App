import { SET_SKILLS } from "../ActionCreators/ActionCreators";
import { UPDATE_SKILLS } from "../ActionCreators/ActionCreators";

// Sends skills information Data to redux state
export const setSkills = (skills) => {
  return {
    type: SET_SKILLS,
    payload: skills,
  };
};

// Update skills information Data which Exist
export const updateSkills = (skills) => {
  return {
    type: UPDATE_SKILLS,
    payload: skills,
  };
};
