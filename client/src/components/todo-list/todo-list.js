// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Actions
import { getTodos, deleteTodo } from "../../actions/todo";

// Styles
import "./todo-list.scss";

// Components
import TodoListItem from "../todo-list-item";

const TodoList = ({ todos, getTodos, deleteTodo }) => {
    useEffect(() => {
        getTodos();
    }, [getTodos]);

    const onDelete = id => {
        deleteTodo(id);
    }

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
                todos.map(({ content, _id: id }) => {
                    return <TodoListItem key={id} content={content} onDelete={() => onDelete(id)} />
                })
            }
        </ol>
    );
}

const mapStateToProps = state => state.todo;

const mapDispatchToProps = dispatch => {
    return {
        getTodos: () => dispatch(getTodos()),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);