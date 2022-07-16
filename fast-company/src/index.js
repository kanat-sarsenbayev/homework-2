import React from "react";
import ReactDOM from "react-dom/client";
import Users from "./components/users";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
