import React, { useState, useEffect} from "react";
import Input from "../components/Input";
import Categories from "./Categories";
import Tasks from "./Tasks";
import Modal from "./Modal";
import SkeletonCategories from "./ui/SkeletonCategories";
import useLocalStorage from "../hooks/useLocalStorage";
import { Navigate } from "react-router-dom";
import { useAuth } from '../hooks//use-auth';
import Loader, { Circle } from 'react-preloaders'
const Todo = () => {
  const [localTask, setLocalTask] = useLocalStorage([], `task`)
  const [toggle, setToggle] = useState(0);
  const [categories, setCategories] = useState([]);
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState(0);
  const [onCategory, setOnCategory] = useState(0);
  const [input, setInput] = useState("");
  const [isLoading, setIsloading] = useState(true)
  const {isAuth} = useAuth();
  useEffect(() => {
    fetch("https://652ad3c14791d884f1fd67ca.mockapi.io/Todo")
      .then(res => res.json())
      .then(
        (result) => {
          setCategories(result)
          setIsloading(false)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])
  const addToLocal = (id) =>{
    const newItem = todos.find(item=> item.id === id)
    setLocalTask([localTask, newItem])
  }
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

  return isAuth ? (
    <div className="wrapper">
      <div className="modal__content">
        {toggle ? (
          <Modal
            setToggle={setToggle}
            toggle={toggle}
            categories={categories}
            setCategories={setCategories}
          />
        ) : (
          ""
        )}
      </div>
      <div className="content">
        <div className="categories">
          <ul className="cagegories-list">
            {
              isLoading ? [...new Array(6)].map(index => <SkeletonCategories key={index}/>) : categories.map((element, index) => (
                <Categories
                  element={element.name}
                  index={index}
                  setOnCategory={setOnCategory}
                  setCategory={setCategory}
                  category={category}
                  key={index}
                />
              ))
            }
            <li style={{ color: "gray" }} onClick={() => setToggle(!toggle)}>
              +New category
            </li>
          </ul>
          <div className="line"></div>
          <div className="categories-header">
            <h2>{onCategory ? onCategory : "All Task"}</h2>
            <Input
              addTask={addTask}
              setInput={setInput}
              task={task}
              input={input}
              addToLocal={addToLocal}
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
  ): <Navigate to="/my-todo"/>;
};

export default Todo;
