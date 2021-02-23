import { 
  SET_CURRENT_USER,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_GOOGLE_LOGIN,
  USER_LOGOUT } from "../constants/authActionTypes";

const initialState = {
  user: null,
  isAuthenticated: false
}

const auth = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...action.payload
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...action.payload
      }
    case USER_LOGIN_FAILURE:
      return {
        user: null,
        isAuthenticated: false
      }
    case USER_REGISTER_SUCCESS:
      return state;
    case USER_REGISTER_FAILURE:
      return state;
    case USER_GOOGLE_LOGIN:
      const { isAuthenticated, user } = action.payload;
      return {
        isAuthenticated,
        user
      };
    case USER_LOGOUT:
      return {
        user: null,
        isAuthenticated: false
      }
    default: 
      return state;
  }
}

export default auth;