// Dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

// Styles
import "./folder-list.scss";

// Actions
import { getFolders, createFolder } from "../../actions/folder";

// Components
import FolderListItem from "../folder-list-item";

const FolderList = () => {
  const folders = useSelector(({ folder }) => folder.folders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFolders());
  }, [dispatch]);

  if (folders.length <= 0) {
    return <NoFolders />;
  }

  return (
    <>
      {folders.map(({ title, _id: id }) => {
        return <FolderListItem key={id} title={title} />;
      })}
      <NoFolders />
    </>
  );
};

const NoFolders = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(createFolder(data));
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="create-folder-button shadow-none btn btn-secondary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i className="folder-create fas fa-folder-plus"></i>
        </button>
      </div>


      <div
        className="modal fade"
        id="staticBackdrop"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Create folder
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="titleInput" className="form-label">
                  Folder title
                </label>
                <input
                  autoComplete="off"
                  name="title"
                  type="text"
                  className="form-control"
                  id="titleInput"
                  ref={register({
                    required: "Required field",
                    maxLength: { value: 50, message: "The maximum length is 50 symbols" }
                  })}
                />
                {errors.title && <span>{errors.title.message}</span>}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit(onSubmit)}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolderList;
