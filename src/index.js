import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Appprovider from "./context/context1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Appprovider>
    <App />
  </Appprovider>
);
