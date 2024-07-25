import React from "react";
import Header from "./Header";
import List from "./list";
import "../componentStyling/App.css";
const name = "Shruti";

function App() {
  return (
    <div>
      <h1>Hello {name}</h1>
      <Header />
      <List />
    </div>
  );
}

export default App;
