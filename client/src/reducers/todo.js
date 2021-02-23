import {
    GET_TODOS,
    DELETE_TODO,
    DONE_TODO,
    IMPORTANT_TODO
} from "../constants/todoActionTypes";

const initialState = {
    todos: []
}

const todo = (state = initialState, action) => {
    switch(action.type) {
        case GET_TODOS: {
            return {
                todos: action.payload
            }
        }
        case DELETE_TODO: {
            const newTodos = state.todos.filter(({ _id }) => _id.toString() !== action.payload);            
            return {
                ...state, todos: newTodos
            }   
        }
        case DONE_TODO: {
            const newTodos = state.todos.map(item => {
                if(item._id.toString() === action.payload.toString()) {
                    return {
                        ...item, isCompleted: true
                    }
                }
                return item;
            });
            return {
                ...state, todos: newTodos
            }
        }
        case IMPORTANT_TODO: {
            const newTodos = state.todos.map(item => {
                if(item._id.toString() === action.payload.toString()) {
                    return {
                        ...item, isImportant: !item.isImportant
                    }
                }
                return item;
            });
            return {
                ...state, todos: newTodos
            }
        }
        default: 
            return state;
    }
}

export default todo;