import initialState from "../Reducers/initialState.json";
import {
  SET_EDUCATION,
  UPDATE_EDUCATION,
} from "../ActionCreators/ActionCreators";

//  Professional Information state Reducer
const educationalReducer = (state = initialState.education, action) => {
  switch (action.type) {
    case SET_EDUCATION:
      return { ...action.payload };
    case UPDATE_EDUCATION:
      return { ...action.payload };
    default:
      return state;
  }
};

export default educationalReducer;
