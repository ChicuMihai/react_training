import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.register();

import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import logger from "redux-logger";

const userState = {
  users: JSON.parse(localStorage.getItem("users")),
  user: { name: "Anna", age: 27 }
};
// const math = (state = initialState, action) => {

//     switch (action.type) {

//         case "ADD":
//             state = {
//                 ...state, result: state.result + action.payload, lastValue: [...state.lastValue, action.payload]
//             }
//             break;
//         case "SUBTRACT":
//             state = {
//                 ...state, result: state.result - action.payload, lastValue: [...state.lastValue, action.payload]
//             }
//             break;

//         case "MULTIPLICATION":
//             state = {
//                 ...state, result: state.result * action.payload, lastValue: [...state.lastValue, action.payload]
//             }
//             break;
//         case "DIVISION":
//             state = {
//                 ...state, result: state.result / action.payload, lastValue: [...state.lastValue, action.payload]
//             }
//             break;
//         default:

//     }
//     return state;
// };
const user = (state = userState, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = { ...state, user: { ...state.user, name: action.payload } };
      break;
    case "SET_AGE":
      state = { ...state, user: { ...state.user, age: action.payload } };
      break;
    default:
  }
  return state;
};

export const store = createStore(user, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
