import React from "react";

const year = new Date().getFullYear();

function footer() {
  return (
    <footer>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
}

export default footer;
