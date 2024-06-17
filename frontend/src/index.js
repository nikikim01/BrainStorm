import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import App from "./components/App";
import "./index.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
