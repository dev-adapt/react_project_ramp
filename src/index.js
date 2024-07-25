 import React from "react";
 import ReactDOM from "react-dom";
 import Header from "./Header"
import "./styles.css"
const name="Shruti";
 ReactDOM.render(
    <div>
      <h1 >Hello {name}</h1>
      <Header/>
    </div>
  ,document.getElementById("root"));