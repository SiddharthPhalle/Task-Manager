import React from "react";
const CreateTaskForm = (props) => {

  const {taskInput, setTaskInput} = props

  const changeHandler = (e) => {
    if (e.target.name === "title")
      setTaskInput({ ...taskInput, title: e.target.value });
    else 
      setTaskInput({ ...taskInput, description: e.target.value });
  };

  return (
    <form>
      <div className="form-group m-2">
        <label>Task title</label>
        <input
          type="text"
          className="form-control"
          value={taskInput.title}
          name="title"
          onChange={changeHandler}
        />
      </div>
      <div className="form-group m-2">
        <label>Description</label>
        <textarea
          rows={5}
          className="form-control"
          value={taskInput.description}
          name="description"
          onChange={changeHandler}
        ></textarea>
      </div>
    </form>
  );
};

export default CreateTaskForm;
