import { SET_PERSONAL } from "../ActionCreators/ActionCreators";
import { UPDATE_PERSONAL } from "../ActionCreators/ActionCreators";

export const setPersonal = (personal) => {
  return {
    type: SET_PERSONAL,
    payload: personal,
  };
};

export const updatePersonal = (personal) => {
  return {
    type: UPDATE_PERSONAL,
    payload: personal,
  };
};
