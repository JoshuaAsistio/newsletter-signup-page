import { CHANGE_EMAIL } from "./taskActionTypes";

const initialState = {
  email: "ash@loremiipsumcompany.com",
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default emailReducer;
