import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  var [TIME, setTime] = useState(time);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1 className="time">{TIME}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
