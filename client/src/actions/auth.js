import { 
  SET_CURRENT_USER, 
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_GOOGLE_LOGIN,
  USER_LOGOUT } from "../constants/actionTypes";

export const setCurrentUser = () => {
  return async (dispatch) => {
    if(localStorage.getItem("token") !== null) {
      try {
        const response = await fetch("/accounts/authenticated", {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
          }
        });
        if(response.status !== 401) {
          const data = await response.json();
          dispatch({
            type: SET_CURRENT_USER,
            payload: data.body
          });
        } else {
          return { isAuthenticated: false, user: null }
        }
      } catch (error) {
        dispatch({
          type: SET_CURRENT_USER,
          payload: { isAuthenticated: false, user: null }
        });
      }
    } else {
      dispatch({
        type: SET_CURRENT_USER,
        payload: { isAuthenticated: false, user: null }
      });
    }
  }
}

export const userLogin = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch("/accounts/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      if(response.status !== 401) {
        const data = await response.json();
        localStorage.setItem("token", data.body.token);
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data.body
        });
      } else {
        dispatch({ type: USER_LOGIN_FAILURE });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const userLogout = () => {
  return (dispatch) => {
    try {
      localStorage.removeItem("token");
      dispatch({ type: USER_LOGOUT });
    } catch (error) {
      console.error(error);
    }
  }
}

export const userRegister = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch("/accounts/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      })

      if(response.status !== 401) {
        const data = await response.json();
        dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: data
        });
      } else {
        dispatch({ type: USER_REGISTER_FAILURE });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const userGoogleLogin = googleData => {
  return async dispatch => {
    const response = await fetch("/accounts/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await response.json();
    localStorage.setItem("token", json.body.token);
    dispatch({
      type: USER_GOOGLE_LOGIN,
      payload: json.body
    });
  }
}