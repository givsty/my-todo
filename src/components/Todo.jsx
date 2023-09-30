import React, { useState } from "react";
import Input from "../components/Input";
import Categories from "./Categories";
import Tasks from "./Tasks";
import categories from './Categories'
const Todo = () => {
  // const categories = [
  //   "Favourites",
  //   "Groceries",
  //   "Work",
  //   "Study",
  //   "Sports",
  //   "+New category",
  // ];
  console.log(categories);
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");
  const task = () =>
    setTodos(
      todos.concat([
        { name: input, completed: false, id: Math.floor(Math.random() * 100) },
      ])
    );

  const addTask = (e) => {
    if (e.key === "Enter" && input !== "" && input !== "") {
      task(e);
      setInput("");
    }
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="categories">
          <ul className="cagegories-list">
            <li className="first">All Tasks</li>
            {categories.map((element, index) => (
              <Categories element={element}
              index={index}
              />
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
              {todos.map((element, index) => {
                return (
                  <Tasks
                  key={index}
                  element={element}
                  todos={todos}
                  setTodos={setTodos}
                  />
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
