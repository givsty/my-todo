import React, { useState } from "react";
import Input from "../components/Input";
import Categories from "./Categories";
import Tasks from "./Tasks";

const Todo = () => {
  const categories = [
    "All Task",
    "Favourites",
    "Groceries",
    "Work",
    "Study",
    "Sports",
    "+New category",
  ];
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState(0);
  const [onCategory, setOnCategory] = useState(0)
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
            {categories.map((element, index) => (
              <Categories element={element}
              index={index}
              setOnCategory={setOnCategory}
              setCategory={setCategory}
              category={category}
              />
            ))}
          </ul>
          <div className="line"></div>
          <div className="categories-header">
            <h2>{onCategory ? onCategory: 'All Task'}</h2>
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
