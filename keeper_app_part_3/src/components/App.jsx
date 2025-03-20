import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [comp, setComp] = useState([]);

  function handleClick(changedText) {
    return setComp((prevVal) => {
      return [...prevVal, changedText];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={handleClick} />
      <div>
        {comp.map((card) => (
          <p>{card}</p>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
