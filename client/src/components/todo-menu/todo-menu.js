// Dependencies
import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

// Actions
import { getTodos } from "../../actions/todo";
import * as actionCreators from "../../actions/todo";

// Components
import TodoList from "../todo-list";

const TodoMenu = ({ match }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { t } = useTranslation();
  const folderId = match.params.id;

  useEffect(() => {
    dispatch(getTodos(folderId))
  }, [dispatch, folderId]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(actionCreators.addTodo({
      content: inputValue,
      folderId
    }))
    setInputValue("");
  }

  const onInputChange = e => {
    setInputValue(e.target.value);
    e.target.value === "" ? setIsDisabled(true) : setIsDisabled(false);
  }

  return (
    <>
      <Helmet>
        <title>Todoist</title>
      </Helmet>
      
      <div>
        <div className="container">
          <TodoList />
          
          <form onSubmit={onSubmit} className="input-group">
            <input value={inputValue} onChange={onInputChange} type="text" className="form-control" placeholder={t("Todo")} />
            <button className="btn btn-outline-secondary" type="submit" disabled={isDisabled}>{t("Add todo")}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default TodoMenu;