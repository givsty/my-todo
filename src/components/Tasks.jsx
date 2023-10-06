import React from "react";
import del from "../assets/img/delete.png";

const Tasks = ({todos, setTodos, element}) => {
  const setActive = (id) => {
    setTodos(
      todos.filter((element) => {
        if (element.id === id) {
          element.completed = !element.completed;
        }
        return todos;
      })
    );
  };
  const deleteTask = (id) => {
    setTodos(todos.filter((element) => element.id !== id));
  };
  return (
    <li
      style={{
        textDecoration: element.completed ? "line-through" : "",
      }}
    >
      <input type="checkbox" onClick={() => setActive(element.id)} />
      {element.name}
      <img onClick={() => deleteTask(element.id)} src={del} alt="" />
    </li>
  );
};

export default Tasks;
