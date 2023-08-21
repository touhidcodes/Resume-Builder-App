import { SET_SOCIAL } from "../ActionCreators/ActionCreators";
import { UPDATE_SOCIAL } from "../ActionCreators/ActionCreators";

// Sends social information Data to redux state
export const setSocial = (social) => {
  return {
    type: SET_SOCIAL,
    payload: social,
  };
};

// Update social information Data which Exist
export const updateSocial = (social) => {
  return {
    type: UPDATE_SOCIAL,
    payload: social,
  };
};
