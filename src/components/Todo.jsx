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
  const [todos, setTodos] = useState([{ name: "Построить беседку", active: false}]);
  const task = (e) =>{
    setTodos(todos.concat({ name: e.target.value , active: false}));
  }
  const addTask = (e) => {
    if (e.key === "Enter") {
      setTodos(todos.concat({ name: e.target.value , active: false}));
    }
  };
  const handleKeyPress = (event) => {
    if(event.key === "Enter") {
      console.log('work')
    }
  }
  const setActive = (event) => {
    event.active = true
  }
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
            <input type="text" onKeyDown={addTask} placeholder="Add new task" onKeyDownCapture={handleKeyPress}/>
            <button className="send" >Отправить</button>
            <div className="categories-content">
              {todos.map((element) => {
                return (
                  <li style={{textDecoration: element.active ? 'line-through' : ''}}>
                    <input type="checkbox"
                    onClick={(e) => setActive}
                     />
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
