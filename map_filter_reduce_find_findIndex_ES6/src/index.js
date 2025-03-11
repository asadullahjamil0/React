var numbers = [3, 56, 2, 48, 5, 34];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// var newNumbers = numbers.map((x) => {
//   return x * 3;
// });

// For Each
// var newNumbers = [];
// numbers.forEach((x) => {
//   newNumbers.push(x * 3);
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const newWords = words.filter(function (word) {
//   return word.length > 6;
// });

// console.log(newWords);

// var newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// by forEach
// var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num > 10 && num % 6 == 0) {
//     newNumbers.push(num);
//   }
// });

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// By forEach
// var newNumber = 0;
// numbers.forEach(function (currentNumber){
//     newNumber += currentNumber;
// })

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("Accumulator: " + accumulator);
//   console.log("CurrentNumber: " + currentNumber);
//   return accumulator + currentNumber;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return (num > 10);
// });

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map((str) => {
  return (str = str.meaning.substring(0, 100));
});

console.log(newEmojipedia);
