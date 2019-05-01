/* Ch. 3 Functions */

/* Minimum
   Write a function min that takes two arguments and returns their minimum.
*/

function min(a, b) {
  if (a < b) { return a };
  if (a > b) { return b };
  return a;
}

/* Recursion
   Define a recursive function isEven corresponding to this description.
   The function should accept a single parameter (a positive, whole number)
   and return a Boolean.

   Do not use the modulo operator.

   😂 trust the natural recursion
   😂😂 always include a base case
*/

function isEven(n) {
  if (n === 0) { return true; }
  if (n === 1) { return false; }
  return isEven(n - 2);
}

/* Bean counting
   Write a function countBs that takes a string as its only argument
   and returns a number that indicates how many uppercase “B” characters
   there are in the string.

   Next, write a function called countChar that behaves like countBs,
   except it takes a second argument that indicates the character that
   is to be counted (rather than counting only uppercase “B” characters).
   Rewrite countBs to make use of this new function.
*/

function countBs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") { count++; }
  }
  return count;
}

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) { count++; }
  }
  return count;
}

