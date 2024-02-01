import { combineReducers } from "redux";
import emailReducer from "./taskReducer";

const rootReducer = combineReducers({ email: emailReducer });

export default rootReducer;
