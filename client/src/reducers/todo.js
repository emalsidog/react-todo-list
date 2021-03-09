// Constants
import * as types from "../constants/todoActionTypes";

const initialState = {
    todos: [],
    isLoading: false,
    error: {
        isError: false,
        message: ""
    }
}

const todo = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_TODOS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.GET_TODOS_SUCCESS: {
            return {
                ...state, 
                isLoading: false, 
                todos: action.payload
            }
        }
        case types.GET_TODOS_FAILURE: {
            return {
                ...state, 
                isLoading: false, 
                error: {
                    isError: action.payload.isError,
                    message: action.payload.message
                }
            }
        }
        case types.ADD_TODO_REQUEST: {
            return { 
                ...state, 
                todos: [...state.todos, action.payload] 
            }
        }
        case types.ADD_TODO_SUCCESS: {
            const { newTodo, fakeTodo } = action.payload;
            const { todos } = state;

            const idx = todos.indexOf(fakeTodo);
            const newTodos = [...todos.slice(0, idx), newTodo, ...todos.slice(idx + 1)]

            return {
              ...state, 
              todos: newTodos
            }
        }
        case types.ADD_TODO_FAILURE: {
            return {
                ...state,
                error: {
                    isError: true,
                    message: action.payload
                }
            }
        }
        case types.DELETE_TODO_REQUEST: {
            const newTodos = state.todos.filter(todo => todo._id !== action.payload);
            return {
                ...state,
                todos: newTodos
            }
        }
        case types.DELETE_TODO_SUCCESS: {
            return {
                ...state
            }
        }
        case types.DELETE_TODO_FAILURE: {
            return {
                ...state,
                error: {
                    isError: true,
                    message: action.payload
                }
            }
        }
        case types.DONE_TODO_REQUEST: {
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
        case types.DONE_TODO_SUCCESS: {
            return {
                ...state
            }
        }
        case types.DONE_TODO_FAILURE: {
            return {
                ...state,
                error: {
                    isError: true,
                    message: action.payload
                }
            }
        }
        case types.IMPORTANT_TODO_REQUEST: {
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
        case types.IMPORTANT_TODO_SUCCESS: {
            return {
                ...state
            }
        }
        case types.IMPORTANT_TODO_FAILURE: {
            return {
                ...state,
                error: {
                    isError: true,
                    message: action.payload
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default todo;