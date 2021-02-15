// Dependencies
import React from "react";

// Styles
import "./todo-list.scss";

// Components
import TodoListItem from "../todo-list-item";

const TodoList = () => {
    const testArr = [1, 2, 3]
    return (
        <ol>
            {
                testArr.map(item => {
                    return <TodoListItem key={item} />
                })
            }
        </ol>
    );
}

export default TodoList;