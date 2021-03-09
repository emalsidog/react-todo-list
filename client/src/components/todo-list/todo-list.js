// Dependencies
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

// Actions
import * as actionCreators from "../../actions/todo";

// Styles
import "./todo-list.scss";

// Components
import TodoListItem from "../todo-list-item";
import Spinner from "../spinner"

const TodoList = () => {
    const dispatch = useDispatch();
    const { isLoading, todos } = useSelector(store => store.todo);
    const { t } = useTranslation();
    const { id: folderId } = useParams();

    const onDelete = id => {
        dispatch(actionCreators.deleteTodo({ todoId: id, folderId})); 
    }

    const onDone = id => {
        dispatch(actionCreators.doneTodo({ todoId: id, folderId})); 
    }

    const onImportant = id => {
        dispatch(actionCreators.importantTodo({ todoId: id, folderId})); 
    }

    // Creating todos arrays and render variables
    let importantTodos = [];
    let commonTodos = [];

    todos.map(todo => {
        if(todo.isImportant) {
            return importantTodos.push(todo);
        }
        return commonTodos.push(todo);
    });

    let importantMain;
    let todosMain;

    if(isLoading) {
        importantMain = <Spinner />
    } else if(importantTodos.length === 0) {
        importantMain = <div className="info-text">{t("Nothing important to do")}</div>
    } else {
        importantMain = importantTodos.map(({ content, _id: id, isCompleted, isImportant }) => {
                    return <TodoListItem key={id}
                            isCompleted={isCompleted}
                            isImportant={isImportant}
                            content={content}
                            onDone={() => onDone(id)}
                            onDelete={() => onDelete(id)}
                            onImportant={() => onImportant(id)} />
                    })
    }

    if (isLoading) {
        todosMain = <Spinner />
    } else if(commonTodos.length === 0) {
        todosMain = <div className="info-text">{t("Nothing to do")}</div>
    } else {
        todosMain = commonTodos.map(({ content, _id: id, isCompleted, isImportant }) => {
                    return <TodoListItem key={id}
                        isCompleted={isCompleted}
                        isImportant={isImportant}
                        content={content}
                        onDone={() => onDone(id)}
                        onDelete={() => onDelete(id)}
                        onImportant={() => onImportant(id)} />
                    })
    }
    
    return (
        <>
            <ol>
                <h4>{t("Important")}</h4>
                {
                    importantMain
                }
            </ol>
            <ol>
                <h4>{t("To do")}</h4>
                {
                    todosMain
                }
            </ol>
        </>
    );
}

export default TodoList;