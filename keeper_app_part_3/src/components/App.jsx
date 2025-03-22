import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [card, setCard] = useState([]);
  function addItem(note) {
    setCard((prevVal) => {
      return [...prevVal, note];
    });
  }

  function deleteItem(id) {
    setCard((prevValue) => {
      return prevValue.filter((items, index) => {
        if (index !== id) {
          return [...prevValue, items];
        }
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addItem} />
      <div>
        {card.map((items, index) => (
          <Note
            key={index}
            id={index}
            title={items.title}
            content={items.content}
            delete={deleteItem}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
