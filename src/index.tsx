import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/App.css";
import "./styles/Nav.css";

const container = document.getElementById("root");
if (container) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
  );
}
