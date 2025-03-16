import React, { useState } from "react";

function App() {
  const initialHeading = "Hello";
  const initialColor = "white";
  const [headingText, setHeadingText] = useState(initialHeading);
  var [backgroundColor, setbackgroundColor] = useState(initialColor);

  function eventHandler() {
    setHeadingText("Submitted");
  }

  function changeStyle() {
    backgroundColor == "white"
      ? setbackgroundColor("black")
      : setbackgroundColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={changeStyle}
        onMouseOut={changeStyle}
        style={{ backgroundColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
