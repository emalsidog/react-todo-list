// Actions
import * as types from "../constants/todoActionTypes";

// Service
import TodoService from "../services/todos";
const todoService = new TodoService();

export const getTodos = (folderId) => {
    return async dispatch => {
        dispatch({ type: types.GET_TODOS_REQUEST });
        const response = await todoService.getTodos(folderId);

        if(!response.isError) {
            dispatch({ 
                type: types.GET_TODOS_SUCCESS, 
                payload: response.body.todos 
            })
        } else {
            dispatch({
                type: types.GET_TODOS_FAILURE,
                payload: {
                    isError: response.isError,
                    message: response.message
                }
            })
        }
    }
}

export const addTodo = todoData => {
    return async dispatch => {

        const _id = Math.floor(Math.random() * (999999 - 100000) + 100000);    
        const fakeTodo = {
          _id,
          content: todoData.content,
          isCompleted: false,
          isImportant: false
        }
    
        dispatch({ type: types.ADD_TODO_REQUEST, payload: fakeTodo });
        const response = await todoService.addTodo(todoData);
        if(!response.isError) {
            dispatch({ 
                type: types.ADD_TODO_SUCCESS, 
                payload: { 
                    newTodo: response.body.todo, 
                    fakeTodo
                } 
            });
        } else {
            dispatch({ 
                type: types.ADD_TODO_FAILURE, 
                payload: { 
                    message: response.message 
                } 
            })
        }
    }
}

export const deleteTodo = todoData => {
    return async dispatch => {
        dispatch({ type: types.DELETE_TODO_REQUEST, payload: todoData.todoId });
        const response = await todoService.deleteTodo(todoData);
        if(!response.isError) {
            dispatch({ 
                type: types.DELETE_TODO_SUCCESS,
            });
        } else {
            dispatch({
                type: types.DELETE_TODO_FAILURE,
                payload: response.message
            });
        }
    }   
}

export const doneTodo = todoData => {
    return async dispatch => {
        dispatch({ type: types.DONE_TODO_REQUEST, payload: todoData.todoId });
        const response = await todoService.doneTodo(todoData);
        if(!response.isError) {
            dispatch({
                type: types.DONE_TODO_SUCCESS
            })
        } else {
            dispatch({
                type: types.DONE_TODO_FAILURE,
                payload: response.message
            })
        }
    } 
}

export const importantTodo = todoData => {
    return async dispatch => {
        dispatch({ type: types.IMPORTANT_TODO_REQUEST, payload: todoData.todoId });
        const response = await todoService.importantTodo(todoData);
        if(!response.isError) {
            dispatch({
                type: types.IMPORTANT_TODO_SUCCESS
            })
        } else {
            dispatch({
                type: types.IMPORTANT_TODO_FAILURE,
                payload: response.message
            })
        }
    } 
}