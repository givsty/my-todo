import React from "react";
import "./scss/App.scss";
import Todo from "./components/Todo";
import Navbar from "./components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
// import Auth from "./pages/Login";
import Registration from "./pages/SignUp";
// import StartPage from "./pages/StartPage";
import { lazy, Suspense } from "react";
import {Circle} from "react-preloaders";
const StartPage = lazy(() => import("./pages/StartPage"));
const Auth = lazy(() => import("./pages/Login"));
function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
      </div>
      <Routes>
        <Route
          path="/auth"
          element={
            <Suspense fallback={<p></p>}>
              <Auth />
            </Suspense>
          }
        />
        <Route path="/registration" element={<Registration />} />
        <Route path="/todo" element={<Todo />} />
        <Route
          index
          element={
            <Suspense fallback={<p>141414141</p>}>
              <StartPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
