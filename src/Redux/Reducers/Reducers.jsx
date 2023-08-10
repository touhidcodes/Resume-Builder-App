import { combineReducers } from "redux";
import personalReducer from "./personalReducer";
import professionalReducer from "./professionalReducer";
import contactReducer from "./setContact";

const rootReducer = combineReducers({
  personalReducer,
  professionalReducer,
});

export default rootReducer;
