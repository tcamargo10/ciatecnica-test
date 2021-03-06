import React from "react";
import ReactDOM from "react-dom";
import "core-js";
import "./global/styles/index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./context/store";

import { icons } from "./assets/icons";
React.icons = icons;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
