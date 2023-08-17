import { combineReducers } from "redux";
import personalReducer from "./personalReducer";
import professionalReducer from "./professionalReducer";
import educationalReducer from "./educationalReducer";
import saveResumeReducer from "./saveResumeReducer";

const rootReducer = combineReducers({
  personalReducer,
  professionalReducer,
  educationalReducer,
  saveResumeReducer,
});

export default rootReducer;
