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

/* A list
   Write a function arrayToList that builds up a list structure like
   the one shown when given [1, 2, 3] as argument.

   Also write a listToArray function that produces an array from a list.

   Then add a helper function prepend, which takes an element and a list
   and creates a new list that adds the element to the front of the input list.

   And nth, which takes a list and a number and returns the element at the
   given position in the list (with zero referring to the first element)
   or undefined when there is no such element.

   If you haven’t already, also write a recursive version of nth.
*/

// [10, 20]
function arrayToList(arr) {
  let list;

  for(let i = arr.length - 1; i >= 0; i--) {
    if (!list) {
      list = {
        value: arr[i],
        rest: null,
      };
    } else {
      list = {
        value: arr[i],
        rest: list,
      };
    }
  }

  return list;
}

// { value: 10, rest: { value: 20, rest: null } }
function listToArray(list) {
  let arr = [];

  // could have also done this:
  // for (let node = list; node; node = node.rest) {}
  while(list) {
    arr.push(list.value);
    list = list.rest;
  }

  return arr;
}

function prepend(element, list) {
  let newList = arrayToList(listToArray(list));
  return { value: element, rest: newList };
}

function nth1(list, number) {
  let count = 0;
  while(list) {
    if(count === number) { return list.value; }
    count++;
    list = list.rest;
  }
  return;
}

function nth2(list, number) {
  let arr = listToArray(list);
  if(number >= arr.length) { return; }
  return arr[number];
}

function recursiveNth(list, number) {
  if (list === null) { return; }
  if (number === 0 ) { return list.value; }
  return recursiveNth(list.rest, number - 1);
}

/* Deep comparison
   Write a function deepEqual that takes two values and returns true only if
   they are the same value or are objects with the same properties,
   where the values of the properties are equal when compared with a
   recursive call to deepEqual.
*/

function deepEqual(obj1, obj2) {

  // need to check for null explicitly because
  // typeof null is equal to object
  if(obj1 === null && obj2 === null) { return true; }

  if(typeof obj1 !== typeof obj2) { return false; }

  if(typeof obj1 !== 'object' && typeof obj2 !== 'object') {
    return obj1 === obj2;
  }

  if(typeof obj1 === 'object' && typeof obj2 === 'object') {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length) { return false; }

    for(let i = 0; i < keys1.length; i++) {
      if(keys1[i] !== keys2[i]) { return false; }
      return deepEqual(obj1[keys1[i]], obj2[keys2[i]]);
    }
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
