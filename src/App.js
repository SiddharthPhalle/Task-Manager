import TaskList from "./components/TaskList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <div className="App">
      <CreateTask />
      <TaskList />
    </div>
  );
}

export default App;
