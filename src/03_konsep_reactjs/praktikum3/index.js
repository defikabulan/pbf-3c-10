import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Kartu(props) {
  return (
    <h1>
      Halo, {props.nama} - {props.nim}
    </h1>
  );
}

const element = <Kartu nama="Defika Bulan" nim="1841720098" />;

ReactDOM.render(element, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
