/* Ch. 4 Data Structures: Objects and Arrays */

/* The sum of a range
   Write a range function that takes two arguments, start and end,
   and returns an array containing all the numbers from start up to
   (and including) end.

   Next, write a sum function that takes an array of numbers and returns
   the sum of these numbers.

   As a bonus assignment, modify your range function to take an optional
   third argument that indicates the “step” value used when building the array.
   If no step is given, the elements go up by increments of one,
   corresponding to the old behavior.The function call range(1, 10, 2)
   should return [1, 3, 5, 7, 9]. Make sure it also works with
   negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(start, end, step) {
  let arr = [];
  let s;
  if (start > end) {
    s = step ? step : -1;
    for (let i = start; i >= end; i += s) {
      arr.push(i);
    }
  } else {
    s = step ? step : 1;
    for (let i = start; i <= end; i += s) {
      arr.push(i);
    }
  }
  return arr;
}

// for ... of loop
function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

/* Reversing an array
   For this exercise, write two functions, reverseArray and reverseArrayInPlace.
   
   The first, reverseArray, takes an array as argument and produces a new array
   that has the same elements in the inverse order.
   
   The second, reverseArrayInPlace, does what the reverse method does: it modifies
   the array given as argument by reversing its elements.
   
   Neither may use the standard reverse method.
*/

function reverseArray(arr) {
  let newArr = [];
  
  for(let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}

function reverseArrayInPlace(arr) {
  for(let i = 0; i <= arr.length / 2; i++) {
    let temp = arr[i];
    let otherIndex = arr.length - 1 - i;
    arr[i] = arr[otherIndex];
    arr[otherIndex] = temp;
  }
}


/* Ch. 4 Notes */

// Fun things to do with arrays!

let fruits = ["apple", "cherry", "strawberry"];

/* let fruits = [🍎, 🍒, 🍓]
   addToStart(🍌);
   → I have 4 fruits
   console.log(fruits)
   → [🍌, 🍎, 🍒, 🍓] */
function addToStart(fruit) {
  let numOfFruits = fruits.unshift(fruit);
  console.log("I have " + numOfFruits + " fruits");
}

/* let fruits = [🍎, 🍒, 🍓]
   removeFromStart();
   → I ate a 🍎
   console.log(fruits)
   → [🍒, 🍓] */
function removeFromStart() {
  let fruitEaten = fruits.shift();
  console.log("I ate a " + fruitEaten);
}

/* let fruits = [🍎, 🍒, 🍓]
   addToEnd(🍌);
   → I have 4 fruits
   console.log(fruits)
   → [🍎, 🍒, 🍓, 🍌] */
function addToEnd(fruit) {
  let numOfFruits = fruits.push(fruit)
  console.log("I have " + numOfFruits + " fruits");
}

/* let fruits = [🍎, 🍒, 🍓]
   removeFromEnd();
   → I don't like 🍓
   console.log(fruits)
   → [🍎, 🍒] */
function removeFromEnd() {
  let fruitRemoved = fruits.pop();
  console.log("I don't like " + fruitRemoved);
}

/* let fruits = [🍎, 🍒, 🍓]
   let newFruits = removeAFruit(🍒);
   console.log(fruits)
   → [🍎, 🍒, 🍓]
   console.log(newFruits)
   → [🍎, 🍓] */
function removeAFruit(fruit) {
  let index = fruits.indexOf(fruit);
  if (index === -1) { return; }

  // creates a new array
  return fruits.slice(0, index).concat(fruits.slice(index + 1));
}

// Rest parameters
// For a function to accept any number of args

/* console.log(concatenate("hello", "world", "goodbye", "forever"));
   → hello word goodbye forever */
function concatenate(...strings) {
  let word = "";

  // the rest parameter is bound to an array
  for(str of strings) {
    word += !word ? str : " " + str;
  }

  return word;
}

function threeDots() {
  let numbers = [3, 4, 5, 6];
  // Similar but instead "spreads" out the array
  console.log(...numbers);
  // → 3 4 5 6
  console.log(numbers);
  // → [ 3, 4, 5, 6 ]
}
