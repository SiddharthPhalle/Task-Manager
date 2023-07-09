import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
    const {task, onClick} = props
  return (
    <div className={`${classes.cardContainer} m-2`}>
      <div className="card">
        <header className="text-center">
          <h5 className="card-header">{task.title}</h5>
        </header>
        <main className="text-center">
          <div className="card-body">
            <p className="card-text">{task.description}</p>
            <i className="bi bi-0-circle"></i>
          </div>
        </main>
        <footer className="text-end">
          <div className="card-footer">
            {!task.isComplete&&<button
              className={`${classes.cardButton} btn`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Mark as done"
              onClick={() => onClick("COMPLETE")}
            >
              <i class="bi bi-check-square-fill"></i>
            </button>}
            <button
              className={`${classes.cardButton} btn`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Delete"
              onClick={() => onClick("DELETE")}
            >
              <i class="bi bi-trash3-fill"></i>
            </button>
            <button
              className={`${classes.cardButton} btn`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Edit"
              onClick={() => onClick("EDIT")}
            >
              <i class="bi bi-pencil-square"></i>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Card;
