// Dependencies
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

// Actions
import { createFolder } from "../../actions/folder";

// Styles
import "./create-folder.scss";

const CreateFolder = () => {
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
          data-bs-target="#createFolder"
        >
          <i className="folder-create fas fa-folder-plus"></i>
        </button>
      </div>


      <div className="modal fade" id="createFolder" tabIndex="-1" aria-labelledby="createFolderLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="createFolderLabel">
                Create folder
              </h5>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="titleInput" className="form-label">
                  Folder title
                </label>
                <input autoComplete="off" name="title" type="text" className="form-control shadow-none" id="titleInput" 
                  ref={
                    register({
                    required: "Required field",
                    maxLength: { value: 50, message: "The maximum length is 50 symbols" }
                    })
                  } />
                { errors.title && <span className="error-text">{errors.title.message}</span> }
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateFolder;