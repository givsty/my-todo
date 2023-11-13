import React, { useState } from "react";
import del from "../assets/img/delete.png";

const Modal = ({ toggle, setToggle, categories, setCategories, localCategories, setLocalCategories}) => {
  const [input, setInput] = useState('')
  const task = () => {
    setCategories(
      categories.concat([
        { name: input, completed: false, id: Math.floor(Math.random() * 100) },
      ])
    );
    setLocalCategories(categories)
  };
  const addTask = (e) => {
    if (e.key === "Enter" && input !== "" && input !== "") {
      task(e);
      setInput("");
    }
  };

  return (
    <div className="modal-window">
      <div className="modal-bg">
        <div className="modal-body">
          <div className="modal-header">
            <h3>Add new Category</h3>
            <img
              className="modal-close"
              src={del}
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <div className="modal-body__content">
            <input
              className="modal__input"
              type="text"
              onChange={(e) => setInput(e.target.value)}
              onKeyUpCapture={addTask}
              placeholder="Add new task"
              value={input}
            />
            <button onClick={(e)=>{
                if (input) {
                  task(e);
                  setInput("");
                }
            }}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
