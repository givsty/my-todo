import React, { useState } from "react";
import del from "../assets/img/delete.png";
import Input from "../components/Input";
const Todo = () => {
  const categories = [
    "Favourites",
    "Groceries",
    "Work",
    "Study",
    "Sports",
    "+New category",
  ];

  const [todos, setTodos] = useState([
    {
      name: "Построить беседку",
      completed: false,
      id: Math.floor(Math.random() * 100),
    },
    {
      name: "Построить дом",
      completed: false,
      id: Math.floor(Math.random() * 100),
    },
  ]);

  const [input, setInput] = useState("");
  const [category, setCategory] = useState(0)
  const task = () =>
    setTodos(todos.concat([{ name: input, completed: false, id: Math.floor(Math.random() * 100) }]));

  const addTask = (e) => {
    if (e.key === "Enter" && input !== "" && input !== "") {
      task(e);
      setInput("");
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(element => element.id !== id))
  };

  const setActive = (id) => {
    setTodos(todos.filter((element) =>{
      if(element.id === id) {
        element.completed = !element.completed
      }
      return element
    }))
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="categories">
          <ul className="cagegories-list">
            <li className="first">All Tasks</li>
            {categories.map((element, index) => (
              <li
                style={{ fontWeight: index === category ? "700" : "" }}
                key={index}
                onClick={() =>setCategory(index)}
              >
                {element}
              </li>
            ))}
          </ul>
          <div className="line"></div>
          <div className="categories-header">
            <h2>All Task</h2>
            <Input
              addTask={addTask}
              setInput={setInput}
              task={task}
              input={input}
            />
            <div className="categories-content">
              {todos.map((element) => {
                return (
                  <li
                    style={{
                      textDecoration: element.active ? "line-through" : "",
                    }}
                  >
                    <input
                      type="checkbox"
                      onClick={() => setActive(element.id)}
                    />
                    {element.name}
                    <img onClick={() => deleteTask(element.id)}src={del} alt="" />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
