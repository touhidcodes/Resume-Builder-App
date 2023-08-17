import { SET_TEMPLATE } from "../ActionCreators/ActionCreators";
import { UPDATE_TEMPLATE } from "../ActionCreators/ActionCreators";

//Set template when selected
export const setTemplate = (id) => {
  return {
    type: SET_TEMPLATE,
    payload: id,
  };
};

//Update template if already exist
export const updateTemplate = (id) => {
  return {
    type: UPDATE_TEMPLATE,
    payload: id,
  };
};
