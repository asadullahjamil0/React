// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import Cars from "./practice";
import animals, { useAnimal } from "./data";

const [cat, dog] = animals;
// const {
//   name: catName,
//   sound: soundName,
//   foodRequirement: { food, water },
// } = cat;
// console.log("Cat's Meal per day: " + food + " times");

console.log(useAnimal(cat));
const [catName, makeSound] = useAnimal(cat);
console.log(catName);
makeSound();

// this is for table
const [honda, tesla] = Cars;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>

    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
