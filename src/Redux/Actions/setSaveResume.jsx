import { SAVE_RESUME } from "../ActionCreators/ActionCreators";

// Saves the Resume to My-Resume folder
export const setSaveResume = (resume) => {
  return {
    type: SAVE_RESUME,
    payload: resume,
  };
};
