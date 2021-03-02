import { 
  SET_CURRENT_USER,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_GOOGLE_LOGIN,
  USER_LOGOUT,
  IS_LOADING } from "../constants/authActionTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
  serverResponseMessage: {
    isError: null,
    message: null
  },
  isLoading: true
}

const auth = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return { ...state, ...action.payload, isLoading: true }
    case USER_LOGIN_SUCCESS: {
      const { isAuthenticated, user } = action.payload;
      return { ...state, isAuthenticated, user, isLoading: false }
    }
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
    case USER_REGISTER_SUCCESS: {
      return { ...state, serverResponseMessage: action.payload, isLoading: false }
    }
    case USER_REGISTER_FAILURE:
      return { ...state, serverResponseMessage: action.payload, isLoading: false };
    case USER_GOOGLE_LOGIN:
      const { isAuthenticated, user } = action.payload;
      return {
        ...state,
        isAuthenticated,
        user,
        isLoading: false
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: true
      }
    case IS_LOADING: {
      return { ...state, isLoading: true }
    }
    default: 
      return state;
  }
}

export default auth;