import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store.js";

// const getItemFromLocalStorage = (item) => {
//   try {
//     const persistedState = localStorage.getItem("reduxState")[item];
//     if (persistedState) return JSON.parse(persistedState);
//   } catch (e) {
//     console.log(e);
//   }
// };

// const contacts = getItemFromLocalStorage("contacts");
// const messages = getItemFromLocalStorage("messages");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
