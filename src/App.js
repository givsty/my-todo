import React from "react";
import "./App.scss";
import Todo from "./components/Todo";
import Navbar from "./components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
      </div>
      <Routes>
        <Route path="/todo" element={<Todo />}/>
        <Route path="/auth" element={<Auth />}/>
      </Routes>
    </>
  );
}

export default App;
