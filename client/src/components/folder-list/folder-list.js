// Dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styles
import "./folder-list.scss";

// Actions
import { getFolders } from "../../actions/folder";

// Components
import FolderListItem from "../folder-list-item";

const FolderList = () => {
  const folders = useSelector(({ folder }) => folder.folders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFolders());
  }, [dispatch]);

  return (
    <>
      {
        folders.map(({ title, _id: id }) => {
          return <FolderListItem key={id} title={title} />;
        })
      }
    </>
  );
};

export default FolderList;