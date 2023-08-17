import { SET_TEMPLATE_ID } from "../ActionCreators/ActionCreators";
import { UPDATE_TEMPLATE_ID } from "../ActionCreators/ActionCreators";

// select the Resume to My-Resume folder
export const setTemplateId = (id) => {
  return {
    type: SET_TEMPLATE_ID,
    payload: id,
  };
};

export const updateTemplateId = (id) => {
  return {
    type: UPDATE_TEMPLATE_ID,
    payload: id,
  };
};
