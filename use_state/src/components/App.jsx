import React, { useState } from "react";

function App() {
  var [count, setCount] = useState(0);
  var [str, setStr] = useState("hey");
  function increase() {
    return setCount(count + 1);
  }
  function decrease() {
    return setCount(count - 1);
  }
  function stStr() {
    return setStr("changed");
  }

  return (
    <div>
      <h1 className="container">{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <h1>{str}</h1>
      <button onClick={stStr}>Change String</button>
    </div>
  );
}

export default App;
