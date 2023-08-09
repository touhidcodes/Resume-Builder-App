import { SET_PROFESSIONAL } from "../ActionCreators/ActionCreators";
import { UPDATE_PROFESSIONAL } from "../ActionCreators/ActionCreators";

// Sends professional information Data to redux state
export const setProfessional = (professional) => {
  return {
    type: SET_PROFESSIONAL,
    payload: professional,
  };
};

// Update professional information Data which Exist
export const updateProfessional = (professional) => {
  return {
    type: UPDATE_PROFESSIONAL,
    payload: professional,
  };
};
