// Dependencies
import React from "react";
import { Helmet } from "react-helmet";

// Styles
import "./home.scss";

// Components
import FolderList from "../folder-list";
import CreateFolder from "../create-folder";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Todoist | Your folders</title>
      </Helmet>

      <div className="container">
        <FolderList />
        <CreateFolder />
      </div>
    </>
  );
}


export default Home;