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
