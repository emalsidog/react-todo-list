import {
    GET_TODOS,
    ADD_TODO,
    DELETE_TODO
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

export const addTodo = todo => {
    return async dispatch => {
        const response = await fetch("/todos/add-todo", {
            method: "POST",
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token"),
              "Content-Type": "application/json"
            },
            body: JSON.stringify(todo),
        });
        const json = await response.json();
        
        dispatch({
            type: GET_TODOS,
            payload: json.body.todos
        });
    }
}

export const deleteTodo = (id) => {
    return async dispatch => {
        dispatch({
            type: DELETE_TODO,
            payload: id
        });
        await fetch("/todos/delete-todo", {
            method: "POST",
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token"),
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ id }),
        }); 
    }
}