import initialState from "../Reducers/initialState.json";
import {
  SET_PROFESSIONAL,
  UPDATE_PROFESSIONAL,
} from "../ActionCreators/ActionCreators";

//  Professional Information state Reducer
const professionalReducer = (state = initialState.professional, action) => {
  switch (action.type) {
    case SET_PROFESSIONAL:
      return { ...action.payload };
    case UPDATE_PROFESSIONAL:
      return { ...action.payload };
    default:
      return state;
  }
};

export default professionalReducer;
