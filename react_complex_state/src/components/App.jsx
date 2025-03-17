import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function HandleChange(event) {
    const { value, name } = event.target;

    setFullName((previousValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: previousValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello, {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={HandleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={HandleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
