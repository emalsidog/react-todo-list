// Dependencies
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

// Actions
import { addTodo } from "../../actions/todo";

// Styles
import "./home.scss";

// Components
import TodoList from "../todo-list";
import FolderList from "../folder-list";
import CreateFolder from "../create-folder";

const Home = ({ addTodo, todos }) => {

  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { t } = useTranslation();

  const onSubmit = e => {
    e.preventDefault();
    addTodo({
      content: inputValue
    });
    setInputValue("");
  }

  const onInputChange = e => {
    setInputValue(e.target.value);
    e.target.value === "" ? setIsDisabled(true) : setIsDisabled(false);
  }

  let unfinishedTodos = todos.filter(({ isCompleted }) => !isCompleted);

  return (
    <>
      <Helmet>
        <title>Todoist | Your folders</title>
      </Helmet>

      <div className="container">
        <FolderList />
        <CreateFolder />
      </div>
      {/* <Helmet>
        <title>Todoist | {unfinishedTodos.length === 0 ? t("All's done") : `${unfinishedTodos.length} ${t("more to do")}`}</title>
      </Helmet>
      
      <div>
        <div className="container">
          <TodoList />
          
          <form onSubmit={onSubmit} className="input-group">
            <input value={inputValue} onChange={onInputChange} type="text" className="form-control" placeholder={t("Todo")} />
            <button className="btn btn-outline-secondary" type="submit" disabled={isDisabled}>{t("Add todo")}</button>
          </form>
        </div>
      </div> */}
    </>
  );
}

const mapStateToProps = state => {
  const { todos } = state.todo;
  return { todos }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);