import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ModalComponent from "../UI/ModalComponent";
import CreateTaskForm from "./CreateTaskForm";
import Card from "../UI/Card";

const Task = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskInput, setTaskInput] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
    isCompleted: task.isCompleted,
  });
  const dispatch = useDispatch();

  const toggleHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClick = (type) => {
    if(type === "EDIT")
    {
        setIsModalOpen(true);
        return;
    }
    dispatch({ type: type, payload: task.id });
  };

  const submitHandler = () => {
    if (taskInput.title.trim() === "") {
      alert("Please Enter valid title. Title should not be empty");
      return;
    }
    dispatch({ type: "EDIT", payload: taskInput });
    toggleHandler();
    setTaskInput({ title: "", description: "" });
  };
  return (
    <>
      <li key={task.id}>
        <Card task={task} onClick={onClick} />
      </li>
      <ModalComponent
        isModalOpen={isModalOpen}
        toggle={toggleHandler}
        title="Edit Task"
        successButtonText="Edit"
        description={
          <CreateTaskForm taskInput={taskInput} setTaskInput={setTaskInput} />
        }
        submitHandler={submitHandler}
      />
    </>
  );
};

export default Task;
