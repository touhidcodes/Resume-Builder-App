import { SET_TEMPLATE } from "../ActionCreators/ActionCreators";
import { UPDATE_TEMPLATE } from "../ActionCreators/ActionCreators";

//Set template when selected
export const setTemplate = (template) => {
  return {
    type: SET_TEMPLATE,
    payload: template,
  };
};

//Update template if already exist
export const updateTemplate = (template) => {
  return {
    type: UPDATE_TEMPLATE,
    payload: template,
  };
};
