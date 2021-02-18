// Dependencies
import { combineReducers } from "redux";

// Reducers
import auth from "./auth";
import todo from "./todo";
import leaderboard from "./leaderboard";

const reducers = combineReducers({ auth, todo, leaderboard });

export default reducers;