import {
    GET_TODOS
} from "../constants/todoActionTypes";

export const getTodos = () => {
    return async dispatch => {
        const response = await fetch("/todos", {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
          });
        const json = await response.json();
        dispatch({ 
            type: GET_TODOS, 
            payload: json.body.todos 
        });
    }
}