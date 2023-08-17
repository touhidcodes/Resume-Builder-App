import initialState from "./initialState.json";
import {
  SET_TEMPLATE,
  UPDATE_TEMPLATE,
} from "../ActionCreators/ActionCreators";

// Templates state management Reducer
const templateReducer = (state = initialState.template, action) => {
  switch (action.type) {
    case SET_TEMPLATE:
      return { ...action.payload };
    case UPDATE_TEMPLATE:
      return { ...action.payload };
    default:
      return state;
  }
};

export default templateReducer;
