import { SET_PERSONAL } from "../ActionCreators/ActionCreators";
import { UPDATE_PERSONAL } from "../ActionCreators/ActionCreators";

// Sends personal information Data to redux state
export const setPersonal = (personal) => {
  return {
    type: SET_PERSONAL,
    payload: personal,
  };
};

// Update personal information Data which Exist
export const updatePersonal = (personal) => {
  return {
    type: UPDATE_PERSONAL,
    payload: personal,
  };
};
