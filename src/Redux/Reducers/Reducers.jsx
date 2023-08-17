import { combineReducers } from "redux";
import personalReducer from "./personalReducer";
import professionalReducer from "./professionalReducer";
import educationalReducer from "./educationalReducer";
import saveResumeReducer from "./saveResumeReducer";
import templateReducer from "./templateReducer";
import selectTemplateReducer from "./selectTemplateReducer";

const rootReducer = combineReducers({
  personalReducer,
  professionalReducer,
  educationalReducer,
  saveResumeReducer,
  templateReducer,
  selectTemplateReducer,
});

export default rootReducer;
