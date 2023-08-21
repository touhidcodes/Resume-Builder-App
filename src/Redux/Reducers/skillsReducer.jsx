import initialState from "../Reducers/initialState.json";
import { SET_SKILLS, UPDATE_SKILLS } from "../ActionCreators/ActionCreators";

//  Skills Information state Reducer
const skillsReducer = (state = initialState.skills, action) => {
  switch (action.type) {
    case SET_SKILLS:
      return { ...action.payload };
    case UPDATE_SKILLS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default skillsReducer;
