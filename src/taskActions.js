import { CHANGE_EMAIL } from "./taskActionTypes";

export const changeEmail = (email) => {
  return {
    type: CHANGE_EMAIL,
    payload: email,
  };
};
