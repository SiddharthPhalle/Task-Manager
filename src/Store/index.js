import { createStore } from "redux";

const defaultState = {
  tasks: [],
  totalTasks: 1,
};
let id = 0;
const taskReducer = (state = defaultState, action) => {
  if (action.type === "ADD") {
    let task = action.payload;
    task = { ...task, id: ++id, isCompleted: false };
    return {
      ...state,
      tasks: [...state.tasks, task],
      totalTasks: state.totalTasks + 1,
    };
  }

  if (action.type === "EDIT") {
    const arg = action.payload;
    return {
      ...state,
      tasks: [...state.tasks].map((task) => {
        if (task.id === arg.id) {
          return {
            ...task,
            title: arg.title,
            description: arg.description
          };
        }
        return task;
      }),
    };
  }

  if (action.type === "COMPLETE") {
    return {
      ...state,
      tasks: [...state.tasks].map((task) => {
        if(task.id === action.payload)
          return {...task, isCompleted: true}
        return task
      }),
    };
  }

  if (action.type === "DELETE") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload)
    };
  }

  return state;
};

const store = createStore(taskReducer);
export default store;
