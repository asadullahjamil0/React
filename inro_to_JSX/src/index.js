// import React from "react";
// import ReactDom from "react-dom";

// ReactDom.render(
//   <div>
//     <h1>Hello World!</h1>
//     <p>This is Paragraph</p>
//   </div>,
//   document.getElementById("root")
// );



//Small Exercise for intro to JSX
//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDom.render(
  <div>
    <h1>My Favourite Food</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
