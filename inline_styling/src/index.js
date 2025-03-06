import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "yellow",
  fontSize: "40px",
  border: "2px solid black",
  padding: "30px",
  fontFamily: "arial",
  backgroundColor: "skyblue",
};

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
    <h1 style={{ backgroundColor: "black", color: "yellow", padding: "20px" }}>
      Inline Style
    </h1>
  </div>,
  document.getElementById("root")
);
