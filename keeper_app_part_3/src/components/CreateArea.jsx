import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
  var [title, setTitle] = useState("");
  var [content, setContent] = useState("");

  function handleTitle(event) {
    const newVal = event.target.value;
    setTitle(newVal);
  }

  function handleContent(event) {
    const newVal = event.target.value;
    return setContent(newVal);
  }

  return (
    <div>
      <form>
        <input onChange={handleTitle} placeholder="Title" />
        <textarea
          onChange={handleContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
      </form>
      <button
        onClick={() => {
          props.add(<Note title={title} content={content} />);
          setTitle("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default CreateArea;
