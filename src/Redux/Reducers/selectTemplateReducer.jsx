import initialState from "./initialState.json";
import {
  SET_TEMPLATE_ID,
  UPDATE_TEMPLATE_ID,
} from "../ActionCreators/ActionCreators";

// Templates state management Reducer
const selectTemplateReducer = (state = initialState.template, action) => {
  switch (action.type) {
    case SET_TEMPLATE_ID:
      return { ...action.payload };
    case UPDATE_TEMPLATE_ID:
      return { ...action.payload };
    default:
      return state;
  }
};

export default selectTemplateReducer;
