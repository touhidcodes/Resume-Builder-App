import { combineReducers } from "redux";
import contactReducer from "./setContact";

const rootReducer = combineReducers({
  contactReducer,
});

export default rootReducer;
