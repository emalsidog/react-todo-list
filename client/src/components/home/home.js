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

const Home = ({ addTodo }) => {

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

  return (
    <>
      <Helmet>
        <title>Home</title>
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

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
});

export default connect(null, mapDispatchToProps)(Home);