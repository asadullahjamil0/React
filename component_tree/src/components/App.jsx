import React, { useState } from "react";
import Itemlist from "./itemlist";

function App() {
  const [itemText, setItemText] = useState([]);
  const [changedItem, setChangedItem] = useState("");

  function handleChange(event) {
    return setChangedItem(event.target.value);
  }

  function handleClick(event) {
    setItemText((prevValue) => {
      return [...prevValue, changedItem];
    });
    setChangedItem("");
  }

  function deleteItem(id) {
    return setItemText((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={changedItem} name="item" />
        <button>
          <span onClick={handleClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemText.map((val, index) => (
            <Itemlist
              key={index}
              id={index}
              item={val}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
