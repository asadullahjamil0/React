import React, { useState } from "react";

function Itemlist(props) {
  function handleClick() {}

  return (
    <div
      onClick={() => {
        return props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}
export default Itemlist;
