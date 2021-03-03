// Dependencies
import { combineReducers } from "redux";

// Reducers
import auth from "./auth";
import todo from "./todo";
import leaderboard from "./leaderboard";
import folder from "./folder";

const reducers = combineReducers({ auth, todo, leaderboard, folder });

export default reducers;