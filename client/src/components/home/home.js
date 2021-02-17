// Dependencies
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

// Actions
import { addTodo } from "../../actions/todo";

// Styles
import "./home.scss";

// Components
import TodoList from "../todo-list";

const Home = ({ addTodo, todos }) => {

  const [inputValue, setInputValue] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    addTodo({
      content: inputValue
    });
    setInputValue("");
  }

  const onInputChange = e => {
    setInputValue(e.target.value);
  }

  let unfinishedTodos = todos.filter(({ isCompleted }) => !isCompleted);

  return (
    <>
      <Helmet>
        <title>Todoist | {unfinishedTodos.length === 0 ? "All's done" : `${unfinishedTodos.length} more to do`}</title>
      </Helmet>
      
      <div>
        <div className="container">
          <TodoList />
          
          <form onSubmit={onSubmit} className="input-group">
            <input value={inputValue} onChange={onInputChange} type="text" className="form-control" placeholder="Todo" />
            <button className="btn btn-outline-secondary" type="submit">Add todo</button>
          </form>
        </div>
      </div>
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