import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({
    title: "Gym",
    description: "GO out to the gym",
    id: 1,
  });

  setInterval(() => {
    setTodo({
      title: "Maan",
      description: "run",
      id: 3,
    });
  }, 2000);
  return (
    <>
      {todo.title} <br />
      {todo.description} <br />
      {todo.id} <br />
      <Lol name={"Tridib"} desc={"desc"} />
    </>
  );
}

function Lol({ name, desc }) {
  return (
    <div>
      {name}
      <br />
      {desc}
    </div>
  );
}

export default App;
