// Dependencies
import React from "react";

// Styles
import "./todo-list-item.scss";

const TodoListItem = ({ _id: id, content }) => {
    return (
        <li className="row list-item align-items-center">
            <div className="col-12 col-md-12 col-sm-12 col-xs-12 col-lg">{ content }</div>
            <div className="col-auto me-auto buttons-container"> 
                <button className="btn btn-sm btn-outline-success"><i className="fas fa-check"></i></button>
                <button className="btn btn-sm btn-outline-danger"><i className="fas fa-trash-alt"></i></button>
            </div>
        </li>
    );
}

export default TodoListItem;