// Dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Styles
import "./folder-list.scss";

// Actions
import { getFolders } from "../../actions/folder";

// Components
import FolderListItem from "../folder-list-item";

const FolderList = () => {
  const folders = useSelector(({ folder }) => folder.folders);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getFolders());
  }, [dispatch]);

  const handleClick = folderId => {
    history.push(`/${folderId}`);
  }

  return (
    <>
      {
        folders.map(({ title, _id: id }) => {
          return <FolderListItem key={id} title={title} handleClick={() => handleClick(id)} />;
        })
      }
    </>
  );
};

export default FolderList;