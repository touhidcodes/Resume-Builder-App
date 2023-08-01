import { combineReducers } from "redux";
import contactReducer from "./setContact";

const rootReducer = combineReducers({
  contactReducer: contactReducer,
});

export default rootReducer;
