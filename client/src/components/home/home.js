// Dependencies
import React from "react";
import { Helmet } from "react-helmet";

// Styles
import "./home.scss";

// Components
import NavbarHOC from "../navbar";
import TodoList from "../todo-list";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <NavbarHOC />
        <div className="container">
          <TodoList />
          
          <form className="input-group">
            <input type="text" className="form-control" placeholder="Todo" />
            <button className="btn btn-outline-secondary" type="button">Add todo</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;