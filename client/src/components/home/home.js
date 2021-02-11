// Dependencies
import React from "react";
import { Helmet } from "react-helmet";

// Styles
import "./home.scss";

// Components
import NavbarHOC from "../navbar";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <NavbarHOC />
        <h3>Home</h3>
      </div>
    </>
  );
}

export default Home;