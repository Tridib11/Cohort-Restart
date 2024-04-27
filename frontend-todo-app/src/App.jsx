import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "Gym",
      description: "GO out to the gym",
      id: 1,
    },
    {
      title: "Class",
      description: "Go to Class",
      id: 2,
    },
  ]);
  return (
    <div>
      {todo.map((val) => {
        return <Todo title={val.title} description={val.description} />;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <>
      {props.title} <br />
      {props.description} <br />
    </>
  );
}

// function Lol({ name, desc }) {
//   return (
//     <div>
//       {JSON.stringify(todos)}
//     </div>
//   );
// }

export default App;

// setInterval(() => {
//   setTodo({
//     title: "Maan",
//     description: "run",
//     id: 3,
//   });
// }, 2000);
