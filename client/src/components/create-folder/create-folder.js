// Dependencies
import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Popover, Button } from "antd";

// Actions
import { createFolder } from "../../actions/folder";

// Styles
import "./create-folder.scss";

const CreateFolder = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    e.target.reset();
    dispatch(createFolder(data));
  };

  const content = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <input
          placeholder="Type here..."
          autoFocus
          autoComplete="off"
          name="title"
          type="text"
          className="form-control shadow-none"
          ref={register({
            required: "Required field",
            maxLength: { value: 50, message: "The maximum length is 50 symbols" },
          })}
        />
        {
          errors.title && <span className="error-text">{errors.title.message}</span>
        }
      </div>
      <div>
        <Button type="submit">Create!</Button>
      </div>
    </form>
  );

  return (
    <div className="d-flex justify-content-end">
      <Popover content={content} title="Folder title" trigger="click">
        <Button className="create-folder-button ant-btn">
          <i className="folder-create fas fa-folder-plus"></i>
        </Button>
      </Popover>
    </div>
  );
};

export default CreateFolder;
