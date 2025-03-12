import React from "react";

var isDone = true;

var rend = (document.getElementById("root").style.textDecoration =
  "line-through");

// function strike() {
//   return (document.getElementById("root").style.textDecoration =
//     "line-through");
// }
// function Unstrike() {
//   return (document.getElementById("root").style.textDecoration =
//     null);
// }

function strike() {
  return document.getElementById("root").style.textDecoration == "line-through"
    ? (document.getElementById("root").style.textDecoration = null)
    : (document.getElementById("root").style.textDecoration = "line-through");
}

function App() {
  return (
    <div>
      <p>Buy milk</p>
      <button onClick={strike}>Strike</button>
    </div>
  );
}

export default App;
