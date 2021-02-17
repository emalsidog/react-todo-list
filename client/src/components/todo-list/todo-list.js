// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Actions
import { getTodos, deleteTodo, doneTodo, importantTodo } from "../../actions/todo";

// Styles
import "./todo-list.scss";

// Components
import TodoListItem from "../todo-list-item";

const TodoList = ({ todos, getTodos, deleteTodo, doneTodo, importantTodo }) => {
    useEffect(() => {
        getTodos();
    }, [getTodos]);

    const onDelete = id => {
        deleteTodo(id);
    }

    const onDone = id => {
        doneTodo(id);
    }

    const onImportant = id => {
        importantTodo(id);
    }

    let importantTodos = [];
    let commonTodos = [];

    todos.map(todo => {
        if(todo.isImportant) {
            return importantTodos.push(todo);
        }
        return commonTodos.push(todo);
    });

    return (
        <>
            <ol>
                <h4>Important</h4>
                {
                    importantTodos.length === 0 ? 
                        <div className="info-text">Nothing important to do</div> : 
                        importantTodos.map(({ content, _id: id, isCompleted, isImportant }) => {
                            return <TodoListItem key={id}
                                        isCompleted={isCompleted}
                                        isImportant={isImportant}
                                        content={content}
                                        onDone={() => onDone(id)}
                                        onDelete={() => onDelete(id)}
                                        onImportant={() => onImportant(id)} />
                    })
                }
            </ol>
            <ol>
                <h4>To do</h4>
                {
                    commonTodos.length === 0 ? 
                        <div className="info-text">Nothing to do</div> : 
                            commonTodos.map(({ content, _id: id, isCompleted, isImportant }) => {
                            return <TodoListItem key={id}
                                        isCompleted={isCompleted}
                                        isImportant={isImportant}
                                        content={content}
                                        onDone={() => onDone(id)}
                                        onDelete={() => onDelete(id)}
                                        onImportant={() => onImportant(id)} />
                    })
                }
            </ol>
        </>
    );
}

const mapStateToProps = state => state.todo;

const mapDispatchToProps = dispatch => {
    return {
        getTodos: () => dispatch(getTodos()),
        deleteTodo: id => dispatch(deleteTodo(id)),
        doneTodo: id => dispatch(doneTodo(id)),
        importantTodo: id => dispatch(importantTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);