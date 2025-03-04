//Exercise to practise {props} and some vanilla javaScript

//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
const name = "AsadUllah";
//Copyright CURRENTYEAR.
// year = new Date().getFullYear();
// month = date.getTime();
const date = new Date();

ReactDom.render(
  <div>
    <p>Create by {name}</p>
    <p>Copyright {date.getFullYear()}</p>
    <p>Month: {date.getMonth()}</p>
  </div>,
  document.getElementById("root")
);
//E.g.
//Created by Angela Yu.
//Copyright 2019.
