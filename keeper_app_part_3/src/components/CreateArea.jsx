import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "Title",
    content: "Take a note...",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.add(note);
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
