// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Actions
import { getTodos } from "../../actions/todo";

// Styles
import "./todo-list.scss";

// Components
import TodoListItem from "../todo-list-item";

const TodoList = ({ todos, getTodos }) => {
    useEffect(() => {
        getTodos();
    }, [getTodos]);

    if(todos.length === 0) {
        return (
            <div className="no-todo">
                Nothing todo!!! Hooorayyyy!!!
            </div>
        );
    }

    return (
        <ol>
            {
                todos.map(({ content, _id }) => {
                    return <TodoListItem key={_id} content={content} />
                })
            }
        </ol>
    );
}

const mapStateToProps = state => state.todo;

const mapDispatchToProps = dispatch => {
    return {
        getTodos: () => dispatch(getTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);