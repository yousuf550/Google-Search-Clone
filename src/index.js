import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./context/ResultContextProvide";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);
