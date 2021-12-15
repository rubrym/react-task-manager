import { useState } from "react";

function App() {
  const [title, setTitle] = useState("buy");
  const [tasks, setTasks] = useState([]);
  const pendingTask = tasks.length;

  return (
    <div>
      <h1> Task Manager</h1>
      <p>Pendding tasks: {pendingTask}</p>
      <div>
        <input
          value={title}
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setTitle("");
          }}
        >
          {" "}
          Empty!
        </button>
        <button
          onClick={() => {
            setTasks([title, ...tasks]);
            setTitle("");
          }}
        >
          {" "}
          Add!
        </button>
        <ul>
          {tasks.map((task) => {
            return <li>{task}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
