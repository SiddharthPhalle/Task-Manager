import React, { useState } from "react";
import ModalComponent from "../UI/ModalComponent";
import classes from "./CreateTask.module.css";
import CreateTaskForm from "./CreateTaskForm";
import { useDispatch, useSelector } from "react-redux";

const CreateTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const taskList = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const [taskInput, setTaskInput] = useState({
    title: "",
    description: "",
  });

  const toggleHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const submitHandler = () => {
    if(taskInput.title.trim() === ""){
      alert("Please Enter valid title. Title should not be empty")
      return;
    }
    const found = taskList.find( task => task.title.toLowerCase() === taskInput.title.toLowerCase())
    if(found !== undefined)
    {
      alert('Task already exist')
      setTaskInput({title: "", description: ""});
      return;
    }
    dispatch({type:"ADD", payload: taskInput})
    toggleHandler();
    setTaskInput({title: "", description: ""});
  }

  return (
    <>
      <header className={`${classes.header} text-center`}>
        <div>
          <h3>Task Manager</h3>
          <button className="btn btn-success" onClick={toggleHandler}>
            Create task
          </button>
        </div>
      </header>
      <main>
        <div className="task-container"></div>
        <ModalComponent
          isModalOpen={isModalOpen}
          toggle={toggleHandler}
          title="Create Task"
          successButtonText="Create"
          description={
            <CreateTaskForm
              taskInput = {taskInput}
              setTaskInput = {setTaskInput}
            />
          }
          submitHandler = {submitHandler}
        />
      </main>
    </>
  );
};

export default CreateTask;
