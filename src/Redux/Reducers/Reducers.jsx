import { combineReducers } from "redux";
import personalReducer from "./personalReducer";
import professionalReducer from "./professionalReducer";
import educationalReducer from "./educationalReducer";

const rootReducer = combineReducers({
  personalReducer,
  professionalReducer,
  educationalReducer,
});

export default rootReducer;
