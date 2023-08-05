import initialState from "../Reducers/initialState.json";
import {
  SET_PERSONAL,
  UPDATE_PERSONAL,
} from "../ActionCreators/ActionCreators";

//  Personal Information state Reducer
const personalReducer = (state = initialState.personal, action) => {
  switch (action.type) {
    case SET_PERSONAL:
      return { ...action.payload };
    case UPDATE_PERSONAL:
      return { ...action.payload };
    default:
      return state;
  }
};

export default personalReducer;
