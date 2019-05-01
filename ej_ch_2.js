/* Ch. 2 Program Structure */

/* Looping a triangle
   Write a loop that makes seven calls to console.log to output the following triangle:
   #
   ##
   ###
   ####
   #####
   ######
   #######
*/

function triangle() {
  const numOfCalls = 8;
  for (let i = 0; i < numOfCalls; i++) {
    let hash = "";
    for (let j = 0; j < i; j++) {
      hash += "#";
    }
    console.log(hash);
  }
}

/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
   For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3),
   print "Buzz" instead.

   When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by
   both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

function fizzbuzz() {
  for (let i = 1; i < 101; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
      console.log("FizzBuzz");
      continue;
    }

    if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function fizzbuzz2() {
  for (let i = 1; i < 101; i++) {
    let toBePrinted = "";
    if (i % 3 == 0) { toBePrinted += "Fizz"; }
    if (i % 5 == 0) { toBePrinted += "Buzz;" }

    // empty string is falsy
    console.log(toBePrinted || i);
  }
}

/* Write a program that creates a string that represents an 8×8 grid, using newline
   characters to separate lines. At each position of the grid there is either a space
   or a "#" character. The characters should form a chessboard.

   When you have a program that generates this pattern, define a binding size = 8
   and change the program so that it works for any size, outputting a grid of the given width and height.
*/

function chessboard() {
  const size = 8;
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0 + i; j <= size + i - 1; j++) {
      if (j % 2 == 0) {
        row += " ";
      } else {
        row += "#";
      }
    }
    console.log(row);
  }
}

function chessboard2(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0 + i; j < size + i; j++) {
      if (j % 2 == 0) {
        row += " ";
      } else {
        row += "#";
      }
    }
    console.log(row);
  }
}
