import initialState from "./initialState.json";
import { SAVE_RESUME } from "../ActionCreators/ActionCreators";

// Save resume state Reducer
const saveResumeReducer = (state = initialState.save, action) => {
  switch (action.type) {
    case SAVE_RESUME:
      return { ...action.payload };
    default:
      return state;
  }
};

export default saveResumeReducer;
