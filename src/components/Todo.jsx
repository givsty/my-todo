import React, { useState } from "react";
import del from '../assets/img/delete.png';
import Input from '../components/Input'
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
            <Input
             addTask = {addTask}
             setInput = {setInput}
             task = {task}
             input = {input}
            />
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
