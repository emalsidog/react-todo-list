import {
    GET_TODOS,
    ADD_TODO,
    DELETE_TODO
} from "../constants/todoActionTypes";

const initialState = {
    todos: []
}

const todo = (state = initialState, action) => {
    switch(action.type) {
        case GET_TODOS:
            return {
                todos: action.payload
            }
        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            const newTodos = state.todos.filter(({ _id }) => _id.toString() !== action.payload);            
            return {
                ...state, todos: newTodos
            }
        default: 
            return state;
    }
}

export default todo;