import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

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

  useEffect(() => {
    console.log("Hey");
  }, []);
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
export default App;

// function Lol({ name, desc }) {
//   return (
//     <div>
//       {JSON.stringify(todos)}
//     </div>
//   );
// }

// setInterval(() => {
//   setTodo({
//     title: "Maan",
//     description: "run",
//     id: 3,
//   });
// }, 2000);
