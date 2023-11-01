import React from "react";
import "./App.scss";
import Todo from "./components/Todo";
import Navbar from "./components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Login";
import Registration from "./pages/SignUp";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
      </div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/my-todo" element={<StartPage />} />
      </Routes>
    </>
  );
}

export default App;
