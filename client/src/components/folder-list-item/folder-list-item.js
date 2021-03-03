// Dependencies
import React from "react";

// Styles
import styles from "./folder-list-item.module.scss";

const FolderListItem = ({ title }) => {
  const classNames = `${styles.folderContainer} text-break d-flex flex-md-row flex-column justify-content-start`;

  return (
    <div className={classNames}>
      <div>
        <i className="fas fa-folder"></i>
      </div>
      <div>
        { title }
      </div>
    </div>
  );
}

export default FolderListItem;