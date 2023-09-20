import React, { useState } from "react";

const Todo = () => {
  const categories = [
    "Favourites",
    "Groceries",
    "Work",
    "Study",
    "Sports",
    "+New category",
  ];

  const [todos, setTodos] = useState([{ name: "Построить беседку", completed: false}]);
  
  const [input, setInput] = useState('');

  const task = e => setTodos(todos.concat([{ name: e.target.value , completed: false}]));

  const addTask = (e) => {
    if (e.key === "Enter" && e.target.value !== "" && todos.length !== 8 && e.target.value !== 0) {
      task(e)
    }
  };

  const setActive = (event) => {
    event.active = true;
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="categories">
          <ul className="cagegories-list">
            <li className="first">All Tasks</li>
            {categories.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
          <div className="line"></div>
          <div className="categories-header">
            <h2>All Task</h2>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              onKeyUpCapture={addTask}
              placeholder="Add new task"
              value={todos.name}
            />
            <button className="send" onClick={(e) => {
              if(todos.length !== 8 && e.target.value !== 0) {
                setTodos(todos.concat([{ name: input }]))
              }
            }}>
              Отправить
            </button>
            <div className="categories-content">
              {todos.map((element) => {
                return (
                  <li
                    style={{
                      textDecoration: element.active ? "line-through" : "",
                    }}
                  >
                    <input type="checkbox" onClick={(e) => setActive} />
                    {element.name}
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
