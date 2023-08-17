import { SET_TEMPLATE } from "../ActionCreators/ActionCreators";
import { UPDATE_TEMPLATE } from "../ActionCreators/ActionCreators";

//Set template when selected
const setTemplate = (template) => {
  return {
    type: SET_TEMPLATE,
    payload: template,
  };
};
export { setTemplate };

//Update template if already exist
const updateTemplate = (template) => {
  return {
    type: UPDATE_TEMPLATE,
    payload: template,
  };
};
export { updatetemplate };
