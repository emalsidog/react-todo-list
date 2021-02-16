import {
    GET_TODOS
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
        default: 
            return state;
    }
}

export default todo;