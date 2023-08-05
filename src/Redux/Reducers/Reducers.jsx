import { combineReducers } from "redux";
import personalReducer from "./personalReducer";
import contactReducer from "./setContact";

const rootReducer = combineReducers({
  personalReducer,
});

export default rootReducer;
