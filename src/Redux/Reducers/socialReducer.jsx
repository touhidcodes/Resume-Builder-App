import initialState from "../Reducers/initialState.json";
import { SET_SOCIAL, UPDATE_SOCIAL } from "../ActionCreators/ActionCreators";

//  Social Information state Reducer
const socialReducer = (state = initialState.social, action) => {
  switch (action.type) {
    case SET_SOCIAL:
      return { ...action.payload };
    case UPDATE_SOCIAL:
      return { ...action.payload };
    default:
      return state;
  }
};

export default socialReducer;
