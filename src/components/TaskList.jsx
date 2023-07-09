import React, { useState } from "react";
import { useSelector } from "react-redux";
import Switch from "react-switch";
import classes from "./TaskList.module.css";
import Task from "./Task.jsx";
import ExportToExcel from "./ExportToExcel";

const TaskList = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const taskList = useSelector((state) => state.tasks);

  const toggleChangeHandler = () => {
    setShowCompleted(!showCompleted);
  };

  let headerBody = showCompleted ? "Completed tasks" : "Tasks to complete";
  return (
    <>
      <div className={`${classes.headers} pt-2 mb-2`}>
        <ExportToExcel taskList={taskList} showCompleted={showCompleted} />
        <span className="h3">{headerBody}</span>
        <Switch
          className={`${classes.toggleButton} `}
          onChange={toggleChangeHandler}
          checked={showCompleted}
        />
      </div>
      <div className={classes.taskList}>
        <ul>
          {showCompleted
            ? taskList.map((task) => {
                if (task.isCompleted) return <Task key={task.id} task={task} />;
              })
            : taskList.map((task) => {
                if (!task.isCompleted)
                  return <Task key={task.id} task={task} />;
              })}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
