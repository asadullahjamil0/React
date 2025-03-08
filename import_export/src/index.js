import React from "react";
import ReactDOM from "react-dom";
import PI, { doublePI, triplePI } from "./math";
// we can also import all module at once
// import * as pi from "./math";

ReactDOM.render(
  <ul>
    <li>Single PI: {PI}</li>
    <li>Double PI: {doublePI()}</li>
    <li>Triple PI: {triplePI()}</li>

    {/* Same thing but with diferent way */}
    {/* <li>Single PI: {pi.default}</li>
    <li>Double PI: {pi.doublePI()}</li>
    <li>Triple PI: {pi.triplePI()}</li> */}
  </ul>,
  document.getElementById("root")
);
