import React, { useState } from "react";

function App() {
  const [eventText, setEventText] = useState("");
  var [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    setEventText(event.target.value);
  }
  function handleClick(event) {
    setHeadingText(eventText);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello, {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
