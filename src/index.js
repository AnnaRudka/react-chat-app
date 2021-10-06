import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store.js";

// import { hydrateCharges } from "./redux/chargesSlice";
// import { hydrateIncomes } from "./redux/incomesSlice";

// const getItemFromLocalStorage = (item) => {
//   try {
//     const persistedState = localStorage.getItem("reduxState")[item];
//     if (persistedState) return JSON.parse(persistedState);
//   } catch (e) {
//     console.log(e);
//   }
// };

// const contacts = getItemFromLocalStorage("contacts");
// const chatlist = getItemFromLocalStorage("chatlist");

// if (contacts) {
//   store.dispatch(hydrateCharges(charges));
// }

// if (incomes) {
//   store.dispatch(hydrateIncomes(incomes));
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
