import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(
    [{
      title: "Gym",
      description: "GO out to the gym",
      id: 1,
    },
    {
      title: "Class",
      description: "Go to Class",
      id: 2,
    }]
  );
  return (
    <>
      {todo.map((val) => {
        return (
          <div>
            {todo.title}{todo.description}
          </div>
        );
      })}
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
