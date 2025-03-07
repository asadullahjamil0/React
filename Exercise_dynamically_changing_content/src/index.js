//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const date = new Date(2025, 3, 7, 23);

let time = date.getHours();

var customStyle = {
  color: "red",
};
let greetings;

if (time < 12) {
  greetings = "Good Morning";
} else if (time < 18) {
  greetings = "Good AfterNoon";
  customStyle.color = "green";
} else {
  greetings = "Good Evening!";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greetings}
    </h1>
    <p className="heading" style={customStyle}>
      {time}
    </p>
  </div>,
  document.getElementById("root")
);
