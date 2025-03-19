import React, { useState } from "react";

function handleClick() {}

function Itemlist(props) {
  var [styleList, setListStyle] = useState({
    textDecoration: "line-through",
  });
  var [condition, useCondition] = useState(false);

  function handleClick() {
    return useCondition(condition === true ? false : true);
  }

  return (
    <li style={condition === true ? styleList : null} onClick={handleClick}>
      {props.item}
    </li>
  );
}
export default Itemlist;
