import { useEffect, useState, useRef } from "react";
import "../src/App.css";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const pendingTask = tasks.length;
  const inputRef = useRef();
  const listRef = useRef();
  useEffect(() => {
    document.title = pendingTask + " Tasks remaining";
  }, [pendingTask]);

  useEffect(() => {
    if (pendingTask === 0) {
      alert("Felicidades has completado todas las tareas!!!");
    }
  }, [pendingTask]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1> Task Manager</h1>
      <p>Pendding tasks: {pendingTask}</p>
      <form
        onSubmit={(event) => {
          prevent;
        }}
      >
        <input
          ref={inputRef}
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
          Empty!
        </button>
        <button
          type="submit"
          onClick={() => {
            setTasks([title, ...tasks]);
            setTitle("");
            inputRef.current.focus();
            listRef.current.scrollTop = 0;
          }}
        >
          Add!
        </button>
        <ul class="task-list">
          {tasks.map((task) => {
            return (
              <li
                onClick={() => {
                  setTasks(tasks.filter((t) => t !== task));
                }}
              >
                {task}
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
