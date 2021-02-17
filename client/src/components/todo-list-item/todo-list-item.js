// Dependencies
import React from "react";

// Styles
import "./todo-list-item.scss";

const TodoListItem = ({ onDone, onDelete, onImportant, content, isCompleted, isImportant }) => {
    let classNames = "col-12 col-md-12 col-sm-12 col-xs-12 col-lg";
    if(isCompleted) {
        classNames += " completed";

    }
    if(isImportant) {
        classNames += " important";
    }
    return (
        <li className="row list-item align-items-center">
            <div className={classNames}>{ content }</div>
            <div className="col-auto me-auto buttons-container"> 
                {
                    isCompleted ? null : (
                            <>
                                <button onClick={onDone} className="btn btn-sm btn-outline-success">
                                    <i className="fas fa-check"></i>
                                </button>
                                <button onClick={onImportant} className="btn btn-sm btn-outline-info">
                                    {
                                        isImportant ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>
                                    }
                                </button>
                            </>
                        )
                }
                <button onClick={onDelete} className="btn btn-sm btn-outline-danger">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    );
}

export default TodoListItem;