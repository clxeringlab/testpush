import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

const CONTAINER = document.getElementById("root");

if (!CONTAINER) {
  throw new Error('当前页面不存在 <div id="root"></div> 节点！！');
}

ReactDOM.render(<App />, CONTAINER);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
