import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import { BrowserRouter , HashRouter} from "react-router-dom";
import './firebase'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
