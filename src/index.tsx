import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SafeAppProvider } from "./SafeAppProvider";

ReactDOM.render(
  <React.StrictMode>
    <SafeAppProvider>
      <App />
    </SafeAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
