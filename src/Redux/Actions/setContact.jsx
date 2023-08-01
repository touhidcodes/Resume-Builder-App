import { SET_CONTACT } from "../ActionCreators/ActionCreators";
import { UPDATE_CONTACT } from "../ActionCreators/ActionCreators";

// Sends personal information Data to redux state
export const setContact = (contact) => {
  return {
    type: SET_CONTACT,
    payload: contact,
  };
};

// Update personal information Data which Exist
export const updateContact = (contact) => {
  return {
    type: UPDATE_CONTACT,
    payload: contact,
  };
};
