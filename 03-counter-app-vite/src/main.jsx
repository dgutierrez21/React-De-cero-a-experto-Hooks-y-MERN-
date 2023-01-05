import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import FirstApp from "./FirstApp";

import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FirstApp title="Hola con prop" subTitle={30} />
  </React.StrictMode>
);
