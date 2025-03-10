import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

console.log(emojipedia);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((descr) => {
          return (
            <Entry
              key={descr.id}
              id={descr.id}
              emoji={descr.emoji}
              name={descr.name}
              meaning={descr.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
