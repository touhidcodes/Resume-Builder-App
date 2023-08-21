import { combineReducers } from "redux";
import personalReducer from "./personalReducer";
import professionalReducer from "./professionalReducer";
import educationalReducer from "./educationalReducer";
import saveResumeReducer from "./saveResumeReducer";
import templateReducer from "./templateReducer";
import selectTemplateReducer from "./selectTemplateReducer";
import socialReducer from "./socialReducer";
import skillsReducer from "./skillsReducer";

const rootReducer = combineReducers({
  templateReducer,
  personalReducer,
  professionalReducer,
  educationalReducer,
  saveResumeReducer,
  socialReducer,
  skillsReducer,
  selectTemplateReducer,
});

export default rootReducer;
