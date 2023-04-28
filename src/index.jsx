import React from "react";
import ReactDOM from "react-dom/client";
import ContactApp from "./components/ContactApp";
import "./style/style.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContactApp />
  </BrowserRouter>
);
