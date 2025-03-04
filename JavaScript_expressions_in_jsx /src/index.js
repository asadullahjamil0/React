import React from "react";
import ReactDOM from "react-dom";

const fname = "AsadUllah";
const lname = "Jamil";

var num = 7;

ReactDOM.render(
  <div>
    {/* Different methods to wirte js code inside the html code */}
    <h1>
      Hello, {fname} {lname}!
    </h1>
    <h1>Hello, {fname + " " + lname}!</h1>
    <h1>Hello, {`${fname} ${lname}`}!</h1>
    <p>Your lucky number is {num}</p>
    <p>Number is: {45 + 23}</p>
    <h4>Your ottp is: {Math.floor(Math.random() * 10000)}</h4>
  </div>,
  document.getElementById("root")
);
