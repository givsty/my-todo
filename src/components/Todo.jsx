import React, { useState } from "react";
import del from '../assets/img/delete.png';

const Todo = () => {
  const categories = [
    "Favourites",
    "Groceries",
    "Work",
    "Study",
    "Sports",
    "+New category",
  ];

  const [todos, setTodos] = useState([{ name: "Построить беседку", completed: false, id: Math.floor(Math.random() * 100)}]);

  const [input, setInput] = useState('');

  const task = () => setTodos(todos.concat([{ name: input, completed: false }]));;

  const addTask = (e) => {
    if (e.key === "Enter" && input !== "" && input !== '') {
      task(e)
      setInput('')
    }
  };

  const setActive = (id) => { 
    setTodos(todos.filter((todo) =>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  };
  console.log(todos);
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
              value={input}
            />
            <button className="send" onClick={(e) => {
              if(input) {
                task(e)
                setInput('')
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
                    <input type="checkbox" onClick={setActive} />
                    {element.name}
                    <img src={del} alt="" />
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
