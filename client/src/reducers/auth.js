import { 
  SET_CURRENT_USER,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_GOOGLE_LOGIN,
  USER_LOGOUT,
  IS_LOADED } from "../constants/authActionTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
  serverResponseMessage: {
    isError: null,
    message: null
  },
  isLoaded: false
}

const auth = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return { ...state, ...action.payload, isLoaded: false }
    case USER_LOGIN_SUCCESS: {
      const { isAuthenticated, user } = action.payload;
      return { ...state, isAuthenticated, user, isLoaded: true }
    }
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoaded: true
      }
    case USER_REGISTER_SUCCESS:
    case USER_REGISTER_FAILURE:
      return { ...state, serverResponseMessage: action.payload, isLoaded: true };
    case USER_GOOGLE_LOGIN:
      const { isAuthenticated, user } = action.payload;
      return {
        ...state,
        isAuthenticated,
        user,
        isLoaded: true
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoaded: true
      }
    case IS_LOADED: {
      return { ...state, isLoaded: false }
    }
    default: 
      return state;
  }
}

export default auth;