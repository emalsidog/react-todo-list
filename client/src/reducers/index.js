// Dependencies
import { combineReducers } from "redux";

// Reducers
import auth from "./auth";
import todo from "./todo";

const reducers = combineReducers({ auth, todo });

export default reducers;