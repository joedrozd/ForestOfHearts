import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "assets/scss/material-kit-react.scss?v=1.10.0";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
