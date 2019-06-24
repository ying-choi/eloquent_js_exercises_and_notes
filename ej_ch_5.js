/* Ch. 5 Higher-Order Functions */

/* Flattening */
/* Use the reduce method in combination with the concat method to “flatten”
 * an array of arrays into a single array that has all the elements of the original arrays. */

 let arrays = [[1, 2, 3], [4, 5], [6]];
 let result = arrays.reduce((a, b) => a.concat(b))
 console.log(result);

 /* Your Own Loop */
 /* Write a higher-order function loop that provides something like a for loop statement.
  * It takes a value, a test function, an update function, and a body function.
  * Each iteration, it first runs the test function on the current loop value and stops
  * if that returns false. Then it calls the body function, giving it the current value.
  * Finally, it calls the update function to create a new value and starts from the beginning.
  * When defining the function, you can use a regular loop to do the actual looping. */

  function loop(value, testFn, updateFn, bodyFn) {
    let val = value;
    while(testFn(val)) {
      bodyFn(val);
      val = updateFn(val);
    }
    return;
  }

  loop(3, n => n > 0, n => n - 1, console.log);

/* Everything */
/* Implement every as a function that takes an array and a predicate function as parameters.
 * Write two versions, one using a loop and one using the some method. */

 function every(array, test) {
   for (el of array) {
     if (!test(el)) { return false; };
   }
   return true;
 }

/* Notes */

/* JavaScript string
 * Encoded as a sequence of 16-bit numbers.
 * These are called code units.
 * A Unicode character code was supposed to fit within such a unit (~65,000 characters).
 * But needed moar! Didn't want to increase memory per character,
 * so UTF-16 was invented.
 * This means most common characters uses a single 16-bit code unit,
 * but the others use a pair of 16-bit code units. */

 let bookworm = "📗🐛";
 console.log(bookworm.length);
 // -> 4
 console.log(bookworm[0]);
 // -> � some invalid character
 console.log(bookworm.charCodeAt(0));
 // -> 55357 This is only the first unit
 console.log(bookworm.codePointAt(0));
 // -> 128215 This is the actual code for book emoji

 let a = "A";
 // These two outputs will be the same === 65
 console.log(a.charCodeAt(0));
 console.log(a.codePointAt(0));

 /* for / of loop can be used on strings. When you use
  * it to loop over strings, it will give you real characters,
  * not code units. */

 let seafood = "🌊🍱";
 for (let char of seafood) {
   console.log(char);
   // To get the code units, do this:
   console.log(char.codePointAt(0));
 }
