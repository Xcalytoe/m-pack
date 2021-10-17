import { combineReducers } from "../../util";
import authReducer from "./authReducer";

// import userReducer from './userReducer'
// import authReducer from './authReducer'

export default combineReducers(
  authReducer
  // userReducer,
  // authReducer
);
