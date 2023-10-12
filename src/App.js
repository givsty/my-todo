import React from "react";
import "./App.scss";
import Todo from "./components/Todo";
import Navbar from "./components/ui/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Todo />
    </div>
  );
}

export default App;
