import React from "react";
import "./App.scss";
import Todo from "./components/Todo";
import Navbar from "./components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
      </div>
      <Routes>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </>
  );
}

export default App;
